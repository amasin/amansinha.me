import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Aman Sinha | Senior Product Manager, Enterprise Platforms & AI" },
  description: "Senior product and platform leader in Bengaluru with 15+ years turning enterprise systems, AI automation, and data into trusted products and measurable outcomes.",
  alternates: { canonical: "https://amansinha.me/" },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://amansinha.me/#person",
        name: "Aman Sinha",
        url: "https://amansinha.me",
        image: "https://amansinha.me/og.png",
        jobTitle: "Senior Product and Platform Leader",
        description: "Product leader focused on enterprise platforms, AI-powered automation, data products, and customer experience.",
        address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Indian Institute of Management Calcutta" },
          { "@type": "CollegeOrUniversity", name: "IIT (ISM) Dhanbad" },
        ],
        knowsAbout: ["Product strategy", "Platform product management", "Enterprise SaaS", "AI automation", "Data products", "Customer experience", "Product operations"],
        sameAs: ["https://www.linkedin.com/in/amansin", "https://github.com/amasin"],
      },
      {
        "@type": "WebSite",
        "@id": "https://amansinha.me/#website",
        url: "https://amansinha.me",
        name: "Aman Sinha — Product Leadership Portfolio",
        inLanguage: "en-IN",
        publisher: { "@id": "https://amansinha.me/#person" },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://amansinha.me/#profile",
        url: "https://amansinha.me",
        name: "Aman Sinha | Senior Product Manager, Enterprise Platforms & AI",
        mainEntity: { "@id": "https://amansinha.me/#person" },
        isPartOf: { "@id": "https://amansinha.me/#website" },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <main id="main-content">
      <a className="skip-link" href="#work">Skip to selected work</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Bengaluru · Enterprise platforms · AI &amp; automation</div>
        <div className="hero-core">
          <p className="hero-role">Senior product manager and platform product leader</p>
          <h1>Product clarity for systems that <em>cannot afford confusion.</em></h1>
        </div>
        <div className="hero-bottom">
          <p>I&apos;m Aman Sinha. I turn high-stakes enterprise technology into clear product choices, adopted workflows, and measurable customer and business outcomes.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore product impact <span>↓</span></a>
            <a className="button button-secondary" href="/resume">View résumé <Arrow /></a>
          </div>
        </div>
        <ul className="hero-focus" aria-label="Product leadership focus">
          <li>Platform strategy</li><li>AI-powered automation</li><li>Data products</li><li>Enterprise customer experience</li>
        </ul>
      </section>

      <section className="signal-bar" aria-label="Career highlights">
        <div className="shell signal-grid">
          <div><strong>200K+</strong><span>endpoints at global scale</span></div>
          <div><strong>$8M+</strong><span>efficiencies and cost avoidance</span></div>
          <div><strong>34M+</strong><span>voice minutes each month</span></div>
          <div><strong>100+</strong><span>engineers aligned across 8 teams</span></div>
        </div>
      </section>

      <section className="leverage-section shell" aria-labelledby="leverage-title">
        <div className="section-heading compact-heading">
          <div><span className="section-number">01</span><h2 id="leverage-title">Where I create leverage</h2></div>
          <p>Product leadership for complex, regulated, and technically consequential environments.</p>
        </div>
        <div className="leverage-grid">
          <article><span>STRATEGY</span><h3>Turn complexity into a product thesis</h3><p>Clarify the customer, value, constraints, and choices so a roadmap becomes a decision system—not a list of requests.</p></article>
          <article><span>SCALE</span><h3>Build operating models teams can use</h3><p>Align engineering, operations, security, finance, and vendors around outcomes, evidence, and an explicit decision cadence.</p></article>
          <article><span>TRANSFORMATION</span><h3>Make adoption part of the product</h3><p>Design automation, data, controls, and change journeys together so the safest path is also the easiest path.</p></article>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <div><span className="section-number">02</span><h2>Selected product work</h2></div>
          <p>Sanitized case studies showing the decisions, trade-offs, and operating systems behind the outcomes.</p>
        </div>
        <div className="case-grid">
          <article className="case-card case-blue">
            <div className="case-meta"><span>Enterprise platform</span><span>Product strategy</span></div>
            <div className="case-visual voice-visual" aria-hidden="true">
              <span className="orbit orbit-one" /><span className="orbit orbit-two" />
              <div className="visual-label"><small>PLATFORM</small><strong>Voice, managed as a product</strong></div>
            </div>
            <div className="case-copy">
              <span className="outcome-chip">$8M+ value · 200K+ endpoints</span>
              <h3>From infrastructure backlog to an outcome-led roadmap</h3>
              <p>Reframed enterprise voice as a managed product and aligned business, risk, operations, and engineering around measurable value.</p>
              <a href="/work/enterprise-voice">See decisions and trade-offs <Arrow /></a>
            </div>
          </article>
          <article className="case-card case-lime">
            <div className="case-meta"><span>Internal product</span><span>AI &amp; automation</span></div>
            <div className="case-visual automation-visual" aria-hidden="true">
              <div className="code-window"><span /><b>Build once.</b><b>Deploy safely.</b><i>Earn adoption.</i></div>
            </div>
            <div className="case-copy">
              <span className="outcome-chip">$6M+ annual savings</span>
              <h3>Making the safest path the fastest path</h3>
              <p>Productized provisioning through templates, APIs, and visible guardrails—reducing manual work without hiding operational risk.</p>
              <a href="/work/platform-automation">See decisions and trade-offs <Arrow /></a>
            </div>
          </article>
          <article className="case-card case-paper">
            <div className="case-meta"><span>Data product</span><span>Platform economics</span></div>
            <div className="case-visual data-visual" aria-hidden="true">
              <div className="data-number">8.5<span>%</span></div><div className="data-arrow">→</div><div className="data-number">4.1<span>%</span></div>
              <small>invalid billing</small>
            </div>
            <div className="case-copy">
              <span className="outcome-chip">~$2M contract savings enabled</span>
              <h3>Turning telemetry into decisions leaders could act on</h3>
              <p>Built usage, observability, and chargeback capabilities around real financial and lifecycle decisions—not dashboard volume.</p>
              <a href="/work/usage-intelligence">See decisions and trade-offs <Arrow /></a>
            </div>
          </article>
          <article className="case-card case-orange">
            <div className="case-meta"><span>Independent build</span><span>Consumer fintech</span></div>
            <div className="case-visual bill-visual" aria-hidden="true">
              <div className="bill-paper"><small>BILL INTELLIGENCE</small><b>Was your<br />bill fair?</b><span>Evidence → action</span></div>
            </div>
            <div className="case-copy">
              <span className="outcome-chip">Web · Mobile · Backend</span>
              <h3>Narrowing a broad toolkit to one customer promise</h3>
              <p>Focused BillzWise on evidence-led bill intelligence and aligned product, trust, data, and experience around one job to be done.</p>
              <a href="/work/billzwise">See decisions and trade-offs <Arrow /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="method-section" id="principles" aria-labelledby="method-title">
        <div className="shell">
          <div className="section-heading light-heading">
            <div><span className="section-number">03</span><h2 id="method-title">My product operating system</h2></div>
            <p>Technical depth helps me see constraints. Product judgment decides which constraints deserve attention.</p>
          </div>
          <div className="method-grid">
            <article><span>01</span><h3>Frame the decision</h3><p>Start with the customer, consequence, and decision—not a feature request dressed as a problem.</p></article>
            <article><span>02</span><h3>Make value visible</h3><p>Connect choices to adoption, risk, cost-to-serve, customer experience, and business outcomes.</p></article>
            <article><span>03</span><h3>Design for delivery</h3><p>Bring engineering, operations, security, compliance, and finance into the model before trade-offs harden.</p></article>
            <article><span>04</span><h3>Build the learning loop</h3><p>Use telemetry, customer forums, and clear narratives so teams can challenge assumptions early.</p></article>
          </div>
        </div>
      </section>

      <section className="experience-section shell" id="experience">
        <div className="section-heading">
          <div><span className="section-number">04</span><h2>Experience</h2></div>
          <p>From engineering and consulting to enterprise product leadership—without losing the builder&apos;s instinct.</p>
        </div>
        <div className="experience-list">
          <article className="experience-featured">
            <div className="experience-when">2022—Now</div><div><h3>Wells Fargo</h3><p className="experience-role">L2 Product Owner · Lead Infrastructure Engineer</p><p>Own strategy, roadmap, modernization, and lifecycle execution for enterprise communications. Lead through influence across global teams and regulated banking stakeholders.</p></div><div className="experience-tags"><span>Platform strategy</span><span>AI &amp; automation</span><span>Data products</span><span>Operating model</span></div>
          </article>
          <article><div className="experience-when">2021</div><div><h3>Birlasoft</h3><p className="experience-role">Technical Specialist · Product Owner for Voice</p></div><p>Improved conferencing experience, cut resource use by 50%+, and led a multi-datacenter platform upgrade.</p></article>
          <article><div className="experience-when">2018—21</div><div><h3>AT&amp;T</h3><p className="experience-role">Technical Specialist</p></div><p>Delivered 20+ global programs and automated site-survey data collection to reduce lead time by 40%.</p></article>
          <article><div className="experience-when">2016—18</div><div><h3>Cisco</h3><p className="experience-role">Consulting Engineer</p></div><p>Designed and validated collaboration platforms for Tier-1 banks; automated virtual-machine deployment with Python.</p></article>
          <article><div className="experience-when">2011—16</div><div><h3>Dimension Data · TCS</h3><p className="experience-role">Voice engineering · Presales</p></div><p>Built the foundation in incident leadership, solution design, proofs of concept, RFPs, and executive-facing proposals.</p></article>
        </div>
        <a className="text-link" href="/resume">Read the complete résumé <Arrow /></a>
      </section>

      <section className="insights-section" aria-labelledby="insights-title">
        <div className="shell">
          <div className="section-heading">
            <div><span className="section-number">05</span><h2 id="insights-title">Product notes</h2></div>
            <p>Practical ideas from building internal products and enterprise platforms where adoption, risk, and scale are inseparable.</p>
          </div>
          <div className="insight-grid">
            <article><span>PLATFORM STRATEGY · 6 MIN</span><h3>The platform PM&apos;s real product is the decision system</h3><p>Roadmaps become useful when they make competing value, risk, and constraints visible.</p><a href="/insights/platform-product-decisions">Read the note <Arrow /></a></article>
            <article><span>INTERNAL PRODUCTS · 5 MIN</span><h3>Why internal products lose adoption—and how to earn it</h3><p>Mandates can force usage. Only product quality creates trust, pull, and durable adoption.</p><a href="/insights/internal-product-adoption">Read the note <Arrow /></a></article>
            <article><span>AUTOMATION · 5 MIN</span><h3>Automation should save judgment, not merely clicks</h3><p>The highest-value automation removes repetition while making consequential decisions clearer.</p><a href="/insights/automation-human-judgment">Read the note <Arrow /></a></article>
          </div>
          <a className="text-link" href="/insights">Explore all product notes <Arrow /></a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div className="about-title"><span className="section-number">06</span><h2>Built for the space between <em>strategy</em> and <em>systems.</em></h2></div>
          <div className="about-copy">
            <p className="about-lead">I&apos;m most useful when the customer problem is real, the system is complex, and no single function can solve it alone.</p>
            <p>My path runs through engineering, consulting, presales, program delivery, and product ownership. That range lets me move from a customer journey and business case into operating models, architecture trade-offs, controls, and the details required to ship.</p>
            <div className="credential-grid">
              <div><small>Education</small><strong>IIM Calcutta</strong><span>Senior Management Programme</span></div>
              <div><small>Foundation</small><strong>IIT (ISM) Dhanbad</strong><span>B.Tech, Electronics &amp; Communication</span></div>
              <div><small>Credentials</small><strong>PMP · CSPO · CCIE</strong><span>Azure Architect · Google Cloud · ITIL</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="opportunity-section shell" aria-labelledby="opportunity-title">
        <div>
          <span className="eyebrow"><i /> For hiring teams and product leaders</span>
          <h2 id="opportunity-title">The next product challenge I&apos;m looking for.</h2>
        </div>
        <div className="opportunity-copy">
          <p>Senior or lead Product Manager roles where enterprise platforms, AI-powered operations, customer experience, data, and measurable transformation come together.</p>
          <dl>
            <div><dt>Best fit</dt><dd>Enterprise SaaS · Fintech &amp; banking · Platform products · AI automation</dd></div>
            <div><dt>Working style</dt><dd>Bengaluru · India hybrid or remote · Global teams</dd></div>
            <div><dt>What I bring</dt><dd>Strategy, technical fluency, stakeholder alignment, and outcome ownership</dd></div>
          </dl>
        </div>
      </section>

      <section className="contact-section shell">
        <span className="eyebrow"><i /> Open to the right product leadership conversation</span>
        <h2>Have a consequential product problem?<br /><em>Let&apos;s make the choices clear.</em></h2>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:aman.ismu@gmail.com?subject=Product%20leadership%20conversation">Email Aman <Arrow /></a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/amansin" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

