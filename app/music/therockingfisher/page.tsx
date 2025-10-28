import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
The verse has chords and Korg Pa 300 marks.

Key of F#m tempo 120

(intro) 1-4 intro2, 5-7 var2, 8 break
C#m-A-E-F#m-D-C#m-Bm-E

(main) 9-15 var1, 16 fill1, 17-24 var1

I’d rather a fisher F#m-A 9-10
Some day, to become F#m-A 11-12
And fish for a kisser F#m-E 13-14
To give me love, some E-Bm 15-16

Affection and warmth F#m-A 17-18
I’ve always been missing F#m-A 19-20
And beautiful forms F#m-E 21-22
I’ve longed to be kissing E-Bm 23-24

(break) F#m 25 fill2

(pre-chorus) 26-29 var1

Attachment and love D-Bm 26-27
I’m hopelessly missing E-F#m 28-29

(break) F#m 30 fill3

(chorus) 31-37 var2, 38 fill2, 39-45 var2, 46 fill3

I close the eyes D-E 31-32
And stretch out the hand A-B 33-34
The coveted prize Bm-D 35-36
My mind’s harshly banned E-F#m 37-38

And driven me off A-B 39-40
Towards weird knocking Bm-F#m 41-42
The wishes my soft D-Bm 43-44
I’d rather be rocking E-B 45-46

(interlude-intro) 47-53 var2, 54 fill2
C#m-A-E-F#m-D-C#m-Bm-E

(main) 55-61 var1, 62 fill1, 63-70 var1

I turn back and smile F#m-A 55-56
I’ve gained, what it takes F#m-A 57-58
To break up, the trial F#m-E 59-60
My mind, forcely makes E-Bm 61-62

And know the way F#m-A 63-64
My lows and highs F#m-A 65-66
To keep in the bay F#m-E 67-68
Of coveted prize E-Bm 69-70

(break) F#m 71 fill2

(pre chorus) 72-75 var1

Attachment and love D-Bm 72-73
I’m hopelessly missing E-F#m 74-75

(break) F#m 76 fill3

(chorus) 77-83 var2, 84 fill2, 85-91 var2, 92 fill3

I close the eyes D-E 77-78
And stretch out the hand A-B 79-80
The coveted prize Bm-D 81-82
My mind’s harshly banned E-F#m 83-84

And driven me off A-B 85-86
Towards weird knocking Bm-F#m 87-88
The wishes my soft D-Bm 89-90
I’d rather be rocking E-B 91-92

(break2) Bm 93 break

(bridge) 94-101 var2

A little of doubt F#m-C#m 94-95
I’m, now and then Bm-F#m 96-97
I’ve gained, what it takes F#m-C#m 98-99
But how and when A-B 100-101

(break2) Bm 102 fill3

(chorus) 103-109 var2, 110 fill2, 111-117 var2, 118 fill3

I close the eyes D-E 103-104
And stretch out the hand A-B 105-106
The coveted prize Bm-D 107-108
My mind’s harshly banned E-F#m 109-110

And driven me off A-B 111-112
Towards weird knocking Bm-F#m 113-114
The wishes my soft D-Bm 115-116
I’d rather be rocking E-B 117-118

(break2) Bm 119 fill3

(chorus) 120-126 var2, 127 fill2, 128-135 var2

I close the eyes D-E 120-121
And stretch out the hand A-B 122-123
The coveted prize Bm-D 124-125
My mind’s harshly banned E-F#m 126-127

And driven me off A-B 128-129
Towards weird knocking Bm-F#m 130-131
The wishes my soft D-Bm 132-133
I’d rather be rocking E-B 134-135

(ending) 136-139 end2
B-E-B-E`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">The Rocking Fisher</h1>
          <p className="italic text-sm text-white/60">ISRC QZHNB2121070</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/therockingfisher.webp"
            alt="The Rocking Fisher"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – The rocking fisher.
        The modern world is a stone jungle. People live lonely in a crowd and only beauty makes them a little kinder and more attentive to each other. I am already quite an old person and over time for me the beauty of nature has become the air that I breathe. It’s almost like a drug, probably it’s also wrong, but dry philosophy, let it wait.
        </p>

        <audio
          controls
          src={`/audio/therockingfisher verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/thenote" className="hover:text-white">← The Note</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/thetenderhoax" className="hover:text-white">The Tender Hoax →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
