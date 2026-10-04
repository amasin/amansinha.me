import { profile } from "../profile";
import type { Metadata } from "next";
import { PrintButton } from "./PrintButton";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Résumé — Aman Sinha",
  description: profile.description,
  alternates: { canonical: "https://amansinha.me/resume" },
  openGraph: { type: "profile", url: "https://amansinha.me/resume", title: "Résumé — Aman Sinha", description: "15+ years of product, platform, automation, and enterprise technology leadership.", images: [] },
  twitter: { title: "Résumé — Aman Sinha", description: "15+ years of product, platform, automation, and enterprise technology leadership.", images: [] },
};

const roles = [
  {
    company: "Wells Fargo", title: profile.designation, dates: "Jan 2022—Present",
    bullets: [
      "Global Product Owner for Enterprise Voice, supporting 200K+ endpoints and 34M+ monthly voice minutes across branch, contact center, administrative, and remote-work environments.",
      "Define product vision, six-quarter roadmaps, and OKRs; prioritize modernization, end-of-life risk, vulnerabilities, automation, and investment with global business and engineering stakeholders.",
      "Drive $8M+ in efficiencies and cost avoidance across platform initiatives, including in-house automation and $2M+ cost avoidance with Contact Center and Branch Banking.",
      "Prioritize retirement of 15K+ softphone clients and 40K+ hard phones; use adoption and usage evidence to guide platform simplification.",
      "Improved user-to-device chargeback mapping, reducing invalid billing from 8.5% to 4.1%.",
      "Own migration of internal applications from on-premises virtual machines to OpenShift/Kubernetes, aligning product priorities with engineering, operations, and platform requirements.",
      "Shape AI-assisted self-service provisioning and API automation; evaluate in-house capability against vendor cost and operational needs.",
    ],
  },
  {
    company: "Birlasoft", title: "Technical Lead", dates: "Apr—Dec 2021",
    bullets: ["Led an on-premises Cisco-to-Webex cloud migration for a global insurance client; reduced conferencing costs by 50% through solution redesign."],
  },
  {
    company: "AT&T Communications Services", title: "Technical Specialist", dates: "Jul 2018—Mar 2021",
    bullets: ["Designed regulatory-compliant communications infrastructure and delivered 20+ global site deployments and decommissions.", "Automated surveys and provisioning with scripts for communications platforms and network equipment, reducing completion time by 40%."],
  },
  {
    company: "Cisco Systems", title: "Services Consulting Engineer", dates: "Aug 2016—Jun 2018",
    bullets: ["Delivered and validated collaboration solutions for Tier-1 banking customers.", "Automated VMware lab setup with Python and received an Amaze1 award for solution validation."],
  },
  {
    company: "Dimension Data", title: "Senior Network Engineer — Voice", dates: "Feb 2015—Jul 2016",
    bullets: ["Supported 2,000+ enterprise customers through L2/L3 escalation, critical incident response, and root-cause analysis for voice and collaboration platforms."],
  },
  {
    company: "Tata Consultancy Services", title: "Systems Engineer", dates: "Jul 2011—Jan 2015",
    bullets: ["Developed collaboration solution designs, RFP/RFI responses, architecture diagrams, staffing estimates, technical presentations, and proofs of concept within the Cisco Center of Excellence."],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <a className="skip-link" href="#resume-content">Skip to résumé</a>
      <SiteHeader compact />
      <section className="resume-hero shell">
        <div><span className="eyebrow">Lead Digital Product Manager, VP</span><h1>Aman Sinha</h1></div>
        <div><p>Lead Digital Product Manager, VP at Wells Fargo. 15+ years across enterprise technology, product ownership, consulting, and platform transformation.</p><PrintButton /></div>
      </section>
      <div className="resume-content shell" id="resume-content">
        <aside className="resume-aside">
          <section><h2>Contact</h2><a href="mailto:aman.ismu@gmail.com">aman.ismu@gmail.com</a><a href="https://www.linkedin.com/in/amansin">linkedin.com/in/amansin</a><p>Whitefield, Bengaluru</p></section>
          <section><h2>Product leadership</h2><ul><li>Strategy & roadmaps</li><li>Customer discovery</li><li>OKRs & product metrics</li><li>Prioritization & PRDs</li><li>Platform lifecycle</li><li>Adoption & cost-to-serve</li></ul></section>
          <section><h2>Technology</h2><ul><li>APIs & AI/LLM workflows</li><li>Python automation</li><li>Azure & GCP</li><li>OpenShift & Kubernetes</li><li>UCaaS & CCaaS</li><li>Cisco CUCM & Webex</li><li>SIP, SBCs & E911</li></ul></section>
          <section><h2>Credentials</h2><ul><li>PMP</li><li>Certified Scrum Product Owner</li><li>CCIE Collaboration #55471</li><li>Azure Solutions Architect Expert</li><li>Google Associate Cloud Engineer</li><li>ITIL Foundation</li></ul></section>
          <section><h2>Education</h2><p><strong>IIM Calcutta</strong><br />Senior Management Programme, 2021—22</p><p><strong>IIT (ISM) Dhanbad</strong><br />B.Tech, Electronics & Communication, 2007—11</p></section>
        </aside>
        <div className="resume-main">
          <section><h2>Profile</h2><p className="about-lead">Own global enterprise products at the intersection of customer experience, automation, platform modernization, governance, and data. Experienced leading without direct authority across engineering, operations, security, compliance, vendors, and senior stakeholders.</p></section>
          <section><h2>Experience</h2>{roles.map(role => <article className="resume-role" key={`${role.company}-${role.dates}`}><div className="resume-role-heading"><div><h3>{role.company}</h3><em>{role.title}</em></div><span>{role.dates}</span></div><ul>{role.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></article>)}</section>
          <section><h2>Independent product work</h2><p>Product ownership from concept to hands-on implementation, alongside my enterprise role.</p><ul><li><a className="text-link" href="/work/consumer-intelligence">Consumer price intelligence →</a> AI-assisted receipt processing and local product and store discovery.</li><li><a className="text-link" href="/work/ai-learning">Generative AI learning →</a> Personalized educational content.</li><li><a className="text-link" href="/work/ai-discovery">AI tool discovery →</a> Structured pricing, editorial information, and moderated reviews.</li></ul></section>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

