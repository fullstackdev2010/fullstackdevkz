"use client";

import { useEffect, useRef, useState } from "react";
import MusicCard from "@/components/MusicCard";
import Footer from "@/components/Footer";

type Track = {
  id: string;
  title: string;
  mood: string;
  audioFile: string;
  gradient: string;
};

type Group = {
  name: string;
  tracks: Track[];
};

const rawGrouped: Group[] = [
  {
    name: "🌒 Melancholy / Reflection",
    tracks: [
      ["Adieu", "adieu verse-n-music.art.mp3", "ISRC	QZFZ52124329", "from-rose-200 via-pink-400 to-purple-700"],
      ["A Lonely Dozed", "alonelydozed verse-n-music.art.mp3", "ISRC QZTB82275948", "from-slate-600 via-gray-800 to-black"],
      ["Dreamt life", "dreamtlife verse-n-music.art.mp3", "ISRC	QZK6H2180273", "from-sky-200 via-indigo-500 to-indigo-900"],
      ["Ich Denke An Dich", "ichdenkeandich verse-n-music.art.mp3", "ISRC QZDA42195512", "from-indigo-200 via-blue-400 to-violet-700"],
      ["Neutrality Blameless", "neutralityblameless verse-n-music.art.mp3", "ISRC	QZNWW2301738", "from-zinc-300 via-gray-500 to-slate-700"],
      ["The Tender Hoax", "thetenderhoax verse-n-music.art.mp3", "ISRC QZHN82177416", "from-gray-500 via-rose-500 to-purple-600"],
      ["Tu Me Manques", "tumemanques verse-n-music.art.mp3", "ISRC QZTB22232915", "from-blue-100 via-pink-200 to-purple-400"],
    ],
  },
  {
    name: "💘 Desire / Seduction",
    tracks: [
      ["Seduction Untouched", "seductionuntouched verse-n-music.art.mp3", "ISRC	QZES72169104", "from-pink-500 via-fuchsia-600 to-rose-700"],
      ["Desired Untold", "desireduntold verse-n-music.art.mp3", "ISRC QZK6F2291435", "from-purple-700 via-pink-600 to-red-400"],
      ["Lust Foolish", "lustfoolish verse-n-music.art.mp3", "ISRC	QZK6P2130435", "from-fuchsia-700 via-red-500 to-amber-300"],
      ["Delicious", "delicious verse-n-music.art.mp3", "ISRC QZHNA2287027", "from-amber-200 via-red-300 to-fuchsia-600"],
      ["Pretentiously Driven", "pretentiouslydriven verse-n-music.art.mp3", "ISRC	QZHN62141941", "from-gray-800 via-fuchsia-700 to-black"],
    ],
  },
  {
    name: "🪞 Dream / Surreal",
    tracks: [
      ["True love, A Dream", "trueloveadream verse-n-music.art.mp3", "ISRC QZFZ42108359", "from-sky-100 via-indigo-300 to-purple-600"],
      ["The Wayward Muse", "waywardmuse verse-n-music.art.mp3", "ISRC	QZFZ72272531", "from-indigo-200 via-violet-400 to-rose-500"],
      ["The Diffident Love", "thediffidentlove verse-n-music.art.mp3", "ISRC QZTB42370083", "from-pink-100 via-violet-300 to-blue-600"],
      ["Tag Und Nacht", "tagundnacht verse-n-music.art.mp3", "ISRC QZDA72116107", "from-gray-200 via-fuchsia-500 to-gray-900"],
      ["The Formal Retreat", "formalretreat verse-n-music.art.mp3", "ISRC	QZK6L2280421", "from-slate-100 via-slate-400 to-blue-900"],
    ],
  },
  {
    name: "🧊 Isolation / Detachment",
    tracks: [
      ["Never Been Free", "neverbeenfree verse-n-music.art.mp3", "ISRC QZTAT2345869", "from-gray-300 via-gray-600 to-black"],
      ["Brewed To Refuse", "brewedtorefuse verse-n-music.art.mp3", "ISRC QZTAU2383477", "from-amber-100 via-orange-300 to-red-800"],
      ["I Plead Oddly Much", "ipleadoddlymuch verse-n-music.art.mp3", "ISRC	QZTB82381327", "from-blue-200 via-blue-500 to-indigo-800"],
      ["Linked The Beauty In", "linkedthebeautyin verse-n-music.art.mp3", "ISRC	QZNWR2391059", "from-fuchsia-200 via-pink-400 to-red-600"],
    ],
  },
  {
    name: "💔 Disillusion / Conflict",
    tracks: [
      ["Fallen Mixed", "fallenmixed verse-n-music.art.mp3", "ISRC	QZHN32118552", "from-orange-100 via-red-400 to-gray-700"],
      ["The Note", "thenote verse-n-music.art.mp3", "ISRC	QZNWZ2228251", "from-zinc-200 via-slate-400 to-slate-800"],
      ["The Rocking Fisher", "therockingfisher verse-n-music.art.mp3", "ISRC QZHNB2121070", "from-sky-300 via-blue-400 to-slate-600"],
      ["Gespielt Und Besessen", "gespieltundbesessen verse-n-music.art.mp3", "ISRC QZFYZ2137090", "from-pink-300 via-rose-600 to-amber-800"],
      ["Das Steinernes Herz", "dassteinernesherz verse-n-music.art.mp3", "ISRC QZFYZ2137089", "from-zinc-100 via-gray-500 to-black"],
    ],
  },
  {
    name: "🌹 Romantic Fragility",
    tracks: [
      ["Das Fremdes Leben", "dasfremdesleben verse-n-music.art.mp3", "ISRC QZFYZ2137091", "from-rose-100 via-gray-200 to-purple-300"],
      ["Das Zarte Gefühl", "daszartegefuhl verse-n-music.art.mp3", "ISRC QZFYZ2137092", "from-fuchsia-100 via-pink-300 to-pink-500"],
      ["Die Glasig Träume", "glasigtraume verse-n-music.art.mp3", "ISRC	QZFYZ2137093", "from-sky-100 via-blue-200 to-slate-300"],
      ["Sonsuz Aşk", "sonsuzask verse-n-music.art.mp3", "ISRC	QZK6K2138356", "from-rose-100 via-rose-300 to-pink-500"],
    ],
  },
];

