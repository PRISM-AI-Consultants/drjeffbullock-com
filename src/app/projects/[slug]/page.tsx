import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjects, getProject } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MDXContent } from "@/components/content/mdx-content";
import { ArrowLeft, ExternalLink, Music } from "lucide-react";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProject(slug);
    if (!project) return { title: "Not Found" };
    return {
      title: project.title,
      description: project.description,
      alternates: {
        canonical: `https://drjeffbullock.com/projects/${slug}`,
      },
    };
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <Section className="pt-8">
      <Container size="md">
        <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>

        {project.coverImage && (
          <div className="aspect-[16/9] rounded-[var(--radius-lg)] mb-8 relative overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="accent">{project.type}</Badge>
          <Badge variant={project.status === "active" ? "default" : "outline"}>{project.status}</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>

        {(project.url || project.spotifyUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Button size="md" variant="secondary">
                  Visit Project <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </a>
            )}
            {project.spotifyUrl && (
              <a href={project.spotifyUrl} target="_blank" rel="noopener noreferrer">
                <Button size="md" variant="secondary">
                  <Music className="h-4 w-4 mr-2" /> Listen on Spotify
                </Button>
              </a>
            )}
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-border">
          <MDXContent source={project.content} />
        </div>
      </Container>
    </Section>
  );
}
