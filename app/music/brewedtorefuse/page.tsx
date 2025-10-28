import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Gm (tempo 2/4)

(intro) 1-4
Gm Eb F Bb Eb Cm A D

(main) 5-9, 10-14
I have been accused Gm-2
Of being lighthearted Bb Dm-2
Brewed up, to refuse F-2
Affections much granted Cm Gm-2

That I’m searching on Eb-2
Respective to lose Bb D-2
And wouldn’t, have gone Eb-2
Some true one, to choose Cm A

(break) A-A-2 14-15

(chorus) 16-19, 20-23
Come on, get dismissed Cm F
I don’t anymore Bb Eb
Do searching persist Cm Gm
Someone to adore A D

I’m dreaming away Cm F
The true one, refuse Bb Eb
And gorgeously play Cm Gm
Established confused A D

(inro interlude) 24-27
Gm Eb F Bb Eb Cm A D

(main) 28-32, 33-37
Get rid of you, fast Gm-2
By blinking the eye Bb Dm-2
Self inner harassed F-2
My selfishness high Cm Gm-2

Profoundly cherished Eb-2
Forever and more Bb D-2
Not caring perished Eb-2
My heart to restore Cm A

(break) A-A2 37-38

(chorus) 39-46
(chorus ) 47-54`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Brewed To Refuse</h1>
          <p className="italic text-sm text-white/60">ISRC QZTAU2383477</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/brewedtorefuse.webp"
            alt="Brewed To Refuse"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Brewed to refuse.
        Some souls are endlessly searching. When they find, the very moment they lose, because, the aim has been reached and there should be a new one to find and refuse.
        </p>

        <audio
          controls
          src={`/audio/brewedtorefuse verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/alonelydozed" className="hover:text-white">← A Lonely Dozed</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/dasfremdesleben" className="hover:text-white">Das Fremdes Leben →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
