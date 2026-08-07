"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { NuvoraScripts } from "../nuvora-scripts";


export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/keystatic")) {
    return children;
  }

  return (
    <>
      <div className="line-bg">
        <div className="line-bg">
          <div className="line" />
          <div className="line" />
        </div>
      </div>

      <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>

      <NuvoraScripts />
    </>
  );
}