let counter = 1;
const groups: Group[] = rawGrouped.map((group) => ({
  ...group,
  tracks: group.tracks.map(([title, audioFile, mood, gradient]) => ({
    id: audioFile.split(" ")[0], // ✅ correct placement
    title,
    mood,
    audioFile,
    gradient,
  })),
}));

export default function MusicPage() {
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const filteredGroups = groups
    .map((group) => ({
      ...group,
      tracks: group.tracks.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.tracks.length > 0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    const elements = document.querySelectorAll("[data-track]");
    elements.forEach((el) => obs.observe(el));

    observer.current = obs;
    return () => elements.forEach((el) => obs.unobserve(el));
  }, []);

  return (
    <>
      <div className="flex bg-[#1C1B33] text-white min-h-screen">
        <aside className="w-1/4 min-w-[220px] px-4 py-8 sticky top-0 h-screen overflow-y-auto bg-[#2A2740] text-sm font-serif border-r border-fuchsia-700/20">
          <h2 className="text-xl font-bold text-pink-300 mb-4">Songs</h2>
          <input
            type="text"
            placeholder="Search..."
            className="w-full mb-4 px-3 py-2 text-sm rounded-md bg-black/20 text-white border border-pink-500/30 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul className="space-y-1">
            {filteredGroups.map((group) => (
              <li key={group.name}>
                <p className="text-xs text-fuchsia-400 mt-3 uppercase tracking-widest font-semibold">
                  {group.name}
                </p>
                <ul className="ml-2 space-y-1">
                  {group.tracks.map((track) => (
                    <li key={track.id}>
                      <a
                        href={`#${track.id}`}
                        className={`block px-2 py-1 rounded transition ${
                          activeId === track.id
                            ? "text-fuchsia-300 bg-fuchsia-700/10 font-semibold"
                            : "text-white/70 hover:text-fuchsia-300"
                        }`}
                      >
                        {track.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 py-10 px-6 overflow-x-hidden">
          <h1 className="text-4xl text-center mb-10 font-serif text-pink-300">
            Music Catalog
          </h1>

          {filteredGroups.map((group) => (
            <section key={group.name} className="mb-16">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">
                {group.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {group.tracks.map((track) => (
                  <div
                  key={track.id}
                  id={track.id}
                  data-track
                  className="scroll-mt-24"
                >
                  <MusicCard {...track} />
                </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
      <Footer/>
    </>
  );
}
