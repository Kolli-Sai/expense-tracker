import { Button } from "@/components/ui/button";
import {
  TypographyH2,
  TypographyH3,
  TypographyLead,
} from "@/components/ui/typography";
import { MoveRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import SignoutButton from "@/components/signout-button";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
type Props = {};

const LogoutPage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <section className="text-foreground body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <TypographyH3>Sign Out of your account</TypographyH3>
            <TypographyLead className=" my-4">
              Click the button below to sign out of your account
            </TypographyLead>
            <div className="flex justify-center">
              {/**Signout button */}
              <SignoutButton />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="HomePage Svg"
              src="/logout2.svg"
              width={720}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoutPage;
