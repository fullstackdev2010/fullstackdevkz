import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Ich Denke an Dich

Tonart Gm

(einführung) 2-5
Gm-Eb-Bb-F

(thema) 6-21
Ich fühle mich ganz allein Gm-Eb
Mein Leben ist gedrängt nach hinten Bb-F
Nichts ist richtig, nichts ist falsch Gm-Eb
Ich habe Sorgen dahinten Bb-F

Ich möchte bei dir sein Cm-Gm
In deinen Augen bin schmolz Cm-Bb
Fühle dich nahe und erneuern Gm-Cm
Hervorragend mein süßer Stolz Eb-F

(füllung) 22 F

(chor) 23-38
Liebling, (ich denke) an dich Gm-A-Cm-D
Schätzchen, (denkst du) auch nach Gm-Cm-Eb-D
Liebling, (ich vermisse) dich Gm-A-Cm-D
Schätzchen, (vermisst du) mich auch Gm-Cm-Eb-D

(füllung2) 39-46
Gm-Eb-Bb-F
Gm-Cm-Eb-D

(thema) 47-62
Ich stelle mir Phantasie vor
Ich verliere mich in Träumen
Unsere Brücken sind abgebrannt
Du wirst niemals zurückkommen

Wann der Tag noch kommen wird
Oder der Sonnenuntergang naht
Ich träume, du kommst nach Hause
Und du bleibst bei mir, bejaht

(füllung) 63

(chor) 64-79

(unterthema) 80-87
Ich werde dich nie loslassen Cm-Bb
Ich werde dich nie weinen lassen Fm-Cm
Ich werde dich nie loslassen Cm-Bb
Ich werde dich nie weinen lassen Fm-G

(füllung3) 88 G
(chor) 89-104
(chor verblasst) 105-120`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Ich Denke An Dich</h1>
          <p className="italic text-sm text-white/60">ISRC QZDA42195512</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/ichdenkeandich.webp"
            alt="Ich Denke An Dich"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Ich Denke an Dich.
        This is a lyrical rock ballad about the relationship of two people in love. They had a little disagreement and she left. He is waiting for her and hopes that she will return soon. But doubts make him feel a little upset.
        </p>

        <audio
          controls
          src={`/audio/ichdenkeandich verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/gespieltundbesessen" className="hover:text-white">← Gespielt Und Besessen</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/ipleadoddlymuch" className="hover:text-white">I Plead Oddly Much →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
