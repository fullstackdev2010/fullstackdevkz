import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Tonart Bm

einführung 1-4 D-F#m-A-Bm

(thema) 5-12

Ich bin hier, auf wiedersehen D
Sehe den Blick in Ihrem Gesicht F#m
Zu fliehen den Fragen, warum A-Bm

Ich bin hier, auf wiedersehen D
Ich werde spurlos verschwinden mich |A-F#|
Die Erklärung loswerden darum G-C#

(chor) 13-20

Verblasse Ich, wie am Tag zuvor |D-E|A-F#m|
In jemanden, Sie nicht kennen |D-E|F#m
Verlieren Ich, wie am Tag zuvor |D-E|A-F#m|
Jemand, ich nie werde kennen |D-E|F#m

(füllung) 21-24 |D-E|F#m – 2

(thema) 25-32

Ich laufe vor mir selbst davon
Von kommenden Erinnerungen
Ich werde niemals teilen

Geschlossen in Gedanken schön
Seitdem ich geschätzt Entbehrungen
Meine Hoffnungen zu heilen

(chor) 33-40

(chor) 41-48

(ende) 49-53

Jemand, ich nie werde kennen |D-E|F#m
Jemand, ich nie werde kennen |D-E|F#m|F#m
`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Adieu</h1>
          <p className="italic text-sm text-white/60">ISRC QZFZ52124329</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/adieu.webp"
            alt="Adieu"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
          I want to present you a new composition – Adieu.
          It is a little sad, the separation of two random acquaintances, between whom a spark of love slipped. He comes to say goodbye and enjoy the sense of loss of what could be a beautiful romance. This is a contradiction of the human psyche. If you desire something very much and this desire is not fulfilled, a state of satisfaction in loss sets in.
        </p>

        <audio
          controls
          src={`/audio/adieu verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
{lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <div />
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/alonelydozed" className="hover:text-white">A Lonely Dozed →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}