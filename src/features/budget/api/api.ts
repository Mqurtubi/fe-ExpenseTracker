import axios from "axios";
import { http } from "../../../services/http";
import { ApiErrorResponse } from "../../auth/types/auth.type";

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

export { getBudgets };
