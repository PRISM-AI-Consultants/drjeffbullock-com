import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MediaItem } from "@/lib/types";
import { Music, Video, Mic, Headphones, Radio, ExternalLink } from "lucide-react";

const typeStyles: Record<string, { bg: string; icon: React.ReactNode }> = {
  "music-album": { bg: "from-amber-800 via-yellow-900 to-orange-950", icon: <Music className="h-8 w-8 text-amber-300/70" /> },
  "music-track": { bg: "from-orange-900 via-amber-900 to-yellow-900", icon: <Music className="h-8 w-8 text-orange-300/70" /> },
  video: { bg: "from-red-900 via-rose-900 to-pink-900", icon: <Video className="h-8 w-8 text-red-300/70" /> },
  podcast: { bg: "from-violet-900 via-purple-900 to-indigo-900", icon: <Mic className="h-8 w-8 text-violet-300/70" /> },
  audio: { bg: "from-sky-900 via-blue-900 to-indigo-900", icon: <Headphones className="h-8 w-8 text-sky-300/70" /> },
  talk: { bg: "from-teal-900 via-emerald-900 to-green-900", icon: <Radio className="h-8 w-8 text-teal-300/70" /> },
  interview: { bg: "from-indigo-900 via-blue-900 to-cyan-900", icon: <Mic className="h-8 w-8 text-indigo-300/70" /> },
};

const defaultStyle = { bg: "from-slate-800 via-slate-900 to-zinc-900", icon: <Music className="h-8 w-8 text-white/70" /> };

export function MediaCard({ item }: { item: MediaItem }) {
  const style = typeStyles[item.type] || defaultStyle;
  const hasLink = item.externalUrl || item.spotifyUrl;

  const content = (
    <Card>
      <CardHeader>
        {item.thumbnailUrl ? (
          <div className="aspect-video rounded-[var(--radius-md)] overflow-hidden relative mb-4">
            <Image
              src={item.thumbnailUrl}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className={`aspect-video rounded-[var(--radius-md)] mb-4 relative overflow-hidden bg-gradient-to-br ${style.bg} flex items-center justify-center`}>
            <div className="text-center">
              {style.icon}
              <p className="text-white/40 text-xs font-medium mt-2 uppercase tracking-wider">{item.type.replace("-", " ")}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]" />
          </div>
        )}
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="accent">{item.type.replace("-", " ")}</Badge>
          {item.duration && <span className="text-xs text-muted-foreground">{item.duration}</span>}
        </div>
        <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        {item.album && (
          <p className="mt-2 text-xs text-muted-foreground">From: {item.album}{item.trackNumber ? ` - Track ${item.trackNumber}` : ""}</p>
        )}
        {hasLink && (
          <p className="mt-3 text-xs text-accent flex items-center gap-1">
            {item.spotifyUrl ? "Listen on Spotify" : "Listen"} <ExternalLink className="h-3 w-3" />
          </p>
        )}
      </CardContent>
    </Card>
  );

  if (hasLink) {
    return (
      <a href={item.spotifyUrl || item.externalUrl} target="_blank" rel="noopener noreferrer" className="block hover:shadow-md transition-shadow rounded-[var(--radius-lg)]">
        {content}
      </a>
    );
  }

  return content;
}
