import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Résumé — Aman Sinha",
  description: "Aman Sinha's product leadership experience, platform impact, education, and credentials.",
  openGraph: { title: "Résumé — Aman Sinha", description: "15+ years of product, platform, automation, and enterprise technology leadership.", images: [] },
  twitter: { title: "Résumé — Aman Sinha", description: "15+ years of product, platform, automation, and enterprise technology leadership.", images: [] },
};

const roles = [
  {
    company: "Wells Fargo", title: "L2 Product Owner · Lead Infrastructure Engineer", dates: "Jan 2024—Present",
    bullets: [
      "Own product strategy, roadmap, modernization, and global delivery for an enterprise communications platform supporting 200K+ endpoints and 34M+ monthly voice minutes.",
      "Align priorities across eight global teams and 100+ engineers; partner with business, engineering, architecture, operations, information security, compliance, and vendors.",
      "Lead automation-first initiatives delivering $6M+ in annual savings; partnered across the bank to enable $2M+ cost avoidance and retire 55K+ legacy devices.",
      "Built usage-analytics and chargeback frameworks that reduced invalid billing from 8.5% to 4.1% and improved financial transparency.",
      "Lead next-generation zero-touch provisioning and AI-powered request orchestration using chatbots, APIs, and Model Context Protocol.",
    ],
  },
  {
    company: "Wells Fargo", title: "L1 Product Owner · Senior Infrastructure Engineer", dates: "Jan 2022—Dec 2023",
    bullets: [
      "Provided product direction and prioritization across architecture, engineering, automation, and compliance teams.",
      "Replaced third-party reporting with in-house observability across ~200K devices, enabling ~$2M in contract savings.",
      "Delivered collaboration infrastructure across four clusters and ~100 virtual machines; presented the solution at Tech Spotlight 2023.",
      "Submitted four patent ideas, authored three whitepapers, and facilitated team ideation that produced four additional whitepaper submissions.",
    ],
  },
  {
    company: "Birlasoft", title: "Technical Specialist · Product Owner for Voice", dates: "Apr—Dec 2021",
    bullets: [
      "Partnered with the Head of Network Voice to drive priorities and delivery.",
      "Improved conferencing experience, reduced resource use by 50%+, avoided ~$200K in refresh cost, and led a multi-datacenter platform upgrade.",
    ],
  },
  {
    company: "AT&T Communications Services", title: "Technical Specialist", dates: "Jul 2018—Mar 2021",
    bullets: [
      "Delivered 20+ global greenfield, relocation, decommissioning, and regulatory infrastructure programs.",
      "Automated data collection for site surveys, reducing lead time by 40%, and led voice engineers in India.",
    ],
  },
  {
    company: "Cisco Systems", title: "Consulting Engineer", dates: "Aug 2016—Jun 2018",
    bullets: [
      "Designed and validated collaboration platforms for Tier-1 banking customers and built a lab datacenter from the ground up.",
      "Automated virtual-machine deployment with Python and received an amaze1 award for solution validation.",
    ],
  },
  {
    company: "Dimension Data", title: "Senior Network Engineer — Voice", dates: "Feb 2015—Jul 2016",
    bullets: ["Led critical incident response and root-cause analysis; received a quarterly performance award across a ~60-person engineering organization."],
  },
  {
    company: "Tata Consultancy Services", title: "Presales · Systems Engineer", dates: "Jul 2011—Jan 2015",
    bullets: ["Built product proposals, proofs of concept, solution designs, RFP responses, architecture narratives, staffing estimates, and project plans for collaboration platforms."],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="site-header shell">
        <Link className="wordmark" href="/">AS<span className="wordmark-dot">.</span></Link>
        <Link className="back-link" href="/">← Portfolio</Link>
        <a className="header-cta" href="mailto:aman.ismu@gmail.com">Contact ↗</a>
      </header>
      <section className="resume-hero shell">
        <div><span className="eyebrow">Product · Platform · Transformation</span><h1>Aman Sinha</h1></div>
        <div><p>Product and platform leader with 15+ years turning complex enterprise systems into measurable customer and business outcomes.</p><PrintButton /></div>
      </section>
      <div className="resume-content shell">
        <aside className="resume-aside">
          <section><h2>Contact</h2><a href="mailto:aman.ismu@gmail.com">aman.ismu@gmail.com</a><a href="https://www.linkedin.com/in/amansin">linkedin.com/in/amansin</a><a href="https://github.com/amasin">github.com/amasin</a><p>Whitefield, Bengaluru</p></section>
          <section><h2>Product leadership</h2><ul><li>Strategy & roadmaps</li><li>Customer discovery</li><li>OKRs & product metrics</li><li>Prioritization & PRDs</li><li>Platform lifecycle</li><li>Adoption & cost-to-serve</li></ul></section>
          <section><h2>Technology</h2><ul><li>APIs & AI/LLM workflows</li><li>Python & SQL</li><li>Azure, GCP & AWS</li><li>UCaaS & CCaaS</li><li>Cisco CUCM & Webex</li><li>SIP, SBCs & E911</li></ul></section>
          <section><h2>Credentials</h2><ul><li>PMP</li><li>Certified Scrum Product Owner</li><li>CCIE Collaboration #55471</li><li>Azure Solutions Architect Expert</li><li>Google Associate Cloud Engineer</li><li>ITIL Foundation</li></ul></section>
          <section><h2>Education</h2><p><strong>IIM Calcutta</strong><br />Senior Management Programme, 2021—22</p><p><strong>IIT (ISM) Dhanbad</strong><br />B.Tech, Electronics & Communication, 2007—11</p></section>
        </aside>
        <div className="resume-main">
          <section><h2>Profile</h2><p className="about-lead">Own global enterprise products at the intersection of customer experience, automation, platform modernization, governance, and data. Experienced leading without direct authority across engineering, operations, security, compliance, vendors, and senior stakeholders.</p></section>
          <section><h2>Experience</h2>{roles.map(role => <article className="resume-role" key={`${role.company}-${role.dates}`}><div className="resume-role-heading"><div><h3>{role.company}</h3><em>{role.title}</em></div><span>{role.dates}</span></div><ul>{role.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></article>)}</section>
        </div>
      </div>
    </main>
  );
}
