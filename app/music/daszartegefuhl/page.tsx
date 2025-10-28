import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Tonart C#m

Intro 1-4 A-E-F#m-B

(thema) 5-20

Ich liege auf dem Bett F#m-C#m
Ich versuche einzuschlafen E-B
Ich denke an deine Worte F#m-C#m
Als ob Sündenstrafen E-B

Ich nehme deine Worte G#m-C#m
Ich nehme sie ernst nicht F#m-E
Ich werde weder weinen G#m-C#m
Noch lachen eifrig A-B

(füllung) 21 B

(chor) 22-37

Deine Liebe ist ein Desaster A-E
Aber ich will bei Ihnen sein F#m-B
Ich bin verrückt nach dir A-E
Ich weiß nicht, warum obendrein F#m-B

Für mich, alles ist das A-E
Schmerz und Vergnügen B-C#m
Ich lebe, um zu verbrennen F#m-C#m
Mein Herz in deinen Augen A-B

(füllung2) 38-41 A-E-F#m-B

(thema) 42-57

Ich versuche, zu erregen
Deine Aufmerksamkeit
Aber Du überhaupt nicht zu
Beenden meine Einsamkeit

Aber das scheint Du wirst
Durch deinen Freunden genommen
Ich bin unter deinen
Freunden verloren

(füllung) 58

(chor) 59-74

(füllung) 75

(chor verblasst) 76-91`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Das Zarte Gefühl</h1>
          <p className="italic text-sm text-white/60">ISRC QZFYZ2137092</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/daszartegefuhl.webp"
            alt="Das Zarte Gefühl"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Das Zarte Gefühl.
        This is an interesting story about two young people. She loves him but doubts her choice. He thinks he loves her.
        And as usually happens with men, this is not their fault, but the law of nature. They are very fickle and love each new girl as if she is the only one. Then time passes and a new beauty appears. Girls understand that and doubt their feelings.Or maybe I’m wrong. In any case, the author assumes and expresses his opinion.
        </p>

        <audio
          controls
          src={`/audio/daszartegefuhl verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/dassteinernesherz" className="hover:text-white">← Das Steinernes Herz</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/delicious" className="hover:text-white">Delicious →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
