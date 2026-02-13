import { useContext } from "react";
import { ToastContext } from "./ToastContext";

export function useToast(){
    const ctx = useContext(ToastContext)
    if(!ctx) throw new Error("useToast must be used within ToastContext")

    const toast ={
        success:(message:string,duration?:number)=> ctx.show({type:"success",message,duration}),
        error:(message:string,duration?:number)=>ctx.show({type:"error",message,duration})
    }

    return {...ctx,toast}
}