"use client";

import Footer from "@/components/Footer";

export default function SmartProverbs() {
  const poem0 = `A person must live at least for the sake of curiosity.`;
  const poem1 = `Money is not as good, as how bad it feels, without it.
Experience is the word that people call their mistakes.`;
  const poem2 = `God save you from the bad women, save yourself from the good ones.`;

  return (
    <div className="px-6 py-10">

      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif text-pink-300 mb-4">Smart Proverbs</h1>
        <p className="text-white/70 italic text-base max-w-2xl mx-auto">
          Short, wise, and witty — these Jewish proverbs carry timeless truths. Refined by generations, they offer sharp
          insight in just a few words.
        </p>
      </div>

        <div className="mb-16" key="0">
          <div className="flex justify-center mb-4">
            <img src="/poems/Jewish proverb (04-11-2019).webp" alt="Jewish proverb" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Jewish proverb (04-11-2019)</h2>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem0}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="1">
          <div className="flex justify-center mb-4">
            <img src="/poems/Jewish proverb (28-10-2019).webp" alt="Jewish proverb" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Jewish proverb (28-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Jewish proverbs are unique. With deep meaning and precision in reflecting our misconceptions.</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem1}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="2">
          <div className="flex justify-center mb-4">
            <img src="/poems/Jewish proverb (25-10-2019).webp" alt="Jewish proverb" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Jewish proverb (25-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Sometimes I find very beautiful and smart proverbs. I think there is no need to reflect on them. They are self-contained and expressive.</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem2}</pre>
        </div>
      <Footer />
    </div>
  );
}
