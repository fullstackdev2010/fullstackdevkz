import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
The verse has chords and Korg Pa 300 marks.

Key of Em

(intro) 1-8
D-Em-G-Am 1-4 intro2
C-F#dim-D 5-7 var2
D 8 fill2

(main) 9-16
I need an attention Em 9 var1
Whatever the kind F#dim 10 var1
A mentally tensioned |Em Am| 11 var1
Or feminine lined |C D| 12 fill1

Prohibited finely Em 13 var1
On in, to the core |G Am| 14 var1
The playful my mind C 15 var1
I hate and adore |C D| 16 fill2

(break) F#dim 17 break

(chorus)
I try to persuade |C D| 18 var2
My lust foolish self Em 19 var2
To play disobeyed |C D| 20 var2
The sin number twelve |G B| 21 fill2

That’s ad of success |C D| 22 var2
For them, feel an envy |D#dim Em| 23 var2
I shall not express it |C D| 24 var2
Too frenzily friendly |F B| 25 fill2

(break) B 26 fill3

(chorus2)
I try to persuade |Eb F| 27 var2
My lust foolish self Gm 28 var2
To play disobeyed |Eb F| 29 var2
The sin number twelve |Bb D| 30 fill2

That’s ad of success |Eb F| 31 var2
For them, feel an envy |F#dim Gm| 32 var2
I shall not express it |Eb F| 33 var2
Too frenzily friendly |Ab D| 34 var2

(break) G 35 break

(interlude)
D-Em-G-Am-C-F#dim-D 36-42 var3
D 43 fill2

(main2)
Indulging into Em 44 var1
The feminine tension F#dim 45 var1
I’m languishing through |Em Am| 46 var1
Lust foolish intentioned |C D| 47 fill1

Suppressed up inside Em 48 var1
And endlessly crying |G Am| 49 var1
I am getting contrite C 50 var1
Distractive denying |C D| 51 fill2

(break) F#dim 52 break

(chorus)
I try to persuade |C D| 53 var2
My lust foolish self Em 54 var2
To play disobeyed |C D| 55 var2
The sin number twelve |G B| 56 fill2

That’s ad of success |C D| 57 var2
For them, feel an envy |D#dim Em| 58 var2
I shall not express it |C D| 59 var2
Too frenzily friendly |F B| 60 fill2

(break) B 61 fill3

(chorus2)
I try to persuade |Eb F| 62 var2
My lust foolish self Gm 63 var2
To play disobeyed |Eb F| 64 var2
The sin number twelve |Bb D| 65 fill2

That’s ad of success |Eb F| 66 var2
For them, feel an envy |F#dim Gm| 67 var2
I shall not express it |Eb F| 68 var2
Too frenzily friendly |Ab D| 69 var2

(break) G 70 break

(ending)
D-Em-G-Am-Em 71-75`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Lust Foolish</h1>
          <p className="italic text-sm text-white/60">ISRC QZK6P2130435</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/lustfoolish.webp"
            alt="Lust Foolish"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Lust foolish.
        This composition is about a young man who is entangled in his feelings. He suffers from lack of attention and internal complexes that prevent him from getting closer to his dream.
        </p>

        <audio
          controls
          src={`/audio/lustfoolish verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/linkedthebeautyin" className="hover:text-white">← Linked The Beauty In</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/neutralityblameless" className="hover:text-white">Neutrality Blameless →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
