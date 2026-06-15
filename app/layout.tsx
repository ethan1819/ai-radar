import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "@/styles/globals.css";

export const viewport: Viewport = { themeColor: "#0a0a0f", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  title: { default: SITE.name + " — " + SITE.tagline, template: "%s — " + SITE.name },
  description: SITE.description,
  keywords: Array.from(SITE.keywords),
  metadataBase: new URL(SITE.url),
  openGraph: { type: "website", locale: SITE.locale, siteName: SITE.name, title: SITE.name, description: SITE.description },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.locale}>
      <body className="min-h-screen flex flex-col">
        <Suspense fallback={null}><Analytics /></Suspense>
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}