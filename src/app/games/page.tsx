import type { Metadata } from "next";
import { getGames } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContentGrid } from "@/components/ui/content-grid";
import { GameCard } from "@/components/content/game-card";

export const metadata: Metadata = {
  title: "Games",
  description: "Playable games built by Dr. Jeff Bullock. 19 browser-based games including The Architect, Counterpunch, Pharmageddon, and The Breadman.",
  openGraph: { images: ["/images/og-games.jpg"] },
};

export default function GamesPage() {
  const games = getGames();
  return (
    <>
      <PageHeader title="Games" description="Playable games - built, shipped, and ready to play." />
      <Section>
        <Container size="xl">
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Most games below are Progressive Web Apps (PWAs) - browser-based games you can install on your phone or desktop for offline play. No app store needed. Just open the link, tap &quot;Add to Home Screen,&quot; and play anywhere.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Every game lives on{" "}
            <a href="https://prismstudios.app" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground underline underline-offset-4">
              PRISM Studios
            </a>
            , the arcade where new releases land first. The films and music videos are there too, under{" "}
            <a href="https://prismstudios.app/watch/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground underline underline-offset-4">
              Watch
            </a>
            .
          </p>
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
