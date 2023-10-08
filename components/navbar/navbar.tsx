import React from "react";
import { TypographyH3, TypographyLead } from "../ui/typography";
import NextLink from "next/link";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../theme-switcher";
import NavbarAvatar from "./navbar-avatar";
import { DashboardLink } from "./dashboard-link";
import NavbarMenu from "./navbar-menu";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" flex justify-between items-center py-6 sticky  top-0">
      <div>
        <div className=" hidden sm:block">
          <NextLink href={"/"}>
            <TypographyH3>
              <span className=" overline underline-offset-4 decoration-primary decoration-4">
                EXPENSE
              </span>
              &nbsp;
              <span className=" underline underline-offset-4 decoration-primary decoration-4">
                TRACKER
              </span>
            </TypographyH3>
          </NextLink>
        </div>
        <div className=" sm:hidden">
          <NavbarMenu />
        </div>
      </div>
      <div className=" flex justify-start items-center gap-4">
        <div className=" hidden sm:block">
          <DashboardLink />
        </div>
        <div>
          <ThemeSwitcher />
        </div>
        <div>
          <Button asChild>
            <NextLink href={"/login"}>Login</NextLink>
          </Button>
        </div>
        <div>
          <NavbarAvatar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
