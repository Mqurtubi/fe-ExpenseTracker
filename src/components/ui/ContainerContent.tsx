import { ReactNode } from "react";

export default function ContainerContent({children}:{children:ReactNode}){
    return(
        <div className="grid gap-7">
            {children}
        </div>
    )
}