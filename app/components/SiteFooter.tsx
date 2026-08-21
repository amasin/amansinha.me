import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-grid">
        <Link className="wordmark footer-mark" href="/" aria-label="Aman Sinha, home">
          Aman Sinha<span className="wordmark-dot">.</span>
        </Link>
        <p>Product leadership · Platform strategy · AI-powered transformation</p>
        <div>
          <a href="mailto:aman.ismu@gmail.com">Email ↗</a>
          <a href="https://www.linkedin.com/in/amansin" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/amasin" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </footer>
  );
}

