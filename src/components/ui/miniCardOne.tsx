
import { ReactNode } from "react"

export interface MiniCardProps {
    title : string,
    icon : ReactNode,
    desc : string,
    onclick : () => void
    isActive : boolean
}


export default function MiniCard({title, desc, icon, onclick, isActive}: MiniCardProps) {
    
    return (
        <button onClick={onclick}>
            <div className={`flex flex-col border-2 text-center items-center transition-all duration-500 ease-in-out rounded-xl p-4 ${isActive ? "border-purple-500 bg-purple-100 shadow-lg scale-105" : "border-slate-200 bg-white hover:border-slate-400 scale-105" }`}>
            <div className={`size-12 items-center text-center justify-center transition-colors duration-300 ease-in-out flex rounded-full ${isActive ? "bg-purple-500" : "bg-slate-200"} `}>
                {icon}
            </div>
            <div className="mt-4 ">
                <h1 className="font-medium">{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
        </button>
    )
}