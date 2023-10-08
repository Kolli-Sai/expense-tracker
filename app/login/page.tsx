import { TypographyH3, TypographyLead } from "@/components/ui/typography";
import React from "react";
import Image from "next/image";

import SigninButton from "@/components/signin-button";
type Props = {};

const LoginPage = (props: Props) => {
  return (
    <>
      <section className="text-primary-foreground body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="Login Svg"
              src="/login2.svg"
              width={720}
              height={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <TypographyH3 className=" text-foreground">Sign in to your account</TypographyH3>
            <TypographyLead className=" my-3">
              Click the button below to sign in to your account
            </TypographyLead>
            <div className="flex justify-center my-4">
              <SigninButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;