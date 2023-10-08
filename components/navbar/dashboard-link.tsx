"use client";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { TypographyLead } from "../ui/typography";
export const DashboardLink = () => {
  const pathname = usePathname();
  const isActive = pathname === "/dashboard";
  console.log({
    dashboardLinkComponent: {
      pathname,
      isActive,
    },
  });
  return (
    <NextLink href="/dashboard">
      <TypographyLead
        className={`${
          isActive ? "text-primary underline underline-offset-4" : ""
        }`}
      >
        Dashboard
      </TypographyLead>
    </NextLink>
  );
};
