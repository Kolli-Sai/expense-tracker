import { incomeSchema } from "@/schemas";
import { expenseSchema } from "@/schemas";
import { z } from "zod";

export type IncomeSchemaType = z.infer<typeof incomeSchema>;

export type ExpenseSchemaType = z.infer<typeof expenseSchema>;