import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Game } from "@/lib/types";
import { Gamepad2, Swords, Puzzle, Zap, Target, Dices, Globe } from "lucide-react";

const genreStyles: Record<string, { bg: string; icon: React.ReactNode }> = {
  "tower-defense": { bg: "from-red-900 via-orange-900 to-amber-900", icon: <Target className="h-10 w-10 text-white/70" /> },
  "roguelike": { bg: "from-violet-900 via-purple-900 to-indigo-900", icon: <Swords className="h-10 w-10 text-white/70" /> },
  "bullet-hell": { bg: "from-rose-900 via-red-900 to-orange-900", icon: <Zap className="h-10 w-10 text-white/70" /> },
  "puzzle": { bg: "from-teal-900 via-cyan-900 to-blue-900", icon: <Puzzle className="h-10 w-10 text-white/70" /> },
  "educational": { bg: "from-emerald-900 via-green-900 to-teal-900", icon: <Globe className="h-10 w-10 text-white/70" /> },
  "networking": { bg: "from-blue-900 via-indigo-900 to-violet-900", icon: <Dices className="h-10 w-10 text-white/70" /> },
  "simulation": { bg: "from-sky-900 via-blue-900 to-indigo-900", icon: <Dices className="h-10 w-10 text-white/70" /> },
  "3d-runner": { bg: "from-lime-900 via-emerald-900 to-teal-900", icon: <Zap className="h-10 w-10 text-white/70" /> },
  "rhythm": { bg: "from-pink-900 via-fuchsia-900 to-purple-900", icon: <Dices className="h-10 w-10 text-white/70" /> },
};

const defaultStyle = { bg: "from-slate-800 via-slate-900 to-zinc-900", icon: <Gamepad2 className="h-10 w-10 text-white/70" /> };

export function GameCard({ game }: { game: Game }) {
  const style = genreStyles[game.genre.toLowerCase().replace(/\s+/g, "-")] || defaultStyle;

  return (
    <Card href={`/games/${game.slug}`} variant={game.featured ? "featured" : "default"}>
      <CardHeader>
        {game.coverImage ? (
          <div className="aspect-video rounded-[var(--radius-md)] overflow-hidden relative mb-4">
            <Image
              src={game.coverImage}
              alt={`${game.title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className={`aspect-video rounded-[var(--radius-md)] mb-4 relative overflow-hidden bg-gradient-to-br ${style.bg} flex items-center justify-center`}>
            <div className="text-center">
              {style.icon}
              <p className="text-white/40 text-xs font-medium mt-2 uppercase tracking-wider">{game.genre}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]" />
          </div>
        )}
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
