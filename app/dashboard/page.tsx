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
import { IndianRupee, MoveRight, Plus } from "lucide-react";

import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth-options";
import { getAllDetails } from "@/actions";
type Props = {};

const DashboardPage = async (props: Props) => {
  const { session } = await getAuthSession();

  if (!session) {
    return redirect("/login");
  }
  const { success, error, data } = await getAllDetails();
  console.log({
    getAllDetailsData: data,
  });
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
              <CardContent className=" flex gap-1  text-blue-600 lining-nums">
                <IndianRupee className=" w-8 h-8 mr-2" />
                <TypographyH3 className="">{data?.income}</TypographyH3>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expenses</CardTitle>
                <CardDescription>total expense upto now</CardDescription>
              </CardHeader>
              <CardContent className=" flex gap-1 text-orange-600 lining-nums">
                <IndianRupee className=" w-8 h-8 mr-2" />
                <TypographyH3 className=" ">{data?.expense}</TypographyH3>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Savings</CardTitle>
                <CardDescription>total savings upto now</CardDescription>
              </CardHeader>
              <CardContent className=" flex gap-1 text-green-600 lining-nums">
                <IndianRupee className=" w-8 h-8 mr-2" />
                <TypographyH3 className=" ">{data?.savings}</TypographyH3>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Loss</CardTitle>
                <CardDescription>total loss upto now</CardDescription>
              </CardHeader>
              <CardContent className=" flex gap-1  text-red-600 lining-nums">
                <IndianRupee className=" w-8 h-8 mr-2" />
                <TypographyH3 className="">
                  {data?.loss && data?.loss > 0 ? "-" : ""}
                  &nbsp;
                  {data?.loss}
                </TypographyH3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
