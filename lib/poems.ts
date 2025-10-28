// lib/poems.ts

export interface PoemItem {
  id: string;
  title: string;
  priceUsd: number;
  filename: string;
}

export const poems: PoemItem[] = [
  {
    id: "verses-book",
    title: "Poems Catalog",
    priceUsd: 10,
    filename: "poems/verses.pdf",
  },
];
