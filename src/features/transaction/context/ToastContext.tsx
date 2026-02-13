import { createContext } from "react";

export type ToastType = "success" | "error"
export type ToastItem={
    id:string,
    type:ToastType,
    message:string,
    duration?:number
}

type ToastContextValue = {
    toasts:ToastItem[],
    show:(toast:Omit<ToastItem,"id">)=>void,
    remove:(id:string)=>void,
    clear:()=>void
}

export const ToastContext = createContext<ToastContextValue | null>(null)