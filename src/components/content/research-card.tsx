import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ResearchEntry } from "@/lib/types";
import { FlaskConical, BookOpen, FileText, Lightbulb } from "lucide-react";

const categoryStyles: Record<string, { bg: string; icon: React.ReactNode }> = {
  economics: { bg: "from-emerald-900 via-green-900 to-teal-900", icon: <Lightbulb className="h-8 w-8 text-emerald-300/70" /> },
  science: { bg: "from-blue-900 via-indigo-900 to-violet-900", icon: <FlaskConical className="h-8 w-8 text-blue-300/70" /> },
  technology: { bg: "from-cyan-900 via-teal-900 to-emerald-900", icon: <FileText className="h-8 w-8 text-cyan-300/70" /> },
  education: { bg: "from-amber-900 via-orange-900 to-red-900", icon: <BookOpen className="h-8 w-8 text-amber-300/70" /> },
  cognition: { bg: "from-violet-900 via-purple-900 to-fuchsia-900", icon: <Lightbulb className="h-8 w-8 text-violet-300/70" /> },
};

const defaultStyle = { bg: "from-slate-800 via-slate-900 to-zinc-900", icon: <FlaskConical className="h-8 w-8 text-white/70" /> };

export function ResearchCard({ entry }: { entry: ResearchEntry }) {
  const style = categoryStyles[entry.category] || defaultStyle;

  return (
    <Card href={`/research/${entry.slug}`} variant={entry.featured ? "featured" : "default"}>
      <CardHeader>
        <div className="aspect-[16/9] rounded-[var(--radius-md)] mb-4 relative overflow-hidden">
          {entry.coverImage ? (
            <Image
              src={entry.coverImage}
              alt={entry.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${style.bg} flex items-center justify-center`}>
              <div className="text-center">
                {style.icon}
                <p className="text-white/40 text-xs font-medium mt-2 uppercase tracking-wider">{entry.category}</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]" />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="accent">{entry.type.replace("-", " ")}</Badge>
          <Badge variant="outline">{entry.category}</Badge>
        </div>
        <h3 className="text-lg font-bold leading-tight">{entry.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{entry.description}</p>
        <p className="mt-3 text-xs text-muted-foreground">{new Date(entry.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}</p>
      </CardContent>
    </Card>
  );
}
