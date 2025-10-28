"use client";

import Footer from "@/components/Footer";

export default function HumorousVerses() {
  const poem0 = `He was so tired
Create it unique
Make it admired
With praises, the meek

Called, an apprentice
To run it a while
The one, not pretentious
With thoughts versatile

Why not automate
Thought master in charge
The parts iterate
Computer at large

It was an idea
A human and rabbit
Some doggy and deer
And place to inhabit`;

  return (
    <div className="px-6 py-10">

      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif text-pink-300 mb-4">Humorous Verses</h1>
        <p className="text-white/70 italic text-base max-w-2xl mx-auto">
          A touch of wit and whimsy.
        </p>
      </div>

        <div className="mb-16" key="0">
          <div className="flex justify-center mb-4">
            <img src="/poems/Kangaroo (05-11-2019).webp" alt="Kangaroo" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Kangaroo (05-11-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Some animals are very similar to several animal and human species at once. Does this prove that everything was done in one workshop, by combining spare parts? (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem0}</pre>
        </div>
      <Footer />
    </div>
  );
}
