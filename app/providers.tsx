"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

type Props = {
  children: React.ReactNode;
};

const Providers = (props: Props) => {
  return (
    <>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
          <Toaster />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default Providers;
