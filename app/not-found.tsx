import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <SiteHeader compact />
      <section className="not-found shell">
        <span>404 · Wrong turn, useful next step</span>
        <h1>This page is not on the roadmap.</h1>
        <p>The link may have changed. The product work, notes, and résumé are still easy to reach.</p>
        <div><Link className="button button-primary" href="/">Return home →</Link><Link className="button button-secondary" href="/#work">Explore selected work →</Link></div>
      </section>
      <SiteFooter />
    </main>
  );
}

