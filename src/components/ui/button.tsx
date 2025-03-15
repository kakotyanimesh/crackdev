import { ReactNode } from "react"

interface ButtonTypes {
    title : string
    style ?:string
    variants : "primary" | "default"
    onclick : () => void
    icon ? : ReactNode,
    size ?: "secondary" | "lg" | "sm" | "primary"
}


const styleVariants  =  {
    "primary" : "bg-[#8665ff] px-5 py-2 text-white hover:bg-[#764bee]",
    "default" : "ring-1 ring-zinc-300 px-5 py-2 hover:bg-slate-100 hover:text-[#764bee]"
}

// const size = {
//     secondary : "",
//     primary : "",
//     lg : ""
// }
const defaultStyle = "text-sm cursor-pointer font-medium disabled:pointer-events-none transition-colors disabled:backdrop-blur-3xl inline-flex justify-center text-center items-center whitespace-nowrap p-2 rounded-md"

export default function Button ({title, variants, onclick, style, icon} : ButtonTypes) {
    return (
        <button className={`${styleVariants[variants]} ${style} ${defaultStyle} `} onClick={onclick}>
            {icon}
            {title}
        </button>
    )
}