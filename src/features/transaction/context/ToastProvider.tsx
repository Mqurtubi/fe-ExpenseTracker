import { useMemo, useRef, useState } from "react";
import { ToastContext, type ToastItem } from "./ToastContext";
const genId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export function ToastProvider({children}:{children:React.ReactNode}){
    const [toasts,setToasts]=useState<ToastItem[]>([])
    const timersRef = useRef<Record<string,number>>({})

    const remove = (id:string)=>{
        const t = timersRef.current[id]
        if(t) window.clearTimeout(t)
        delete timersRef.current[id]
        setToasts((prev)=>prev.filter((x)=>x.id !== id))
    }

    const clear = ()=>{
        Object.values(timersRef.current).forEach((t)=> window.clearTimeout(t))
        timersRef.current={}
        setToasts([])
    }

    const show= (toasts:Omit<ToastItem,"id">)=>{
        const id = genId();
        const duration = toasts.duration ?? 3000

        const item : ToastItem ={id, ...toasts}
        setToasts((prev)=>[item,...prev].slice(0,5))

        timersRef.current[id]=window.setTimeout(()=>{
            remove(id)
        },duration)
    }

    const value = useMemo(()=>({toasts,show,remove,clear}),[toasts])
    return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}