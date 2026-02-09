"use client";

import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import dynamic from "next/dynamic";
import { ReactNode, Suspense } from "react";

// 🚀 Dynamic imports for non-critical components (loaded after initial render)
const ThemeCustomizer = dynamic(
  () => import("@/components/theme-customizer/theme-customizer"),
  { ssr: false }
);

const Toaster = dynamic(
  () => import("react-hot-toast").then((mod) => mod.Toaster),
  { ssr: false }
);

export function ClientRoot({
  defaultOpen,
  children,
}: {
  defaultOpen: boolean;
  children: ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="dashboard-body-wrapper grow-[1] flex flex-col">
          <SidebarInset>
            <Header />
          </SidebarInset>
          <div className="dashboard-body bg-neutral-100 dark:bg-[#1e2734] md:p-6 p-4 flex-1">
            {children}
          </div>
          <Footer />
        </main>
        {/* Non-critical components loaded lazily */}
        <Suspense fallback={null}>
          <ThemeCustomizer />
        </Suspense>
        <Suspense fallback={null}>
          <Toaster position="top-center" reverseOrder={false} />
        </Suspense>
      </SidebarProvider>
    </ThemeProvider>
  );
}
