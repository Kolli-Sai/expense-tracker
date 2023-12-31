import { z } from "zod";

export const incomeSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title cannot be empty" })
    .max(15, { message: "Title must be less than 15 characters" }),
  description: z
    .string()
    .min(1, { message: "Description cannot be empty" })
    .max(30, { message: "Description must be less than 30 characters" })
    .optional(),
  amount: z.number().positive({ message: "Amount must be a positive number" }),
  category: z.enum(["Salary", "Gifts", "Investments", "Others"], {
    required_error: "Category is required",
  }),
  date: z.date({
    required_error: "Date is required",
  }), // Add the date field
});

export const incomeSchemaWithExtra = incomeSchema.extend({
  type: z.enum(["income"], {
    required_error: "Type is required",
  }),
  createdAt: z.date({
    required_error: "CreatedAt is required",
  }),
  // updatedAt: z.date({
  //   required_error: "UpdatedAt is required",
  // }),
  id: z.string({
    required_error: "Id is required",
  }),
});

export const expenseSchemaWithExtra = incomeSchema.extend({
  type: z.enum(["expense"], {
    required_error: "Type is required",
  }),
  createdAt: z.date({
    required_error: "CreatedAt is required",
  }),
  // updatedAt: z.date({
  //   required_error: "UpdatedAt is required",
  // }),
  id: z.string({
    required_error: "Id is required",
  }),
});

export const expenseSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title cannot be empty" })
    .max(15, { message: "Title must be less than 15 characters" }),
  description: z
    .string()
    .min(1, { message: "Description cannot be empty" })
    .max(30, { message: "Description must be less than 30 characters" })
    .optional(),
  amount: z
    .number()
    .positive({ message: "Amount must be a positive number" })
    .nonnegative({ message: "Amount cannot be negative" }),
  category: z.enum(["Food", "Transport", "Bills", "Entertainment", "Others"], {
    required_error: "Category is required",
  }),
  date: z.date({
    required_error: "Date is required",
  }), // Add the date field
});
