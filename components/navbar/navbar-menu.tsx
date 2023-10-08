"use client";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NextLink from "next/link";

import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
type Props = {};

const NavbarMenu = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"ghost"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle className=" py-4">
              <span className=" overline underline-offset-4 decoration-indigo-600 decoration-4">
                EXPENSE
              </span>
              &nbsp;
              <span className=" underline underline-offset-4 decoration-indigo-600 decoration-4">
                TRACKER
              </span>
            </SheetTitle>
            <Separator className="" />
            <SheetDescription>
              <div className=" flex flex-col gap-2 py-6">
                <div>
                  <Button className=" w-full" asChild>
                    <NextLink href={"/"}>Home</NextLink>
                  </Button>
                </div>
                <div>
                  <Button className=" w-full" asChild>
                    <NextLink href={"/dashboard"}>Dashboard</NextLink>
                  </Button>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavbarMenu;
