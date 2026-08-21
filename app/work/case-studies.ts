export type CaseStudy = {
  slug: string;
  index: string;
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  timeline: string;
  scale: string;
  contribution: string;
  customer: string;
  accent: string;
  problem: string;
  approach: string[];
  decisions: { title: string; detail: string }[];
  tradeoff: string;
  measurement: string;
  outcomes: { value: string; label: string }[];
  demonstrates: string[];
  evidenceNote: string;
  reflection: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "enterprise-voice": {
    slug: "enterprise-voice", index: "01", eyebrow: "Enterprise platform · Wells Fargo",
    title: "Turning enterprise voice into a product—not a queue of projects.",
    summary: "A multi-year product model for a global communications platform where customer experience, resilience, cost, and controls all compete for priority.",
    role: "L2 Product Owner", timeline: "2024—Present", scale: "200K+ endpoints · 34M+ minutes/month",
    contribution: "Owned the product strategy, roadmap, prioritization model, and stakeholder decision cadence; led through influence across eight global teams rather than direct reporting authority.",
    customer: "Employees and service teams relying on dependable communications, plus the engineering, operations, finance, security, and control teams responsible for the platform.",
    accent: "blue",
    problem: "The platform operated at enormous scale, but decisions were fragmented across lifecycle work, business requests, engineering constraints, and vendor roadmaps. The opportunity was to replace reactive delivery with one coherent product strategy.",
    approach: [
      "Defined a six-quarter strategy anchored in modernization, experience, automation, and financial transparency.",
      "Aligned eight global teams and 100+ engineers through outcome-based priorities, Product Council forums, and a shared decision cadence.",
      "Connected roadmap choices to usage data, chargeback quality, operational risk, and stakeholder outcomes—not feature volume.",
    ],
    decisions: [
      { title: "Organize around outcomes, not components", detail: "Created a portfolio view spanning modernization, customer experience, automation, controls, and economics so component teams could see the shared product intent." },
      { title: "Use evidence to challenge inherited demand", detail: "Brought usage, billing, lifecycle, and risk signals into prioritization instead of treating every request or vendor roadmap item as equally valuable." },
      { title: "Make governance a product capability", detail: "Established product forums and a repeatable decision cadence so trade-offs were visible, challengeable, and connected to accountable outcomes." },
    ],
    tradeoff: "The central tension was modernization speed versus service resilience and regulatory control. Work was sequenced by customer consequence, risk exposure, financial value, and delivery readiness—not by whichever request was loudest.",
    measurement: "Progress was evaluated through value realized, endpoint and platform simplification, billing quality, automation adoption, risk reduction, and execution against outcome-based roadmap commitments.",
    outcomes: [
      { value: "$8M+", label: "efficiencies and cost avoidance" },
      { value: "55K+", label: "legacy endpoints retired" },
      { value: "8", label: "global teams aligned" },
    ],
    demonstrates: ["Platform strategy", "Portfolio prioritization", "Executive alignment", "Product operating model", "Enterprise transformation"],
    evidenceNote: "This case study is intentionally sanitized. Operational details are generalized and figures are rounded to respect employer and customer confidentiality.",
    reflection: "The real product shift was not a new feature. It was creating a shared language for value so business, engineering, operations, and risk could make better decisions together.",
  },
  "platform-automation": {
    slug: "platform-automation", index: "02", eyebrow: "Automation · Enterprise workflows",
    title: "Making the safest path the fastest path.",
    summary: "An automation-first portfolio that replaced brittle vendor and manual workflows with governed, API-driven internal products.",
    role: "Product Owner", timeline: "2022—Present", scale: "Global engineering and operations",
    contribution: "Framed automation as an internal product portfolio, prioritized reusable capabilities, aligned control partners, and shaped adoption and operating requirements alongside engineering delivery.",
    customer: "Engineering and operations teams fulfilling enterprise communication requests, and internal users who needed predictable outcomes without learning platform-specific complexity.",
    accent: "lime",
    problem: "Routine fulfilment and site-build workflows depended on specialist knowledge, manual handoffs, and legacy tooling. That slowed delivery, increased variation, and made every change carry avoidable operational risk.",
    approach: [
      "Mapped request-to-fulfilment journeys to find delay, rework, control gaps, and high-cost human steps.",
      "Prioritized reusable APIs, templates, validation gates, and zero-touch provisioning over one-off scripts.",
      "Positioned automation as an internal product with adoption, reliability, governance, and support designed in from the start.",
    ],
    decisions: [
      { title: "Solve a journey, not a script", detail: "Mapped the full request-to-fulfilment path so the product removed handoffs, rework, and ambiguity instead of automating one isolated technical step." },
      { title: "Create reusable primitives", detail: "Favored templates, APIs, validation rules, and orchestration patterns that multiple workflows could adopt over brittle one-off automation." },
      { title: "Expose controls in the experience", detail: "Designed validation, exception handling, and ownership into the workflow so speed did not come at the expense of trust or auditability." },
    ],
    tradeoff: "The tension was standardization versus legitimate local variation. The product standardized the common path while keeping explicit exception routes for cases where business or control needs justified human review.",
    measurement: "Success combined financial value and lead-time reduction with adoption, exception rates, change quality, support demand, and the percentage of requests completed through the governed path.",
    outcomes: [
      { value: "$6M+", label: "annual savings from automation-first initiatives" },
      { value: "40%", label: "lead-time reduction in earlier survey automation" },
      { value: "ZTP", label: "next-generation provisioning direction" },
    ],
    demonstrates: ["Internal product management", "Workflow discovery", "API strategy", "AI automation", "Adoption design"],
    evidenceNote: "This case study describes a portfolio of sanitized enterprise automation work. Architecture and control details are deliberately generalized.",
    reflection: "Automation earns trust when it makes controls visible. The goal is not to remove humans from every decision—it is to reserve human judgment for the decisions that matter.",
  },
  "usage-intelligence": {
    slug: "usage-intelligence", index: "03", eyebrow: "Data product · Platform economics",
    title: "Turning platform telemetry into decisions leaders could act on.",
    summary: "Usage, observability, and chargeback capabilities that converted operational data into financial clarity and roadmap evidence.",
    role: "L1/L2 Product Owner", timeline: "2022—Present", scale: "~200K devices",
    contribution: "Defined the decisions the data product needed to support, prioritized reporting and chargeback capabilities, and connected platform telemetry to financial and lifecycle action.",
    customer: "Platform leaders, finance partners, service owners, and engineering teams deciding where to simplify the estate, correct billing, and direct investment.",
    accent: "paper",
    problem: "Platform decisions were constrained by fragmented reporting, vendor dependency, and billing data that did not always reflect real usage. Leaders needed evidence they could trust before simplifying the estate.",
    approach: [
      "Replaced third-party reporting with an in-house observability capability built around the platform's actual decision needs.",
      "Created usage and chargeback views that made exceptions, waste, and lifecycle opportunities visible.",
      "Used the evidence to shape decommissioning, vendor conversations, cost allocation, and roadmap priorities.",
    ],
    decisions: [
      { title: "Begin with a decision inventory", detail: "Identified the recurring decisions leaders could not make confidently—billing corrections, contract choices, lifecycle actions, and service exceptions—before defining views." },
      { title: "Replace vendor dependency selectively", detail: "Built in-house capability where control, economics, and decision relevance justified ownership rather than recreating every feature of the external tool." },
      { title: "Design for actionability", detail: "Made exceptions, ownership, and next actions visible so insight could move into financial correction, decommissioning, and roadmap work." },
    ],
    tradeoff: "The tension was analytical breadth versus trusted action. The first priority was a smaller set of governed measures leaders could use repeatedly, rather than a large catalogue of metrics with uncertain lineage.",
    measurement: "The product was measured through billing accuracy, savings enabled, devices made visible, decision turnaround, adoption by stakeholder teams, and the actions generated from the evidence.",
    outcomes: [
      { value: "8.5→4.1%", label: "invalid billing reduced" },
      { value: "~$2M", label: "contract savings enabled" },
      { value: "200K", label: "endpoints made visible" },
    ],
    demonstrates: ["Data product strategy", "Platform economics", "Metric design", "Build-versus-buy", "Stakeholder influence"],
    evidenceNote: "The narrative is sanitized and figures are approximate. Screens and underlying data cannot be shared because they belong to a regulated enterprise environment.",
    reflection: "A dashboard is not a data product unless it changes a decision. Starting from the decision—not the available data—kept the work focused on value.",
  },
  billzwise: {
    slug: "billzwise", index: "04", eyebrow: "Independent build · Consumer fintech",
    title: "From a broad AI toolkit to one sharp customer promise.",
    summary: "Repositioning BillzWise around a focused job: upload a bill, understand whether the price appears fair, and see what to do next.",
    role: "Product strategy & build", timeline: "2026", scale: "Web · Mobile · Backend",
    contribution: "Owned product positioning, information architecture, evidence model, cross-surface prioritization, and hands-on implementation decisions for the independent product.",
    customer: "People trying to understand whether a household bill or receipt appears fair and what evidence-backed action they can take next.",
    accent: "orange",
    problem: "The original product had useful features but a diffuse proposition. Users could scan receipts, track expenses, discover local prices, and manage warranties—yet the core reason to return was not immediately clear.",
    approach: [
      "Narrowed the promise to bill intelligence and built the information architecture around a five-second comprehension test.",
      "Designed evidence-first comparisons that communicate confidence, comparable-data limits, and privacy boundaries.",
      "Introduced bill-type-aware journeys and an explainable duplicate strategy while preserving useful existing capabilities.",
    ],
    decisions: [
      { title: "Choose one memorable promise", detail: "Moved from a broad money-management toolkit to a focused bill-intelligence job that users could understand in seconds." },
      { title: "Make evidence part of the interface", detail: "Designed comparisons to show supporting observations, confidence, and data limitations rather than presenting an unexplained verdict." },
      { title: "Align every surface to the same job", detail: "Used one authoritative product model across web, mobile, and backend so the promise, terminology, and decision logic stayed coherent." },
    ],
    tradeoff: "The tension was feature breadth versus trust and comprehension. Useful adjacent capabilities were retained only when they reinforced the primary bill-intelligence journey.",
    measurement: "The initial learning model focuses on comprehension, successful bill processing, evidence coverage, action engagement, return usage, and where confidence or comparable data is insufficient.",
    outcomes: [
      { value: "1", label: "clear job to be done" },
      { value: "5", label: "bill types in the structured model" },
      { value: "3", label: "surfaces aligned: web, mobile, backend" },
    ],
    demonstrates: ["Zero-to-one product strategy", "Consumer trust", "Information architecture", "AI product judgment", "Hands-on building"],
    evidenceNote: "BillzWise is an independent product exploration. Outcome metrics shown here describe product scope and strategic focus rather than commercial traction.",
    reflection: "Focus is a product feature. Removing ambiguity from the promise made every downstream decision—data, UX, trust, and roadmap—easier to evaluate.",
  },
};

