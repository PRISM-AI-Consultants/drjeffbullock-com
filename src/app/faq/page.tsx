import { getFacts } from "@/lib/facts";
import FAQClient from "./faq-client";
import { FAQ_TEMPLATE } from "./faq-data";

// Counts come from builds.drjeffbullock.com/facts.json (never typed). check_facts.py alarms on drift.
export default async function FAQPage() {
  const f = await getFacts();
  const fill = (t: string) =>
    t.replaceAll("{games_live}", f.games_live).replaceAll("{books_published}", f.books_published);
  const faqs = FAQ_TEMPLATE.map((q) => ({ question: fill(q.question), answer: fill(q.answer) }));
  return <FAQClient faqs={faqs} />;
}
