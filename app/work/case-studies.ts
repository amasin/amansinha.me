export type CaseStudy = {
  slug: string;
  index: string;
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  timeline: string;
  scale: string;
  accent: string;
  problem: string;
  approach: string[];
  outcomes: { value: string; label: string }[];
  reflection: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "enterprise-voice": {
    slug: "enterprise-voice", index: "01", eyebrow: "Enterprise platform · Wells Fargo",
    title: "Turning enterprise voice into a product—not a queue of projects.",
    summary: "A multi-year product model for a global communications platform where customer experience, resilience, cost, and controls all compete for priority.",
    role: "L2 Product Owner", timeline: "2024—Present", scale: "200K+ endpoints · 34M+ minutes/month", accent: "blue",
    problem: "The platform operated at enormous scale, but decisions were fragmented across lifecycle work, business requests, engineering constraints, and vendor roadmaps. The opportunity was to replace reactive delivery with one coherent product strategy.",
    approach: [
      "Defined a six-quarter strategy anchored in modernization, experience, automation, and financial transparency.",
      "Aligned eight global teams and 100+ engineers through outcome-based priorities, Product Council forums, and a shared decision cadence.",
      "Connected roadmap choices to usage data, chargeback quality, operational risk, and stakeholder outcomes—not feature volume.",
    ],
    outcomes: [
      { value: "$8M+", label: "efficiencies and cost avoidance" },
      { value: "55K+", label: "legacy endpoints retired" },
      { value: "8", label: "global teams aligned" },
    ],
    reflection: "The real product shift was not a new feature. It was creating a shared language for value so business, engineering, operations, and risk could make better decisions together.",
  },
  "platform-automation": {
    slug: "platform-automation", index: "02", eyebrow: "Automation · Enterprise workflows",
    title: "Making the safest path the fastest path.",
    summary: "An automation-first portfolio that replaced brittle vendor and manual workflows with governed, API-driven internal products.",
    role: "Product Owner", timeline: "2022—Present", scale: "Global engineering and operations", accent: "lime",
    problem: "Routine fulfilment and site-build workflows depended on specialist knowledge, manual handoffs, and legacy tooling. That slowed delivery, increased variation, and made every change carry avoidable operational risk.",
    approach: [
      "Mapped request-to-fulfilment journeys to find delay, rework, control gaps, and high-cost human steps.",
      "Prioritized reusable APIs, templates, validation gates, and zero-touch provisioning over one-off scripts.",
      "Positioned automation as an internal product with adoption, reliability, governance, and support designed in from the start.",
    ],
    outcomes: [
      { value: "$6M+", label: "annual savings from automation-first initiatives" },
      { value: "40%", label: "lead-time reduction in earlier survey automation" },
      { value: "ZTP", label: "next-generation provisioning direction" },
    ],
    reflection: "Automation earns trust when it makes controls visible. The goal is not to remove humans from every decision—it is to reserve human judgment for the decisions that matter.",
  },
  "usage-intelligence": {
    slug: "usage-intelligence", index: "03", eyebrow: "Data product · Platform economics",
    title: "Turning platform telemetry into decisions leaders could act on.",
    summary: "Usage, observability, and chargeback capabilities that converted operational data into financial clarity and roadmap evidence.",
    role: "L1/L2 Product Owner", timeline: "2022—Present", scale: "~200K devices", accent: "paper",
    problem: "Platform decisions were constrained by fragmented reporting, vendor dependency, and billing data that did not always reflect real usage. Leaders needed evidence they could trust before simplifying the estate.",
    approach: [
      "Replaced third-party reporting with an in-house observability capability built around the platform's actual decision needs.",
      "Created usage and chargeback views that made exceptions, waste, and lifecycle opportunities visible.",
      "Used the evidence to shape decommissioning, vendor conversations, cost allocation, and roadmap priorities.",
    ],
    outcomes: [
      { value: "8.5→4.1%", label: "invalid billing reduced" },
      { value: "~$2M", label: "contract savings enabled" },
      { value: "200K", label: "endpoints made visible" },
    ],
    reflection: "A dashboard is not a data product unless it changes a decision. Starting from the decision—not the available data—kept the work focused on value.",
  },
  billzwise: {
    slug: "billzwise", index: "04", eyebrow: "Independent build · Consumer fintech",
    title: "From a broad AI toolkit to one sharp customer promise.",
    summary: "Repositioning BillzWise around a focused job: upload a bill, understand whether the price appears fair, and see what to do next.",
    role: "Product strategy & build", timeline: "2026", scale: "Web · Mobile · Backend", accent: "orange",
    problem: "The original product had useful features but a diffuse proposition. Users could scan receipts, track expenses, discover local prices, and manage warranties—yet the core reason to return was not immediately clear.",
    approach: [
      "Narrowed the promise to bill intelligence and built the information architecture around a five-second comprehension test.",
      "Designed evidence-first comparisons that communicate confidence, comparable-data limits, and privacy boundaries.",
      "Introduced bill-type-aware journeys and an explainable duplicate strategy while preserving useful existing capabilities.",
    ],
    outcomes: [
      { value: "1", label: "clear job to be done" },
      { value: "5", label: "bill types in the structured model" },
      { value: "3", label: "surfaces aligned: web, mobile, backend" },
    ],
    reflection: "Focus is a product feature. Removing ambiguity from the promise made every downstream decision—data, UX, trust, and roadmap—easier to evaluate.",
  },
};
