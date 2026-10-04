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
    role: "Global Product Owner — Enterprise Voice", timeline: "2022—Present", scale: "200K+ endpoints · 34M+ minutes/month",
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
      { value: "55K+", label: "legacy endpoint retirement targets" },
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
      { value: "$6M", label: "professional-services cost-avoidance opportunity" },
      { value: "APIs", label: "reusable provisioning capabilities" },
      { value: "ZTP", label: "next-generation provisioning direction" },
    ],
    demonstrates: ["Internal product management", "Workflow discovery", "API strategy", "AI automation", "Adoption design"],
    evidenceNote: "This case study describes enterprise automation work. The $6M figure is a cost-avoidance opportunity, not a claim of realized annual savings. Implementation details are generalized.",
    reflection: "Automation earns trust when it makes controls visible. The goal is not to remove humans from every decision—it is to reserve human judgment for the decisions that matter.",
  },
  "usage-intelligence": {
    slug: "usage-intelligence", index: "03", eyebrow: "Data product · Platform economics",
    title: "Turning platform telemetry into decisions leaders could act on.",
    summary: "Usage, observability, and chargeback capabilities that converted operational data into financial clarity and roadmap evidence.",
    role: "Product Owner — Enterprise Voice", timeline: "2022—Present", scale: "~200K devices",
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
      { value: "52%", label: "relative reduction in invalid billing" },
      { value: "200K", label: "endpoints made visible" },
    ],
    demonstrates: ["Data product strategy", "Platform economics", "Metric design", "Build-versus-buy", "Stakeholder influence"],
    evidenceNote: "The narrative is sanitized and figures are approximate. Screens and underlying data cannot be shared because they belong to a regulated enterprise environment.",
    reflection: "A dashboard is not a data product unless it changes a decision. Starting from the decision—not the available data—kept the work focused on value.",
  },
  "consumer-intelligence": {
    "slug": "consumer-intelligence",
    "index": "04",
    "eyebrow": "Independent build · Consumer intelligence",
    "title": "Turning receipts into useful local price intelligence.",
    "summary": "An AI-assisted consumer product that converts household receipts into spending records and community price observations.",
    "role": "Product strategy & hands-on build",
    "timeline": "Independent product",
    "scale": "Web · AI · Backend",
    "contribution": "Own the product proposition, receipt-to-insight experience, roadmap, and hands-on implementation across the public website, app, and backend.",
    "customer": "Households trying to organize purchases and understand prices at nearby stores.",
    "accent": "orange",
    "problem": "Receipts contain useful purchase evidence, but it is difficult to compare prices when item names, quantities, units, and store identities vary.",
    "approach": [
        "Built receipt extraction and processing into a structured item, quantity, price, and store model.",
        "Developed public product and store discovery around shared price observations.",
        "Iterated on unit handling, listing reliability, and search discovery as the product evolved."
    ],
    "decisions": [
        {
            "title": "Compare like with like",
            "detail": "Treat quantities and units as part of the product experience; a per-kilogram price cannot be compared directly with a package price."
        },
        {
            "title": "Separate observations from offers",
            "detail": "Present receipt-derived prices with dates and supporting observations rather than implying that a past purchase is a current store offer."
        },
        {
            "title": "Build privacy into publication",
            "detail": "Keep private receipt information separate from shared item and store observations, respecting the consent boundary."
        }
    ],
    "tradeoff": "Public price discovery creates value only when comparisons remain understandable and private purchase details stay protected.",
    "measurement": "The learning priorities are successful receipt processing, item and unit accuracy, price coverage, freshness, and repeat use. No adoption, revenue, or savings figures are claimed here.",
    "outcomes": [
        {
            "value": "AI",
            "label": "receipt extraction and processing"
        },
        {
            "value": "Local",
            "label": "product and store price discovery"
        },
        {
            "value": "Web",
            "label": "public discovery and signed-in app"
        }
    ],
    "demonstrates": [
        "Zero-to-one product ownership",
        "AI product design",
        "Data quality",
        "Consumer trust",
        "Hands-on delivery"
    ],
    "evidenceNote": "Independent product work. The product identity and URLs are private; this case study shares the problem and capabilities without commercial traction claims.",
    "reflection": "The quality of an AI product depends on the decisions made after extraction: what data is comparable, what can be shared, and what the user can confidently act on."
},
  "cloud-modernization": {
    "slug": "cloud-modernization",
    "index": "05",
    "eyebrow": "Enterprise platform · Cloud modernization",
    "title": "Owning the move from virtual machines to a modern application platform.",
    "summary": "Product ownership for migrating internal applications from on-premises virtual machines to OpenShift and Kubernetes.",
    "role": "Product Owner",
    "timeline": "Wells Fargo",
    "scale": "Internal enterprise applications",
    "contribution": "Own migration priorities and roadmap alignment, working with application engineering, platform, and operations teams on the move to OpenShift.",
    "customer": "Internal application users and the teams responsible for delivering and operating enterprise services.",
    "accent": "blue",
    "problem": "A platform migration affects release processes, support ownership, and service continuity as well as hosting. Those concerns must be reflected in the product roadmap.",
    "approach": [
        "Translate the platform migration into application-level product priorities.",
        "Coordinate application dependencies with engineering, platform, and operations stakeholders.",
        "Balance modernization work with ongoing user needs and lifecycle obligations."
    ],
    "decisions": [
        {
            "title": "Define the service outcome",
            "detail": "Evaluate the migration in terms of the application and its users, rather than treating container deployment as the whole result."
        },
        {
            "title": "Make dependencies visible",
            "detail": "Connect application priorities with the requirements of the shared OpenShift/Kubernetes platform."
        },
        {
            "title": "Keep operations in the product scope",
            "detail": "Include support and operational readiness in migration discussions alongside engineering delivery."
        }
    ],
    "tradeoff": "Modernization must progress while existing applications continue to serve internal users. Sequencing depends on application readiness and operational needs.",
    "measurement": "Relevant measures include application readiness, migration milestones, service continuity, and support readiness. No performance improvement or completed-migration count is claimed.",
    "outcomes": [
        {
            "value": "VM → OCP",
            "label": "application modernization scope"
        },
        {
            "value": "Kubernetes",
            "label": "target application platform"
        },
        {
            "value": "Product",
            "label": "roadmap and stakeholder ownership"
        }
    ],
    "demonstrates": [
        "Platform product management",
        "Cloud modernization",
        "Dependency prioritization",
        "Operational readiness",
        "Technical fluency"
    ],
    "evidenceNote": "Employer work described at a general level. Application names, architecture, and internal implementation details are omitted.",
    "reflection": "Platform modernization is a product decision when the roadmap accounts for the people who use, build, and operate the service."
},
  "ai-learning": {
    "slug": "ai-learning",
    "index": "06",
    "eyebrow": "Independent build · Generative AI learning",
    "title": "Building personalized learning with generative AI.",
    "summary": "An independent AI-powered learning platform using generative AI to produce personalized educational content.",
    "role": "Product concept & hands-on build",
    "timeline": "Independent product",
    "scale": "AI-powered educational content",
    "contribution": "Developed the learning platform and its generative-AI content capability as an independent product project.",
    "customer": "Learners looking for educational explanations adapted to their learning needs.",
    "accent": "lime",
    "problem": "Generic educational material cannot always match an individual learner’s topic, context, and preferred explanation.",
    "approach": [
        "Applied generative AI to personalized educational content.",
        "Connected the learning proposition with hands-on product implementation.",
        "Use the project to explore the relationship between content generation and useful learning experiences."
    ],
    "decisions": [
        {
            "title": "Start with the learner’s need",
            "detail": "Frame AI-generated content around a learning goal rather than the ability to generate more text."
        },
        {
            "title": "Treat quality as a product requirement",
            "detail": "Clarity, correctness, and relevance are the criteria for evaluating the experience."
        },
        {
            "title": "Build to understand the constraints",
            "detail": "Hands-on implementation connects product choices with the practical limits of generative AI."
        }
    ],
    "tradeoff": "Personalization offers flexibility, while educational content still needs accuracy and a clear learning purpose.",
    "measurement": "Useful evaluation measures would include content correctness, explanation clarity, and whether learners can apply what they learned. These are evaluation priorities, not reported results.",
    "outcomes": [
        {
            "value": "GenAI",
            "label": "educational content generation"
        },
        {
            "value": "Learning",
            "label": "personalized content focus"
        },
        {
            "value": "Built",
            "label": "independent implementation"
        }
    ],
    "demonstrates": [
        "AI product development",
        "Learning experience design",
        "Zero-to-one building",
        "Product and engineering fluency"
    ],
    "evidenceNote": "Independent project described in the supplied CV. Identity and URLs are private; user and learning-outcome metrics are not claimed.",
    "reflection": "Generated content is a capability. Helping someone understand a subject is the product goal."
},
  "ai-discovery": {
    "slug": "ai-discovery",
    "index": "07",
    "eyebrow": "Independent build · AI discovery",
    "title": "Making AI tools easier to evaluate.",
    "summary": "A structured discovery product for comparing AI tools through use cases, pricing, editorial information, and moderated reviews.",
    "role": "Product ownership & implementation",
    "timeline": "Independent product",
    "scale": "Structured catalog · Reviews · Search",
    "contribution": "Developed a WordPress-based catalog with structured pricing, editorial fields, taxonomies, review moderation, and search-readable product information.",
    "customer": "People evaluating AI tools for a task and looking for clear pricing and capability information.",
    "accent": "paper",
    "problem": "AI products change rapidly, and descriptions often make it difficult to distinguish use cases, billing units, free plans, and paid tiers.",
    "approach": [
        "Model tools by category, use case, platform, and pricing structure.",
        "Separate editorial information from user ratings and provide review moderation.",
        "Support structured content import and machine-readable catalog markup."
    ],
    "decisions": [
        {
            "title": "Make pricing comparable",
            "detail": "Represent pricing models, tiers, billing units, and trial availability as structured data."
        },
        {
            "title": "Separate sources of opinion",
            "detail": "Distinguish editorial reviews from community ratings so visitors can understand the source of a recommendation."
        },
        {
            "title": "Design for discovery",
            "detail": "Use category and use-case navigation with structured markup to make the catalog easier to find and understand."
        }
    ],
    "tradeoff": "A broader catalog increases coverage but creates a larger freshness burden. Pricing and capability information require continuing verification.",
    "measurement": "Evaluation priorities include pricing completeness, content freshness, review quality, and successful tool discovery. No traffic, conversion, or revenue results are claimed.",
    "outcomes": [
        {
            "value": "Pricing",
            "label": "tiers, billing units, and trial fields"
        },
        {
            "value": "Reviews",
            "label": "editorial and moderated community input"
        },
        {
            "value": "Search",
            "label": "taxonomy and structured markup"
        }
    ],
    "demonstrates": [
        "Information architecture",
        "Content product management",
        "Data modeling",
        "Discovery experience",
        "Hands-on building"
    ],
    "evidenceNote": "Capabilities are grounded in the project repository. The product identity, domains, and repository links remain private.",
    "reflection": "A discovery product earns trust by making comparisons clear and keeping the underlying information current."
},
};
