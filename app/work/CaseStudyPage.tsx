import type { CaseStudy } from "./case-studies";
import Link from "next/link";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <main className={`study-page study-${study.accent}`}>
      <header className="site-header shell study-nav">
        <Link className="wordmark" href="/" aria-label="Aman Sinha, home">AS<span className="wordmark-dot">.</span></Link>
        <Link className="back-link" href="/#work">← All work</Link>
        <Link className="header-cta" href="/resume">Résumé ↗</Link>
      </header>
      <article>
        <section className="study-hero shell">
          <div className="study-kicker"><span>{study.index}</span>{study.eyebrow}</div>
          <h1>{study.title}</h1>
          <p className="study-summary">{study.summary}</p>
          <div className="study-facts">
            <div><small>Role</small><strong>{study.role}</strong></div>
            <div><small>Timeline</small><strong>{study.timeline}</strong></div>
            <div><small>Scale</small><strong>{study.scale}</strong></div>
          </div>
        </section>
        <section className="study-body shell">
          <div className="study-section"><span className="study-label">The problem</span><p className="study-lead">{study.problem}</p></div>
          <div className="study-section"><span className="study-label">The approach</span><div className="approach-list">{study.approach.map((item, i) => <div key={item}><b>0{i + 1}</b><p>{item}</p></div>)}</div></div>
        </section>
        <section className="outcomes-band"><div className="shell"><span className="study-label">Selected outcomes</span><div className="outcomes-grid">{study.outcomes.map(item => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></div></section>
        <section className="reflection shell"><span className="study-label">What I learned</span><blockquote>“{study.reflection}”</blockquote><Link href="/#work">Back to selected work →</Link></section>
      </article>
    </main>
  );
}
