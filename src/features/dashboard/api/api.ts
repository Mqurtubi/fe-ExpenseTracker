import axios from "axios";
import { http } from "../../../services/http";
import { ApiErrorResponse } from "../../auth/types/auth.type";

type getDashboardProps = {
  month: number;
  year: number;
};
const getDashboard = async ({ month, year }: getDashboardProps) => {
  try {
    const response = await http.get("/dashboard", { params: { month, year } });
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

export { getDashboard };
