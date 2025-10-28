"use client";

import Footer from "@/components/Footer";

export default function SweetRelations() {
  const poem0 = `I have been a mess
For long time, a being
I used to digress
The thoughts mine, were fleeing

Towards some away
A point of struggle
I should have, surveyed
And quietly snuggle

I went up on line
To breathe in the beauty
I waited the sign
An interested cutie

Would kiss an old hide
And smile through the lines
Lit up me a guide
The juicy divines

I am longing for
Embrace and get close
Imagine-explore
The hills grandiose

Unveiled in the dark
Revealing the cozy
The most lovely mark
A man dreaming posy`;
  const poem1 = `The evening, my blessed
A Babylon call
Surprising impressed
I was ready roll

A point of turn
So much, unexpected
I came to discern
My future reflected

The evening, I’m blessed
I have been so happy
Some time, in the past
Lived on, moody-snappy

And waited for you
To call me right here
Into something new
A miracle sphere

An artist would bring
As essence of being
Relaxed and expressed
A marvelous freeing

Has dawned onto me
I am, so much grateful
Enabled foresee
A providence graceful`;
  const poem2 = `The luscious, a treat
The wish, being him
Cold moving, is sweet
Hot touch, is a dream

To play, for a while
And come in, so close
To kiss, with a style
The beautiful rose`;
  const poem3 = `Love is a miracle
Deep in my heart
Brilliantly lyrical
Every her start

I hope always
Be part of, now
Breathing in, warm praise
She’s breathing out

Blessed are the moments
With you, my treasure
All my enjoyments
And endless pleasure

You are, my precious
I pray to be
Worthy, your gracious
Love, part of me

Courteous and kind
Gently polite
Your thoughts refined
My mind’s delight

I am so faithful
Turning a child
I am so grateful
Getting so mild

Some very rare
Once in a while
Quarrels we share
Tears with smile

Try to depart
Into the pain
But then restart
Our hearts’ domain

Thank you, I’m blessed
Live by your side
You are expressed
My sweetest pride`;

  return (
    <div className="px-6 py-10">

      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif text-pink-300 mb-4">Sweet Relations</h1>
        <p className="text-white/70 italic text-base max-w-2xl mx-auto">
          The sweet relations, affectionate and thoughtful.
        </p>
      </div>

        <div className="mb-16" key="0">
          <div className="flex justify-center mb-4">
            <img src="/poems/Linked The Beauty In (06-12-2022).webp" alt="Linked The Beauty In" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Linked The Beauty In (06-12-2022)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">There is a great professional and social network that I really like. It is linkedIn. I am very much sad, that I was kicked out of it, because, I have imposed my presence on the professional and beautiful women. I can’t help myself, I love to breathe in the inner beauty which enhances the outer beauty, that nature has generously given us. I dedicate this verse to my dear R.S. She is a dazzlingly beautiful, artful and smart girl. I wish I could see her, up close, someday, without the unnecessary veil. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem0}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="1">
          <div className="flex justify-center mb-4">
            <img src="/poems/A providence graceful (25-11-2022).webp" alt="A providence graceful" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">A providence graceful (25-11-2022)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">I dedicate this verse to the most beautiful and intelligent girl from Japan – my dear M. K. One day, I received an invitation to chat, from a Japanese artist and owner of a series of beauty salons in London. She read my book and expressed a very interested attitude to communicate. We chatted on various topics, discussed philosophers and the essence of being. It was very easy and relaxed for me to communicate. At that moment, I understood, why John and Yoko were together. I am sure, it is the greatest love possible, and the kindred of souls, definately as well. An open and free composer and an equally open and free woman from the Land of the Rising Sun. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem1}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="2">
          <div className="flex justify-center mb-4">
            <img src="/poems/The beautiful rose (04-11-2019).webp" alt="The beautiful rose" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">The beautiful rose (04-11-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">The relationship between man and woman is the most interesting topic, I think I need to pay more attention to it. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem2}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="3">
          <div className="flex justify-center mb-4">
            <img src="/poems/Eternal love (08-07-2021).webp" alt="Eternal love" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Eternal love (08-07-2021)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">The relationship between a man and a woman is often demanding. These are ups and downs, quarrels over trifles, internal and external contradictions, but true love always wins. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem3}</pre>
        </div>
      <Footer />
    </div>
  );
}
