import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Cm

(intro) 1-4
|Cm-Fm|Ab-Eb|Cm-Bb|Gm-Cm|

(main) 5-12
A frivolous smoky Cm
My life’s turning on |Fm-Ab|
With thoughts, little soapy Cm
And deeds thereupon |Gm-Bb|

I don’t know what Cm
Has dawned onto me |Eb-Fm|
To walk with a strut |Ab-Bb|
And sit with decree |Gm-Cm|

(break) Cm 13

(chorus) 14-21
Free feminine tension |Bb-Ab|
I long to endure |Eb-Bb|
Get sweetheart detention |Bb-Ab|
Loose worries obscure |Eb-Bb|

Am I, dreaming smoky |Bb-Ab|
An old and bald |Eb-Fm|
Free feminine dopey |Ab-Bb|
Desired untold |Gm-Cm|

(interlude) 22-25
|Ab-Bb|Eb-Fm|Ab-Bb|Gm-Cm|

(main) 26-33
I’m glad to have lost Cm
Your presence, so sober |Fm-Ab|
And firmly embossed Cm
Your feverish prober |Gm-Bb|

I’m pleased to be free Cm
For searching a lover |Eb-Fm|
My golden luck key |Ab-Bb|
I’ve used to discover |Gm-Cm|

(break) Cm 34
(chorus) 35-42
(break) Cm 43

(bridge) 44-47
Life’s difficult, stressful |F-C|
Not many break free |Dm-Bb|
Though, some are successful |F-C|
And hopefully me |Dm-Bb|

(break) F 48
(chorus) 49-56
(chorus) 57-64`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Desired Untold</h1>
          <p className="italic text-sm text-white/60">ISRC QZK6F2291435</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/desireduntold.webp"
            alt="Desired Untold"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Desired untold.
        Life is very difficult and stressful thing. Not many of us can break free and not lose themselves and ruin their lives. I kneel before the desperate and strong people.
        </p>

        <audio
          controls
          src={`/audio/desireduntold verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/delicious" className="hover:text-white">← Delicious</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/glasigtraume" className="hover:text-white">Die Glasig Träume →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
