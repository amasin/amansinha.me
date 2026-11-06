import type { Metadata } from "next";
import { profile } from "./profile";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

export const metadata: Metadata = {
  title: { absolute: profile.title },
  description: "Aman Sinha is a Lead Digital Product Manager, VP working at the intersection of enterprise platform strategy, customer experience, AI automation, and measurable business value.",
  alternates: { canonical: "https://amansinha.me/" },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const proof = [
  { number: "200K+", label: "Endpoints in product scope" },
  { number: "34M+", label: "Voice minutes per month" },
  { number: "8", label: "Global teams aligned" },
  { number: "$8M+", label: "Efficiencies & cost-avoidance opportunities" },
];

const thinking = [
  { number: "01", name: "Find the real problem", detail: "Start with the customer, the cost of doing nothing, and the evidence behind the request." },
  { number: "02", name: "Make trade-offs explicit", detail: "Put user value, economics, delivery, and controls on the same page—then choose." },
  { number: "03", name: "Build the learning loop", detail: "Define how adoption, reliability, experience, and business value will change before shipping." },
];

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
        jobTitle: profile.designation,
        worksFor: { "@type": "Organization", name: "Wells Fargo" },
        description: "Lead Digital Product Manager focused on platform product management, enterprise experience, AI automation, and measurable product outcomes.",
        address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Indian Institute of Management Calcutta" },
          { "@type": "CollegeOrUniversity", name: "IIT (ISM) Dhanbad" },
        ],
        knowsAbout: ["Product strategy", "Platform product management", "Enterprise SaaS", "AI automation", "Product economics", "Customer experience", "Product operations"],
        sameAs: ["https://www.linkedin.com/in/amansin"],
      },
      {
        "@type": "WebSite",
        "@id": "https://amansinha.me/#website",
        url: "https://amansinha.me",
        name: "Aman Sinha — Product Leadership",
        inLanguage: "en-IN",
        publisher: { "@id": "https://amansinha.me/#person" },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://amansinha.me/#profile",
        url: "https://amansinha.me",
        name: profile.title,
        mainEntity: { "@id": "https://amansinha.me/#person" },
        isPartOf: { "@id": "https://amansinha.me/#website" },
      },
    ],
  };

  return (
    <main id="main-content" className="pv-site">
      <a className="skip-link" href="#selected-work">Skip to selected work</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader />

      <section className="pv-hero shell" aria-labelledby="pv-title">
        <div className="pv-hero-intro">
          <span className="pv-eyebrow"><i aria-hidden="true" /> Aman Sinha / Product leadership</span>
          <span className="pv-index">01 — POSITIONING</span>
        </div>
        <div className="pv-hero-grid">
          <div className="pv-hero-copy">
            <p className="pv-role">Lead Digital Product Manager, VP · Bengaluru</p>
            <h1 className="pv-headline" id="pv-title">I make complex <em>products</em> make sense.</h1>
            <p className="pv-lead">Strategy with an engineer&apos;s depth and an operator&apos;s accountability. I turn messy enterprise problems into focused product decisions, useful experiences, and measurable value.</p>
            <div className="pv-actions">
              <a className="pv-btn pv-btn-dark" href="#selected-work">Explore the work <Arrow /></a>
              <a className="pv-btn pv-btn-outline" href="/lab">Try my decision lab <Arrow /></a>
            </div>
            <p className="pv-context">Currently shaping enterprise platforms at global scale. Independently building products with AI, data, and automation.</p>
          </div>
          <div className="pv-decision-card" aria-label="My product leadership model">
            <div className="pv-card-top"><span>THE PRODUCT LEADERSHIP BRIEF</span><span>AS / 001</span></div>
            <div className="pv-card-orb" aria-hidden="true"><span className="pv-orbit-one" /><span className="pv-orbit-two" /><b>?</b></div>
            <div className="pv-card-caption">The hard part isn&apos;t shipping a feature.</div>
            <div className="pv-card-question">It&apos;s knowing <em>what deserves to exist.</em></div>
            <div className="pv-card-steps"><span>01 / Understand</span><span>02 / Decide</span><span>03 / Deliver</span><span>04 / Learn</span></div>
          </div>
        </div>
      </section>

      <section className="pv-proof" aria-label="Product leadership scope and outcomes">
        <div className="shell pv-proof-grid">
          {proof.map((item) => <div className="pv-proof-item" key={item.label}><strong>{item.number}</strong><span>{item.label}</span></div>)}
        </div>
        <p className="shell pv-proof-note">Scope and financial figures are rounded; financial value includes documented efficiencies and cost-avoidance opportunities, not solely realized savings.</p>
      </section>

      <section className="pv-work shell" id="selected-work" aria-labelledby="pv-work-title">
        <div className="pv-section-head">
          <div><span className="pv-index">02 — EVIDENCE</span><h2 id="pv-work-title">Selected product work<span className="pv-period">.</span></h2></div>
          <p>Not a list of responsibilities. A collection of problems, choices, trade-offs, and outcomes.</p>
        </div>
        <article className="pv-feature-case">
          <div className="pv-feature-copy">
            <span className="pv-feature-kicker">FEATURED CASE / PLATFORM STRATEGY</span>
            <h3>From a technology estate to a product with a point of view.</h3>
            <p>How a global communications platform moved toward shared priorities across experience, modernization, resilience, and economics.</p>
            <dl className="pv-feature-facts">
              <div><dt>My role</dt><dd>Product strategy, roadmap & prioritization</dd></div>
              <div><dt>Core tension</dt><dd>Modernization speed vs. operational trust</dd></div>
              <div><dt>Scale</dt><dd>200K+ endpoints · Eight global teams</dd></div>
            </dl>
            <a href="/work/enterprise-voice" className="pv-text-action">Explore the decisions <Arrow /></a>
          </div>
          <div className="pv-feature-diagram" aria-hidden="true">
            <div className="pv-diagram-label">A PRODUCT, NOT A PROJECT LIST</div>
            <div className="pv-diagram-ring">
              <div className="pv-diagram-center">Customer<br />value</div>
              <span className="pv-ring-tag pv-tag-top">Reliability</span>
              <span className="pv-ring-tag pv-tag-right">Economics</span>
              <span className="pv-ring-tag pv-tag-bottom">Adoption</span>
              <span className="pv-ring-tag pv-tag-left">Modernization</span>
            </div>
            <div className="pv-diagram-foot">Make the competing priorities visible.</div>
          </div>
        </article>
        <div className="pv-case-grid">
          <article className="pv-case-item">
            <span className="pv-case-type">DATA PRODUCTS / ECONOMICS</span>
            <div className="pv-case-illustration pv-chart-illustration" aria-hidden="true"><span>8.5%</span><b>→</b><span>4.1%</span></div>
            <h3>Turn platform data into decisions, not dashboards.</h3>
            <p>Connected usage, financial accountability, and lifecycle action; invalid billing reduced from 8.5% to 4.1%.</p>
            <a href="/work/usage-intelligence">Explore the case <Arrow /></a>
          </article>
          <article className="pv-case-item">
            <span className="pv-case-type">INTERNAL PRODUCTS / AUTOMATION</span>
            <div className="pv-case-illustration pv-flow-illustration" aria-hidden="true"><span>Request</span><b>→</b><span>Guardrails</span><b>→</b><span>Delivery</span></div>
            <h3>Productize the work everyone used to do manually.</h3>
            <p>Made reusable workflows and validation part of the product rather than an afterthought.</p>
            <a href="/work/platform-automation">Explore the case <Arrow /></a>
          </article>
          <article className="pv-case-item">
            <span className="pv-case-type">INDEPENDENT BUILD / AI + DATA</span>
            <div className="pv-case-illustration pv-receipt-illustration" aria-hidden="true"><span>RECEIPT</span><b>data → context<br />→ insight</b></div>
            <h3>Take an idea all the way to a working product.</h3>
            <p>Designed and built an AI-assisted consumer intelligence experience, from input to evidence-backed insight.</p>
            <a href="/work/consumer-intelligence">Explore the case <Arrow /></a>
          </article>
        </div>
        <p className="pv-work-note">Enterprise cases are anonymized and intentionally omit confidential architecture, customer details, and internal controls. <a href="/work/cloud-modernization">Also explore platform modernization <Arrow /></a></p>
      </section>

      <section className="pv-lab-band" aria-labelledby="pv-lab-title">
        <div className="shell pv-lab-grid">
          <div className="pv-lab-copy">
            <span className="pv-index">03 — INTERACTIVE / THE DECISION LAB</span>
            <h2 id="pv-lab-title">Don&apos;t just read how I think. <em>Pressure-test it.</em></h2>
            <p>Four product bets. One delivery slot. Competing goals. Adjust the priorities to see how the recommendation changes—and where a scoring model stops being enough.</p>
            <a href="/lab" className="pv-btn pv-btn-lime">Open the decision lab <Arrow /></a>
            <small>Illustrative exercise, not employer data or an actual investment recommendation.</small>
          </div>
          <div className="pv-lab-preview" aria-hidden="true">
            <div className="pv-preview-top"><span>PORTFOLIO / SCENARIO 01</span><span>SIMULATION</span></div>
            <div className="pv-preview-label">What should we fund next?</div>
            <div className="pv-preview-row"><span>Usage intelligence</span><i style={{width:"87%"}} /></div>
            <div className="pv-preview-row"><span>Self-service journeys</span><i style={{width:"76%"}} /></div>
            <div className="pv-preview-row"><span>AI incident assistant</span><i style={{width:"68%"}} /></div>
            <div className="pv-preview-bottom"><span>VALUE</span><span>ECONOMICS</span><span>CONTROLS</span><span>READINESS</span></div>
          </div>
        </div>
      </section>

      <section className="pv-thinking shell" id="principles" aria-labelledby="pv-thinking-title">
        <div className="pv-section-head">
          <div><span className="pv-index">04 — OPERATING PHILOSOPHY</span><h2 id="pv-thinking-title">A practical way of thinking<span className="pv-period">.</span></h2></div>
          <p>Good product management is less about vocabulary and more about making consequential choices repeatable.</p>
        </div>
        <div className="pv-thinking-grid">
          {thinking.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.name}</h3><p>{item.detail}</p></article>)}
        </div>
        <a className="pv-text-action" href="/insights/platform-product-decisions">Read my approach to product decisions <Arrow /></a>
      </section>

      <section className="pv-notes-section shell" aria-labelledby="pv-notes-title">
        <div className="pv-section-head">
          <div><span className="pv-index">05 — PERSPECTIVES</span><h2 id="pv-notes-title">Product notes<span className="pv-period">.</span></h2></div>
          <p>Short, original essays on the decisions that make complex products work.</p>
        </div>
        <div className="pv-notes-list">
          <a href="/insights/platform-product-decisions"><span>PLATFORM STRATEGY</span><strong>The platform PM&apos;s real product is the decision system</strong><Arrow /></a>
          <a href="/insights/internal-product-adoption"><span>PRODUCT ADOPTION</span><strong>Why internal products lose adoption—and how to earn it</strong><Arrow /></a>
          <a href="/insights/automation-human-judgment"><span>AI & AUTOMATION</span><strong>Automation should save judgment, not merely clicks</strong><Arrow /></a>
        </div>
      </section>

      <section className="pv-background" aria-labelledby="pv-background-title">
        <div className="shell pv-background-grid">
          <div><span className="pv-index">06 — THE UNUSUAL ADVANTAGE</span><h2 id="pv-background-title">I&apos;ve lived on both sides of the roadmap.</h2></div>
          <div>
            <p>My career has moved from engineering, architecture, and client delivery into global product ownership. That means I can challenge a business case, understand a system constraint, and work with teams to deliver the outcome.</p>
            <div className="pv-credentials"><span>IIT (ISM) Dhanbad</span><span>IIM Calcutta</span><span>PMP</span><span>Advanced CSPO</span><span>CCIE</span></div>
            <a href="/resume" className="pv-text-action">Full career background <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="pv-contact shell" id="contact" aria-labelledby="pv-contact-title">
        <span className="pv-index">07 — WHAT'S NEXT</span>
        <h2 id="pv-contact-title">Building something consequential? <em>Let's talk.</em></h2>
        <div className="pv-contact-bottom">
          <p>I&apos;m interested in senior product leadership conversations across enterprise SaaS, fintech, platform products, AI-powered operations, and complex digital experiences.</p>
          <div className="pv-actions"><a className="pv-btn pv-btn-dark" href="mailto:aman.ismu@gmail.com?subject=Product%20leadership%20conversation">Start a conversation <Arrow /></a><a className="pv-btn pv-btn-outline" href="https://www.linkedin.com/in/amansin" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
