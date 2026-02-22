import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Game } from "@/lib/types";
import { Gamepad2 } from "lucide-react";

export function GameCard({ game }: { game: Game }) {
  return (
    <Card href={`/games/${game.slug}`} variant={game.featured ? "featured" : "default"}>
      <CardHeader>
        <div className="aspect-video rounded-[var(--radius-md)] bg-muted mb-4 flex items-center justify-center text-muted-foreground/40">
          <Gamepad2 className="h-10 w-10" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="accent">{game.genre}</Badge>
          {game.platforms.map((p) => (
            <Badge key={p} variant="outline">{p}</Badge>
          ))}
        </div>
        <h3 className="text-lg font-bold leading-tight">{game.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{game.description}</p>
      </CardContent>
    </Card>
  );
}
