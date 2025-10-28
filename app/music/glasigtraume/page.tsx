import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Tonart E

einführung 1-4 |E-B|F#m-C#m|A-E|F#m-B|

(thema) 5-12

Ich wartete auf den Moment |B-B|
Ich wartete auf die Chance |G#m-D#m|
Ich war in Gedanken verloren |E-B|
Ersehnend der großen Romanze |A-B|

Ich lebte auf einer Betrübnis |F#m-C#m|
Ich träumte, der Liebe wahren |D-A|
Ich dachte, ein schönes Morgen |F#m-C#m|
Wo ich zu Ihnen gehören |A-B|

(füllung) 13 |B-B|

(chor) 14-21

Mein Verstand hat keine Ahnung |E-B|
Meine Träume sind aus glas |F#m-C#m|
Ist es meine Seele, passiv |A-E|
Winkt zerbrechlich, wahr niemals |F#m-B|

Weiter träume, zittere für immer |E-B|
Ich fühle dumm, Ich fühle klein |F#m-C#m|
Ich wünsche, Glas genommen wird |A-E|
Und entlassen weg und fein |F#m-B|

(füllung) 22|B-B|

(thema) 23-30

Die Anziehung getrennt
Du wirst ferngehalten
Glasig Träume reflektiert
In meiner Vorstellung behalten

Ich möchte meine Träume ändern
Das Glas gebrochen, uns befreit
Glasig Träume, von jetzt an
Erlaubend uns sein frei

(füllung) 31|B-B|

(chor) 32-39

(füllung) 40|B-B|

(chor) 41-48

(ende) 49-51`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Die Glasig Träume</h1>
          <p className="italic text-sm text-white/60">ISRC QZFYZ2137093</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/glasigtraume.webp"
            alt="Die Glasig Träume"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Die Glasig Träume.
        We live in a strange world full of conventions. Around us, there are the mirrors and glass. We walk along the street, and for some reason we pass the destiny, although we understand that this is she. This composition is about a guy, who dreams of a beautiful romance, and knows that it is necessary to break the glass, that separates him and the beautiful image of the future lover, who lives in the same house, or city, or country, or the world. And he knows that she is definitely waiting for him very much. Because she is also entrapped in the glassy dreams.
        </p>

        <audio
          controls
          src={`/audio/glasigtraume verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/desireduntold" className="hover:text-white">← Desired Untold</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/dreamtlife" className="hover:text-white">Dreamt Life →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
