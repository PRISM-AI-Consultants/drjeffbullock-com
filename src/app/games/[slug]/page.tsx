import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getGames, getGame } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MDXContent } from "@/components/content/mdx-content";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return getGames().map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const game = getGame(slug);
    if (!game) return { title: "Not Found" };
    return { title: game.title, description: game.description };
  });
}

export default async function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  return (
    <Section className="pt-8">
      <Container size="md">
        <Link href="/games" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Games
        </Link>

        {game.coverImage && (
          <div className="aspect-[16/9] rounded-[var(--radius-lg)] mb-8 relative overflow-hidden">
            <Image
              src={game.coverImage}
              alt={game.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="accent">{game.genre}</Badge>
          {game.platforms.map((p) => (
            <Badge key={p} variant="outline">{p}</Badge>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{game.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{game.description}</p>

        {game.playUrl ? (
          <div className="mt-6">
            <a href={game.playUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="accent">
                Play Now <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>
        ) : (
          <div className="mt-6">
            <Badge variant="outline" className="text-sm px-4 py-2">Coming Soon</Badge>
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-border">
          <MDXContent source={game.content} />
        </div>

        {/* Cross-sell */}
        <div className="mt-12 p-6 rounded-[var(--radius-lg)] border border-border bg-muted/50 text-center">
          <p className="text-sm font-semibold mb-1">Built by Dr. Jeff Bullock with AI</p>
          <p className="text-sm text-muted-foreground mb-4">
            Want to see how AI can build tools like this for your business?
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://calendly.com/prismaiconsultants/introductory-call" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-[var(--radius-md)] text-sm hover:bg-accent/90 transition-colors">
              Book a Call
            </a>
            <Link href="/games" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-[var(--radius-md)] text-sm font-medium hover:bg-muted/50 transition-colors">
              More Games
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
