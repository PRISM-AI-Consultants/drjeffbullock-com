import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { MediaLibrary } from "./media-library";
import { mediaItems } from "@/data/media";
import { Music } from "lucide-react";

export const metadata: Metadata = {
  title: "Media",
  description: "Talks, interviews, podcasts, music, and video by Dr. Jeff Bullock.",
};

export default function MediaPage() {
  return (
    <>
      <PageHeader title="Media" description="Talks, interviews, podcasts, music, and video." />

      {/* Featured: Mansa Musa Album with Spotify Embed */}
      <Section>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <Badge variant="accent" className="mb-4">Featured Album</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">Mansa Musa</h2>
              <p className="text-muted-foreground mb-4">
                A 19-track concept album exploring the legacy of Mansa Musa - the richest person in history - through original AI-generated music. Tracks span the journey from Timbuktu to Mecca and back.
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Music className="h-4 w-4" />
                <span>19 tracks</span>
                <span className="text-border">|</span>
                <span>Released January 2026</span>
              </div>
              <a
                href="https://open.spotify.com/album/1iOSi2A5g4LUjSkvniwl4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#1DB954] text-white font-semibold rounded-full text-sm hover:bg-[#1ed760] transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                Listen on Spotify
              </a>
            </div>
            <div className="rounded-[var(--radius-lg)] overflow-hidden">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/album/1iOSi2A5g4LUjSkvniwl4u?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* All Media */}
      <Section className="bg-muted/30">
        <Container size="xl">
          <h2 className="text-2xl font-extrabold tracking-tight mb-8">All Media</h2>
          <MediaLibrary items={mediaItems} />
        </Container>
      </Section>
    </>
  );
}
