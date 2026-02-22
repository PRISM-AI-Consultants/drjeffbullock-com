import { cn } from "@/lib/utils";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  className,
  children,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        {
          default: "bg-muted text-muted-foreground",
          accent: "bg-accent/10 text-accent",
          outline: "border border-border text-muted-foreground",
        }[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
