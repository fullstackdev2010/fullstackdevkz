import "server-only";
import { blogPosts } from "@/lib/blogPosts";
import { industryPages } from "@/lib/industryPages";
import { servicePages } from "@/lib/servicePages";
import type { SearchDocument } from "@/lib/searchTypes";
import { solutionPages } from "@/lib/solutionPages";
import { workProducts } from "@/lib/workProducts";

const serviceAliases: Record<string, string[]> = {
  "mobile-app-development": ["mobile", "mobile app", "android", "ios", "build mobile app", "app development"],
  "react-native-development": ["react native", "expo", "cross platform app", "android and ios"],
  "web-app-development": ["web app", "web application", "portal", "dashboard", "browser software"],
  "saas-development": ["saas", "subscription software", "multi tenant", "software platform"],
  "mvp-development": ["mvp", "minimum viable product", "startup app", "product validation"],
  "backend-api-development": ["backend", "api", "fastapi", "database", "integration"],
  "custom-business-software": ["custom software", "business software", "workflow", "business process", "internal software"],
};

const productAliases: Record<string, string[]> = {
  tradesmate: ["TradesMate", "trades", "tradespeople", "job management", "quotes", "invoices", "trade business software"],
  pubplay: ["PubPlay", "PubNight", "pub", "pub games", "games night", "tournament", "venue games"],
  "come-together": ["HelloLocalClubs", "Come Together", "clubs", "club management", "events", "booking", "membership"],
  workflowright: ["WorkflowRight", "workflow", "business process", "approvals", "process management", "records"],
  studyflow: ["StudyFlow", "flashcards", "spaced repetition", "study app"],
  uniscan: ["Docs Scan", "UniScan", "OCR", "scanner", "document encryption"],
  iskra: ["Iskra Trading", "catalogue", "ordering", "sales app"],
  todo: ["todo", "tasks", "productivity"],
  expense: ["expense", "budget", "spending"],
  habit: ["habit", "routine", "streak"],
  meditation: ["meditation", "mindfulness", "breathing"],
};

function unique(values: string[]) {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))];
}

const serviceDocuments: SearchDocument[] = servicePages.map((page) => ({
  title: page.navLabel,
  description: page.description,
  url: `/services/${page.slug}`,
  type: "Service",
  category: "Software development service",
  aliases: serviceAliases[page.slug] ?? [],
  keywords: unique([page.eyebrow, ...page.idealFor]),
  headings: unique([
    page.h1,
    page.problemTitle,
    page.capabilitiesTitle,
    page.processTitle,
    page.guidanceTitle,
    ...page.capabilities.map((item) => item.title),
  ]),
  searchableText: unique([page.intro, ...page.capabilities.map((item) => item.body)]).join(" "),
}));

const productDocuments: SearchDocument[] = workProducts.map((product) => ({
  title: product.title,
  description: product.summary,
  url: `/work/${product.slug}`,
  type: product.priority === "platform" ? "Case Study" : "Product",
  category: product.classification,
  aliases: productAliases[product.slug] ?? [],
  keywords: unique([product.platform, product.strongestCapability, product.serviceLabel, ...product.tags]),
  headings: unique([product.businessProblem ?? "", product.audience ?? ""]),
  searchableText: unique([product.engineeringRole ?? "", product.businessProblem ?? "", product.audience ?? ""]).join(" "),
}));

const industryDocuments: SearchDocument[] = industryPages.map((page) => ({
  title: page.navLabel,
  description: page.description,
  url: `/industries/${page.slug}`,
  type: "Industry",
  category: "Industry software experience",
  aliases: page.slug === "trades-service-businesses"
    ? ["trades", "service business", "field service"]
    : page.slug === "pubs-entertainment-venues"
      ? ["pub", "venue", "entertainment", "games night"]
      : ["clubs", "membership", "member organizations", "events"],
  keywords: unique([...page.fit, page.product.name]),
  headings: unique([page.h1, page.workflowTitle, page.architectureTitle, ...page.sections.map((section) => section.title)]),
  searchableText: unique([page.intro, page.workflowIntro, page.architectureIntro]).join(" "),
}));

