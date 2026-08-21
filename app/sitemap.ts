import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://amansinha.me";
  const updated = new Date("2026-08-21T00:00:00+05:30");
  const routes = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/resume", changeFrequency: "monthly" as const, priority: .9 },
    { path: "/insights", changeFrequency: "monthly" as const, priority: .9 },
    { path: "/work/enterprise-voice", changeFrequency: "yearly" as const, priority: .85 },
    { path: "/work/platform-automation", changeFrequency: "yearly" as const, priority: .85 },
    { path: "/work/usage-intelligence", changeFrequency: "yearly" as const, priority: .85 },
    { path: "/work/billzwise", changeFrequency: "yearly" as const, priority: .8 },
    { path: "/insights/platform-product-decisions", changeFrequency: "yearly" as const, priority: .8 },
    { path: "/insights/internal-product-adoption", changeFrequency: "yearly" as const, priority: .8 },
    { path: "/insights/automation-human-judgment", changeFrequency: "yearly" as const, priority: .8 },
  ];
  return routes.map(({ path, ...route }) => ({ url: `${base}${path}`, lastModified: updated, ...route }));
}

