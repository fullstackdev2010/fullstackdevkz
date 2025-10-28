import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Gm

(intro) 1-4
|Gm Eb|Bb F|Gm Eb|Bb F|

(main) 5-8, 9-12
A doubt I’m facing |Gm Bb|
The inner and deep |Cm D|
Deceitfully pacing |Gm Eb|
And worrying steep |Edim D|

Inside of my mind |Gm Cm|
Paved up, searching lane |Eb F|
To never do find |Gm Eb|
A land free of pain |Edim D|

(break) D 13

(chorus) 14-17, 18-21
I stare away |Bb F|
And say words of prayer |Eb Gm|
Regretful essay |Cm Gm|
My life’s a compare |Edim F|

I cry on away |Bb F|
And say words of prayer |Eb Gm|
Regretful essay |Cm Gm|
My life’s a despair |Edim F|

(interlude) 22-29
|Gm Eb|Bb F|Gm Cm|Bb D|
|Gm Eb|Bb F|Gm Cm|Edim F|

(main) 30-33, 34-37
A waste desolate cave |Gm Bb|
I’ve dug, with my hands |Cm D|
Intending to save |Gm Eb|
The smallest spark chance |Edim D|

A love I’ve been dreaming |Gm Cm|
To fill me with sense |Eb F|
And make me joy screaming |Gm Eb|
A perfect romance |Edim D|

(break) D 38
(chorus) 39-46
(break2) F 47

(bridge) 48-51
She’s standing by side Dm
And looking through me |Gm Cm|
As if I have died |Eb F|
And never’s been free |Cm Dm|

(break3) Dm 52

(chorus) 53-60
(chorus ) 61-68`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Never Been Free</h1>
          <p className="italic text-sm text-white/60">ISRC QZTAT2345869</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/neverbeenfree.webp"
            alt="Never Been Free"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Never been free.
        This song is dedicated to C.C.
        Life is an interesting thing. It is always doubting and worrying, searching and finding. Patiently waiting for the moment and regretting that it did not come sooner. Who is she, the mysterious stranger, the Universe or a simple woman.
        </p>

        <audio
          controls
          src={`/audio/neverbeenfree verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/neutralityblameless" className="hover:text-white">← Neutrality Blameless</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/pretentiouslydriven" className="hover:text-white">Pretentiously Driven →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
