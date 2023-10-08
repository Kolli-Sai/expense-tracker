import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

const AddNew = (props: Props) => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className=" w-400 max-w-md">
          <Tabs defaultValue="income" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="expense">Expense</TabsTrigger>
            </TabsList>
            <TabsContent value="income">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="expense">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AddNew;
