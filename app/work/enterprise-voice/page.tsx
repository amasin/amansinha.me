import type { Metadata } from "next";
import { CaseStudyPage } from "../CaseStudyPage";
import { caseStudies } from "../case-studies";
const study = caseStudies["enterprise-voice"];
export const metadata: Metadata = { title: `${study.title} — Aman Sinha`, description: study.summary, openGraph: { title: study.title, description: study.summary, images: [] }, twitter: { title: study.title, description: study.summary, images: [] } };
export default function Page() { return <CaseStudyPage study={study} />; }
