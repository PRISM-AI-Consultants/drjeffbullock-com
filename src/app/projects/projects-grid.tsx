"use client";

import { useState, useMemo } from "react";
import { TagFilter } from "@/components/ui/tag-filter";
import { ContentGrid } from "@/components/ui/content-grid";
import { ProjectCard } from "@/components/content/project-card";
import type { Project } from "@/lib/types";

const types = ["All", "Company", "Agent", "Platform", "Music", "Sitcom"];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.type === activeTag.toLowerCase());
  }, [projects, activeTag]);

  return (
    <div>
      <div className="mb-8">
        <TagFilter tags={types} active={activeTag} onChange={setActiveTag} />
      </div>
      <ContentGrid columns={3}>
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ContentGrid>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No projects found.</p>
      )}
    </div>
  );
}
