import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            primary:
              "bg-primary text-primary-foreground hover:bg-secondary rounded-[var(--radius-md)]",
            secondary:
              "border border-border bg-transparent text-foreground hover:bg-muted rounded-[var(--radius-md)]",
            ghost:
              "bg-transparent text-foreground hover:bg-muted rounded-[var(--radius-md)]",
            accent:
              "bg-accent text-accent-foreground hover:opacity-90 rounded-[var(--radius-md)]",
          }[variant],
          {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-5 text-sm",
            lg: "h-12 px-8 text-base",
          }[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
