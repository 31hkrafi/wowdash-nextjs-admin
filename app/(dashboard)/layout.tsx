import { ClientRoot } from "@/app/client-root";
import { SessionProvider } from "next-auth/react";
import { cookies } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SessionProvider>
      <ClientRoot defaultOpen={defaultOpen}>{children}</ClientRoot>
    </SessionProvider>
  );
}

