"use client"
import AiInterview from "@/components/aiInterview";
import Button from "@/components/ui/button";
import CodeEditor from "@/components/ui/codeEditor";
import SelectorComponent from "@/components/ui/selector";
import { saveAndPlayAudio } from "@/lib/clientsidedb";
import CovertTextToAudio from "@/lib/frontendAPIcalls/audioconvert";
import { frontEndGptcall } from "@/lib/frontendAPIcalls/gptcodeResponse";
import { Judge0 } from "@/lib/frontendAPIcalls/judgeZerocall";
import { jsProblems, python_problems } from "@/utils/problemstatement";
import { GptCodeCheckPrompt, systemPrompt } from "@/utils/prompt";
import { useState } from "react";


export default function InterviewPlayGround () {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const [codeingLanguage, setCodeingLanguage] = useState<string>("JAVASCRIPT")
    const [userCode, setUserCode] = useState<string>("")
    const [mockquestion, setMockquestion] = useState("Check if two strings are anagrams. Example: input 'listen' and 'silent' -> output true")
    const [inputvalue, setInputvalue] = useState<string | number | string[] | number[] | {nums : number[], target : number}| null>("hello")
    const [outputvalue, setOutputvalue] = useState<string | number | string[] | number[] | {nums : number[], target : number} | boolean | null>("olleh")
    const [processing, setProcessing] = useState(false)
    const [processingText, setProcessingText] = useState("")

    const handleCode = (value: string | undefined) => {
        if (!value) return;
        setUserCode(value);
        // alert(mockquestion)
    }

    const handleMockQuestion = (value : string | undefined) => {
        const questionObject = codeingLanguage === "JAVASCRIPT" ? jsProblems.filter((q) => q.name === value) : python_problems.filter((q) => q.name === value)

        // console.log(questionObject[0].test_cases);
        if (!questionObject) return;

        setMockquestion(questionObject[0].problem_statement);
        setInputvalue(questionObject[0].test_cases[0].input);
        setOutputvalue(questionObject[0].test_cases[0].expected);
        
    } 


    const runCode = async () => {
        try {
            setProcessing(true)
            setProcessingText("Runing the code .....")

            const languageNumber = codeingLanguage === "JAVASCRIPT" ?  63 : 71
            
            const customInputs = Array.isArray(inputvalue) || typeof inputvalue === "object" 
            ? JSON.stringify(inputvalue) 
            : String(inputvalue)

            const judgeZeroRes = await Judge0({languageNumber : languageNumber, codeData : userCode, customInputData : customInputs})

            const textprompt = GptCodeCheckPrompt(userCode, JSON.stringify(judgeZeroRes), mockquestion)

            const gptRes = await frontEndGptcall({userPrompt : textprompt, systemPrompt : systemPrompt})

            const audioInput = gptRes.msg

            const audioBlob = await CovertTextToAudio(audioInput)

            

            await saveAndPlayAudio(audioBlob)
        } catch (error) {
            console.log(error, "error at runiing code");
            
            setProcessing(false)
            setProcessingText("Try again ...")
        } finally{
            setProcessing(false)
            setProcessingText("code run sucessfully ... ")
        }
    }
    return (
        <div className="px-10 pt-5 space-y-4 bg-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center md:gap-20">
                <SelectorComponent title="Select Language" options={["JAVASCRIPT", "PYTHON"]} onchange={(value) => setCodeingLanguage(value)}/>
                <SelectorComponent title="Select Question" options={codeingLanguage === "JAVASCRIPT" ? jsProblems.map((q) => q.name) : python_problems.map((p) => p.name)} onchange={handleMockQuestion}/>
                <SelectorComponent title="Select Question" options={codeingLanguage === "JAVASCRIPT" ? jsProblems.map((q) => q.name) : python_problems.map((p) => p.name)} onchange={(value) => setMockquestion(value)}/>
                <Button processing={processing} processingText={processingText} title="Run code" variants="primary" onclick={runCode} />
            </div>
            <div className="bg-white rounded-md shadow shadow-slate-400  p-10">
                <h1>{mockquestion}</h1>
                <div>
                    <h1>Input : {JSON.stringify(inputvalue)}</h1>
                    <h1>OutPut : {JSON.stringify(outputvalue)}</h1>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-30">
                <CodeEditor code="// write your code here" language={codeingLanguage} onchange={handleCode} />
                <div className="">
                    <AiInterview/>
                </div>
            </div>
        </div>
    )
}




