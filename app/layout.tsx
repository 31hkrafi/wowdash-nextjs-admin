import { LoadingProvider } from "@/contexts/LoadingContext";
import { ProgressBarProvider } from "@/components/progress-bar-provider";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Wowdash - Tailwind & Next.js Admin Dashboard with shadcn UI (Typescript)",
  description: "WowDash - Admin Dashboard Multipurpose Next.js, TypeScript, ShadCn UI & Tailwind Template",
  metadataBase: new URL("https://wowdash-nextjs-admin-grzm.vercel.app"),
  openGraph: {
    title: "Wowdash - Admin Dashboard UI",
    description: "A modern, responsive admin dashboard template built with Next.js, Tailwind CSS, and ShadCN UI.",
    url: "https://wowdash-nextjs-admin-grzm.vercel.app",
    siteName: "Wowdash",
    images: [
      {
        url: "https://wowdash-nextjs-admin-grzm.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wowdash Admin Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wowdash - Admin Dashboard UI",
    description: "A modern, responsive admin dashboard template built with Next.js, Tailwind CSS, and ShadCN UI.",
    images: ["https://wowdash-nextjs-admin-grzm.vercel.app/og-image.jpg"],
  },
};

// 🚀 Optimized viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e2734" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 🔗 DNS Prefetch & Preconnect for faster loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ProgressBarProvider>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
