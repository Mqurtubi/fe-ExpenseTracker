import axios from "axios";
import { http } from "../../../services/http";
import { ApiErrorResponse } from "../../auth/types/auth.type";
import { TypeCategory } from "../types/type";
import { CategoryFormData } from "../types/category.schema";

const getCategory = async (type: TypeCategory) => {
  try {
    const responseCategory = await http.get("/category", { params: { type } });
    return responseCategory.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const addCategory = async (data: CategoryFormData) => {
  try {
    const responseCategory = await http.post("/category", data);
    return responseCategory.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const updateCategory = async (id: number, data: CategoryFormData) => {
  try {
    const responseCategory = await http.put(`/category/${id}`, data);
    return responseCategory.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};

const deleteCategory = async (id: number) => {
  try {
    const responseCategory = await http.delete(`/category/${id}`);
    return responseCategory.data;
  } catch (err: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
      throw err?.response?.data ?? { status: "error", message: err.message };
    }
    throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
  }
};
export { getCategory, addCategory, updateCategory, deleteCategory };
