import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Gm

(intro) 1-4
Bb-Gm-Eb-F

(main) 5-8
I have been a mess Bb
For long time, a being Bb
I used to digress |Cm Gm|
The thoughts mine, were fleeing |Eb F|

(break) F 9

(main) 10-13
Towards some away Bb
A point of struggle Bb
I should have, surveyed |Cm Gm|
And quietly snuggle |Eb F|

(break) F 14

(pre-chorus) 15-20
I went up on line Gm
To breathe in the beauty|Eb F| F
I waited the sign |Gm Eb|
Of interested cutie |Bb F| F

(intro interlude) 21-24
Bb-Gm-Eb-F

(main) 25-28
I am longing for Bb
Embrace and get close Bb
Imagine-explore |Cm Gm|
The hills grandiose |Eb F|

(break) F 29

(main) 30-33
Unveiled in the dark Bb
Revealing the cozy Bb
The most lovely mark |Cm Gm|
A man dreaming posy |Eb F|

(break) F 34

(pre-chorus) 35-40
I went up on line Gm
To breathe in the beauty|Eb F| F
I waited the sign |Gm Eb|
Of interested cutie |Bb F| F

(chorus) 41-46
Would kiss an old hide Gm
And smile through the lines |Eb F| F
Lit up me a guide |Gm Eb|
The juicy divines |Cm F|F

(interlude) 47-54
Bb-Cm-Eb-F-Fm-Ab-Bb-F

(main) 55-58
I have been a mess Bb
For long time, a being Bb
I used to digress |Cm Gm|
The thoughts mine, were fleeing |Eb F|

(break) F 59

(pre-chorus) 60-65
I went up on line Gm
To breathe in the beauty|Eb F| F
I waited the sign |Gm Eb|
Of interested cutie |Bb F| F

(chorus) 66-71
Would kiss an old hide Gm
And smile through the lines |Eb F| F
Lit up me a guide |Gm Eb|
The juicy divines |Cm F|F

(chorus) 72-77
Would kiss an old hide Gm
And smile through the lines |Eb F| F
Lit up me a guide |Gm Eb|
The juicy divines |Cm F|F`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Linked The Beauty In</h1>
          <p className="italic text-sm text-white/60">ISRC QZNWR2391059</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/linkedthebeautyin.webp"
            alt="Linked The Beauty In"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Linked The Beauty In.
        There is a great professional and social network that I really like. It is linkedIn. I am very much sad, that I was kicked out of it, because, I have imposed my presence on the professional and beautiful women. I can’t help myself, I love to breathe in the inner beauty which enhances the outer beauty, that nature has generously given us.
        </p>

        <audio
          controls
          src={`/audio/linkedthebeautyin verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/ipleadoddlymuch" className="hover:text-white">← I Plead Oddly Much</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/lustfoolish" className="hover:text-white">Lust Foolish →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
