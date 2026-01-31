import axios from "axios";
import { http } from "../../../services/http";
import {
  ApiErrorResponse,
  PayloadLogin,
  PayloadRegister,
} from "../types/auth.type";

const register = async (data: PayloadRegister) => {
  try {
    const registerResponse = await http.post("/auth/register", data);
    return registerResponse.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const login = async (data: PayloadLogin) => {
  try {
    const loginResponse = await http.post("/auth/login", data);
    return loginResponse.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const me = async () => {
  try {
    const meResponse = await http.get("/auth/me");
    return meResponse.data;
  } catch (err) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};
export { register, login, me };
