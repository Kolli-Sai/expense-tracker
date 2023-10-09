"use client";
import React from "react";
import { Button } from "./ui/button";
import { Github, RotateCw } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

type Props = {};

const SigninButton = (props: Props) => {
  /**state */
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const login = await signIn("github", { callbackUrl });
      setIsLoading(false);
      if (login?.error) {
        throw new Error(login.error);
      } else {
        toast({
          description: "Login successful",
        });
      }
    } catch (error: any) {
      console.log({ errorinSignin: error });
      toast({
        description: error.message,
        variant: "destructive",
        title: "Error",
      });
    }
  };
  return (
    <>
      <Button onClick={handleLogin} disabled={isLoading}>
        {isLoading && <RotateCw className="mr-2 w-4 h-4 animate-spin" />}
        Sign in with Github
        <Github className="ml-2" size={20} />
      </Button>
    </>
  );
};

export default SigninButton;
