import { GlassCard } from "@/components/ui/GlassCard";

export type ProductVideo = {
  title: string;
  label: string;
  description: string;
  youtubeId?: string;
};

export default function ProductVideos({ videos }: { videos: ProductVideo[] }) {
  const visibleVideos = videos.filter((video) => video.youtubeId);

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
        {visibleVideos.map((video) => (
          <GlassCard key={video.title} className="h-full overflow-hidden p-0">
            <div className="aspect-video w-full overflow-hidden rounded-t-3xl bg-black/30">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="text-sm font-medium text-[var(--accent)]">{video.label}</div>
              <h3 className="mt-2 text-xl font-semibold">{video.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{video.description}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
