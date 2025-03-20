// "use client"
// import AiInterview from "@/components/aiInterview";
// import { motion } from "motion/react"
// import CodeEditor from "@/components/ui/codeEditor";
// import WrapperComponet from "@/components/wrappercomponent";
// import { saveAndPlayAudio } from "@/lib/clientsidedb";
// import CovertTextToAudio from "@/lib/frontendAPIcalls/audioconvert";
// import { frontEndGptcall } from "@/lib/frontendAPIcalls/gptcodeResponse";
// import { Judge0 } from "@/lib/frontendAPIcalls/judgeZerocall";
// import { jsProblems, python_problems } from "@/utils/problemstatement";
// import { GptCodeCheckPrompt } from "@/utils/prompt";
// import { useEffect, useState } from "react";

// import Button from "@/components/ui/button";


// export default function InterviewPlayGround () {
//     // await new Promise((resolve) => setTimeout(resolve, 2000));
//     const [codeingLanguage, setCodeingLanguage] = useState<string>("JAVASCRIPT")
//     const [userCode, setUserCode] = useState<string>("")
//     const [mockquestionName, setMockquestionName] = useState([""])
//     const [mockquestion, setMockquestion] = useState("Check if two strings are anagrams. Example: input 'listen' and 'silent' -> output true")
//     const [inputvalue, setInputvalue] = useState<string | number | string[] | number[] | {nums : number[], target : number}| null>("hello")
//     const [outputvalue, setOutputvalue] = useState<string | number | string[] | number[] | {nums : number[], target : number} | boolean | null>("olleh")
//     const [processing, setProcessing] = useState(false)
//     const [processingText, setProcessingText] = useState("")
//     const [active, setActive] = useState(Number)

//     const handleCode = (value: string | undefined) => {
//         if (!value) return;
//         setUserCode(value);
//         // alert(mockquestion)
//     }

//     const handleMockQuestion = (value : string | undefined) => {
//         const questionObject = codeingLanguage === "JAVASCRIPT" ? jsProblems.filter((q) => q.name === value) : python_problems.filter((q) => q.name === value)

//         // console.log(questionObject[0].test_cases);
//         if (!questionObject) return;

//         setMockquestion(questionObject[0].problem_statement);
//         setInputvalue(questionObject[0].test_cases[0].input);
//         setOutputvalue(questionObject[0].test_cases[0].expected);
        
//     } 

//     useEffect(() => { 
//       const questionName = codeingLanguage === "JAVASCRIPT" ? jsProblems.map((q) => q.name) : python_problems.map((q) => q.name)
//       setMockquestionName(questionName)

//       const question = codeingLanguage === "JAVASCRIPT" ? jsProblems.map((q) => q.problem_statement) : python_problems.map((q) => q.problem_statement)

//       console.log(question);
      
//     //   setMockquestion(question)
//     }, [codeingLanguage])
    


//     const runCode = async () => {
//         try {
//             setProcessing(true)
//             setProcessingText("Runing the code .....")

//             const languageNumber = codeingLanguage === "JAVASCRIPT" ?  63 : 71
            
//             const customInputs = Array.isArray(inputvalue) || typeof inputvalue === "object" 
//             ? JSON.stringify(inputvalue) 
//             : String(inputvalue)

//             const judgeZeroRes = await Judge0({languageNumber : languageNumber, codeData : userCode, customInputData : customInputs})

//             const textprompt = GptCodeCheckPrompt(userCode, JSON.stringify(judgeZeroRes), mockquestion)

//             const gptRes = await frontEndGptcall(textprompt)

//             const audioInput = gptRes.msg

//             const audioBlob = await CovertTextToAudio(audioInput)

            

//             await saveAndPlayAudio(audioBlob)
//         } catch (error) {
//             console.log(error, "error at runiing code");
            
//             setProcessing(false)
//             setProcessingText("Try again ...")
//         } finally{
//             setProcessing(false)
//             setProcessingText("code run sucessfully ... ")
//         }
//     }
//     return (
//         <WrapperComponet sidebarTitle="Code Execution">
//             <div className="px-10 pt-5 space-y-4 bg-slate-100">
//             <div className="flex md:flex-row flex-col justify-between items-center  gap-10">
//                 <div className="flex flex-col md:gap-5 px-5 py-4 bg-white shadow shadow-slate-300 rounded-md">
//                     <h1 className="text-xl font-bold">Coding Language</h1>
//                     <div className="grid md:grid-cols-3 grid-row-1 gap-4">
//                         {   
//                             codingLanguageArray.map((l, k) => (
//                                 <motion.button whileHover={{ y : -1}}  key={k} className={`cursor-pointer px-2 hover:shadow hover:shadow-purple-900 transition-colors py-1 rounded-md ${codeingLanguage === l ? "bg-purple-400" : "bg-slate-200"}`} onClick={() => setCodeingLanguage(l)}>{l}</motion.button>
//                             ))
//                         }
//                     </div>
//                 </div>
//                 <div className="flex flex-col md:gap-5 px-5 py-4 bg-white shadow shadow-slate-300 rounded-md">
//                     <h1 className="text-xl font-bold">Select Problem </h1>
//                     <div className="grid md:grid-cols-3 grid-row-1 gap-4">
//                         {
//                             mockquestionName.map((q, k) => <motion.div whileHover={{y : -1}}  onClick={() =>{ 
//                                 setActive(k)
//                                 handleMockQuestion(q)
//                             }} className={`hover:shadow hover:shadow-purple-900 cursor-pointer rounded-md px-2 py-1 ${ active === k ? "bg-purple-400" : "bg-slate-200"}`} key={k}>{q}</motion.div>)
//                         }
//                     </div>
//                 </div>

//             </div>
//             <div className="bg-white rounded-md shadow shadow-slate-400  px-10 py-5">
//                 <h1 className="text-xl font-semibold">Problem statement </h1>
//                 <h1 className="text-lg text-slate-600">{mockquestion}</h1>
//                 <div>
//                     <h1  className="text-slate-600">Input : {JSON.stringify(inputvalue)}</h1>
//                     <h1  className="text-slate-600">OutPut : {JSON.stringify(outputvalue)}</h1>
//                 </div>
//             </div>
            
//             <div className="flex md:flex-row flex-col md:gap-30">
//                 <CodeEditor code="// write your code here" language={codeingLanguage} onchange={handleCode} />
//                 <div className="space-y-10">
//                     <Button processing={processing} processingText={processingText} title="Run code" variants="primary" onclick={runCode} />
//                     <AiInterview/>
//                 </div>
//             </div>
//         </div>
//         </WrapperComponet>
//     )
// }



// const codingLanguageArray = ["JAVASCRIPT", "PYTHON", "RUST", "GO"]
