import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <div>HomePage</div>
      <TypographyH1>Home Page</TypographyH1>
      <Button>Click me</Button>
    </>
  );
};

export default HomePage;
