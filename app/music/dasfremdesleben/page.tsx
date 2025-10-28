import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Tonart C#m

intro 1-4 G#m-C#m-B-F#m

(thema) 5-12

Ich kenne zarte G#m
Kostbare Seele C#m
Ihre strahlende Pracht B
Wohnt in Gefühle F#m

Ihre innerer Streit G#m
Eine Austrocknung C#m
Sie lebt ein Leben B
In Verzweiflung F#m

(bis chor) 13-16

Sie malt ein besseres |G#m-AB|
Leben auf dem Gesicht C#m
Erschüttert setzten |E-D#dimF#m|
Schönheits-Blitzlicht G#

(füllung) 17 G#
(chor) 18-25

Ich lebe dieses Leben |A-E|
Ein Passant |D#dim-C#m|
Werde nicht widersetzen |F#m-A|
Nicht erfüllen konstant |D#dim-G#|

Die dummen Regeln |A-E|
Die Welt wendet |D#dim-C#m|
Ein Schönheitsdruck |F#m-A|
Das deprimiert |D#dim-G#|

(füllung2) 26-29 G#m-C#m-B-F#m

(thema) 30-37

Sie malt ein besseres
Leben auf dem Gesicht
Erschüttert setzten
Schönheits-Blitzlicht

Das stellt
Die Lügen, die Venus abheben
Welche ersetzen
Das wahre Leben

(bis chor) 38-41
(füllung) 42 E
(chor) 43-50

(füllung3) 51-58 G#m-C#m-B-F#m
A-E-D#dim-G#

(unter thema) 59-62

Sie lebt dieses Leben |F#m-C#m|
Ein Passant |G#m-A|
Sie wird nicht widersetzen |F#m-C#m|
Aber erfüllt konstant |A-B|

(chor) 63-70`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Das Fremdes Leben</h1>
          <p className="italic text-sm text-white/60">ISRC QZFYZ2137091</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/dasfremdesleben.webp"
            alt="Das Fremdes Leben"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Das Fremdes Leben.
        Woman is a mystery. She is expressive in her emotions. She paints beautiful images on her face, and she suffers inside from a lack of understanding and callousness of others.
        </p>

        <audio
          controls
          src={`/audio/dasfremdesleben verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/brewedtorefuse" className="hover:text-white">← Brewed To Refuse</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/dassteinernesherz" className="hover:text-white">Das Steinernes Herz →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
