export type BlogLink = {
  href: string;
  label: string;
  description?: string;
};

export type BlogTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type BlogSection = {
  id?: string;
  title: string;
  body: string[];
  bullets?: string[];
  diagram?: string[];
  table?: BlogTable;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  appHref?: string;
  appName?: string;
  category: string;
  cluster?: string;
  keywords: string[];
  intro: string;
  sections: BlogSection[];
  primaryLink?: BlogLink;
  relatedLinks?: BlogLink[];
};
