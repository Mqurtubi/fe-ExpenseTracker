import { useState } from "react";
import { ApiErrorResponse } from "../../auth/types/auth.type";
import { TransactionFormValues } from "../types/type";
import { updateTransaction } from "../api/api";

function isApiErrorResponse(x: unknown): x is ApiErrorResponse {
  if (typeof x !== "object" || x === null) return false;
  const obj = x as Record<string, unknown>;
  return obj.status === "error" && typeof obj.message === "string";
}

export default function useUpdateTransaction() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const submit = async (id: number, params: TransactionFormValues) => {
    setLoading(true);
    setMessage(null);
    try {
      const data = await updateTransaction(id, params);
      return data;
    } catch (error) {
      if (isApiErrorResponse(error)) {
        setMessage(error?.message);
      } else {
        setMessage("Update gagal");
      }
    }
  };

  return { message, loading, submit };
}
