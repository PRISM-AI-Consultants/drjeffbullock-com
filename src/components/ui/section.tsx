import { cn } from "@/lib/utils";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export function Section({ className, children, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </section>
  );
}
