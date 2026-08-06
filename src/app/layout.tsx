import "./globals.css";

import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NuvoraScripts } from "@/components/nuvora-scripts";

export const metadata: Metadata = {
  metadataBase: new URL("https://nuvora.vercel.app"),

  title: {
    default: "Nuvora - Sustainable Architecture & Real Estate Template",
    template: "%s - Nuvora",
  },

  description:
    "Nuvora is a modern template for sustainable architecture and real estate brands, featuring clean layouts, project showcases, and eco-focused storytelling to highlight green design, innovation, and responsible development.",

  openGraph: {
    title: "Nuvora - Sustainable Architecture & Real Estate Template",
    description:
      "Nuvora is a modern template for sustainable architecture and real estate brands, featuring clean layouts, project showcases, and eco-focused storytelling.",
    images: ["/assets/images/Social-share.webp"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nuvora - Sustainable Architecture & Real Estate Template",
    description:
      "Nuvora is a modern template for sustainable architecture and real estate brands, featuring clean layouts, project showcases, and eco-focused storytelling.",
    images: ["/assets/images/Social-share.webp"],
  },

  icons: {
    icon: "/assets/images/favicon.svg",
    apple: "/assets/images/webclip.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="js">
     <head>
  <link rel="stylesheet" href="/assets/fonts/fonts.css" />
  <link rel="stylesheet" href="/assets/css/styles.css" />
</head>

      <body>
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
      </body>
    </html>
  );
}