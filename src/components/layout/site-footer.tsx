import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container } from "../ui/container";

const footerLinks = {
  library: [
    { href: "/books", label: "Books" },
    { href: "/research", label: "Research" },
    { href: "/media", label: "Media" },
  ],
  create: [
    { href: "/games", label: "Games" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ],
  connect: [
    { href: "/speaking", label: "Speaking" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container size="xl" className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-heading text-lg font-extrabold tracking-tight">
              Dr. Jeff Bullock
            </p>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              AI Orchestrator. Systems Integrator. Author. Builder.
              <br />
              Proving what one person can build with AI.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/drjeffbullock"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                LinkedIn <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.youtube.com/@drjeffbullock"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                YouTube <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://open.spotify.com/album/1iOSi2A5g4LUjSkvniwl4u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                Spotify <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.prismaiconsultants.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                PRISM <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.versassists.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                VersAssist <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.skool.com/prism-ai-university"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                Skool <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Library</h4>
            <ul className="space-y-2.5">
              {footerLinks.library.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Create</h4>
            <ul className="space-y-2.5">
              {footerLinks.create.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2.5">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Dr. Jeff Bullock. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Lehigh Valley, Pennsylvania. Serving clients nationwide.
          </p>
        </div>
      </Container>
    </footer>
  );
}
