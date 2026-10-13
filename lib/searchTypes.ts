export type SearchDocumentType =
  | "Service"
  | "Case Study"
  | "Product"
  | "Industry"
  | "Use Case"
  | "Guide"
  | "Company"
  | "Collection";

export type SearchDocument = {
  title: string;
  description: string;
  url: string;
  type: SearchDocumentType;
  category?: string;
  aliases: string[];
  keywords: string[];
  headings: string[];
  searchableText: string;
};

export type RankedSearchDocument = SearchDocument & {
  score: number;
};
