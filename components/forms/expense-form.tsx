"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { ExpenseSchemaType, IncomeSchemaType } from "@/types";
import { expenseSchema, incomeSchema } from "@/schemas";

/**date */
import { format } from "date-fns";
import { Calendar as CalendarIcon, RotateCw } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createExpense } from "@/actions";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
type Props = {};

const ExpenseForm = (props: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<ExpenseSchemaType>({
    mode: "onTouched",
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      title: "",
      description: "",
      amount: 0,
      category: "Transport",
      date: new Date(),
    },
  });

  /**handleSubmit */
  const onSubmit = async (props: ExpenseSchemaType) => {
    console.log(props);
    try {
      const { success, error } = await createExpense(props);
      if (success) {
        form.reset();
        toast({
          description: "Expense created successfully",
        });
        router.push("/dashboard");
      } else {
        throw new Error(error);
      }
    } catch (error: any) {
      toast({
        description: error.message,
        title: "Error",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          {/**title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="ex : Movies" {...field} />
                </FormControl>

                <FormMessage>
                  {form.formState.errors.title?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/**description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="ex : went to jailer movie " {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.description?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/**amount */}
          <FormField
            control={form.control}
            name="amount"
            render={({ field: { onChange, value } }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="amount"
                    {...form.register("amount", { valueAsNumber: true })}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.amount?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/**category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a category</SelectLabel>
                      <SelectItem value={"Food"}>Food</SelectItem>
                      <SelectItem value="Transport">Transport</SelectItem>
                      <SelectItem value="Entertainment">
                        Entertainment
                      </SelectItem>
                      <SelectItem value="Bills">Bills</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <FormMessage>
                  {form.formState.errors.category?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/**date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="center">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date: Date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage>{form.formState.errors.date?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/**submit */}
          <Button variant="default" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && (
              <RotateCw className="animate-spin mr-2 w-4 h-4" />
            )}
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ExpenseForm;
