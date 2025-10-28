import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Em

(intro) 1-4
|D G|Bm C|D Em|Am C|

(main) 5-12

I want to be lonely G
And waste life away |A Bm|
I hate being homely G
And tend disobey |Em A|

Whatever the ruling G
Was mounted on |D E |
Within soft-n-schooling |Em F#m|
My mind, thereupon |G A|

(break) A 13

(chorus) 14-21

I want the arrangement |D G|
Brought down, away |Bm C|
And all the attainment |D Em|
Crashed up and astray |Am D|

Been gone for-true-ever |D G|
I am, longing for |Bm C|
A splendid endeavor |Em F|
My destiny store |Dm G|

(interlude) 22-29

|D G|Bm C|D Em|Am C|
|D G|Bm C|D Em|Am C|

(main) 30-37

A look for affection G
Gain, lose and dismiss |A Bm|
Redundant reflection G
And painful release |Em A|

Hot nature forecasting G
Done ruling imposed |D E |
The soul, still lasting |Em F#m|
And lonely dozed |G A|

(break) A 38

(chorus) 39-46

I want the arrangement |D G|
Brought down, away |Bm C|
And all the attainment|D Em|
Crashed up and astray |Am D|

Been gone for-true-ever |D G|
I am, longing for |Bm C|
A splendid endeavor |Em F|
My destiny store |Dm G|

(chorus fading) 47-54

I want the arrangement |D G|
Brought down, away |Bm C|
And all the attainment|D Em|
Crashed up and astray |Am D|

Been gone for-true-ever |D G|
I am, longing for |Bm C|
A splendid endeavor |Em F|
My destiny store |Dm G|`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">A Lonely Dozed</h1>
          <p className="italic text-sm text-white/60">ISRC QZTB82275948</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/alonelydozed.webp"
            alt="A Lonely Dozed"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – A lonely dozed.
        The world is arranged in such a way, that a person cannot be alone. Men, especially, suffer from it. Because they are lonely in essence of the function, that nature has prepared for them. Men are driven to the unknown, which beckons them with sweet expectations. This composition was written under the influence of a sense of the inevitability of certain events that will happen someday, sooner or later. What is it, a global function, the finiteness of being or the support of the eternity of life.
        </p>

        <audio
          controls
          src={`/audio/alonelydozed verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/adieu" className="hover:text-white">← Adieu</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/brewedtorefuse" className="hover:text-white">Brewed To Refuse →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
