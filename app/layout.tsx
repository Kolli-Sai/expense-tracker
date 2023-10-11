import React from "react";
import "@/styles/globals.css";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar/navbar";
import { Separator } from "@/components/ui/separator";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import { Metadata } from "next";
import { baseUrl } from "@/lib/base-url";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Expense Tracker",
    template: "%s | Expense Tracker",
  },
  description:
    "A simple expense tracker app built with Next.js, Next Auth, Shadcn Ui and with Prisma ORM.",
  creator: "Kolli Sai",
  publisher: "Kolli Sai",
  generator: "Next.js",
  applicationName: "Expense Tracker",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Kolli Sai", url: "https://sai-portofolio.vercel.app//" }],
  colorScheme: "dark light",
  keywords: [
    "Expense Tracker",
    "Next.js",
    "Next Auth",
    "Shadcn Ui",
    "Prisma ORM",
    "kolli sai expense tracker",
    "kolli sai expense tracker app",
    "kolli sai apps",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: "#ff0000",
  category: "technology",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["saik98187@gmail.com", "https://sai-portofolio.vercel.app//"],
    },
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: `${baseUrl}/manifest.json`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Expense Tracker",
    title: "Expense Tracker",
    description:
      "A simple expense tracker app built with Next.js, Next Auth, Shadcn Ui and with Prisma ORM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expense Tracker",
    description:
      "A simple expense tracker app built with Next.js, Next Auth, Shadcn Ui and with Prisma ORM.",
    // siteId: "1467726470533754880",
    creator: "@saik98187",
    site: "/",
    // creatorId: "1467726470533754880",
  },
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <Layout>
            <Navbar />
          </Layout>
          <Separator />
          <Layout>
            <main className=" py-12">{props.children}</main>
          </Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
