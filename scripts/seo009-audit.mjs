import { readFile } from "node:fs/promises";
import path from "node:path";

const base = process.env.AUDIT_BASE_URL ?? "http://localhost:3029";
const productionOrigin = "https://www.fullstackdev.kz";

function extractAttribute(html, relation, attribute) {
  const tags = html.match(/<(?:link|meta)\b[^>]*>/gi) ?? [];
  const tag = tags.find((candidate) => new RegExp(`${relation}=["']${attribute}["']`, "i").test(candidate));
  return tag?.match(new RegExp(`${relation}=["']([^"']+)["']`, "i"))?.[1] ?? null;
}

function extractJsonArray(source, marker) {
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) return null;
  const start = source.indexOf("[", markerIndex + marker.length);
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    else if (character === "[") depth += 1;
    else if (character === "]") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  return null;
}

async function fetchHtml(route) {
  const response = await fetch(new URL(route, base));
  return { response, html: await response.text() };
}

const sitemapResponse = await fetch(new URL("/sitemap.xml", base));
const sitemapXml = await sitemapResponse.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const searchInSitemap = sitemapUrls.some((url) => new URL(url).pathname === "/search");

const { html: searchHtml } = await fetchHtml("/search");
const { html: queryHtml } = await fetchHtml("/search?q=workflow");
const robotsMeta = searchHtml.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i)?.[1] ?? null;
const searchCanonical = extractAttribute(searchHtml, "rel", "canonical")
  ? searchHtml.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1] ?? null
  : null;
const queryCanonical = queryHtml.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1] ?? null;

const builtSearchHtml = await readFile(path.join(process.cwd(), ".next", "server", "app", "search.html"), "utf8");
const frames = [...builtSearchHtml.matchAll(/self\.__next_f\.push\((\[.*?\])\)<\/script>/gs)]
  .map((match) => {
    try { return JSON.parse(match[1]); } catch { return null; }
  })
  .filter(Boolean);
const documentFrame = frames.map((frame) => frame[1]).find((payload) => typeof payload === "string" && payload.includes('"documents":['));
const serializedDocuments = documentFrame ? extractJsonArray(documentFrame, '"documents":') : null;
const searchDocuments = serializedDocuments ? JSON.parse(serializedDocuments) : [];

const internalLinks = new Set();
const canonicalProblems = [];
const jsonLdProblems = [];

for (const sitemapUrl of sitemapUrls) {
  const productionUrl = new URL(sitemapUrl);
  const { response, html } = await fetchHtml(`${productionUrl.pathname}${productionUrl.search}`);
  if (!response.ok) canonicalProblems.push(`${productionUrl.pathname}: HTTP ${response.status}`);

  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1];
  const expectedCanonical = `${productionOrigin}${productionUrl.pathname}`.replace(/\/$/, "");
  if (!canonical || canonical.replace(/\/$/, "") !== expectedCanonical) {
    canonicalProblems.push(`${productionUrl.pathname}: ${canonical ?? "missing canonical"}`);
  }

  for (const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); } catch (error) { jsonLdProblems.push(`${productionUrl.pathname}: ${error.message}`); }
  }

  for (const match of html.matchAll(/href=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (href.startsWith("#") || /^(?:mailto:|tel:|javascript:)/i.test(href)) continue;
    const target = new URL(href, productionOrigin);
    if (target.origin === productionOrigin) internalLinks.add(`${target.pathname}${target.search}`);
  }
}

const brokenLinks = [];
for (const link of internalLinks) {
  const response = await fetch(new URL(link, base), { redirect: "manual" });
  if (response.status >= 400) brokenLinks.push(`${link}: HTTP ${response.status}`);
}

const robotsResponse = await fetch(new URL("/robots.txt", base));
const robotsText = await robotsResponse.text();

console.log(JSON.stringify({
  sitemap: { status: sitemapResponse.status, count: sitemapUrls.length, searchIncluded: searchInSitemap },
  search: {
    robotsMeta,
    canonical: searchCanonical,
    queryCanonical,
    documentCount: searchDocuments.length,
    indexBytes: Buffer.byteLength(serializedDocuments ?? "", "utf8"),
  },
  robots: {
    status: robotsResponse.status,
    blocksSearch: /disallow:\s*\/search/i.test(robotsText),
    hasSitemap: /sitemap:\s*https:\/\/www\.fullstackdev\.kz\/sitemap\.xml/i.test(robotsText),
  },
  canonicalProblems,
  jsonLdProblems,
  internalLinksChecked: internalLinks.size,
  brokenLinks,
}, null, 2));
