import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "featured";
}

export function Card({
  className,
  children,
  href,
  variant = "default",
}: CardProps) {
  const classes = cn(
    "bg-card text-card-foreground rounded-[var(--radius-lg)] border border-border",
    "transition-all duration-200 ease-out",
    {
      default: "shadow-sm hover:shadow-md",
      featured: "shadow-md hover:shadow-lg ring-1 ring-accent/10",
    }[variant],
    href && "cursor-pointer hover:-translate-y-0.5",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}

export function CardHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>;
}

export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