const solutionDocuments: SearchDocument[] = solutionPages.map((page) => ({
  title: page.navLabel,
  description: page.description,
  url: `/solutions/${page.slug}`,
  type: "Use Case",
  category: "Software decision guide",
  aliases: unique([
    page.slug.replaceAll("-", " "),
    page.slug === "replace-spreadsheets-with-custom-software" ? "replace spreadsheets" : "",
    page.slug === "connect-mobile-app-to-existing-backend" ? "connect app to api" : "",
    page.slug === "custom-software-cost" ? "software price" : "",
  ]),
  keywords: unique(page.questions),
  headings: unique([page.h1, page.frameworkTitle, ...page.framework.map((item) => item.title), ...page.sections.map((section) => section.title)]),
  searchableText: unique([page.intro, page.hubDescription, page.prepareIntro]).join(" "),
}));

const guideDocuments: SearchDocument[] = blogPosts.map((post) => ({
  title: post.title,
  description: post.description,
  url: `/blog/${post.slug}`,
  type: "Guide",
  category: post.category,
  aliases: unique([post.appName ?? "", post.cluster ?? ""]),
  keywords: post.keywords,
  headings: post.sections.map((section) => section.title),
  searchableText: unique([post.intro, ...post.sections.slice(0, 2).flatMap((section) => section.body)]).join(" "),
}));

const discoveryDocuments: SearchDocument[] = [
  {
    title: "Software Development Services",
    description: "Explore mobile, web, SaaS, backend, MVP, React Native, and custom business software development.",
    url: "/services",
    type: "Collection",
    category: "Services",
    aliases: ["software development", "development services", "build software"],
    keywords: ["mobile", "web", "saas", "backend", "custom software"],
    headings: ["Development capabilities"],
    searchableText: "Software delivery for businesses, founders, and product teams.",
  },
  {
    title: "Software Products & Case Studies",
    description: "Explore production products and engineering case studies developed by FullStack Dev KZ.",
    url: "/work",
    type: "Collection",
    category: "Work and products",
    aliases: ["portfolio", "products", "case studies", "software we built"],
    keywords: ["TradesMate", "PubPlay", "HelloLocalClubs", "WorkflowRight"],
    headings: ["Production products and platforms", "Shipped Android applications"],
    searchableText: "Mobile applications, SaaS products, workflow platforms, web systems, and backend APIs.",
  },
  {
    title: "Software Solutions",
    description: "Decision guidance for business apps, spreadsheet replacement, mobile companions, MVPs, modernization, backend integration, and cost.",
    url: "/solutions",
    type: "Collection",
    category: "Decision guidance",
    aliases: ["software advice", "what software to build", "decision guides"],
    keywords: ["app", "spreadsheet", "mvp", "modernization", "cost"],
    headings: ["Software solutions for real business problems"],
    searchableText: "Choose a practical direction before development begins.",
  },
  {
    title: "FullStack Dev KZ",
    description: "A software development company building custom mobile apps, web applications, SaaS platforms, backend systems, and business software.",
    url: "/about",
    type: "Company",
    category: "About",
    aliases: ["FullStack Dev KZ", "fullstackdev.kz", "software company", "developer"],
    keywords: ["mobile apps", "web applications", "saas", "backend", "business software"],
    headings: ["Software products developed by FullStack Dev KZ"],
    searchableText: "Company capabilities, product evidence, development approach, and contact path.",
  },
];

export const searchDocuments: SearchDocument[] = [
  ...discoveryDocuments,
  ...serviceDocuments,
  ...productDocuments,
  ...industryDocuments,
  ...solutionDocuments,
  ...guideDocuments,
];
