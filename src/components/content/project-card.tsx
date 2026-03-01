import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";
import { ExternalLink, Building2, Bot, Gamepad2, Music, Tv, FlaskConical, Code, Layers } from "lucide-react";

const typeStyles: Record<string, { bg: string; icon: React.ReactNode }> = {
  company: { bg: "from-blue-900 via-indigo-900 to-violet-900", icon: <Building2 className="h-8 w-8 text-white/70" /> },
  agent: { bg: "from-cyan-900 via-teal-900 to-emerald-900", icon: <Bot className="h-8 w-8 text-white/70" /> },
  platform: { bg: "from-indigo-900 via-purple-900 to-fuchsia-900", icon: <Layers className="h-8 w-8 text-white/70" /> },
  app: { bg: "from-emerald-900 via-green-900 to-teal-900", icon: <Code className="h-8 w-8 text-white/70" /> },
  game: { bg: "from-red-900 via-orange-900 to-amber-900", icon: <Gamepad2 className="h-8 w-8 text-white/70" /> },
  "game-app": { bg: "from-lime-900 via-emerald-900 to-teal-900", icon: <Gamepad2 className="h-8 w-8 text-white/70" /> },
  music: { bg: "from-amber-800 via-yellow-900 to-orange-950", icon: <Music className="h-8 w-8 text-white/70" /> },
  sitcom: { bg: "from-pink-900 via-rose-900 to-red-900", icon: <Tv className="h-8 w-8 text-white/70" /> },
  experiment: { bg: "from-violet-900 via-purple-900 to-indigo-900", icon: <FlaskConical className="h-8 w-8 text-white/70" /> },
  framework: { bg: "from-sky-900 via-blue-900 to-indigo-900", icon: <FlaskConical className="h-8 w-8 text-white/70" /> },
};

const defaultStyle = { bg: "from-slate-800 via-slate-900 to-zinc-900", icon: <Code className="h-8 w-8 text-white/70" /> };

export function ProjectCard({ project }: { project: Project }) {
  const style = typeStyles[project.type] || defaultStyle;

  return (
    <Card href={`/projects/${project.slug}`} variant={project.featured ? "featured" : "default"}>
      <CardHeader>
        {project.coverImage ? (
          <div className="aspect-[16/9] rounded-[var(--radius-md)] overflow-hidden relative mb-4">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className={`aspect-[16/9] rounded-[var(--radius-md)] mb-4 relative overflow-hidden bg-gradient-to-br ${style.bg} flex items-center justify-center`}>
            <div className="text-center">
              {style.icon}
              <p className="text-white/40 text-xs font-medium mt-2 uppercase tracking-wider">{project.type}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]" />
          </div>
        )}
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="accent">{project.type}</Badge>
          <Badge variant={project.status === "active" ? "default" : "outline"}>{project.status}</Badge>
        </div>
        <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        {project.url && (
          <p className="mt-3 text-xs text-accent flex items-center gap-1">
            Visit <ExternalLink className="h-3 w-3" />
          </p>
        )}
      </CardContent>
    </Card>
  );
}
