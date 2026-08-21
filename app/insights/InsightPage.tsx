import Link from "next/link";
import type { Insight } from "./insights";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export function InsightPage({ insight }: { insight: Insight }) {
  const url = `https://amansinha.me/insights/${insight.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "@id": `${url}#article`, headline: insight.title, description: insight.summary, datePublished: insight.published, dateModified: insight.published, mainEntityOfPage: url, author: { "@type": "Person", "@id": "https://amansinha.me/#person", name: "Aman Sinha" }, publisher: { "@id": "https://amansinha.me/#person" }, articleSection: insight.category, inLanguage: "en-IN" },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://amansinha.me/" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://amansinha.me/insights" },
        { "@type": "ListItem", position: 3, name: insight.title, item: url },
      ] },
    ],
  };
  return (
    <main className="insight-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#article-content">Skip to article</a>
      <SiteHeader compact />
      <article id="article-content">
        <header className="article-hero shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/insights">Insights</Link><span aria-hidden="true">/</span><span aria-current="page">{insight.category}</span></nav>
          <div className="article-meta"><span>{insight.category}</span><time dateTime={insight.published}>21 August 2026</time><span>{insight.readTime}</span></div>
          <h1>{insight.title}</h1>
          <p>{insight.standfirst}</p>
        </header>
        <div className="article-layout shell">
          <aside><span>Written by</span><strong>Aman Sinha</strong><p>Senior product and platform leader in Bengaluru.</p><a href="/resume">View résumé →</a></aside>
          <div className="article-body">
            {insight.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}
            <blockquote><span>The takeaway</span>{insight.takeaway}</blockquote>
          </div>
        </div>
        <section className="article-cta shell"><p>Building a complex platform or internal product?</p><h2>Let&apos;s compare product notes.</h2><div><a className="button button-primary" href="mailto:aman.ismu@gmail.com?subject=Your%20product%20note">Start a conversation ↗</a><Link className="button button-secondary" href="/insights">Read another note →</Link></div></section>
      </article>
      <SiteFooter />
    </main>
  );
}

