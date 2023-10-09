import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyH3,
  TypographyLead,
} from "@/components/ui/typography";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import NextLink from "next/link";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";

type Props = {};

const HomePage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <>
      <section className="text-foreground body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <TypographyH3>
              Welcome to <br />
              <span className="text-primary">Expense Tracker</span>
            </TypographyH3>
            <TypographyLead className=" my-4">
              This is a simple expense tracker app built with Next.js, Next
              Auth, Shadcn Ui and with Prisma ORM.
            </TypographyLead>
            <div className="flex justify-center">
              <Button asChild>
                <NextLink href={"/login"}>
                  Get Started
                  <MoveRight className="ml-2" size={20} />
                </NextLink>
              </Button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="HomePage Svg"
              src="/home.svg"
              width={720}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
