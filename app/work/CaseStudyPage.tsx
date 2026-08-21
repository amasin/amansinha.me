import type { CaseStudy } from "./case-studies";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const url = `https://amansinha.me/work/${study.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#case-study`,
        url,
        name: study.title,
        description: study.summary,
        author: { "@type": "Person", "@id": "https://amansinha.me/#person", name: "Aman Sinha" },
        about: study.demonstrates,
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://amansinha.me/" },
          { "@type": "ListItem", position: 2, name: "Selected work", item: "https://amansinha.me/#work" },
          { "@type": "ListItem", position: 3, name: study.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className={`study-page study-${study.accent}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#case-content">Skip to case study</a>
      <SiteHeader compact />
      <article id="case-content">
        <section className="study-hero shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#work">Work</Link><span aria-hidden="true">/</span><span aria-current="page">Case {study.index}</span>
          </nav>
          <div className="study-kicker"><span>{study.index}</span>{study.eyebrow}</div>
          <h1>{study.title}</h1>
          <p className="study-summary">{study.summary}</p>
          <div className="study-facts">
            <div><small>Role</small><strong>{study.role}</strong></div>
            <div><small>Timeline</small><strong>{study.timeline}</strong></div>
            <div><small>Scale</small><strong>{study.scale}</strong></div>
          </div>
          <p className="evidence-note">{study.evidenceNote}</p>
        </section>

        <section className="study-body shell">
          <div className="study-section"><span className="study-label">Who it served</span><p className="study-lead">{study.customer}</p></div>
          <div className="study-section"><span className="study-label">My contribution</span><p className="study-lead">{study.contribution}</p></div>
          <div className="study-section"><span className="study-label">The product problem</span><p className="study-lead">{study.problem}</p></div>
          <div className="study-section">
            <span className="study-label">How I approached it</span>
            <div className="approach-list">{study.approach.map((item, i) => <div key={item}><b>0{i + 1}</b><p>{item}</p></div>)}</div>
          </div>
          <div className="study-section">
            <span className="study-label">Key decisions</span>
            <div className="decision-list">{study.decisions.map((decision, i) => <article key={decision.title}><b>0{i + 1}</b><div><h2>{decision.title}</h2><p>{decision.detail}</p></div></article>)}</div>
          </div>
          <div className="study-section"><span className="study-label">The trade-off</span><p className="study-lead">{study.tradeoff}</p></div>
          <div className="study-section"><span className="study-label">How success was measured</span><p className="study-lead">{study.measurement}</p></div>
        </section>

        <section className="outcomes-band">
          <div className="shell"><span className="study-label">Selected outcomes</span><div className="outcomes-grid">{study.outcomes.map(item => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></div>
        </section>

        <section className="demonstrates shell" aria-labelledby="demonstrates-title">
          <span className="study-label">What this work demonstrates</span>
          <h2 id="demonstrates-title">The product signals behind the result.</h2>
          <ul>{study.demonstrates.map(item => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="reflection shell"><span className="study-label">What I learned</span><blockquote>“{study.reflection}”</blockquote><div className="reflection-actions"><Link href="/#work">Explore another case study →</Link><Link href="/resume">View résumé →</Link><a href="mailto:aman.ismu@gmail.com?subject=Your%20product%20portfolio">Discuss this work →</a></div></section>
      </article>
      <SiteFooter />
    </main>
  );
}

