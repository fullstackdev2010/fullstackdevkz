import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Gm

(intro) 1-4
Eb-Bb-Cm-F

(main) 5-12
Reality’s real |Gm-F|
Illusions, what else |Bb-C|
A toxic appeal |Gm-Bb|
Ruining my health |F-Cm|

To hell with it, baby |Gm-Ab|
Go on to undress |Fm-Bb|
Let’s call it a day |Gm-Eb|
No more of distress |Cm-F|

(break) 13 F

(Chorus) 14-21
A glass or a bottle |Eb-Db|
The two, both of |Ab-Bb|
You wanna me coddle |Bbm-Db|
I need drunken love |Gdim-Fm|

Come close, impressing |Eb-Db|
With heat of your kiss |Ab-Bb|
The absolute blessing |Bbm-Db|
Delicious my bliss |Cm-Fm|

(interlude) 22-29
Eb-Db-Ab-Bb-Bbm-Db-Gdim-F

(main) 30-37
You’re driving me crazy |Gm-F|
With every your touch |Bb-C|
You’ve shaken, so hazy |Gm-Bb|
My life’s boring much |F-Cm|

Been ever without |Gm-Ab|
Your beauty amazing |Fm-Bb|
I want burst a shout |Gm-Eb|
How looking you’re blazing |Cm-F|

(break) 38 F

(Chorus) 39-46

(break) 47 Fm

(bridge) 48-51
Come over, my dear |Db-Eb|
I wait for you so |Ab-Bb|
You are free to steer |Bbm-Cm|
My private plateau |Db-Eb|

(break) 52 Db

(Chorus) 53-60
(Chorus fading) 61-68`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Delicious</h1>
          <p className="italic text-sm text-white/60">ISRC QZHNA2287027</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/delicious.webp"
            alt="Delicious"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Delicious.
        I don’t know, how appropriate it is, to write music when there is a war going on. I really hope it ends soon. This composition was written under the influence of many images. My beautiful wife, and many more beautiful women. Composers are very much interesting. Maybe I’m wrong, but probably, all the same, many of us live and write music from muse to muse. Beauty is the drug that makes us breathe and create.
        </p>

        <audio
          controls
          src={`/audio/delicious verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/daszartegefuhl" className="hover:text-white">← Das Zarte Gefühl</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/desireduntold" className="hover:text-white">Desired Untold →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
