import { motion } from "motion/react"
import { useEffect, useState } from "react"



export default function CodeQualityMeter() {
    const [codemeterValue, setCodemeterValue] = useState(0)
    useEffect(() => {
      if(codemeterValue < 79){
        const timer = setInterval(() => {
            setCodemeterValue(codemeterValue + 1)
          }, 10);
          return () => {
            clearInterval(timer)
          }
      }
    
      
    }, [codemeterValue])
    
    return (
        <div className="relative">
            <div className="text-start space-y-5 bg-gray-100 px-6 py-15 rounded-xl shadow-md">
            <h1 className="text-xl font-bold">Code Quality</h1>
            <h2 className="absolute top-20 right-10 font-bold text-xl transition-colors duration-200 text-green-700 animate-pulse">{codemeterValue}%</h2>

            <div className="md:w-[530px] h-5 bg-slate-300 rounded-full">
                <motion.div className="h-5 animate-pulse transition-colors duration-200 bg-green-500 rounded-full" initial={{width : "0%"}} whileInView={{width : "79%"}} transition={{duration: 2, ease : "easeInOut"}}>
                </motion.div>
            </div>
            <div className="flex justify-between -mt-4">
                <h1 className="font-semibold text-red-600">0%</h1>
                <h1 className="font-semibold bg-gradient-to-r from-red-600 to-green-600 text-transparent bg-clip-text inline-block">Good</h1>
                <h1 className="font-semibold text-green-600">100%</h1>
            </div>
            <div className="space-y-2">
                <h1 className="flex items-center gap-2"><span className="h-5 w-5 items-center flex justify-center text-center rounded-full bg-green-300">+</span> Efficient algorithm implementation</h1>
                <h1 className="flex items-center gap-2"><span className="h-5 w-5 items-center flex justify-center text-center rounded-full bg-green-300">+</span> Clean, readable variable names</h1>
                <h1 className="flex items-center gap-2"><span className="h-5 w-5 items-center flex justify-center text-center rounded-full bg-red-300">-</span> Missing edge case handling</h1>
            </div>
        </div>
        </div>
    )
}

