import Link from "next/link";

const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={`site-header shell${compact ? " site-header-compact" : ""}`}>
      <Link className="wordmark" href="/" aria-label="Aman Sinha, home">
        AS<span className="wordmark-dot">.</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link className="nav-secondary" href="/#principles">Principles</Link>
        <Link className="nav-secondary" href="/#experience">Experience</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/resume">Résumé</Link>
      </nav>
      <a className="header-cta" href="mailto:aman.ismu@gmail.com">
        Contact <Arrow />
      </a>
    </header>
  );
}

