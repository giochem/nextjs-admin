import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import LeftSideBar from "@/components/layout/LeftSideBar";
import { ClerkProvider } from "@clerk/nextjs";
import TopBar from "@/components/layout/TopBar";
import { ToasterProvider } from "@/lib/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs - Admin Dashboard",
  description: "Admin dashboard to manage Nextjs's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <div className="flex max-lg:flex-col text-grey-1">
        <LeftSideBar />
        <TopBar />
        <div className="flex-1">{children}</div>
        </div>
        </body>
    </html>
    </ClerkProvider>
  );
}
