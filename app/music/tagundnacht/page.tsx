import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Tonart C

einführung 1-4 C-G-Dm-Am

(thema) 5-16

Tag und Nacht sehe ich dich weinen C
Tag und Nacht ich weine auch mit dir C-G-G
Ich lüge ständig, du gießt Tränen C
Ich bin überhaupt nicht für dich C-G-G

Heute Nacht |Dm-Am|
Wollen halt Dein Weinen zu |F-G|Am-A

(chor) 17-25

Baby |C-G|
Lass dich lächeln schier |Dm-Am|
Ich bin |C-G|
Eine Weile hier |F-G|

Ich werde tun |C-G|
Auch immer könnten wir |Dm-Am|
Verstecke dich |C-G|
Bis zum Morgenlicht ist hier |F-Am|Am

(thema) 26-37

Und Am Morgen renne ich zu
Eine Ablenkung in meinem Herz
Zu perfekte liebe kommen
Mochte Ich und werde los der schmerz

Heute Nacht
Wollen halt Dein Weinen zu

(chor) 38-46

(unterthema) 47-50

Nichts ist perfekt in unserem Leben |F-E|Am
Ich komme nach Hause heute Nacht |F-Dm|E

(chor) 51-58

(ende) 59-60

Morgenlicht ist hier |F-Am|
Morgenlicht ist hier |F-Am|`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Tag Und Nacht</h1>
          <p className="italic text-sm text-white/60">ISRC QZDA72116107</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/tagundnacht.webp"
            alt="Tag Und Nacht"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Tag Und Nacht.
        Some time ago, German surgeons saved me. Out of gratitude and admiration, I looked closely at their culture. I always liked German philosophy, and I studied German at school. Therefore, the culture has always been very dear to me. The strongest impression on me was the girl, the ultrasound operator in the clinic in Krefeld. Her German sounded just magical. Fascinating. I listened and thought that I could listen to her endlessly.
        I really liked the order and patience with which these people create a new beautiful world for the whole of Europe. I decided to write my music only in German, although I love English too, but it seems to me that it should back off a bit and give place to the beautiful languages ​​of the world.
        My approach is quite easy. It is a reflection of the images, as in the writing of poems. I observe the world around me and transform visual and mental images into a melody.
        I really like the guitar in all its manifestations. Rock guitar has a magical effect on me personally and I think, on many people too. Therefore, I chose the style of melodic and dynamic rock.
        I do like the contradictions that are resolved in conditional harmony. This is my approach. Look for contradictions and their resolution will be a beautiful work of art. For example, a man rejects a woman. It is very simple and sometimes happens. But in the mass consciousness, this tension must necessarily be resolved by reconciliation.
        First, I take an acoustic guitar and write a melody, this is the process of meditation on a selected topic. Then I write poetry for this tune. The melody and lyrics are ready.
        </p>

        <audio
          controls
          src={`/audio/tagundnacht verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/sonsuzask" className="hover:text-white">← Sonsuz Aşk</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/thediffidentlove" className="hover:text-white">The Diffident Love →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
