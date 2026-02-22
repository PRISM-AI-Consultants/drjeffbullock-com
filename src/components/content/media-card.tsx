import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MediaItem } from "@/lib/types";
import { Music, Video, Mic, Headphones, Radio } from "lucide-react";

const typeIcons: Record<string, React.ReactNode> = {
  "music-album": <Music className="h-8 w-8" />,
  "music-track": <Music className="h-8 w-8" />,
  video: <Video className="h-8 w-8" />,
  podcast: <Mic className="h-8 w-8" />,
  audio: <Headphones className="h-8 w-8" />,
  talk: <Radio className="h-8 w-8" />,
  interview: <Mic className="h-8 w-8" />,
};

export function MediaCard({ item }: { item: MediaItem }) {
  return (
    <Card>
      <CardHeader>
        <div className="aspect-video rounded-[var(--radius-md)] bg-muted mb-4 flex items-center justify-center text-muted-foreground/40">
          {typeIcons[item.type] || <Music className="h-8 w-8" />}
        </div>
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
      </CardContent>
    </Card>
  );
}
