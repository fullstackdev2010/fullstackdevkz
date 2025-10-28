"use client";

import Footer from "@/components/Footer";

export default function AncientThinkers() {
  const poem0 = `Reflections am I
Reflection’s my breath
Reflected, to live and to strive

Towards the unknown
By noble the path
I dare continuous drive

The easiest one
The comfort a side
Shall never accept anyway

True knowledge is
The sheen-earned my pride
No imitation’s a lay

I don’t understand
The ones who dive in
Into the experiences bitter

Reflected am I
In noble the win
With modest my knowledge glitter`;
  const poem1 = `A scholar I was
A free and an idle
Not thinking a cause
And learning it, tidal

From time to the time
Applying an effort
Was always declined
And turned, with my neck hurt

To think useless life
Of mine, an imprisonment
With learning much rife
But thinking on, dissonant

The reason is why
It dawned on me – thinking
Is hard to rely
And dangerous at linking

The real, a movement
Supported not, learnt
And proper inducement
Of real concern

Hazardous turned out
Beforehand affirmed
Without a doubt
A dissonant learned`;
  const poem2 = `I try to be leveled
Inside of the heart
My nature’s disheveled
Burst breaks me apart

A savage controlling
Subdued gentle one
While chuckling at rolling
Perverted his fun

It’s cut into me
As double sharp sword
And forces agree
His crooked accord

To never let breeding
Inside of my heart
Good manners exceeding
His helluva chart

I try to get freed
Inside of the mind
Good manners to breed
The values defined

That balance the nature
I am, born within
And better, a future
To firmly begin`;

  return (
    <div className="px-6 py-10">

      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif text-pink-300 mb-4">Ancient Thinkers</h1>
        <p className="text-white/70 italic text-base max-w-2xl mx-auto">
          There are a lot of genius men that created the cloud works of wisdom of the world. I try to humbly reflect on the wisdom and enhance the mental conclusions. I hope you will like the play of the mind.
        </p>
      </div>

        <div className="mb-16" key="0">
          <div className="flex justify-center mb-4">
            <img src="/poems/Confucius (15-10-2019).webp" alt="Confucius" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Confucius (15-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Most of the wisdom of the world comes from China. Whenever I touch upon it, I am amazed and astonished by the depth and beauty of it.
“The three paths lead to knowledge: the path of reflection is the noblest path, the path of imitation is the easiest path and the path of experience is the most bitter path.” (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem0}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="1">
          <div className="flex justify-center mb-4">
            <img src="/poems/A dissonant learned (18-08-2020).webp" alt="A dissonant learned" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">A dissonant learned (18-08-2020)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Learning without thinking is useless, but thinking without learning is dangerous. Confucius (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem1}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="2">
          <div className="flex justify-center mb-4">
            <img src="/poems/I try to be leveled (14-08-2020).webp" alt="I try to be leveled" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">I try to be leveled (14-08-2020)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">If a man’s nature overshadows good manners, you get a savage, and if good manners eclipse man’s nature, you get an expert of the scriptures. Only one in whom nature and good breeding are in balance can be considered a worthy one. Confucius
My favorite actor is Brad Pitt. I was really shocked by the movie – Devil’s own. I even cried. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem2}</pre>
        </div>
      <Footer />
    </div>
  );
}
