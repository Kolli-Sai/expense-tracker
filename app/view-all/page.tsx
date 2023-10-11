// @ts-nocheck
import { TypographyH3 } from "@/components/ui/typography";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import React from "react";
import { DataTable as IncomeDataTable } from "@/components/tables/data-table";
import { DataTable } from "@/components/tables/expense-data-table";
import { columns as IncomeColumns } from "@/components/tables/columns";
import { columns } from "@/components/tables/expenses-columns";
import prisma from "@/lib/db";
type Props = {};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "View All",
  openGraph: {
    url: "/viewall",
    title: "View All",
  },
  twitter: {
    site: "@sai_kolli",
    title: "View All",
  },
};

const ViewAllPage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (!session) {
    return redirect("/login");
  }
  const incomeRes = await prisma.income.findMany({
    where: {
      createdBy: session.user.id,
    },
  });
  const expensesRes = await prisma.expense.findMany({
    where: {
      createdBy: session.user.id,
    },
  });
  const incomeData = incomeRes.map((item) => {
    return {
      ...item,
      date: new Date(item.date).toLocaleDateString(),
      createdAt: new Date(item.createdAt).toLocaleDateString(),
    };
  });

  const expensesData = expensesRes.map((item) => {
    return {
      ...item,
      date: new Date(item.date).toLocaleDateString(),
      createdAt: new Date(item.createdAt).toLocaleDateString(),
    };
  });
  return (
    <>
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Income</TabsTrigger>
          <TabsTrigger value="password">Expense</TabsTrigger>
        </TabsList>
        <TabsContent value="account" >
          <IncomeDataTable columns={IncomeColumns} data={incomeData} />
        </TabsContent>
        <TabsContent value="password">
          <DataTable columns={columns} data={expensesData} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ViewAllPage;
