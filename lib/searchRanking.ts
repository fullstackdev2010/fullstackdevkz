import type { RankedSearchDocument, SearchDocument } from "@/lib/searchTypes";

export const MAX_SEARCH_QUERY_LENGTH = 120;

export function normalizeSearchQuery(value: string) {
  return value
    .slice(0, MAX_SEARCH_QUERY_LENGTH)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9+#.]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function words(value: string) {
  return normalizeSearchQuery(value).split(" ").filter(Boolean);
}

function editDistance(a: string, b: string, limit: number) {
  if (Math.abs(a.length - b.length) > limit) return limit + 1;

  let previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let row = 1; row <= a.length; row += 1) {
    const current = [row];
    let rowMinimum = row;

    for (let column = 1; column <= b.length; column += 1) {
      const cost = a[row - 1] === b[column - 1] ? 0 : 1;
      const value = Math.min(
        current[column - 1] + 1,
        previous[column] + 1,
        previous[column - 1] + cost,
      );
      current[column] = value;
      rowMinimum = Math.min(rowMinimum, value);
    }

    if (rowMinimum > limit) return limit + 1;
    previous = current;
  }

  return previous[b.length];
}

function phraseScore(value: string, query: string, exact: number, starts: number, contains: number) {
  const normalized = normalizeSearchQuery(value);
  if (!normalized) return 0;
  if (normalized === query) return exact;
  if (normalized.startsWith(query)) return starts;
  if (normalized.includes(query)) return contains;
  return 0;
}

function scoreDocument(document: SearchDocument, query: string, queryWords: string[]) {
  const title = normalizeSearchQuery(document.title);
  const aliases = document.aliases.map(normalizeSearchQuery);
  const keywords = document.keywords.map(normalizeSearchQuery);
  const headings = document.headings.map(normalizeSearchQuery);
  const description = normalizeSearchQuery(document.description);
  const searchableText = normalizeSearchQuery(document.searchableText);

  let score = phraseScore(title, query, 1000, 520, 360);
  score += Math.max(0, ...aliases.map((value) => phraseScore(value, query, 620, 400, 280)));
  score += Math.max(0, ...keywords.map((value) => phraseScore(value, query, 420, 260, 170)));
  score += Math.max(0, ...headings.map((value) => phraseScore(value, query, 240, 150, 100)));
  score += phraseScore(description, query, 120, 90, 70);
  score += phraseScore(searchableText, query, 55, 40, 28);

  const titleWords = words(title);
  const aliasWords = aliases.flatMap(words);
  const keywordWords = keywords.flatMap(words);
  const headingWords = headings.flatMap(words);
  const descriptionWords = words(description);
  const allStrongWords = [...titleWords, ...aliasWords, ...keywordWords];
  let matchedWords = 0;

  for (const token of queryWords) {
    let matched = false;
    if (titleWords.includes(token)) {
      score += 64;
      matched = true;
    } else if (aliasWords.includes(token)) {
      score += 48;
      matched = true;
    } else if (keywordWords.includes(token)) {
      score += 38;
      matched = true;
    } else if (headingWords.includes(token)) {
      score += 26;
      matched = true;
    } else if (descriptionWords.includes(token)) {
      score += 15;
      matched = true;
    } else if (searchableText.includes(token)) {
      score += 7;
      matched = true;
    }

    if (!matched && token.length >= 4) {
      const tolerance = token.length >= 8 ? 2 : 1;
      if (allStrongWords.some((candidate) => candidate.length >= 4 && editDistance(token, candidate, tolerance) <= tolerance)) {
        score += 34;
        matched = true;
      }
    }

    if (matched) matchedWords += 1;
  }

  if (queryWords.length > 1 && matchedWords === queryWords.length) score += 85;
  if (matchedWords === 0) return 0;

  const typeTieBreaker: Record<SearchDocument["type"], number> = {
    Service: 8,
    "Case Study": 7,
    Product: 6,
    Industry: 5,
    "Use Case": 4,
    Guide: 3,
    Company: 2,
    Collection: 1,
  };

  return score + typeTieBreaker[document.type];
}

export function rankSearchDocuments(documents: SearchDocument[], rawQuery: string, limit = 12): RankedSearchDocument[] {
  const query = normalizeSearchQuery(rawQuery);
  if (!query) return [];

  const queryWords = query.split(" ").filter(Boolean);
  return documents
    .map((document) => ({ ...document, score: scoreDocument(document, query, queryWords) }))
    .filter((document) => document.score >= 20)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
