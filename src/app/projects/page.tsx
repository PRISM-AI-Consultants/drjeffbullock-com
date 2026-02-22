import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProjectsGrid } from "./projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Companies, apps, agents, and creative projects by Dr. Jeff Bullock.",
};

export default function ProjectsPage() {
  const projects = getProjects();
  return (
    <>
      <PageHeader title="Projects" description="Companies, apps, agents, and creative projects - all shipped." />
      <Section>
        <Container size="xl">
          <ProjectsGrid projects={projects} />
        </Container>
      </Section>
    </>
  );
}
