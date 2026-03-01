import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookCover } from "@/components/ui/book-cover";
import type { Book } from "@/lib/types";

export function BookCard({ book }: { book: Book }) {
  return (
    <Card href={`/books/${book.slug}`} variant={book.featured ? "featured" : "default"}>
      <CardHeader>
        <BookCover
          title={book.title}
          category={book.category}
          coverImage={book.coverImage}
          className="mb-4"
        />
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
