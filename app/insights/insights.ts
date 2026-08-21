export type Insight = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  published: string;
  summary: string;
  standfirst: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
  takeaway: string;
};

export const insights: Record<string, Insight> = {
  "platform-product-decisions": {
    slug: "platform-product-decisions",
    title: "The platform PM's real product is the decision system",
    category: "Platform strategy",
    readTime: "6 min read",
    published: "2026-08-21",
    summary: "A platform roadmap becomes useful when it makes competing value, risk, dependencies, and constraints visible enough for teams to make better decisions.",
    standfirst: "Platform teams rarely suffer from a shortage of work. They suffer from too many legitimate demands with no shared way to decide between them.",
    sections: [
      { heading: "A backlog can hide the product", paragraphs: ["A platform backlog usually contains security work, lifecycle risk, reliability needs, customer requests, vendor dependencies, technical debt, cost pressure, and opportunities to improve experience. Every item may be valid. Validity does not create priority.", "When a roadmap is organized around components or whoever escalated most recently, the team stays busy but the product becomes difficult to explain. Stakeholders see activity. They cannot see the logic connecting that activity to value."] },
      { heading: "Make the decision explicit", paragraphs: ["The first move is to define the recurring decisions the product system must support. Should we modernize or stabilize? Standardize or preserve an exception? Build or buy? Optimize cost or improve resilience? Automate the common path or redesign the journey first?", "Each decision needs a small, durable set of signals. I typically look for customer consequence, risk exposure, economic value, adoption evidence, strategic fit, delivery readiness, and reversibility."], points: ["Name the decision and the accountable owner", "Show which evidence is strong, weak, or missing", "Document the trade-off—not just the selected option", "Define the trigger that would cause the decision to be revisited"] },
      { heading: "Governance is part of the experience", paragraphs: ["Platform governance often feels like a meeting layer added after the real work. Good governance is closer to product design: it makes the next decision easier, gives stakeholders the context they need, and prevents the same debate from restarting every quarter.", "A useful product forum has a clear decision to make, a consistent evidence format, explicit options, and a record of what changed. The output is not another status deck. It is organizational memory."] },
      { heading: "The roadmap becomes a narrative", paragraphs: ["Once choices are visible, the roadmap can explain why now, why this sequence, what outcome should change, and what the team is deliberately not doing. That narrative helps engineering understand intent and helps executives challenge assumptions without falling into feature negotiation.", "The platform PM's leverage is not the number of items prioritized. It is the quality and speed of decisions the surrounding organization can make with confidence."] },
    ],
    takeaway: "A platform roadmap should be the visible consequence of a good decision system—not the substitute for one.",
  },
  "internal-product-adoption": {
    slug: "internal-product-adoption",
    title: "Why internal products lose adoption—and how to earn it",
    category: "Internal products",
    readTime: "5 min read",
    published: "2026-08-21",
    summary: "Mandates can force internal-product usage, but durable adoption comes from trust, clear value, and a path that respects how work actually gets done.",
    standfirst: "Internal users may not be able to choose a competitor, but they can still resist, create workarounds, escalate exceptions, or comply without trusting the product.",
    sections: [
      { heading: "Usage is not the same as adoption", paragraphs: ["An internal tool can report high usage because policy requires it. That does not mean the product is understood, trusted, or reducing effort. The real signals often live elsewhere: exception volume, offline trackers, repeat support requests, rework, manual overrides, and the time between request and outcome.", "Treating these signals as a training problem misses the product problem. Users usually build workarounds when the official path does not fit the decision, timing, or risk they carry."] },
      { heading: "Start with the work, not the workflow diagram", paragraphs: ["Discovery for an internal product should follow a request across roles and systems. Where does context disappear? Which fields are entered only to satisfy a downstream tool? Where is judgment required? Which handoff creates waiting, and which control creates real protection?", "This reveals a crucial distinction: complexity that belongs to the business and complexity created by the implementation. A good product respects the first and removes the second."], points: ["Measure time to outcome, not just task completion", "Interview exception handlers as well as happy-path users", "Expose status and ownership at every meaningful handoff", "Design the support and escalation model as part of the product"] },
      { heading: "Trust grows when controls are legible", paragraphs: ["In regulated or operationally sensitive environments, users need to understand why a request was blocked, what evidence is missing, and who can resolve it. Invisible rules feel arbitrary. Visible guardrails teach the operating model.", "This is why the safest path must also be the clearest path. If the governed workflow is slower, more confusing, or less predictable than an informal route, adoption will remain fragile no matter how strong the mandate is."] },
      { heading: "Design for pull", paragraphs: ["The best internal products create pull by returning value quickly: fewer handoffs, better defaults, reusable data, predictable completion, transparent exceptions, and evidence that the product remembers previous work.", "Adoption becomes durable when users choose the product because it helps them succeed—not merely because someone can measure whether they used it."] },
    ],
    takeaway: "A mandate can create traffic. Only a product that makes work meaningfully better creates adoption.",
  },
  "automation-human-judgment": {
    slug: "automation-human-judgment",
    title: "Automation should save judgment, not merely clicks",
    category: "AI & automation",
    readTime: "5 min read",
    published: "2026-08-21",
    summary: "High-value automation removes repetition, improves evidence, and reserves human attention for decisions where context and accountability matter.",
    standfirst: "Counting eliminated clicks is easy. Proving that automation improved the quality, speed, and safety of an outcome is a better product question.",
    sections: [
      { heading: "Not every manual step is waste", paragraphs: ["Some steps exist because a person must interpret ambiguity, accept risk, or coordinate consequences across teams. Automating those steps without understanding the judgment inside them can make a process faster and less safe at the same time.", "The first product task is to separate repetition from judgment. Repetition includes data movement, validation, enrichment, status updates, standard configuration, and evidence collection. Judgment includes exceptions, conflicting goals, weak evidence, and decisions with material consequences."] },
      { heading: "Automate around the decision", paragraphs: ["A useful automation product prepares the decision before trying to replace it. It gathers the right context, identifies missing evidence, applies clear rules, recommends the next action, and records why the path was chosen.", "That pattern is especially important for AI-enabled workflows. A confident answer is not the same as a controlled outcome. The product needs boundaries, explainability appropriate to the user, and a route for escalation when confidence or authority is insufficient."], points: ["Automate deterministic work first", "Make confidence and evidence visible", "Keep high-consequence exceptions reviewable", "Design rollback, ownership, and auditability from the beginning"] },
      { heading: "Measure the system, not the demo", paragraphs: ["Automation demos naturally emphasize speed. Production measurement must go further: end-to-end lead time, exception rate, failed changes, rework, adoption, support demand, control effectiveness, and whether the customer received the intended outcome.", "A workflow that completes quickly but creates downstream investigation is not efficient. It has merely moved the cost to another team."] },
      { heading: "Human attention is the scarce resource", paragraphs: ["The strongest automation strategies treat expert attention as a limited portfolio. Routine work should become predictable and self-service. Human judgment should concentrate on ambiguity, learning, and consequential trade-offs.", "The goal is not zero humans. The goal is to spend human attention where it creates the most value—and give those humans better evidence when the decision reaches them."] },
    ],
    takeaway: "The best automation does not hide judgment. It protects judgment from being consumed by repetition.",
  },
};

