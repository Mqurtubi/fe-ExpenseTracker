import axios from "axios";
import { http } from "../../../services/http";
import { ApiErrorResponse } from "../../auth/types/auth.type";
import { TransactionQueryParams } from "../types/type";

const getTransactions = async (params:TransactionQueryParams)=>{
    const {month,year,search} =params
    try {
        const responseTransactions = await http.get("/transaction",{params:{month,year,search}})
        return responseTransactions.data
    } catch (err: unknown) {
        if (axios.isAxiosError<ApiErrorResponse>(err)) {
            throw err?.response?.data ?? { status: "error", message: err.message };
        }
        throw { status: "error", message: "Unknown error" } as ApiErrorResponse;
    }
}

export {getTransactions}