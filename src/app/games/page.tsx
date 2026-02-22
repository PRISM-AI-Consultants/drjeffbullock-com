import type { Metadata } from "next";
import { getGames } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContentGrid } from "@/components/ui/content-grid";
import { GameCard } from "@/components/content/game-card";

export const metadata: Metadata = {
  title: "Games",
  description: "Playable games built by Dr. Jeff Bullock.",
};

export default function GamesPage() {
  const games = getGames();
  return (
    <>
      <PageHeader title="Games" description="Playable games - built, shipped, and ready to play." />
      <Section>
        <Container size="xl">
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
