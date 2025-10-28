import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
True love, A dream

Key of Gm

(intro)
|Bb-F|Gm-Eb|-3
|Bb-Cm|Eb-F|

(main)
I was lost and possessed |Bb-F|
By a feverish pleasure |Gm-Eb|
Taken harshly depressed |Bb-F|
With an overwrought measure |Gm-Eb|

The extent my affections |Bb-F|
Were resembling true love |Gm-Eb|
With improper directions |Bb-Cm|
Made upon, blurring of |Eb-F|

(chorus)
Love I truly was waiting |Bb-Eb|
Waved to never come live |Bb-F|
All my visions resetting |Bb-Eb|
All my wishes deprive |Bb-F|

Еager, so much awaited |Bb-F|
Tender touch, ardent kiss |Cm-Gm|
Dreamt and almost faded |Eb-Bb|
Swept away and dismissed |Cm-F|

(main)
Not a queen, sweetly dreaming
Living on, painful blind
Soul of mine, softly screaming
In her longings, confined

I am cursed, an exception
Never true love, a dream
An erroneous reflection
And misfortune, extreme

(bridge)
Still I’m dreaming away Gm
Of the moment to come Dm
It’s a hurting delay Edim
I do easy succumb Dm

To the fact, all fallacious Gm
Dreamt my wishes, have been Dm
As mistakes, ostentatious Edim
Of misfortune, extreme Dm`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">True Love, A Dream</h1>
          <p className="italic text-sm text-white/60">ISRC QZFZ42108359</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/trueloveadream.webp"
            alt="True Love, A Dream"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – True love, a dream.
        We live in a very complex world. Our relationships are built on social feelings and personal feelings. Social feelings are the medium that unites us in communities – duty, respect, affection. Personal feelings are love, willfulness, freedom. Very often they come into conflict and then it turns out – True love, A dream.
        </p>

        <audio
          controls
          src={`/audio/trueloveadream verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/thetenderhoax" className="hover:text-white">← The Tender Hoax</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/tumemanques" className="hover:text-white">Tu Me Manques →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
