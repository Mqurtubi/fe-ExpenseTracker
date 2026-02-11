import axios from "axios";
import { http } from "../../../services/http";
import { ApiErrorResponse } from "../../auth/types/auth.type";
import { TransactionFormValues, TransactionQueryParams } from "../types/type";

const getTransactions = async (params: TransactionQueryParams) => {
  const { month, year, search, type, category, sort_dir, sort_by } = params;
  try {
    const responseTransactions = await http.get("/transaction", {
      params: {
        month,
        year,
        search,
        type,
        category_id: category,
        sort_dir,
        sort_by,
      },
    });
    return responseTransactions.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const addTransactions = async (params: TransactionFormValues) => {
  try {
    const responseTransaction = await http.post("/transaction", params);
    return responseTransaction.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const updateTransaction = async (
  id: number,
  payload: TransactionFormValues,
) => {
  try {
    const responseTransaction = await http.put(`/transaction/${id}`, payload);
    return responseTransaction.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const deleteTransaction = async (id: number) => {
  try {
    const responseTransaction = await http.delete(`/transaction/${id}`);
    return responseTransaction.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};
export {
  getTransactions,
  addTransactions,
  updateTransaction,
  deleteTransaction,
};
