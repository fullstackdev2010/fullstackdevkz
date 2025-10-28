import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Tonart C#m

(intro) 1-10
C#m-|A-B|-4-B

(thema) 11-26

Es gibt einen Moment, den ich so sehr vermisse C#m-F#m
Die Art, wie Sie mich anlächeln und laben C#m-|A-B|
Ich versuche mich an alle Details zu erinnern C#m-F#m
Wie dumm ich war, Sie verloren zu haben C#m-|A-B|

Ich möchte die Zeit wirklich zurückdrehen C#m-F#m
Und all meine sehr dummen Fehler vergessen C#m-|A-B|
Ich träume davon, Sie mich wieder anrufen C#m-F#m
Ich habe eine lange Partie gespielt und besessen C#m-|A-B|

(bis chor) 27-32

Sie sagen, dass es vorbei ist A-E
Sie sagen, es steht Ihnen frei zu gehen F#m-C#m
Wofür ist diese Freiheit für A-B

(chor) 33-36

Ich möchte bei Ihnen sein, für immer und jetzt E-F#m
Ich habe einen Fehler gemacht und bereue es gesetzt A-|A-B|

(füllung) B-37

(thema) 38-53

Es gibt keinen Grund, mir ein schlechtes Gewissen zu machen
Ich habe ein törichtes Spiel, bezahle ich den Preis
Ich habe mein Glück vermasselt Ich kann es nicht leugnen
Ich war verrückt nach, unendlicher Freiheit

Aber ich will es nicht, die Freiheit der Einsamkeit
Mein Verstand und Gefühlswelt sind ein Wrack
Ich lebe in einer Leere und versuche, mich zu beruhigen
Ich lebe in einer Leere mit einem schlechten Nachgeschmack

(bis chor) 54-59
(chor) 60-63

(füllung2) 64-71
C#m–4 / Ebm–4

(chor)72-75
(chor)76-79

(ende) 80-83
B–4`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Gespielt Und Besessen</h1>
          <p className="italic text-sm text-white/60">ISRC QZFYZ2137090</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/gespieltundbesessen.webp"
            alt="Gespielt Und Besessen"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Gespielt und Besessen.
        For no reason I feel very lonely, as if I am a little teddy bear on a high road, forgotten and abandoned, somewhere far away. I remember moments of happiness and love, but all of them are unreal. Or maybe there were none, and I’m just a part of the past that has never been present.
        </p>

        <audio
          controls
          src={`/audio/gespieltundbesessen verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/fallenmixed" className="hover:text-white">← Fallen Mixed</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/ichdenkeandich" className="hover:text-white">Ich Denke An Dich →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
