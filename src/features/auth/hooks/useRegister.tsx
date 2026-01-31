import { useState } from "react";
import { register } from "../api/api";
import { RegisterValues } from "../types/auth.schema";
import { ApiErrorResponse } from "../types/auth.type";

function isApiErrorResponse(x: unknown): x is ApiErrorResponse {
  if (typeof x !== "object" || x === null) return false;
  const obj = x as Record<string, unknown>;
  return obj.status === "error" && typeof obj.message === "string";
}

export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const submit = async (payload: RegisterValues) => {
    setLoading(true);
    setMessage(null);
    setIsError(false);
    try {
      const data = await register(payload);
      setMessage("Register berhasil");
      setIsError(false);
      return data;
    } catch (error) {
      setIsError(true);
      if (isApiErrorResponse(error)) {
        setMessage(error?.message);
      } else {
        setMessage("Register gagal");
      }
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setMessage(null);
    setIsError(false);
  };
  return { loading, message, isError, submit, clear };
}
