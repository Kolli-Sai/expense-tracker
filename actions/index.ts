"use server";
import { getAuthSession } from "@/lib/auth-options";
import prisma, { connectToDatabase } from "@/lib/db";
import { expenseSchema, incomeSchema } from "@/schemas";
import { ExpenseSchemaType, IncomeSchemaType } from "@/types";
import { revalidatePath } from "next/cache";

export const createIncome = async (props: IncomeSchemaType) => {
  const { session } = await getAuthSession();

  try {
    if (!session) {
      throw new Error("You must be logged in to create Income");
    }
    const validateData = incomeSchema.safeParse(props);
    if (!validateData.success) {
      throw new Error(validateData.error.message);
    }
    await connectToDatabase();

    const income = await prisma.income.create({
      data: {
        ...props,
        createdBy: session.user.id as string,
      },
    });

    revalidatePath("/dashboard", "page");
    return {
      success: true,
      data: income,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "Something went wrong",
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const createExpense = async (props: ExpenseSchemaType) => {
  const { session } = await getAuthSession();

  try {
    if (!session) {
      throw new Error("You must be logged in to create Expense");
    }
    const validateData = expenseSchema.safeParse(props);
    if (!validateData.success) {
      throw new Error(validateData.error.message);
    }
    await connectToDatabase();
    const expense = await prisma.expense.create({
      data: {
        ...props,
        createdBy: session.user.id as string,
      },
    });

    revalidatePath("/dashboard", "page");
    return {
      success: true,
      data: expense,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "Something went wrong",
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const getAllDetails = async () => {
  const { session } = await getAuthSession();
  try {
    if (!session) {
      throw new Error("You must be logged in to create Expense");
    }
    await connectToDatabase();
    const expenses = await prisma.expense.findMany({
      where: {
        createdBy: session.user.id as string,
      },
    });
    const incomes = await prisma.income.findMany({
      where: {
        createdBy: session.user.id as string,
      },
    });
    const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const totalIncome = incomes.reduce((acc, curr) => acc + curr.amount, 0);
    const savings = totalIncome - totalExpense;
    const loss = totalIncome - totalExpense;
    return {
      success: true,
      data: {
        income: totalIncome,
        expense: totalExpense,
        savings: savings > 0 ? savings : 0,
        loss,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "Something went wrong",
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const deleteExpense = async (id: string) => {
  const { session } = await getAuthSession();
  try {
    if (!session) {
      throw new Error("You must be logged in to delete Expense");
    }
    await connectToDatabase();
    const expense = await prisma.expense.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard", "page");
    revalidatePath("/view-all", "page");
    return {
      success: true,
      data: expense,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "Something went wrong",
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const deleteIncome = async (id: string) => {
  const { session } = await getAuthSession();
  try {
    if (!session) {
      throw new Error("You must be logged in to delete Income");
    }
    await connectToDatabase();
    const income = await prisma.income.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard", "page");
    revalidatePath("/view-all", "page");
    return {
      success: true,
      data: income,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "Something went wrong",
    };
  } finally {
    await prisma.$disconnect();
  }
};
