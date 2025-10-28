import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key F#m

(intro) 1-9
|F#m A|F#m E| F#m D|F#m B|
|F#m A|F#m E| F#m D|F#m G#dim|

(main1) 10-17

I’m self fallen mixed |F#m D|A E|
An office romance
Cold damn endless fixed
My weak bodied stance

It’s wrong, all the time
I’m taken and treated
The feminine crimes
Are never defeated

(break) E 18
(main2) 19-26

A substitute reason |F#m D|A E|
Shall never dismiss
It’s formal a treason
I’m always remiss

Support gorgeous ego
I’ve dreamt to respect
My masculine free-go
They always object

(break) 27
(bridge) 28-31

An elegant splendid |Bm G|
Will stand, all the time |D A|
I’m firmly defended |Bm G|
By masculine prime |D A|

(break2) A – 2 32-33

(chorus) 34-41

From now and on |Bm D|
There will be no chance |Bm A|
To let it, burst out |Bm G#dim|
An office romance |Em G|

From now, for ever |Bm D|
Shall never do I |Bm A|
Succumb to a foolish |Bm G#dim|
And treacherous sigh |Em F#|

(solo rhythm-intro) 42-49
|F#m A|F#m E| F#m D|F#m B|
|F#m A|F#m E| F#m D|F#m G#dim|

(main1) 50-57

I’m self fallen mixed |F#m D|A E|
An office romance
Cold damn endless fixed
My weak bodied stance

It’s wrong, all the time
I’m taken and treated
The feminine crimes
Are never defeated

(break) E-2 58-59
(chorus) 60-67
(chorus) 68-75`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Fallen Mixed</h1>
          <p className="italic text-sm text-white/60">ISRC QZHN32118552</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/fallenmixed.webp"
            alt="Fallen Mixed"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Fallen mixed.
        An office romance is funny. Good practice is not to give it way. It is very correct to suspend this relationship and enjoy the tension. Over time, the relationship will fade away and friendship will prevail.
        </p>

        <audio
          controls
          src={`/audio/fallenmixed verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/dreamtlife" className="hover:text-white">← Dreamt Life</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/gespieltundbesessen" className="hover:text-white">Gespielt Und Besessen →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
