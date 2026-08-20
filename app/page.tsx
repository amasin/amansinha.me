const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#work">Skip to selected work</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person", name: "Aman Sinha", url: "https://amansinha.me",
        jobTitle: "Product Owner", address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
        alumniOf: [{ "@type": "CollegeOrUniversity", name: "Indian Institute of Management Calcutta" }, { "@type": "CollegeOrUniversity", name: "IIT (ISM) Dhanbad" }],
        sameAs: ["https://www.linkedin.com/in/amansin", "https://github.com/amasin"]
      }) }} />
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Aman Sinha, home">AS<span className="wordmark-dot">.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a><a href="/resume">Résumé</a>
        </nav>
        <a className="header-cta" href="https://www.linkedin.com/in/amansin" target="_blank" rel="noreferrer">Let&apos;s talk <Arrow /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Bengaluru · Building enterprise products</div>
        <h1>I turn complex platforms into <em>products people trust.</em></h1>
        <div className="hero-bottom">
          <p>Product and platform leader with 15+ years spanning strategy, customer experience, enterprise collaboration, and automation.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See selected work <span>↓</span></a>
            <a className="button button-secondary" href="/resume">View résumé <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="signal-bar" aria-label="Career highlights">
        <div className="shell signal-grid">
          <div><strong>200K+</strong><span>endpoints at global scale</span></div>
          <div><strong>$8M+</strong><span>efficiencies and cost avoidance</span></div>
          <div><strong>34M+</strong><span>voice minutes each month</span></div>
          <div><strong>100+</strong><span>engineers aligned across 8 teams</span></div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <div><span className="section-number">01</span><h2>Selected work</h2></div>
          <p>Strategy is only useful when it survives contact with delivery.</p>
        </div>
        <div className="case-grid">
          <article className="case-card case-blue">
            <div className="case-meta"><span>Enterprise platform</span><span>2024—Now</span></div>
            <div className="case-visual voice-visual" aria-hidden="true">
              <span className="orbit orbit-one" /><span className="orbit orbit-two" />
              <div className="visual-label"><small>PLATFORM</small><strong>Voice, reimagined</strong></div>
            </div>
            <div className="case-copy">
              <h3>From infrastructure backlog to a product roadmap</h3>
              <p>Reframed enterprise voice as a managed product—aligning security, operations, and business teams around measurable outcomes.</p>
              <a href="/work/enterprise-voice">Read the case study <Arrow /></a>
            </div>
          </article>
          <article className="case-card case-lime">
            <div className="case-meta"><span>Automation</span><span>Platform ops</span></div>
            <div className="case-visual automation-visual" aria-hidden="true">
              <div className="code-window"><span /><b>Build once.</b><b>Deploy safely.</b><i>Repeat.</i></div>
            </div>
            <div className="case-copy">
              <h3>Turning site builds into a repeatable product</h3>
              <p>Productized CUCM provisioning with templates, APIs, and guardrails to reduce manual work and operational risk.</p>
              <a href="/work/platform-automation">Read the case study <Arrow /></a>
            </div>
          </article>
          <article className="case-card case-paper">
            <div className="case-meta"><span>Data product</span><span>Platform economics</span></div>
            <div className="case-visual data-visual" aria-hidden="true">
              <div className="data-number">8.5<span>%</span></div><div className="data-arrow">→</div><div className="data-number">4.1<span>%</span></div>
              <small>invalid billing</small>
            </div>
            <div className="case-copy">
              <h3>From platform telemetry to decisions leaders could act on</h3>
              <p>Built usage, observability, and chargeback capabilities that made cost, exceptions, and lifecycle choices visible.</p>
              <a href="/work/usage-intelligence">Read the case study <Arrow /></a>
            </div>
          </article>
          <article className="case-card case-orange">
            <div className="case-meta"><span>Independent build</span><span>Consumer fintech</span></div>
            <div className="case-visual bill-visual" aria-hidden="true">
              <div className="bill-paper"><small>BILL INTELLIGENCE</small><b>Was your<br />bill fair?</b><span>Evidence → action</span></div>
            </div>
            <div className="case-copy">
              <h3>Sharpening BillzWise around one customer promise</h3>
              <p>Repositioned a broad AI savings toolkit into an evidence-first bill intelligence product across web, mobile, and backend.</p>
              <a href="/work/billzwise">Read the case study <Arrow /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="method-section" aria-labelledby="method-title">
        <div className="shell">
          <div className="section-heading light-heading">
            <div><span className="section-number">02</span><h2 id="method-title">How I work</h2></div>
            <p>Technical depth is useful. Product judgment is knowing where to apply it.</p>
          </div>
          <div className="method-grid">
            <article><span>01</span><h3>Frame the decision</h3><p>Start with the customer, constraint, and decision—not a feature request dressed as a problem.</p></article>
            <article><span>02</span><h3>Make value visible</h3><p>Connect roadmap choices to adoption, risk, cost-to-serve, experience, and measurable business outcomes.</p></article>
            <article><span>03</span><h3>Design for delivery</h3><p>Bring engineering, operations, security, and compliance into the product model before trade-offs harden.</p></article>
            <article><span>04</span><h3>Learn in the open</h3><p>Use product councils, telemetry, and clear narratives so teams can challenge assumptions early.</p></article>
          </div>
        </div>
      </section>

      <section className="experience-section shell" id="experience">
        <div className="section-heading">
          <div><span className="section-number">03</span><h2>Experience</h2></div>
          <p>From collaboration engineer to platform product leader—without losing the builder&apos;s instinct.</p>
        </div>
        <div className="experience-list">
          <article className="experience-featured">
            <div className="experience-when">2022—Now</div><div><h3>Wells Fargo</h3><p className="experience-role">L2 Product Owner · Lead Infrastructure Engineer</p><p>Own strategy, roadmap, modernization, and lifecycle execution for enterprise communications. Lead product direction across global teams and partner with banking, workplace, contact-center, security, operations, and vendor stakeholders.</p></div><div className="experience-tags"><span>Platform strategy</span><span>Automation</span><span>Analytics</span><span>AI workflows</span></div>
          </article>
          <article><div className="experience-when">2021</div><div><h3>Birlasoft</h3><p className="experience-role">Technical Specialist · Product Owner for Voice</p></div><p>Improved conferencing experience, cut resource use by 50%+, and led a multi-datacenter collaboration-platform upgrade.</p></article>
          <article><div className="experience-when">2018—21</div><div><h3>AT&amp;T</h3><p className="experience-role">Technical Specialist</p></div><p>Delivered 20+ global programs and automated site-survey data collection to reduce lead time by 40%.</p></article>
          <article><div className="experience-when">2016—18</div><div><h3>Cisco</h3><p className="experience-role">Consulting Engineer</p></div><p>Designed and validated collaboration platforms for Tier-1 banks; automated virtual-machine deployment with Python.</p></article>
          <article><div className="experience-when">2011—16</div><div><h3>Dimension Data · TCS</h3><p className="experience-role">Voice engineering · Presales</p></div><p>Built the operating foundation: critical incident leadership, solution design, POCs, RFPs, and executive-facing proposals.</p></article>
        </div>
        <a className="text-link" href="/resume">Read the full résumé <Arrow /></a>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div className="about-title"><span className="section-number">04</span><h2>Built for the space between <em>strategy</em> and <em>systems.</em></h2></div>
          <div className="about-copy">
            <p className="about-lead">I&apos;m Aman—a product and platform leader in Bengaluru. I help teams turn complex enterprise technology into products with a clear promise, a credible roadmap, and outcomes people can see.</p>
            <p>My path runs through engineering, consulting, presales, program delivery, and product ownership. That range helps me move comfortably from a customer journey or business case into architecture trade-offs, operating models, and the details required to ship.</p>
            <div className="credential-grid">
              <div><small>Education</small><strong>IIM Calcutta</strong><span>Senior Management Programme</span></div>
              <div><small>Foundation</small><strong>IIT (ISM) Dhanbad</strong><span>B.Tech, ECE</span></div>
              <div><small>Credentials</small><strong>PMP · CSPO · CCIE</strong><span>Azure Architect · Google Cloud · ITIL</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section shell">
        <span className="eyebrow"><i /> Open to the right product challenge</span>
        <h2>Have a complex platform?<br /><em>Let&apos;s make it clear.</em></h2>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:aman.ismu@gmail.com">Email me <Arrow /></a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/amansin" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        </div>
      </section>

      <footer><div className="shell footer-grid"><a className="wordmark footer-mark" href="#top">AS<span className="wordmark-dot">.</span></a><p>Product leadership · Platform strategy · Enterprise transformation</p><div><a href="https://github.com/amasin" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/amansin" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></footer>
    </main>
  );
}
