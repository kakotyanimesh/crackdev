"use client"

import AiInterview from "@/components/aiInterview";
import AIresponseQuestion from "@/components/ui/airesponeQuestion";
import Button from "@/components/ui/button";
import CodeEditor from "@/components/ui/codeEditor";
import SelectorComponent from "@/components/ui/selector";
import WrapperComponet from "@/components/wrappercomponent";
import { saveAndPlayAudio } from "@/lib/clientsidedb";
import CovertTextToAudio from "@/lib/frontendAPIcalls/audioconvert";
import { frontEndGptcall } from "@/lib/frontendAPIcalls/gptcodeResponse";
import { parseGptResponse, parseTestCaseResponse } from "@/lib/frontendAPIcalls/parsedRes";
import { checkTestCasePrompt, finalPrompt, initialQuestionUserPrompt } from "@/utils/prompt";
import { useEffect, useRef, useState } from "react";

export default function MockInterview(){
    const [Language, setLanguage] = useState("JAVASCRIPT")
    const [userCode, setUserCode] = useState<string | undefined>("")
    const [loadingState, setLoadingState] = useState(true)
    const [gptQuestions, setGptQuestions] = useState<string | undefined>("")
    const [questionInputs, setQuestionInputs] = useState<string | undefined>("")
    const [questionOutput, setQuestionOutput] = useState<string | undefined>("")
    const [processing, setprocessingg] = useState(false)
    const [runningCodeState, setRunningCodeState] = useState(false)
    const [consoleResponse, setConsoleResponse] = useState<string | undefined>("")
    const [audiotext, setaudiotext] = useState("")
    const [messsageLogs, setMesssageLogs] = useState<{role : string, text : string | undefined}[]>([])
    const [aispeadking, setAispeadking] = useState(false)
    const preventAPIcall = useRef(false)

    const storeUserCode = (value : string | undefined) => {
        if(!value) return
        setUserCode(value)
    }

    useEffect(() => {
        if(preventAPIcall.current) return
        preventAPIcall.current = true


      const initialPromptGeneration = async () => {
        try {
            setLoadingState(true)
            const dynamicPrompt = `${initialQuestionUserPrompt}\nRequest ID: ${Date.now()}`

            const initialQuestion = await frontEndGptcall(dynamicPrompt)
            
            const { question, input, expected_output } = parseGptResponse(initialQuestion)

            setGptQuestions(question)
            setQuestionInputs(input)
            setQuestionOutput(expected_output)

            const greetings = `Welcome dear! I'm your interviewer for today. Your first question is: ${question}. Try to solve it and click 'Run' to execute. Click 'Start Interview' for real-time AI audio interaction.`;



            setMesssageLogs((prevLogs) => [...prevLogs, { role: "AI", text: greetings }])

            const audioBlob = await CovertTextToAudio(greetings.trim())
            setAispeadking(true)
            console.log(greetings);
            
            await saveAndPlayAudio(audioBlob)

            setAispeadking(false)

        } catch (error) {
            console.log(`error while initiating interview process !! ${error}`);
            
        } finally{
            setLoadingState(false)
        }
      }

      initialPromptGeneration()
    
    }, [])


    const newQuestion = async () => {
        try {
            setprocessingg(true)
            const dynamicPrompt = `${initialQuestionUserPrompt}\nRequest ID: ${Date.now()}`
            
            const initialQuestion = await frontEndGptcall(dynamicPrompt)
            const { question, input, expected_output } = parseGptResponse(initialQuestion)

            setGptQuestions(question)
            setQuestionInputs(input)
            setQuestionOutput(expected_output)
            
            setMesssageLogs((prev) => [...prev, {role : "AI", text : gptQuestions}])

            const newQuestionText = `Your new Question is ${gptQuestions}`

            setAispeadking(true)
            const audioBlob = await CovertTextToAudio(newQuestionText)

            
            await saveAndPlayAudio(audioBlob)
            
            setAispeadking(false)

        } catch (error) {
            console.log(`error while initiating interview process !! ${error}`);
            
        } finally{
            setprocessingg(false)
        }
    }

    const codeRun = async () => {
        try {
            setRunningCodeState(true)
            // const languageNumber = 63
            // const customInputs = Array.isArray(questionInputs) || typeof questionInputs === "object" 
            // ? JSON.stringify(questionInputs) 
            // : String(questionInputs)
            // const judezerores = await Judge0({languageNumber : languageNumber, codeData : JSON.stringify(userCode), customInputData : customInputs})

            const testCasePrompt = checkTestCasePrompt({question : gptQuestions, userCode : userCode})
            const testCasesRes = await frontEndGptcall(testCasePrompt)
            const formatTestcaseRes = parseTestCaseResponse(testCasesRes)
            // console.log(formatTestcaseRes.msg);
            
            setConsoleResponse(formatTestcaseRes.msg)

            // an audio res needed here to told the user wheather their code runs successfully or not 
            
        } catch (error) {
            console.log(`error while running the code ${error}`);
            
            
        } finally{
            setRunningCodeState(false)
        }
    }
    

    const userAudiotoText = async () => {
        try {
            const speechrecg = window.SpeechRecognition|| window.webkitSpeechRecognition

            const recog = new speechrecg()
            recog.continuous = true
            recog.interimResults = true
            recog.lang = "en-US"

            recog.onresult = async (event) => {
                let finalTranscript = ""

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    if(event.results[i].isFinal){
                        finalTranscript += event.results[i][0].transcript
                    }                    
                }

                if (finalTranscript.length > 0) {
                    setaudiotext(finalTranscript);
                    // console.log(finalTranscript);
                    // console.log(audiotext);

                    setMesssageLogs((perv) => [...perv, {role : "User", text : finalTranscript }])

                    const fullContext = messsageLogs.map((msg) => `${msg.role} : ${msg.text}`).join("\n")
                    const promptFinal = finalPrompt({question : gptQuestions, fullContext : fullContext, userCode : userCode, currentSpeechInput : finalTranscript})
                    setAispeadking(true)
                    const aiResponse = await frontEndGptcall(promptFinal)

                    const audioBlob = await CovertTextToAudio(aiResponse)

                    await saveAndPlayAudio(audioBlob)
                    
                    setAispeadking(false)
                }
            }

            recog.onend = () => {
                // this is for continuous listening 
                recog.start();
            };
            
            recog.onerror = (event) => {
                console.error(`Speech recognition error: ${event.error}`);
            };

            recog.start()
            // console.log(recog);
            
        } catch (error) {
            throw new Error(`erorr while talking with AI ${error}`)            
        }
    }

    useEffect(() => {
      console.log(audiotext);
      
    }, [audiotext])
    

    if(loadingState){
        return (
            <div className="min-h-screen flex justify-center items-center text-center">
                <h1 className="text-2xl text-purple-900 font-bold">Please wait while we fetching your questions...</h1>
            </div>
        )
    }

    return (
        <WrapperComponet sidebarTitle="Interview">
            {/* <div className="absolute bg-purple-500 p-10">
                {
                    aispeadking ? (
                        <div className="">
                            ai is speaking 
                        </div>
                    ) : (
                        <div>
                            ai is listening , please speak something if you want 
                        </div>
                    )
                }
            </div> */}
            <div className="flex flex-col space-y-10 ">
                <div className="font-mono px-4">
                    <h1 className="text-xl font-bold">MOCK INTERVIEW </h1>
                    <p className="text-lg text-slate-600">Practice mock interview with AI </p>
                </div>
                <div className="flex flex-row gap-2 ml-2">
                    <div className="w-2/3 space-y-5 bg-white px-4 py-4 rounded-md border-1 border-slate-400">
                        <div className="flex justify-between gap-5 ">
                            <SelectorComponent title="Language" options={["JAVASCRIPT" , "PYTHON"]} onchange={(value) => setLanguage(value) } />
                            <Button title="Run code" processing={runningCodeState} processingText="Running the code " variants="primary" onclick={codeRun}/>  
                            <Button title="start Audio Interview" variants="primary" onclick={userAudiotoText}/>
                        </div> 
                        <div className="w-full space-y-2">
                            <CodeEditor code="// write your code here " language={Language} onchange={storeUserCode}/>
                            <div className="p-4 bg-slate-100 rounded-lg border border-carbon-200">
                            <div className="text-sm font-medium text-carbon-900 mb-2">Output:</div>
                                <pre className="font-mono text-sm bg-white p-3 rounded-md text-carbon-800 h-[100px] overflow-auto">
                                    {consoleResponse}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 space-y-5">
                        <div className="bg-white  px-2 py-2 space-y-2  rounded-md border-1 border-slate-400">
                            <AIresponseQuestion questiontitle={gptQuestions} input={questionInputs} expectedQutput={questionOutput} />
                            <Button processing={processing} processingText="fetching a new Question" title="Next Question" variants="primary" onclick={newQuestion}/>  
                            <Button title="Pause the Interview" variants="primary" onclick={() => alert("Ada")}/>
                        </div> 
                        <div className="bg-white flex flex-col space-y-2 justify-center items-center  rounded-md border-1 border-slate-400">
                            <AiInterview/>
                            <h1 className='text-center text-2xl font-mono font-bold'>SAM ALTMAN </h1>
                            <div className="font-mono">
                                {
                                    aispeadking ? <h1>AI is SPEAKING ... </h1> : <h1>AI Is Listening ...</h1>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperComponet>
    )
}


