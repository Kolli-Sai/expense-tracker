/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypographyH2, TypographyLead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
function NotFound() {
  const router = useRouter();
  return (
    <section className="text-primary body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="not-found svg"
          src="/not-found.svg"
          width={720}
          height={600}
        />
        <div className="text-center lg:w-2/3 w-full space-y-4">
          <TypographyH2>404 Not Found</TypographyH2>
          <TypographyLead>
            Sorry, the page you're looking for doesn't exist.
          </TypographyLead>
          <div className="flex justify-center">
            <Button className="" onClick={() => router.back()}>
              <MoveLeft className=" w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
