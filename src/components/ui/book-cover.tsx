import Image from "next/image";
import { cn } from "@/lib/utils";

interface BookCoverProps {
  title: string;
  category: string;
  coverImage?: string;
  className?: string;
}

const categoryColors: Record<string, { bg: string; badge: string }> = {
  fiction: { bg: "from-stone-800 via-stone-900 to-stone-950", badge: "bg-amber-500/20 text-amber-300" },
  "non-fiction": { bg: "from-slate-800 via-slate-900 to-slate-950", badge: "bg-sky-500/20 text-sky-300" },
  "short-story": { bg: "from-zinc-800 via-zinc-900 to-zinc-950", badge: "bg-emerald-500/20 text-emerald-300" },
  novel: { bg: "from-neutral-800 via-neutral-900 to-neutral-950", badge: "bg-violet-500/20 text-violet-300" },
};

export function BookCover({ title, category, coverImage, className }: BookCoverProps) {
  if (coverImage) {
    return (
      <div className={cn("aspect-[3/4] rounded-[var(--radius-md)] overflow-hidden relative", className)}>
        <Image
          src={coverImage}
          alt={`${title} book cover`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
    );
  }

  const colors = categoryColors[category] || categoryColors.fiction;

  return (
    <div
      className={cn(
        "aspect-[3/4] rounded-[var(--radius-md)] overflow-hidden relative",
        "bg-gradient-to-br",
        colors.bg,
        className
      )}
    >
      {/* Subtle accent stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Spine effect */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-white/5" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Title area */}
        <div className="mt-6">
          <div className="w-8 h-px bg-accent/50 mb-4" />
          <h4 className="font-heading text-white text-base font-bold leading-tight tracking-tight">
            {title}
          </h4>
        </div>

        {/* Author + category */}
        <div>
          <p className="text-white/50 text-xs font-medium tracking-wide uppercase mb-2">
            Dr. Jeff Bullock
          </p>
          <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium", colors.badge)}>
            {category}
          </span>
        </div>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]" />
    </div>
  );
}
