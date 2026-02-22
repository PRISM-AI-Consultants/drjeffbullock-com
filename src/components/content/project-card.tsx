import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card href={`/projects/${project.slug}`} variant={project.featured ? "featured" : "default"}>
      <CardHeader>
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
