import { useState } from "react"
import { TransactionFormValues } from "../types/type"
import { addTransactions } from "../api/api"
import { ApiErrorResponse } from "../../auth/types/auth.type";

function isApiErrorResponse(x: unknown): x is ApiErrorResponse {
  if (typeof x !== "object" || x === null) return false;
  const obj = x as Record<string, unknown>;
  return obj.status === "error" && typeof obj.message === "string";
}

export default function useAddTransaction(){
    const [message,setMessage]=useState<string | null>(null)
    const [loading,setLoading]=useState(true)

    const submit = async(params:TransactionFormValues)=>{
        setLoading(true)
        setMessage(null)
        try {
            const data = await addTransactions(params)
            return data
        } catch (error) {
            if (isApiErrorResponse(error)) {
            setMessage(error?.message);
        } else {
            setMessage("Login gagal");
      }
        }
    }
    
    return {message,loading,submit}
}