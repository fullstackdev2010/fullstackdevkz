"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

export type ProductVideo = {
  title: string;
  label: string;
  description: string;
  youtubeId?: string;
};

function getYouTubeId(value?: string) {
  if (!value) {
    return "";
  }

  const input = value.trim();
  const patterns = [
    /youtu\.be\/([A-Za-z0-9_-]{6,})/,
    /youtube\.com\/watch\?v=([A-Za-z0-9_-]{6,})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/,
    /youtube\.com\/shorts\/([A-Za-z0-9_-]{6,})/,
  ];

  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return input;
}

export default function ProductVideos({ videos }: { videos: ProductVideo[] }) {
  const [activeVideos, setActiveVideos] = useState<Record<string, boolean>>({});
  const visibleVideos = videos
    .map((video) => ({ ...video, youtubeId: getYouTubeId(video.youtubeId) }))
    .filter((video) => video.youtubeId);

  if (visibleVideos.length === 0) {
    return null;
  }

  return (
    <section className="mt-14">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">Watch The App</h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          See the product in action, then watch the lighter explainer version.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {visibleVideos.map((video) => {
          const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
          const isActive = activeVideos[video.youtubeId];

          return (
            <GlassCard key={video.title} className="h-full overflow-hidden p-0">
              <div className="aspect-video w-full overflow-hidden rounded-t-3xl bg-black/30">
                {isActive ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="group relative block h-full w-full overflow-hidden text-left"
                    onClick={() =>
                      setActiveVideos((current) => ({
                        ...current,
                        [video.youtubeId]: true,
                      }))
                    }
                    aria-label={`Play ${video.title}`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt=""
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 text-sm font-semibold shadow-2xl backdrop-blur">
                        Play
                      </div>
                    </div>
                  </button>
                )}
              </div>
              <div className="p-5">
                <div className="text-sm font-medium text-[var(--accent)]">{video.label}</div>
                <h3 className="mt-2 text-xl font-semibold">{video.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{video.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveVideos((current) => ({
                        ...current,
                        [video.youtubeId]: true,
                      }))
                    }
                    className="inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
                  >
                    Play here
                  </button>
                  <a
                    href={watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
