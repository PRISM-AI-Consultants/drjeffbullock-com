import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBooks, getBook } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookCover } from "@/components/ui/book-cover";
import { MDXContent } from "@/components/content/mdx-content";
import { ArrowLeft, ShoppingCart, Download, Headphones, Smartphone } from "lucide-react";

export function generateStaticParams() {
  return getBooks().map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const book = getBook(slug);
    if (!book) return { title: "Not Found" };
    return { title: book.title, description: book.description };
  });
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const allBooks = getBooks().filter((b) => b.slug !== slug).slice(0, 3);

  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: { "@type": "Person", name: "Dr. Jeff Bullock" },
    ...(book.publishDate && { datePublished: book.publishDate }),
    genre: book.genres?.join(", ") || book.category,
    ...(book.formats?.length && { bookFormat: book.formats.includes("ebook") ? "EBook" : "Paperback" }),
    description: book.description,
    inLanguage: "en",
    url: `https://drjeffbullock.com/books/${book.slug}`,
    ...(book.purchaseUrl && {
      offers: {
        "@type": "Offer",
        url: book.purchaseUrl,
        availability: "https://schema.org/InStock",
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <Section className="pt-8">
        <Container size="md">
          <Link href="/books" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Books
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Book Cover */}
            <div className="md:col-span-1">
              <BookCover
                title={book.title}
                category={book.category}
                coverImage={book.coverImage}
                className="w-full max-w-[280px] mx-auto md:mx-0 shadow-lg"
              />
            </div>

            {/* Book Info */}
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="accent">{book.category}</Badge>
                {book.formats.map((f) => (
                  <Badge key={f} variant="outline">{f}</Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{book.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{book.description}</p>

              {book.publishDate && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Published {new Date(book.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                </p>
              )}

              {(book.purchaseUrl || book.downloadUrl || book.audioUrl || book.companionAppUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {book.purchaseUrl && (
                    <a href={book.purchaseUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg">
                        <ShoppingCart className="h-4 w-4 mr-2" /> Get This Book
                      </Button>
                    </a>
                  )}
                  {book.companionAppUrl && (
                    <a href={book.companionAppUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="secondary">
                        <Smartphone className="h-4 w-4 mr-2" /> {book.companionAppName ? `Try ${book.companionAppName}` : "Companion App"}
                      </Button>
                    </a>
                  )}
                  {book.downloadUrl && (
                    <a href={book.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="secondary">
                        <Download className="h-4 w-4 mr-2" /> Download Free
                      </Button>
                    </a>
                  )}
                  {book.audioUrl && (
                    <a href={book.audioUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="secondary">
                        <Headphones className="h-4 w-4 mr-2" /> Listen to Audiobook
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <MDXContent source={book.content} />
          </div>
        </Container>
      </Section>

      {allBooks.length > 0 && (
        <Section className="bg-muted/30">
          <Container size="xl">
            <h2 className="text-2xl font-bold mb-6">More Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {allBooks.map((b) => (
                <Link key={b.slug} href={`/books/${b.slug}`} className="group p-4 rounded-[var(--radius-lg)] border border-border bg-card hover:shadow-sm transition-all">
                  <BookCover
                    title={b.title}
                    category={b.category}
                    coverImage={b.coverImage}
                    className="mb-3 group-hover:shadow-md transition-shadow"
                  />
                  <Badge className="mb-2">{b.category}</Badge>
                  <h3 className="font-bold">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{b.description}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
