"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { poems } from '@/lib/poems';
import { useCartStore } from '@/lib/store/cart';

// Poem groups with display names
const poemGroups = [
  "New verses",
  "The war verses",
  "My moods",
  "Reflective verses",
  "Philosophical verses",
  "Contemporary Thinkers",
  "Ancient thinkers",
  "Psychedelic verses",
  "Soul suffering",
  "Pricks of conscience",
  "Tense relations",
  "Sex and bliss verses",
  "Sweet relations",
  "Humorous verses",
  "Short verses",
  "Smart proverbs",
  "The new year",
  "Christmas",
  "Picture And Phrase",
  "Picture And Phrase2",
];

// Dynamically import components for each group
const groupComponents: Record<string, any> = {
  "new-verses": dynamic(() => import("@/components/poems/new-verses")),
  "the-war-verses": dynamic(() => import("@/components/poems/the-war-verses")),
  "my-moods": dynamic(() => import("@/components/poems/my-moods")),
  "reflective-verses": dynamic(() => import("@/components/poems/reflective-verses")),
  "philosophical-verses": dynamic(() => import("@/components/poems/philosophical-verses")),
  "contemporary-thinkers": dynamic(() => import("@/components/poems/contemporary-thinkers")),
  "ancient-thinkers": dynamic(() => import("@/components/poems/ancient-thinkers")),
  "psychedelic-verses": dynamic(() => import("@/components/poems/psychedelic-verses")),
  "soul-suffering": dynamic(() => import("@/components/poems/soul-suffering")),
  "pricks-of-conscience": dynamic(() => import("@/components/poems/pricks-of-conscience")),
  "tense-relations": dynamic(() => import("@/components/poems/tense-relations")),
  "sex-and-bliss-verses": dynamic(() => import("@/components/poems/sex-and-bliss-verses")),
  "sweet-relations": dynamic(() => import("@/components/poems/sweet-relations")),
  "humorous-verses": dynamic(() => import("@/components/poems/humorous-verses")),
  "short-verses": dynamic(() => import("@/components/poems/short-verses")),
  "smart-proverbs": dynamic(() => import("@/components/poems/smart-proverbs")),
  "the-new-year": dynamic(() => import("@/components/poems/the-new-year")),
  "christmas": dynamic(() => import("@/components/poems/christmas")),
  "picture-and-phrase": dynamic(() => import("@/components/poems/picture-and-phrase")),
  "picture-and-phrase2": dynamic(() => import("@/components/poems/picture-and-phrase2")),

  // Add more as needed:
  // "the-war-verses": dynamic(() => import("@/components/poems/the-war-verses")),
};

export default function PoemsCatalogPage() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>("new-verses");

  const SelectedComponent = selectedGroup ? groupComponents[selectedGroup] : null;
  const { addToCart } = useCartStore();

  const AddCatalogToCart = (title: string) => {
        const track = poems.find(p => p.title === title); 
        if (track) {
          addToCart(track);
        }
    };

  return (
    <div className="flex bg-[#1C1B33] text-white min-h-screen">
      {/* Sidebar */}
      <aside className="w-full max-w-xs px-6 py-10 border-r border-pink-500/20 bg-[#2A2740] sticky top-0 h-screen overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif text-pink-300">
            Catalog
          </h1>

          {/* Collect button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              AddCatalogToCart("Poems Catalog");
            }}
            className="bg-black border border-white px-4 py-1 rounded-full text-sm text-white hover:bg-white hover:text-black transition"
          >
            💰 Collect
          </button>
        </div>

        <ul className="space-y-3 text-sm font-serif">
          {poemGroups.map((group) => {
            const slug = group.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <li key={slug}>
                <button
                  onClick={() => setSelectedGroup(slug)}
                  className="w-full text-left block px-3 py-2 rounded hover:bg-pink-400/10 hover:text-pink-200 transition"
                >
                  {group}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
      {/* Main content */}
      <main className="flex-1 overflow-y-auto px-6 py-10">
        {SelectedComponent ? (
          <SelectedComponent />
        ) : (
          <p className="text-white/50 italic font-serif text-center mt-20">
            ← Select a category to explore its verses
          </p>
        )}
      </main>
    </div>
  );
}
