import { TypographyH3 } from "@/components/ui/typography";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const ViewAllPage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (!session) {
    return redirect("/login");
  }
  return <TypographyH3>ViewAllPage</TypographyH3>;
};

export default ViewAllPage;
