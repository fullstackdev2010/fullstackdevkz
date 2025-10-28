"use client";

import Footer from "@/components/Footer";

export default function TheNewYear() {
  const poem0 = `I have a dream
A year of prosperity
So peaceful supreme
Has brought solidarity

Into desperate souls
I long to be healed
The madness-burned poles
I want to be chilled

I have a dream
There is no pain
There is no scream
And cursed-bloody chain

Inside burning minds
By hatred, dead forged
And hidden by blinds
But finally scorched

I have a dream
A year of humanity
Has formed up a stream
To end up calamity

We used to live
So stupidly headless
A year of extreme
The foolishness reckless`;
  const poem1 = `I wish you a better
The new, and so fine
Mercedes, the Year of progress

I wish you to get her
And let, be the sign
Mercedes, your Pride of success`;
  const poem2 = `Happy The New Year, Lokuma
I wish you dear, mу friends
Dazzling beauty, Fortuna
Right from the glorious lands

Sends you, the greetings of joyful
Eastern, the rigorous heart
Ardent and spirited, playful
Gentle and moderate, smart

Wisdom, Nazif and Nedim
She has to give, to the World
Oktay, Ahmet and Nazim
Springing the poetry gold

I wish I was, younger now
Coming to stay in the East
Touching upon sacred vows
Having my worries released

Fully embrace all the strict
Rules and the order of things
Fine outline and depict
All the correctness, it brings

Send you, the greetings of joyful
Eastern, the rigorous heart
Mine is not much, so playful
It has been rightly restart

All by the will, destined over
Trusted, was I, in the charge
Santa’s the little a grower
Eastern the ways, to enlarge`;

  return (
    <div className="px-6 py-10">

      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif text-pink-300 mb-4">The New Year</h1>
        <p className="text-white/70 italic text-base max-w-2xl mx-auto">
          Each New Year inspires hope and reflection. These verses celebrate beginnings, longing for peace, prosperity,
          and sometimes — a playful dream like a Mercedes or a distant land.
        </p>
      </div>

        <div className="mb-16" key="0">
          <div className="flex justify-center mb-4">
            <img src="/poems/Peaceful supreme (31-12-2022).webp" alt="Peaceful supreme" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Peaceful supreme (31-12-2022)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">My dear listeners and readers. I am very much pleased to congratulate you on the new year 2023. I am quite sure that this year will bring us peace and prosperity.
          I am very much grieved that there is a war going on and people are suffering. I hope that the opposing sides will sit down at the negotiation table and agree on peace.
          What is happening now is madness that has no solution, other than the reconciliation of the parties. The forces of the parties are equal and therefore this war can last decades and bring more grief and sufferings to all people and the planet as a whole. Now we must stop, admit that both sides were equally wrong, no matter how bitter and insulting it was.
          There is no doubt that all crimes against humanity will be investigated and a court verdict will be issued. Nobody has to worry about it. On all sides there are really humane leaders who will definitely bring the investigation to the end, perhaps, with the next governments in power. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem0}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="1">
          <div className="flex justify-center mb-4">
            <img src="/poems/The Year of progress (31-12-2020).webp" alt="The Year of progress" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">The Year of progress (31-12-2020)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Happy the New Year to you my dear readers and listeners.
For me personally, Mercedes is a very special brand. Since childhood, this word has always been magic for me. When I first saw the Mercedes-Benz GLE Coupe AMG, I fell in love. It is power, grace and beauty. What a cool woman, I thought, I want her now.</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem1}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="2">
          <div className="flex justify-center mb-4">
            <img src="/poems/Eastern the ways (31-12-2019).webp" alt="Eastern the ways" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Eastern the ways (31-12-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Happy The New Year to all my dear readers. I wish you happiness, health and good mood. I am sure that this year will be a turning point in our history. The Super powers will reconcile and find a common language.
Now, I am in the beautiful country, Lokuma. She is a paradise. I want to come here often and stay long. My ancestors were lokumanians, so I feel the kinship and attraction to this glorious country. (The girls here are of dazzling beauty.) (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem2}</pre>
        </div>
      <Footer />
    </div>
  );
}
