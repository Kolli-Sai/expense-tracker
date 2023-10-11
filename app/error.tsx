"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" flex flex-col gap-6 justify-center items-center h-[400px]">
      <TypographyH1>
        {error.message || "An error occurred while rendering the page"}
      </TypographyH1>
      <div className=" flex justify-center gap-4 items-center">
        <Button onClick={() => reset()}>Try again</Button>
        <Button className="" variant={"secondary"}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
