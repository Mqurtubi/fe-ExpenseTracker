import { useState } from "react";
import { updateCategory } from "../api/api";
import { CategoryFormData } from "../types/category.schema";
import { ApiErrorResponse } from "../../auth/types/auth.type";

function isApiErrorResponse(x: unknown): x is ApiErrorResponse {
  if (typeof x !== "object" || x === null) return false;
  const obj = x as Record<string, unknown>;
  return obj.status === "error" && typeof obj.message === "string";
}

export default function useUpdateCategory() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const submit = async (id: number, data: CategoryFormData) => {
    setMessage(null);
    setLoading(true);
    try {
      const responseCategory = await updateCategory(id, data);
      return responseCategory;
    } catch (error) {
      if (isApiErrorResponse(error)) {
        setMessage(error?.message);
      } else {
        setMessage("update gagal");
      }
    } finally {
      setLoading(false);
    }
  };
  return { message, loading, submit };
}
