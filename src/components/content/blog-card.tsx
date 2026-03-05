import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/types";
import { Clock } from "lucide-react";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card href={`/blog/${post.slug}`} variant={post.featured ? "featured" : "default"}>
      <CardHeader>
        {post.coverImage && (
          <div className="aspect-[16/9] rounded-[var(--radius-md)] mb-4 relative overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <div className="flex items-center gap-2 mb-3">
          <time className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
          <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime}</span>
        </div>
        <h3 className="text-lg font-bold leading-tight">{post.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
