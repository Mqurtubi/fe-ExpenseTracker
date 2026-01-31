import { useState } from "react";
import { login } from "../api/api";
import { LoginValues } from "../types/auth.schema";
import { ApiErrorResponse } from "../types/auth.type";
function isApiErrorResponse(x: unknown): x is ApiErrorResponse {
  if (typeof x !== "object" || x === null) return false;
  const obj = x as Record<string, unknown>;
  return obj.status === "error" && typeof obj.message === "string";
}

export default function useLogin() {
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const submit = async (payload: LoginValues) => {
    setMessage(null);
    setIsError(false);
    try {
      const data = await login(payload);
      return data;
    } catch (error) {
      setIsError(true);
      if (isApiErrorResponse(error)) {
        setMessage(error?.message);
      } else {
        setMessage("Login gagal");
      }
    }
  };

  const clear = () => {
    setMessage(null);
    setIsError(false);
  };
  return { message, isError, submit, clear };
}
