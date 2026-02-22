import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Collection } from "@/lib/types";
import { ArrowRight } from "lucide-react";

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <div className="flex-shrink-0 w-80 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-200">
      <h3 className="text-lg font-bold">{collection.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{collection.description}</p>
      <ul className="mt-4 space-y-2">
        {collection.items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="flex items-center justify-between group py-1.5">
              <span className="text-sm group-hover:text-accent transition-colors">{item.title}</span>
              <Badge variant="outline">{item.type}</Badge>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
