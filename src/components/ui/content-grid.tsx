import { cn } from "@/lib/utils";

interface ContentGridProps {
  className?: string;
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export function ContentGrid({
  className,
  children,
  columns = 3,
}: ContentGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        {
          2: "grid-cols-1 md:grid-cols-2",
          3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        }[columns],
        className
      )}
    >
      {children}
    </div>
  );
}
