"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "../ui/container";
import { ThemeToggle } from "../ui/theme-toggle";

type NavLink = { href: string; label: string; note?: string };
type NavGroup = { label: string; links: NavLink[] };
type NavItem = NavLink | NavGroup;

// Grouped so a first-time visitor makes one choice, not fourteen.
// Every page keeps its own address; only the menu changed.
const navItems: NavItem[] = [
  {
    label: "Explore",
    links: [
      { href: "/books", label: "Books", note: "Fiction and non-fiction" },
      { href: "/media", label: "Media", note: "Music, talks, video" },
      { href: "/games", label: "Games", note: "Playable in the browser" },
      { href: "/vr", label: "VR", note: "Immersive experiences" },
      { href: "/research", label: "Research", note: "Papers and frameworks" },
      { href: "/projects", label: "Projects", note: "Everything else we built" },
      { href: "/blog", label: "Blog", note: "Notes from the desk" },
    ],
  },
  {
    label: "Work With Us",
    links: [
      { href: "/prism", label: "PRISM AI Consultants", note: "AI built into your business" },
      { href: "/versassist", label: "VersAssist", note: "A trained team to run it" },
    ],
  },
  { href: "/speaking", label: "Speaking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const isGroup = (item: NavItem): item is NavGroup => "links" in item;

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

function DesktopGroup({ group, pathname }: { group: NavGroup; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Hover opens the menu on desktop. A click that lands right after a hover-open
  // must not toggle it shut again, or a mouse user sees nothing happen.
  const hoverOpenedAt = useRef(0);
  const active = group.links.some((l) => isActive(pathname, l.href));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        if (!open) hoverOpenedAt.current = Date.now();
        setOpen(true);
      }}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => {
          if (Date.now() - hoverOpenedAt.current < 600) return;
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors duration-150",
          active || open
            ? "text-foreground bg-muted"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        )}
      >
        {group.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} aria-hidden />
      </button>

      {open && (
        <div className="absolute left-0 top-full pt-2 z-50">
          <div className="w-72 border border-border bg-background shadow-lg rounded-[var(--radius-md)] p-2">
            {group.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-3 py-2.5 rounded-[var(--radius-md)] transition-colors",
                  isActive(pathname, link.href) ? "bg-muted" : "hover:bg-muted/60"
                )}
              >
                <span className="block text-sm font-semibold text-foreground">{link.label}</span>
                {link.note && (
                  <span className="block text-xs text-muted-foreground mt-0.5">{link.note}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container size="xl">
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-heading text-lg font-extrabold tracking-tight"
          >
            Dr. Jeff Bullock
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              isGroup(item) ? (
                <DesktopGroup key={item.label} group={item} pathname={pathname} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors duration-150",
                    isActive(pathname, item.href)
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://dailyimpact.drjeffbullock.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-[var(--radius-md)] hover:opacity-90 transition-opacity"
            >
              Give
            </a>
            <ThemeToggle />
          </div>

          <div className="flex lg:hidden items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Container>
            <div className="py-4 space-y-1">
              {navItems.map((item) =>
                isGroup(item) ? (
                  <div key={item.label} className="pt-2 pb-1">
                    <div className="eyebrow text-muted-foreground px-3 pb-1">{item.label}</div>
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block px-3 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors",
                          isActive(pathname, link.href)
                            ? "text-foreground bg-muted"
                            : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-3 py-2.5 text-sm font-medium rounded-[var(--radius-md)] transition-colors",
                      isActive(pathname, item.href)
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href="https://dailyimpact.drjeffbullock.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                className="mt-3 flex items-center gap-1.5 px-3 py-2.5 text-sm font-semibold rounded-[var(--radius-md)]"
              >
                Give with Daily Impact
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
