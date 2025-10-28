import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
Key of Dm

(intro) 1-4
Dm Gm Bb C

(main) 5-20
Ideals are good |Dm Am|Gm
The shiny and golden Bb C
Assured, withstood |Dm F| G
Of now and olden Gm C

(break) C 13

The rules, carved away |Dm Am|Gm
Into, mine the heart Bb C
Submissive as prey |Dm F| G
And falling apart Gm C

(break) C 22

(chorus) 23-30
For every your glance F
And curvy waist line G
Awaiting the chance Am
To show off signs Bb

A living ordeal Bb
A barren project Gm
That is, pointless zeal Bb
My nature reflect C

(break) C 31

(main) 32-48
Desire imposed |Dm Am|Gm
Perception been choked Bb C
And aiming unclosed |Dm F| G
Controlled and provoked Gm C

(break) C 40

Neutrality blameless |Dm Am|Gm
I love you so much Bb C
Not biased or faceless |Dm F| G
As once, your first touch Gm C

(break) C 49

(chorus) 50-57

(interlude) 58-65
F G Am Bb Bb Gm Bb C

(chorus) 66-73

(ending) 74-79
Your nature reflect Bb C
My nature reflect Bb C
Your nature reflect Bb C`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Neutrality Blameless</h1>
          <p className="italic text-sm text-white/60">ISRC QZNWW2301738</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/neutralityblameless.webp"
            alt="Neutrality Blameless"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Neutrality blameless.
        This song is dedicated to N.M.C.
        Some girls are a disaster. They only think of ideals. And especially they have a point on respect. All the difficulties in the relationship between a man and a woman arise, as I think, from the desire to impose one’s perception of the world. The most difficult thing is to remain neutral, not biased, not to offend or exalt your interlocutor.
        </p>

        <audio
          controls
          src={`/audio/neutralityblameless verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/lustfoolish" className="hover:text-white">← Lust Foolish</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/neverbeenfree" className="hover:text-white">Never Been Free →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
