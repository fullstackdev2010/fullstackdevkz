import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Cm

(intro) 1-4
Cm Eb Fm Ab Cm Eb Bb Gm

(main) 5-13
I pray, having been Cm – 2
A little distracted Bb Fm
To come out, clean Cm – 2
Of blunders enacted Gm G

(pause) G

By chances uncertain Cm – 2
I’ve oddly embraced Bb Fm
Expecting my burdens Cm – 2
Somehow unlaced Ab G

(break) G 13

(chorus) 14-21
I plead oddly much Fm G
Not ever fall guilty Cm F
Avoid madly clutch Ab Bb
And aftermath silty Eb G

Your foolish intentions Fm Bb
Have brought in, someway Gm Cm
Collapsed my affections Ab Bb
Not fit to relay G Cm

(interlude – intro) 22-29
Cm Eb Fm Ab Cm Eb Bb Gm
Cm Cm Bb Fm Cm Cm Fm G

(main) 30-38
The message, I’m haunted Cm – 2
Like slipping reward Bb Fm
Your presence much wanted Cm – 2
Of pleasing accord Gm G

(pause) G

I’m longing to sense Cm – 2
Before you are gone Bb Fm
And slightly dispensed Cm – 2
My right into wrong Ab G

(break) G 38
(chorus) 39-46

(break2) Am 47

(bridge) 47
I pray, having been Gm Ab
A little distracted Bb C
To come out, clean Gm Ab
Of blunders enacted Bb G

(break) G 51

(chorus) 52-59
(chorus) 60-67`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">I Plead Oddly Much</h1>
          <p className="italic text-sm text-white/60">ISRC QZTB82381327</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/ipleadoddlymuch.webp"
            alt="I Plead Oddly Much"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – I plead oddly much.
        There are times when I feel that being right or wrong doesn’t matter at all. When the situation gets out of my control, all that remains, is to pray and hope.
        </p>

        <audio
          controls
          src={`/audio/ipleadoddlymuch verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/ichdenkeandich" className="hover:text-white">← Ich Denke An Dich</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/linkedthebeautyin" className="hover:text-white">Linked The Beauty In →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
