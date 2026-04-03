"use client";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
};

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
