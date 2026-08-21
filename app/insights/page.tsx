import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { insights } from "./insights";

export const metadata: Metadata = {
  title: "Product Management Insights",
  description: "Practical product management notes from Aman Sinha on platform strategy, internal-product adoption, AI automation, and enterprise transformation.",
  alternates: { canonical: "https://amansinha.me/insights" },
  openGraph: { type: "website", url: "https://amansinha.me/insights", title: "Product Management Insights | Aman Sinha", description: "Notes on platform strategy, internal products, AI automation, and enterprise transformation.", images: [] },
  twitter: { title: "Product Management Insights | Aman Sinha", description: "Notes on platform strategy, internal products, AI automation, and enterprise transformation.", images: [] },
};

export default function InsightsPage() {
  return (
    <main className="insights-index">
      <a className="skip-link" href="#notes">Skip to product notes</a>
      <SiteHeader compact />
      <section className="insights-hero shell">
        <span className="eyebrow">Notes from the field</span>
        <h1>Product thinking for the <em>messy middle.</em></h1>
        <p>Practical notes on building enterprise platforms and internal products where customer value, technology, risk, adoption, and economics must work together.</p>
      </section>
      <section className="notes-list shell" id="notes">
        {Object.values(insights).map((insight, index) => (
          <article key={insight.slug}>
            <span className="note-number">0{index + 1}</span>
            <div><span className="note-meta">{insight.category} · {insight.readTime}</span><h2>{insight.title}</h2><p>{insight.summary}</p></div>
            <Link href={`/insights/${insight.slug}`} aria-label={`Read ${insight.title}`}>Read →</Link>
          </article>
        ))}
      </section>
      <section className="insights-promise shell"><span>THE EDITORIAL PROMISE</span><p>No recycled frameworks for their own sake. Each note should help a product leader make a clearer decision on Monday.</p></section>
      <SiteFooter />
    </main>
  );
}

