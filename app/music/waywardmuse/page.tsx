import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of C#m

(intro)
E-B-A-C#m 1-4

(main) 5-12
I’ve dreamt, of a dream |E-F#|
To live life, unbroken |B-F#m|
I’ve pictured a scheme |A-D#dim|
My visions unspoken |B-C#m|

Somehow appeared |E-F#|
And shocked me a bit |C#m-G#m|
My sanity steered |A-F#m|
A thoughtless commit |B-C#m|

(break) C#m 13

(chorus) 14-21
The deed, I’ve been waiting |E-B|
Some days, mine, the last |A-C#m|
I have been expecting |F#m-E|
A lustfulness cast |B-A|

My mind and body |E-B|
Were longing so much |A-C#m|
Sensatious and floody |F#m-E|
Your fiery touch |B-C#m|

(interlude) 22-29
E-B-A-C#m-F#m-E-B-A

(main) 30-37
I lay back and feel |E-F#| 34
I cannot get lost |B-F#m| 35
In cold shaky thrill |A-D#dim| 36
I’ve always been tossed |B-C#m| 37

By being indifferent |E-F#| 38
To open your move |C#m-G#m| 39
And always consistent |A-F#m| 40
The ardent your groove |B-C#m| 41

(break) C#m 38

(chorus) 39-46
The deed, I’ve been waiting |E-B|
Some days, mine, the last |A-C#m|
I have been expecting |F#m-E|
A lustfulness cast |B-A|

My mind and body |E-B|
Were longing so much |A-C#m|
Sensatious and floody |F#m-E|
Your fiery touch |B-C#m|

(break) C#m 47

(bridge) 48-51
I still turn away |G#m-F#m|
I cannot stand tension |A-B|
When you start to play |E-F#|
With my heart ascension |D#dim-C#m|

(break) C#m 52

(chorus) 53-60
The deed, I’ve been waiting |E-B|
Some days, mine, the last |A-C#m|
I have been expecting |F#m-E|
A lustfulness cast |B-A|

My mind and body |E-B|
Were longing so much |A-C#m|
Sensatious and floody |F#m-E|
Your fiery touch |B-C#m|

(chorus fading) 61-68
The deed, I’ve been waiting |E-B|
Some days, mine, the last |A-C#m|
I have been expecting |F#m-E|
A lustfulness cast |B-A|

My mind and body |E-B|
Were longing so much |A-C#m|
Sensatious and floody |F#m-E|
Your fiery touch |B-C#m|`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">The Wayward Muse</h1>
          <p className="italic text-sm text-white/60">ISRC QZFZ72272531</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/waywardmuse.webp"
            alt="The Wayward Muse"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – The wayward muse.
        Sometimes life events go in an unexpected direction. Some relationships become a sweet and much awaited surprise. And it is very crucial not to fail the exposure.
        </p>

        <audio
          controls
          src={`/audio/waywardmuse verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/tumemanques" className="hover:text-white">← Tu Me Manques</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <div />
        </div>
      </div>
      <Footer />
    </div>
  );
}
