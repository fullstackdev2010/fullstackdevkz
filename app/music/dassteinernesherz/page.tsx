import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Tonart C#m

(intro) 1-8

|C#m-E|A-B|C#m-E|A-B|
|C#m-G#m|E-F#m|A|B|

(thema) 9-16

Ein Heim-Abenteuer |C#m-E|
Es soll nur sein |A-B|
Gedanken ein Vorhaben |C#m-E|
Anspruchsvoll nicht, obendrein |A-B|

Gemütlich geworden |C#m-G#m|
Und klebrig mit Komfort |E-F#m|
Ich bin seltsam, langweilig |A|
Dank, etwas steinig |B|

(chor) 17-24

Ich möchte nicht kämpfen |E-B|
Mit meiner Natur petrous |G#m-C#m|
Es neigt immer zum Schmuggel |A|
Meine Gefühle, endlos |B|

Die Sehnsucht, ich träume |E-B|
Ein Dirndl-Mädchen küsst |G#m-F#m|
Die Wünsche verschönert |A|
Mein Herz vermisst |B|

(thema) 25-32

Ich will, dass der Fehler
Nicht für beglichen wird
Eine giftige Schlange
Ein brennender Vampir

Der Teil meines Herzen
Die steinerne Essenz
Das bricht bemerkt
Meiner Existenz

(chor) 33-40

(unterthema) 41-44

Ich weiß, dass ich falsch liege |C#m|
Es ist schlecht, Tränen zu bringen |D|
Ich muss zu Ihnen gehören|C|
Beantworten Sie Ihre Gebete |F#m-B|

(füllung) 45-52

|C#m-E|A-B|C#m-E|A-B|
|C#m-G#m|E-F#m|A|B|

(chor) 53-60
(chor) 65-72
(ende) 73`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Das Steinernes Herz</h1>
          <p className="italic text-sm text-white/60">ISRC QZFYZ2137089</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/dassteinernesherz.webp"
            alt="Das Steinernes Herz"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Das Steinernes Herz.
        The world is divided into the two halves. Woman and man. There is a constant struggle between them. She is a home of comfort and coziness. He is a constant search for fun and adventure. One day he will give her his big stone heart. But I think it’s not for long. There, around the corner, a beautiful girl in a dirndl dress is waiting for him.
        </p>

        <audio
          controls
          src={`/audio/dassteinernesherz verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/dasfremdesleben" className="hover:text-white">← Das Fremdes Leben</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/daszartegefuhl" className="hover:text-white">Das Zarte Gefühl →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
