import { TypographyH2, TypographyH3 } from "@/components/ui/typography";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import NextLink from "next/link";
import { MoveRight, Plus } from "lucide-react";

import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth-options";
type Props = {};

const DashboardPage = async (props: Props) => {
  const { session } = await getAuthSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <div className=" my-6 flex justify-end items-center gap-4">
        <Button asChild>
          <NextLink href={"/new"}>
            Add New
            <Plus className="ml-2" size={20} />
          </NextLink>
        </Button>
        <Button asChild>
          <NextLink href={"/view-all"}>
            View All
            <MoveRight className="ml-2" size={20} />
          </NextLink>
        </Button>
      </div>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <div></div>
        <div>
          <div className=" grid grid-cols-1 gap-4  md:grid-cols-2 md:gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Income</CardTitle>
                <CardDescription>total income upto now</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expenses</CardTitle>
                <CardDescription>total expense upto now</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Savings</CardTitle>
                <CardDescription>total savings upto now</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Loss</CardTitle>
                <CardDescription>total loss upto now</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
