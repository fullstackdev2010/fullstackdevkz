import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key F#m

(intro) 1-16
F#m-Bm-D-E
F#m-Bm-D-G#dim

(main) 17-32

My manners were good F#m
From early, my days Bm
I’ve always withstood D
Seduction and plays E

A woman’s processed F#m
In front of my being Bm
So strongly depressed D
With what I’ve been feeling E

(break) 33-34 E

(chorus) 35-50

I firmly sat on A
And prayed, to be safe E
It’s devilish wrong D
A perfect would say Bm

Succumb to desire D
Or let burning hunger E
Unleash manly fire F#m
To squeeze-overrun her A

(break2) 51-66
F#m-C#m-D-G#dim
F#m-Bm-D-G#dim

(main2) 67-82

I struggle with feeling
Harsh grab lustful one
And have her a screaming
Let burst out spun …

My manners are good
I hate them so much
I’ve always withstood
Seduction, untouched

(break) 83-84
(chorus) 85-100
(break2) 101-116
(chorus fading) 117-133`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Seduction Untouched</h1>
          <p className="italic text-sm text-white/60">ISRC QZES72169104</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/seductionuntouched.webp"
            alt="Seduction Untouched"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Seduction untouched.
        Good upbringing sometimes greatly interferes with life, it hurts destinies and souls. Forget the manners and be lust devilish wrong, sometimes.
        </p>

        <audio
          controls
          src={`/audio/seductionuntouched verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/rockingfisher" className="hover:text-white">← Rocking Fisher</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/sonsuzask" className="hover:text-white">Sonsuz Aşk →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
