import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Cle de Dm

(intro) 1-4
|Dm Bb|Gm C|Dm Bb| C

(chant) 5-20

Quelque part au loin, une étoile scintille |Dm Bb|Gm C|
C’est l’aube et l’étoile s’éteint |Dm Bb| C
Je pense à toi mais pour une raison quelconque |Dm Bb|Gm C|
Mes pensées ne s’en vont pas |Dm Am| Bb

J’essaie de me distraire avec des choses ordinaires |Dm Bb|Gm C|
Mais mes pensées sont toujours ailleurs |Dm Bb| C
Au moment où nous étions ensemble |Dm Bb|Gm C|
Quand tout n’existait que pour nous |Dm Am| Bb

(break) C 21

(refrain) 22-29

Jour après jour, je vis ma vie en attendant |F C|Bb Dm|
Que quelque chose va se passer |Gm Bb|C Dm|
Même si toi et moi sommes si loin |F C| Edim Dm|
Mais je sens que tu es là pour moi |Bb Gm|C Dm|

(interlude) 30-37
|F C|Bb Dm|Gm Am|Bb C| – 2

(chant) 38-45

J’ai envie de t’appeler et d’entendre ta voix |Dm Bb|Gm C|
Vous répondrez par une question et j’écouterai en silence |Dm Bb|Gm C|
Et j’espère que la douleur que je t’ai causée |Dm Bb|Gm C|
Un jour, laisser partir mon âme aussi |Dm Am| Bb

(break) C 46

(refrain2) 47-62

Jour après jour, je vis ma vie en attendant |F C|Bb Dm|
Que quelque chose va se passer |Gm Bb|C Dm|
Même si toi et moi sommes si loin |F C| Edim Dm|
Mais je sens que tu es là pour moi |Bb Gm|C Dm|
Jour après jour, je vis ma vie en attendant |F C|Bb Dm|
Que mes prières me libèrent |Gm Bb|C
Du désespoir et de la douleur |F C| Edim Dm|
De la séparation |Bb C| Dm

(pont) 63-70

Certains diraient qu’il faut vivre dans le futur |Gm Am|Bb C|
Le nouvel amour est le meilleur |Gm Am|Bb C|
Ce qui peut arriver à une personne |Gm Am|Bb C|
Vivre dans le passé est une punition |Cm Eb|C Dm|

(break3) Dm 71

(refrain2) 72-87

(break2 – fin) 88-92
|Bb C| Dm |Bb C| Dm|Dm`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Tu Me Manques</h1>
          <p className="italic text-sm text-white/60">ISRC QZTB22232915</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/tumemanques.webp"
            alt="Tu Me Manques"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Tu me manques.
        I have long wanted to record a composition in French. But it always seemed to me that this language is very difficult to pronounce, and, probably, I will not be able to do it well. Gathering all my strength, I have decided to make a record, I really hope that you can listen to it without irritation.
        This composition is about a young man, who, through his stupidity, has lost his soul mate. And now he is trying to be distracted by everyday affairs, but still his thoughts are somewhere, far away, in a time when they were together and everything around existed only for them.
        </p>

        <audio
          controls
          src={`/audio/tumemanques verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/trueloveadream" className="hover:text-white">← True Love, A Dream</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/waywardmuse" className="hover:text-white">The Wayward Muse →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
