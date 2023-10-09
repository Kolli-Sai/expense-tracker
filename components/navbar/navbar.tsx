import React from "react";
import { TypographyH3, TypographyLead } from "../ui/typography";
import NextLink from "next/link";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../theme-switcher";
import NavbarAvatar from "./navbar-avatar";
import { DashboardLink } from "./dashboard-link";
import NavbarMenu from "./navbar-menu";
import { getAuthSession } from "@/lib/auth-options";
type Props = {};

const Navbar = async (props: Props) => {
  const { session } = await getAuthSession();
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
        {!session && (
          <div>
            <Button asChild>
              <NextLink href={"/login"}>Login</NextLink>
            </Button>
          </div>
        )}
        {session && (
          <div>
            <NavbarAvatar
              email={session?.user.email as string}
              image={session?.user.image as string}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
