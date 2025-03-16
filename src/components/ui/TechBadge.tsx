import { motion } from "motion/react"

export default function TechBadge ({title} : TechBladeTypes) {
    return (
        <motion.div whileHover={{y: -3}} transition={{ease : "easeOut"}} className=" hover:shadow hover:shadow-purple-400 transition-colors delay-200 w-fit bg-slate-100 border border-slate-500 rounded-3xl px-4 py-1">{title}</motion.div>
    )
}


interface TechBladeTypes {
    title : string
}