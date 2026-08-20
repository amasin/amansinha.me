import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://amansinha.me";
  return ["", "/resume", "/work/enterprise-voice", "/work/platform-automation", "/work/usage-intelligence", "/work/billzwise"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" : "yearly", priority: path === "" ? 1 : .8 }));
}
