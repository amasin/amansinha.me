import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { DecisionLab } from "./DecisionLab";

export const metadata: Metadata = {
  title: "Product Decision Lab | Aman Sinha",
  description: "A transparent, interactive product prioritization exercise: balance customer value, economics, risk, and execution to explore how product decisions change.",
  alternates: { canonical: "https://amansinha.me/lab" },
  openGraph: {
    title: "Product Decision Lab — Aman Sinha",
    description: "Four product bets. One delivery slot. See how trade-offs change the decision.",
    url: "https://amansinha.me/lab",
    type: "website",
  },
};

export default function LabPage() {
  return (
    <main id="main-content" className="pv-site pv-lab-page">
      <a className="skip-link" href="#lab-controls">Skip to the interactive lab</a>
      <SiteHeader compact />
      <section className="shell pv-lab-hero">
        <a href="/" className="pv-back">← Back to the portfolio</a>
        <span className="pv-index">A WORKING PRODUCT THINKING EXERCISE / 001</span>
        <h1>What deserves to <em>get built?</em></h1>
        <p>You lead an internal platform. Four plausible initiatives compete for one delivery slot. Change the decision criteria, see the ranking move, and notice what the model cannot tell you.</p>
        <div className="pv-lab-warning"><strong>Fictional scenario.</strong> These initiatives and scores are illustrative—not proprietary employer information, research findings, or a real investment decision.</div>
      </section>
      <DecisionLab />
      <section className="shell pv-lab-lessons">
        <span className="pv-index">THE PART THAT DOESN'T FIT IN A SCORE</span>
        <h2>Prioritization is a conversation, not a calculator.</h2>
        <div className="pv-lab-lessons-grid">
          <article><span>01 / Evidence</span><h3>What would change my mind?</h3><p>Customer interviews, demand signals, unit economics, and time-to-value should replace the illustrative inputs before a real decision.</p></article>
          <article><span>02 / Constraints</span><h3>What is non-negotiable?</h3><p>Security, accessibility, compliance, operational resilience, and critical dependencies are gates—not merely weighted preferences.</p></article>
          <article><span>03 / Sequencing</span><h3>What enables the next bet?</h3><p>The highest score is not always the first investment. Shared capabilities and team capacity can change the sequence.</p></article>
        </div>
        <div className="pv-lab-end"><p>This is how I like to work: expose the assumptions, make the trade-off legible, and choose the next test.</p><a href="/work/enterprise-voice" className="pv-text-action">See an enterprise product case <span aria-hidden="true">↗</span></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
