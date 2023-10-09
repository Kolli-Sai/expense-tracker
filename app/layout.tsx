import React from "react";
import "@/styles/globals.css";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar/navbar";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Layout>
              <Navbar />
            </Layout>
            <Separator />
            <Layout>
              <main className=" py-12">{props.children}</main>
            </Layout>
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
