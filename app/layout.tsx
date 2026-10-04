import { profile } from "./profile";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://amansinha.me"),
  title: { default: profile.title, template: "%s | Aman Sinha" },
  description: profile.description,
  applicationName: "Aman Sinha — Product Leadership Portfolio",
  authors: [{ name: "Aman Sinha", url: "https://amansinha.me" }],
  creator: "Aman Sinha",
  publisher: "Aman Sinha",
  category: "Product Management",
  formatDetection: { email: false, address: false, telephone: false },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website", url: "https://amansinha.me", siteName: "Aman Sinha", locale: "en_IN",
    title: profile.title,
    description: "Enterprise platforms, AI automation, and measurable product impact. Lead Digital Product Manager, VP at Wells Fargo.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aman Sinha — Lead Digital Product Manager, VP. Enterprise platforms. Measurable product impact." }],
  },
  twitter: { card: "summary_large_image", title: profile.title, description: "Enterprise platforms. Measurable product impact.", images: ["/og.png"] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f4f1e9", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

