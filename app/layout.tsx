import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://amansinha.me"),
  title: { default: "Aman Sinha — Product Leader & Platform Builder", template: "%s | Aman Sinha" },
  description: "Product and platform leader turning complex enterprise systems into trusted products through strategy, customer insight, and automation.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: "https://amansinha.me", siteName: "Aman Sinha",
    title: "Aman Sinha — Product Leader & Platform Builder",
    description: "Turning complex enterprise platforms into trusted products through strategy, customer insight, and automation.",
    images: [{ url: "/og.png", width: 1731, height: 907, alt: "Aman Sinha — Product leader. Platform builder. Complex to clear." }],
  },
  twitter: { card: "summary_large_image", title: "Aman Sinha — Product Leader & Platform Builder", description: "Turning complex enterprise platforms into trusted products.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
