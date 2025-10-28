import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Em

(intro) 1-4
|G D|Am Em| G D|C Em|

(main) 5-8, 9-12
The world, is not cruel |G Am|
It’s just, far untrue |D Em|
In every thought, duel |G Am|
By every deed, through |C D|

With soft, independent |G Am|
And diffident-right |D Em|
Brought up, much transcendent |Em Am|
And brilliant, inside |F G|

(break) G 13

(chorus) 14-17, 18-21
My thoughts and beliefs|C E|
Inside burning mind |Bdim Am|
That’s seeking relief |F G|
A seeming good, kind |Em Am|

To bravely support |C E|
The difference, unwelcome |Bdim Am|
To hide in resort |F G|
And boldly protect, some |Em Am|

(interlude) 22-29
|G D|Am Em| G D|C Em|
|G E|Bdim Am|F G| Em Am|

(main) 30-33, 34-37
The doubts, unsound |G Am|
They throw, female |D Em|
So called, much renowned |G Am|
To widely resale |C D|

The feminine standard |G Am|
For most the men |D Em|
To make us dependent |Em Am|
Again and again |F G|

(break) G 38
(chorus) 39-42, 43-46
(break2) Am 47

(bridge) 48-51
The world, is not cruel |Bm Em|
It’s just, far untrue |Am D|
In every thought, duel |Bm Em|
By every deed, through |C E|

(break3) Em 52
(chorus) 53-56, 57-60
(chorus fading) 61-64, 65-68`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">The Diffident Love</h1>
          <p className="italic text-sm text-white/60">ISRC QZTB42370083</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/thediffidentlove.webp"
            alt="The Diffident Love"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – The diffident love.
        Some men are soft and diffident. They cannot stand the cruel female world. That’s mostly why, the true love, sometimes flourishes, even under the pouring rain.
        </p>

        <audio
          controls
          src={`/audio/thediffidentlove verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/tagundnacht" className="hover:text-white">← Tag Und Nacht</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/formalretreat" className="hover:text-white">The Formal Retreat →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
