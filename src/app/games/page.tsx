import type { Metadata } from "next";
import { getGames } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContentGrid } from "@/components/ui/content-grid";
import { GameCard } from "@/components/content/game-card";

export const metadata: Metadata = {
  title: "Games",
  description: "Playable games built by Dr. Jeff Bullock. 15 browser-based games including Pharmageddon, Max the Flying Chicken, and The Breadman.",
  openGraph: { images: ["/images/og-games.jpg"] },
};

export default function GamesPage() {
  const games = getGames();
  return (
    <>
      <PageHeader title="Games" description="Playable games - built, shipped, and ready to play." />
      <Section>
        <Container size="xl">
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Most games below are Progressive Web Apps (PWAs) - browser-based games you can install on your phone or desktop for offline play. No app store needed. Just open the link, tap &quot;Add to Home Screen,&quot; and play anywhere.
          </p>
          <a
            href="https://prismstudios.app/gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 mb-10 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            View the Game Art Gallery
            <span aria-hidden>→</span>
          </a>
          <ContentGrid columns={2}>
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </ContentGrid>
        </Container>
      </Section>
    </>
  );
}
