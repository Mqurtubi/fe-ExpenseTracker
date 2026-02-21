import { useState } from "react";
import { ApiErrorResponse } from "../../auth/types/auth.type";
import { BudgetFormData } from "../types/budget.schema";
import { updateBudget } from "../api/api";

function isApiErrorResponse(x: unknown): x is ApiErrorResponse {
  if (typeof x !== "object" || x === null) return false;
  const obj = x as Record<string, unknown>;
  return obj.status === "error" && typeof obj.message === "string";
}

export default function useUpdateBudget() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const submit = async (id: number, data: BudgetFormData) => {
    setMessage(null);
    setLoading(true);
    try {
      const responseBudget = await updateBudget(id, data);
      return responseBudget;
    } catch (error) {
      if (isApiErrorResponse(error)) {
        setMessage(error?.message);
      } else {
        setMessage("Update gagal");
      }
    } finally {
      setLoading(false);
    }
  };
  return { message, loading, submit };
}
