import axios from "axios";
import { http } from "../../../services/http";
import { ApiErrorResponse } from "../../auth/types/auth.type";
import { BudgetFormData } from "../types/budget.schema";

const getBudgets = async (month: number, year: number) => {
  try {
    const budgetResponse = await http.get("/budget", {
      params: { month, year },
    });
    return budgetResponse.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const addBudget = async (params: BudgetFormData) => {
  try {
    const budgetResponse = await http.post("/budget", params);
    return budgetResponse.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const updateBudget = async (id: number, params: BudgetFormData) => {
  try {
    const budgetResponse = await http.put(`/budget/${id}`, params);
    return budgetResponse.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const deleteBudget = async (id: number) => {
  try {
    const budgetResponse = await http.delete(`/budget/${id}`);
    return budgetResponse.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};
export { getBudgets, addBudget, updateBudget, deleteBudget };
