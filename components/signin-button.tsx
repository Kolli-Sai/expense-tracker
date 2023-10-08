'use client'
import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

type Props = {};

const SigninButton = (props: Props) => {
  return (
    <>
      <Button>
        Sign in with Github
        <Github className="ml-2" size={20} />
      </Button>
    </>
  );
};

export default SigninButton;
