"use client";
import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { RotateCw } from "lucide-react";
type Props = {};

const SignoutButton = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut({
        redirect: false,
      });
      setIsLoading(false);
      toast({
        description: "Logout successful",
      });
      router.push("/");
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };
  return (
    <>
      <Button disabled={isLoading} onClick={handleLogout}>
        {isLoading && <RotateCw className="mr-2 w-4 h-4 animate-spin" />}
        Sign out
        <LogOut className="ml-2" size={20} />
      </Button>
    </>
  );
};

export default SignoutButton;
