import { Container } from "./container";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-muted/30">
      <Container className="py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
