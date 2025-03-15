"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"



interface CodeEdiorProps {
    code ? : string,
    language ?:string,
    style ?:string
}

export default function HomeCodeEditor({code = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// when calculating larger Fibonacci numbers`,  language, style} : CodeEdiorProps){


    const [aiAnalyzer, setAiAnalyzer] = useState(false)


    useEffect(() => {
      const timer = setTimeout(() => {
        setAiAnalyzer(true)
        // setTimeout(() => {
        //     setAiAnalyzer(false)
        // }, 1500);
      }, 3000);
    
      return () => {
        clearTimeout(timer)
      }
    }, [])
    
    

    const codeHightlighter = () => {
        const linesSplit = code.split("\n")

        return linesSplit.map((line, lineIndex) => {
            const wordSplit = line.split(/(\/\/.*)|(function|return|if|const|let|var)|\b(\d+)\b/g)

            return (
                // one liner return based on which word
                <div key={lineIndex} className="flex gap-3 mx-5 font-mono">
                    <span>
                        {lineIndex + 1}
                    </span>
                    <div>
                        {   
                        // the wordssplit returns array of words but it has empty strings also by filterring it with boolean no more empty strnigs 
                            wordSplit.filter(Boolean).map((word, wordKey) => {
                                if(word.startsWith("//")){
                                    return <span key={word} className="text-green-600">{word}</span>
                                } else if(["function", "return", "if", "const", "let", "var"].includes(word)){
                                    return <span key={wordKey} className="text-purple-600">{word}</span>
                                } else if(/^\d+$/.test(word)){
                                    // regex for number
                                    return <span key={wordKey} className="text-blue-600 ">{word}</span>
                                } 
                                return <span key={wordKey}>{word}   </span>
                            })
                        }
                    </div>
                </div>
            )
        })
    }
    return (
        <div className={`bg-white rounded-lg shadow-lg transition-shadow mt-10 hover:shadow-slate-500 delay-100 ${style}`}>
            <div className="bg-slate-300 rounded-t-lg flex items-center md:px-4 px-1 md:py-2 py-1 md:gap-40 gap-4">
                <div className="flex md:gap-3 gap-0.5">
                    <div className="rounded-full bg-red-500 h-3 w-3"></div>
                    <div className="rounded-full bg-yellow-500 h-3 w-3"></div>
                    <div className="rounded-full bg-green-500 h-3 w-3"></div>
                </div>
                <h1 className="whitespace-nowrap inline-flex text-sm font-medium font-mono">{language}<span className="animate-pulse md:ml-2">• LIVE EDITOR </span></h1>
            </div>
            <div style={{minHeight : "280px"}}>
                <div className="">
                {codeHightlighter()}
                {
                    aiAnalyzer && <motion.div initial={{opacity : 0, y : +20}} animate={{opacity : 1, y : 0}} transition={{duration : 0.5, ease: "easeOut"}}   className="mx-5 mb-4 font-mono bg-purple-200 text-purple-700 p-4 rounded-t-md ">
                       <span className="font-bold"> AI Feedback:</span> Consider memoization for better performance. <span className=" cursor-pointer hover:underline transition delay-75">Show solution</span>
                    </motion.div>
                }
                </div>
                
            </div>
        </div>
    )
}