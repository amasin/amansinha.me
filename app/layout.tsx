import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://amansinha.me"),
  title: { default: "Aman Sinha | Senior Product Manager, Enterprise Platforms & AI", template: "%s | Aman Sinha" },
  description: "Senior product and platform leader in Bengaluru with 15+ years turning enterprise systems, AI automation, and data into trusted products and measurable outcomes.",
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
    title: "Aman Sinha | Senior Product Manager, Enterprise Platforms & AI",
    description: "Product clarity for high-stakes enterprise platforms—strategy, AI-powered automation, customer experience, and measurable outcomes.",
    images: [{ url: "/og.png", width: 1731, height: 907, alt: "Aman Sinha — Product leader. Platform builder. Complex to clear." }],
  },
  twitter: { card: "summary_large_image", title: "Aman Sinha | Senior Product Manager, Enterprise Platforms & AI", description: "Product clarity for high-stakes enterprise platforms.", images: ["/og.png"] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f4f1e9", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

