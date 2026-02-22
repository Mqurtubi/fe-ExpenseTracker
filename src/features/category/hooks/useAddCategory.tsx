import { useState } from "react";
import { CategoryFormData } from "../types/category.schema";
import { addCategory } from "../api/api";
import { ApiErrorResponse } from "../../auth/types/auth.type";
function isApiErrorResponse(x: unknown): x is ApiErrorResponse {
  if (typeof x !== "object" || x === null) return false;
  const obj = x as Record<string, unknown>;
  return obj.status === "error" && typeof obj.message === "string";
}

export default function useAddCategory() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const submit = async (data: CategoryFormData) => {
    setMessage(null);
    setLoading(true);
    try {
      const responseCategory = await addCategory(data);
      return responseCategory;
    } catch (error) {
      if (isApiErrorResponse(error)) {
        setMessage(error?.message);
      } else {
        setMessage("Add gagal");
      }
    } finally {
      setLoading(false);
    }
  };
  return { message, loading, submit };
}
