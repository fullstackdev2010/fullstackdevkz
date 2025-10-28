import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of F#m

(intro) 1-8
F#m-C#m-E-Bm
D-G#dim-Bm-E

(main) 9-16
I get so excited F#m
With dreams, you are here C#m
And getting so close, to kiss E-Bm
I am, so delighted F#m
But nervous appear C#m
The dreams, are so quickly dismissed E-Bm

(pre-chorus) 17-22
My wishes unreachable F#m
Endless a dreaming C#m
My love has been frozen through A-D
‘Cause, I’ve been always untrue Bm-E

(break) E 23

(chorus) 24-31
I’m asking no pardon D
I’ve cheated myself A
And wasted the chance Bm
I’ve been given F#m
I’ve let all my waywardness D
Show itself A
In wishes pretentiously driven G#dim-F#m

(break2) 32-39
D-A-Bm-F#m
D-G#dim-Bm-E

(main) 40-47
I know the time
Will never do mend
Results of intentions my lustful
They are, so pleasant
But make me depend
On feelings unfulfilled and wistful

(pre-chorus) 48-53
(brake) 54
(chorus) 55-62

(break3) 63-66
D-G#dim-Bm-E

(bridge) 67-74
I know my ignorant mind Em
Has always been source of intentions G
I know that I’ve left behind Bm
My heart to the mind, comprehension D

It’s easy succumb to temptations Em
And drown in idleness luscious G
But hard, to find explanations Bm
Why couldn’t I stand all the crushes D

(break4) D 75

(chorus) 76-83
(chorus) 84-91`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Pretentiously Driven</h1>
          <p className="italic text-sm text-white/60">ISRC QZHN62141941</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/pretentiouslydriven.webp"
            alt="Pretentiously Driven"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Pretentiously driven.
        It is about a young man who is constantly looking for new experiences and entertainment. He was busy with this for so long, that, he did not notice how he lost control over himself and became doomed to live in constant contradiction. It is the universal rule – the more you violate, the more you want. And there is no end to it.
        </p>

        <audio
          controls
          src={`/audio/pretentiouslydriven verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/neverbeenfree" className="hover:text-white">← Never Been Free</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/rockingfisher" className="hover:text-white">Rocking Fisher →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
