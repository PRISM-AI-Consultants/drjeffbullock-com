import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Book } from "@/lib/types";

export function BookCard({ book }: { book: Book }) {
  return (
    <Card href={`/books/${book.slug}`} variant={book.featured ? "featured" : "default"}>
      <CardHeader>
        <div className="aspect-[3/4] rounded-[var(--radius-md)] bg-muted mb-4 flex items-center justify-center">
          <span className="text-4xl text-muted-foreground/30">📖</span>
        </div>
        <div className="flex gap-2 mb-2">
          <Badge>{book.category}</Badge>
          {book.formats.map((f) => (
            <Badge key={f} variant="outline">{f}</Badge>
          ))}
        </div>
        <h3 className="text-lg font-bold leading-tight">{book.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>
      </CardContent>
    </Card>
  );
}
