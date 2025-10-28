import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
The verse has chords and Korg Pa 300 marks.

Key of Dm

(intro)
Dm-C-F-G-Gm-Bb-Gm 1-7 var1
C 8 fill3

(main)
Dreamt life is a misery Dm 9 var1
Half dead, half alive |F-G| 10 var1
The treacherous slippery Dm 11 var1
Compelling survive |C-Gm| 12 var1

A poor magnificent Dm 13 var1
And beautiful grand |F-G| 14 var1
So faintly vigilant Gm 15 var 1
For cruel demand |Bb-C| 16 fill2

(break) C 17 fill3

(pre-chorus)
A toy in the hand Adim 18 var2
A tear in the eye |Gm-Dm| 19 var2
A black hair strand F 20 var2
My heart’s desperate cry |Gm-C| 21 var2

(break) C 22 fill3

(chorus)
The signs of the moment |Bb-C| 23 var2
I cannot endure |F-G| 24 var2
So traitorous cogent |Gm-Bb| 25 var2
And rudely mature |Am-G| 26 var2

My eyes full of tears |Bb-C| 27 var2
My heart’s bleeding fast |F-G| 28 var2
Dreamt life’s ugly swears |Bb-C| 29 var2
Sweet dreams’ painful past |Am-Dm| 30 fill3

(interlude)
Dm-C-F-G-Gm-Bb-Gm 31-37 var1
C 38 fill3

(main)
Dreamt life is a misery Dm 39 var1
I’ve seen it all through |F-G| 40 var1
The treacherous glittery Dm 41 var1
Self wrecking pursue |C-Gm| 42 var1

I know what it means Dm 43 var1
The emptiness endless |F-G| 44 var1
Like desolate routines Gm 45 var 1
That make me defenseless |Bb-C| 46 fill2

(break) C 47 fill3

(pre-chorus)
A toy in the hand Adim 48 var2
A tear in the eye |Gm-Dm| 49 var2
A black hair strand F 50 var2
My heart’s desperate cry |Gm-C| 51 var2

(break) C 52 fill3

(chorus)
The signs of the moment |Bb-C| 53 var2
I cannot endure |F-G| 54 var2
So traitorous cogent |Gm-Bb| 55 var2
And rudely mature |Am-G| 56 var2

My eyes full of tears |Bb-C| 57 var2
My heart’s bleeding fast |F-G| 58 var2
Dreamt life’s ugly swears |Bb-C| 59 var2
Sweet dreams’ painful past |Am-Dm| 60 fill3

(break) Dm 61 fill3

(bridge)
From some moment past |Adim| 62 var1
I try live and dream |Eb-F| 63 var1
And never get glassed |Adim| 64 var1
By dreaming extreme |Cm-F| 65 fill2

(break) C 66 fill3

(chorus)
The signs of the moment |Bb-C| 67 var2
I cannot endure |F-G| 68 var2
So traitorous cogent |Gm-Bb| 69 var2
And rudely mature |Am-G| 70 var2

My eyes full of tears |Bb-C| 71 var2
My heart’s bleeding fast |F-G| 72 var2
Dreamt life’s ugly swears |Bb-C| 73 var2
Sweet dreams’ painful past |Am-Dm| 74 fill3

(chorus fading)
The signs of the moment |Bb-C| 75 var2
I cannot endure |F-G| 76 var2
So traitorous cogent |Gm-Bb| 77 var2
And rudely mature |Am-G| 78 var2

My eyes full of tears |Bb-C| 79 var2
My heart’s bleeding fast |F-G| 80 var2
Dreamt life’s ugly swears |Bb-C| 81 var2
Sweet dreams’ painful past |Am-Dm| 82 fill3`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Dreamt Life</h1>
          <p className="italic text-sm text-white/60">ISRC QZK6H2180273</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/dreamtlife.webp"
            alt="Dreamt Life"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Dreamt life.
        Many people trade their lives for dreams. The dream is very pure, proud and beautiful thing. Live and dream, don’t live dreaming. Living a dream means breaking away from reality and ruining your life.
        </p>

        <audio
          controls
          src={`/audio/dreamtlife verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/glasigtraume" className="hover:text-white">← Die Glasig Träume</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/fallenmixed" className="hover:text-white">Fallen Mixed →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
