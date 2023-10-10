import {
  expenseSchemaWithExtra,
  incomeSchema,
  incomeSchemaWithExtra,
} from "@/schemas";
import { expenseSchema } from "@/schemas";
import { z } from "zod";

export type IncomeSchemaType = z.infer<typeof incomeSchema>;

export type ExpenseSchemaType = z.infer<typeof expenseSchema>;

export type IncomeSchemaTypeWithExtra = z.infer<typeof incomeSchemaWithExtra>;
export type ExpenseSchemaTypeWithExtra = z.infer<typeof expenseSchemaWithExtra>;
