import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of F#m

(intro) 1-4
|A-D|E-F#m| A-Bm| D-E|

(main) 5-12
Your love is a note |A-D|
Inside of a bottle |E-F#m|
You’re dreaming to dote |A-D|
And endlessly coddle |E-F#m|

A worthy someone |A-Bm|
Not me, to possess |D-E|
The one to become |A-D|
Your love in excess |E-F#m|

(break) 13-14
|D-A|E-F#m|

(chorus) 15-22
You dream and depict |D-A|
The tender his touch |E-F#m|
He is, my convict |D-A|
I am, constant clutch |E-Bm|

His love is a note |D-F#m|
Inside of a bottle |A-Bm|
His heart, is a boat |D-Bm|
Of mindless twaddle |E-F#m|

(interlude-intro) 23-26
|A-D|E-F#m| A-Bm| D-E|

(main) 27-34
That’s sailing away
From here to there
A cold fish of prey
His heart’s of no care

Your love is a note
Inside of a bottle
Now’s always afloat
In careless twaddle

(break) 35-36

(chorus) 37-44
(chorus) 45-52`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">The Note</h1>
          <p className="italic text-sm text-white/60">ISRC QZNWZ2228251</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/thenote.webp"
            alt="The Note"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – The note.
        Many of us are lonely. It is very difficult to find your soul mate, if you are looking among the wrong me. Be careful, I shall make you different.
        I have dedicated this song to the miracle in my life, to the best girl I have ever met online. She is a real pearl, kind, beautiful, smart, daring, courageous and strong. My dear Lois, you will always live in my heart.
        </p>

        <audio
          controls
          src={`/audio/thenote verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/formalretreat" className="hover:text-white">← The Formal Retreat</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/therockingfisher" className="hover:text-white">The Rocking Fisher →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
