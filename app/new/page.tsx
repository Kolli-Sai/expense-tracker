import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IncomeForm from "@/components/forms/income-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ExpenseForm from "@/components/forms/expense-form";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Add New",
  openGraph: {
    url: "/addnew",
    title: "Add New",
  },
  twitter: {
    site: "@sai_kolli",
    title: "Add New",
  },
};

const AddNew = async (props: Props) => {
  const { session } = await getAuthSession();
  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className=" p-4">
          <Tabs
            defaultValue="income"
            className="w-[280px] sm:w-[400px] max-w-md flex-shrink"
          >
            <TabsList className=" w-full">
              <TabsTrigger value="income" className=" w-full">
                Income
              </TabsTrigger>
              <TabsTrigger value="expense" className="w-full">
                Expense
              </TabsTrigger>
            </TabsList>
            <TabsContent value="income">
              <Card>
                <CardHeader>
                  <CardTitle>InCome</CardTitle>
                  <CardDescription>
                    Add your income details here
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <IncomeForm />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="expense">
              <Card>
                <CardHeader>
                  <CardTitle>Expenses</CardTitle>
                  <CardDescription>
                    Add your expense details here
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpenseForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AddNew;
