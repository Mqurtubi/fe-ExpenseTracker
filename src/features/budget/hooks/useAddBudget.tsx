import { useState } from "react"
import { BudgetFormData } from "../types/budget.schema"
import { addBudget } from "../api/api"
import { ApiErrorResponse } from "../../auth/types/auth.type";
function isApiErrorResponse(x: unknown): x is ApiErrorResponse {
  if (typeof x !== "object" || x === null) return false;
  const obj = x as Record<string, unknown>;
  return obj.status === "error" && typeof obj.message === "string";
}
export default function useAddBudget(){
    const [message,setMessage]=useState<string | null>(null)
    const [loading,setLoading]=useState(true)

    const submit = async (params:BudgetFormData)=>{
        setLoading(true)
        setMessage(null)
        try {
            const data = await addBudget(params)
            return data
        }catch (error) {
            if (isApiErrorResponse(error)) {
                setMessage(error?.message);
            } else {
                setMessage("Add gagal");
            }
        }finally{
            setLoading(false)
        }
    }
    return {message,loading,submit}
}