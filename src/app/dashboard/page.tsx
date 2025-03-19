"use client"
import Button from "@/components/ui/button";
import CodeEditor from "@/components/ui/codeEditor";
import SelectorComponent from "@/components/ui/selector";
import { saveAndPlayAudio } from "@/lib/clientsidedb";
import { Judge0 } from "@/lib/frontendAPIcalls/judgeZerocall";
import { jsProblems, python_problems } from "@/utils/problemstatement";
import { GptCodeCheckPrompt, systemPrompt } from "@/utils/prompt";
import axios from "axios";

import { useState } from "react";




export default function Dashboard() {

    const [codeingLanguage, setCodeingLanguage] = useState<string>("Javascript")
    const [Questions, setQuestions] = useState<string>("Write a function to reverse a string without using built-in methods. Example: input 'hello' -> output 'olleh'")
    
    const [userCode, setUserCode] = useState<string>("")
    
    const handleCn = (value : string | undefined) => {
        setUserCode(value)
   }



   const runCode = async () => {
        try {
            const languageNumber = codeingLanguage === "Javascript" ? 63 : 71
            const selectedProblem = codeingLanguage === "Javascript" ? jsProblems.find((p) => p.problem_statement === Questions) : python_problems.find((p) => p.problem_statement === Questions)
    
            const testCase = selectedProblem?.test_cases[0].input
            
    
            if(!testCase){
                return
            }
    
            const customInputData = Array.isArray(testCase) || typeof testCase === "object" 
            ? JSON.stringify(testCase) 
            : String(testCase);
    
            // console.log(languageNumber);
            // console.log(userCode);
            // console.log(customInputData);
            
            
            
            const judge0res = await Judge0({languageNumber : languageNumber, codeData : userCode, customInputData : customInputData  })

            // console.log("judge zero res " , judge0res.res) ;
            
            // const judge0res = await axios.post('api/judgezero', {
            //     languageNumber,
            //     userCode,
            //     customInputData
            // })

            // console.log(judge0res);
            
            
            const gptCodeCheckPrompt = await GptCodeCheckPrompt(userCode, JSON.stringify(judge0res.res), Questions )
            
            // console.log("code primpt" , gptCodeCheckPrompt);
            console.log("system", systemPrompt);
            
            const gptres = await axios.post("api/gpt_text", {
                userPrompt : gptCodeCheckPrompt,
                systemPrompt
            })

            // const gptres = await frontEndGptcall({userPrompt : gptCodeCheckPrompt, systemPrompt})
            
            // console.log("gpt res ", gptres.msg );

            // const gptres = await axios.post("api/gpt_text", {
            //     userPrompt : gptCodeCheckPrompt,
            //     systemPrompt
            // })
    
            const audioInput = gptres.data.msg  
    
            // console.log(gptres.msg, "gpt res borrr");
            
            // const CovertTextToAudio = await axios.post("api/text_to_audio", {
            //     text : audioInput
            // })
            
            const audio = await axios.post("/api/text_to_audio", {
                text : JSON.stringify({audioInput})  
            },{
                responseType : 'arraybuffer'
            })

            const audioBlob = new Blob([audio.data], {type : 'audio/mpeg'})
            // const audioBlob = await CovertTextToAudio(audioInput)
            await saveAndPlayAudio(audioBlob)
            console.log("audio", audioBlob);
        } catch (error) {
         console.log("error at dashboar", error);
            
        }


        
        
        
   }
    
    return (
        <div>
            <div className="flex m-10 gap-10">
                <SelectorComponent onchange={(value) => setCodeingLanguage(value)} title="language dropdown" options={["Javascript", "python"]}/>
                <SelectorComponent onchange={(value) => setQuestions(value)} title="Questions dropdown" options={codeingLanguage === "Javascript" ? jsProblems.map((k) => k.problem_statement) : python_problems.map((k) => k.problem_statement)}/>
                <Button title="Run code" onclick={runCode} variants="primary" processingText="Running..." processing={false} />

            </div>
            <CodeEditor language="typescript" code="// some coments" onchange={handleCn}/>
        </div>
    )
}