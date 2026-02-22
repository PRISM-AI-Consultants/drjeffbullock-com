import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ResearchEntry } from "@/lib/types";

export function ResearchCard({ entry }: { entry: ResearchEntry }) {
  return (
    <Card href={`/research/${entry.slug}`} variant={entry.featured ? "featured" : "default"}>
      <CardHeader>
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
