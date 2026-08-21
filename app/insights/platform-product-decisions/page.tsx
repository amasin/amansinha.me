import type { Metadata } from "next";
import { InsightPage } from "../InsightPage";
import { insights } from "../insights";
const insight = insights["platform-product-decisions"];
export const metadata: Metadata = { title: insight.title, description: insight.summary, alternates: { canonical: `https://amansinha.me/insights/${insight.slug}` }, openGraph: { type: "article", url: `https://amansinha.me/insights/${insight.slug}`, title: insight.title, description: insight.summary, publishedTime: insight.published, authors: ["Aman Sinha"], images: [] }, twitter: { title: insight.title, description: insight.summary, images: [] } };
export default function Page() { return <InsightPage insight={insight} />; }

