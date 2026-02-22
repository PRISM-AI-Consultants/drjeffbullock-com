import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MediaLibrary } from "./media-library";
import { mediaItems } from "@/data/media";

export const metadata: Metadata = {
  title: "Media",
  description: "Talks, interviews, podcasts, music, and video by Dr. Jeff Bullock.",
};

export default function MediaPage() {
  return (
    <>
      <PageHeader title="Media" description="Talks, interviews, podcasts, music, and video." />
      <Section>
        <Container size="xl">
          <MediaLibrary items={mediaItems} />
        </Container>
      </Section>
    </>
  );
}
