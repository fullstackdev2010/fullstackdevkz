import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Dm

(intro) 1-4
|Em-Dm|C-Gm|Bb-C|Bdim-Am|

(main) 5-12

I wait for the day |Em-Dm|
My rainy and gloomy |C-Gm|
With chills, in the gray |Bb-C|
That constantly sue me |Bdim-Am|

By tireless waving |Em-Dm|
Which drives me astray|C-Gm|
I’m desperately craving |Bb-Gm|
Your honest display |Bb-C|

(break) C 13
(chorus) 14-21

My fearless gladness F
A poisonous snake G
My elegant blackness |Am-Em|
Your glared mistake |Bb-C|

Is always a puzzle F
To bitter my heart G
Why treacherous hustles |Am-Dm|
Mine, prudent and smart |F-G|

(break2) G 22

(break intro) 23-30
|C-Dm|C-Gm|Bb-C|Bdim-Am|

(main) 27-34

I’m risking it all |Em-Dm|
The white, into black |C-Gm|
Do quieten the hall |Bb-C|
Of orderly stack |Bdim-Am|

Of wishes, your pleasant |Em-Dm|
I seem disapprove |C-Gm|
With mind, effervescent |Bb-Gm|
To blacken the move |Bb-C|

(break) 35
(chorus) 36-43
(break2) 44

(bridge) 45-52

I seem to have changed |Am-C|
Now’s tender a hoax |Dm-F|
I’m something estranged |Gm-Bb|
With feverish hopes|Bdim-Am|

I try to live on |C-G|
Awaiting for you |Am-Em|
To burn you along |Dm-F|
With my love untrue |Bdim-Am|

(break) 53
(chorus) 54-61
(chorus) 62-69`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">The Tender Hoax</h1>
          <p className="italic text-sm text-white/60">ISRC QZHN82177416</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/thetenderhoax.webp"
            alt="The Tender Hoax"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – The tender hoax.
        Some people take risks for love, usually women. It is very miserable and sad, because love is a tender hoax. But … This is life, it is unpredictable, and it hosts no mistakes of others, but your own, bitter and sweet. So, go on, reach out your hand. There will be the light at the end of the tunnel – the only true value – HONESTY. You will surely touch upon it some rainy day.
        But for now, go on, have your own sweet mistakes.
        </p>

        <audio
          controls
          src={`/audio/thetenderhoax verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/therockingfisher" className="hover:text-white">← The Rocking Fisher</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/trueloveadream" className="hover:text-white">True Love, A Dream →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
