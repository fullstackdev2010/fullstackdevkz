import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Bm

(intro) 1-4
|G-D|A-Bm|G-D|A-Bm|

(main) 5-12
I long to reform |Em-G|Bm-A|
My madly gone striving |Em-G|Bm-D|
The mind’s, driven storm |Em-G|Bm-A|
From beauty deriving |Am-C|C-D|

(break) 13-16
|Em-G|Bm-A|Em-G|Bm-D|

(main) 17-24
So longing, get rid |Em-G|Bm-A|
Of being dependent |Em-G|Bm-D|
On formal retreat |Em-G|Bm-A|
My heart’s, a defendant |Am-C|C-D|

(break) 25 D

(pre-chorus) 26-29
Is rushing away |Em-G|
From being restricted |Bm-A|
To mildly convey |A-C#dim|
My senses afflicted |C#dim-Bm|

(chorus) 30-33
And trying ignore |G-D|
The pressure I fear |A-Bm|
Though let, in the core |G-D|
My feelings to steer |A-Bm|

(intro) 34-37
|G-D|A-Bm|G-D|A-Bm|

(main2) 38-45
I am almost fallen |Em-G|Bm-A|
The formal desired |Em-G|Bm-D|
Retreated, self stolen |Em-G|Bm-A|
Sweet selfish admired |Am-C|C-D|

(break) 46 D

(pre-chorus) 47-50
(chorus) 51-54
(chorus) 55-58

(intro) 59-62
|G-D|A-Bm|G-D|A-Bm|

(ending) 63-70
My tears of shame |Em-G|Bm-A|
Do burn lustful eyes |Em-G|Bm-D|
The punishment flame |Em-G|Bm-A|
My shameful disguise |Am-C|C-D|

(break) 71 D

(pre-chorus) 72-75
(chorus) 76-79
(chorus) 80-83`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">The Formal Retreat</h1>
          <p className="italic text-sm text-white/60">ISRC QZK6L2280421</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/formalretreat.webp"
            alt="The Formal Retreat"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – The formal retreat.
        There are forms in a man’s life that always excite his imagination. However, I am no exception, I constantly try to remain calm about the desires that they can bring.
        </p>

        <audio
          controls
          src={`/audio/formalretreat verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/thediffidentlove" className="hover:text-white">← The Diffident Love</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/thenote" className="hover:text-white">The Note →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
