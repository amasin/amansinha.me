import type { Metadata } from "next";
import { CaseStudyPage } from "../CaseStudyPage";
import { caseStudies } from "../case-studies";
const study = caseStudies["platform-automation"];
export const metadata: Metadata = { title: study.title, description: study.summary, alternates: { canonical: `https://amansinha.me/work/${study.slug}` }, openGraph: { type: "article", url: `https://amansinha.me/work/${study.slug}`, title: study.title, description: study.summary, images: [] }, twitter: { title: study.title, description: study.summary, images: [] } };
export default function Page() { return <CaseStudyPage study={study} />; }

