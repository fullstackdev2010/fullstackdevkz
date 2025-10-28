import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const lyrics = `
The verse has chords and Korg Pa 300 marks.

Key of Dm

(giriş)
Dm-C-Gm-Bb 1-4 var1
Dm-C-Gm 5-7 var1
Bb 8 fill2

(ana)
Aşk bir mucizedir |Dm-C| 9 var1
Kalbimin derinliklerinde |Gm-Bb| 10 var1
Harika lirik |Dm-C| 11 var1
Onun her başlangıcı |Gm-Bb| 12 var1

Umarım her zaman |Dm-C| 13 var1
Parçası ol, şimdi |Gm-Bb| 14 var1
Nefes al, sıcak övgü |Dm-C| 15 var1
O nefes alıyor |Gm-Bb| 16 fill2

(koro)
Ne mutlu anlar |F-C| 17 var4
Seninle, hazinem |Bdim-Am| 18 var4
Tüm zevklerim |Dm-G| 19 var4
Ve sonsuz zevk Am 20 var4

Sen benim kıymetlimsin |F-C| 21 var4
Olmak için dua ediyorum |Bdim-Am| 22 var4
Layık, senin lütfun |Dm-G| 23 var4
Aşk, benim bir parçam Am 24 fill3

(geçici)
|F-C|Bdim-Am|Dm-G| 25-27 var3
Bb 28 fill2

(ana)
Müşfik ve nazik |Dm-C| 29 var1
Nazikçe kibar |Gm-Bb| 30 var1
Rafine düşüncelerin |Dm-C| 31 var1
Aklımın zevki |Gm-Bb| 32 var1

Ben çok inançlıyım |Dm-C| 33 var1
Çocuk olmak |Gm-Bb| 34 var1
Çok müteşekkirim |Dm-C| 35 var1
Hafifleşiyorum |Gm-Bb| 36 fill2

(koro)
Ne mutlu anlar |F-C| 37 var4
Seninle, hazinem |Bdim-Am| 38 var4
Tüm zevklerim |Dm-G| 39 var4
Ve sonsuz zevk Am 40 var4

Sen benim kıymetlimsin |F-C| 41 var4
Olmak için dua ediyorum |Bdim-Am| 42 var4
Layık, senin lütfun |Dm-G| 43 var4
Aşk, benim bir parçam Am 44 fill3

(geçici)
|F-C|Bdim-Am|Dm-G| 45-47 var3
Bb 48 fill2

(köprü)
Bazıları çok nadir |Dm-C| 49 var1
Arada bir A 50 var1
Kavgaları paylaşırız |F-A| 51 var1
Gülümseme ile gözyaşları Gm 52 var1

Ayrılmayı dene |Dm-C| 53 var1
Acıya A 54 var1
Ama sonra yeniden başlat |F-A| 55 var1
Kalbimizin etki alanı Gm 56 fill4

(geçici)
|F-C|Bdim-Am|Dm-G| 57-59 var3
Bb 60 fill2

(koro)
Ne mutlu anlar |F-C| 61 var4
Seninle, hazinem |Bdim-Am| 62 var4
Tüm zevklerim |Dm-G| 63 var4
Ve sonsuz zevk Am 64 var4

Sen benim kıymetlimsin |F-C| 65 var4
Olmak için dua ediyorum |Bdim-Am| 66 var4
Layık, senin lütfun |Dm-G| 67 var4
Aşk, benim bir parçam Am 68 var4

(koro)
Ne mutlu anlar |F-C| 69 var4
Seninle, hazinem |Bdim-Am| 70 var4
Tüm zevklerim |Dm-G| 71 var4
Ve sonsuz zevk Am 72 var4

Sen benim kıymetlimsin |F-C| 73 var4
Olmak için dua ediyorum |Bdim-Am| 74 var4
Layık, senin lütfun |Dm-G| 75 var4
Aşk, benim bir parçam Am 76 var4`;

export default function TrackDetail() {
  return (
    <div className="bg-[#1C1B33] text-white min-h-screen py-10 px-4 flex flex-col">
      <div className="max-w-3xl mx-auto space-y-6 flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-300 mb-2">Sonsuz Aşk</h1>
          <p className="italic text-sm text-white/60">ISRC QZK6K2138356</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-fuchsia-500/30">
          <Image
            src="/images/sonsuzask.webp"
            alt="Sonsuz Aşk"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-white/80 leading-relaxed text-sm border-l-4 border-pink-400 pl-4 italic">
        I want to present you a new composition – Sonsuz Aşk.
        The relationship between a man and a woman is often demanding. These are ups and downs, quarrels over trifles, internal and external contradictions, but true love always wins.
        </p>

        <audio
          controls
          src={`/audio/sonsuzask verse-n-music.art.mp3`}
          className="w-full mt-4"
        />

        <pre className="whitespace-pre-wrap text-sm bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-center mx-auto">
        {lyrics}
        </pre>

        <div className="flex justify-between mt-8 text-sm text-white/80">
          <Link href="/music/seductionuntouched" className="hover:text-white">← Seduction Untouched</Link>
          <Link href="/music" className="text-fuchsia-400 hover:text-white font-semibold">
            ⬑ Back to Catalog
          </Link>
          <Link href="/music/tagundnacht" className="hover:text-white">Tag Und Nacht →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
