"use client"
import Button from "@/components/ui/button";
import WrapperComponet from "@/components/wrappercomponent";
import { useRouter } from "next/navigation";


export default function InterviewPage () {
    const router = useRouter()


    const startInterview = () => {
        const audio = new Audio("/silent.mp3")

        audio.play().then(() => {
            router.push("/mockinterview")
        }).catch((err) => console.log("audio is blocked", err))
    }
    return (
        <WrapperComponet sidebarTitle={"Interview"}>
            <div className="ml-10">
                <h1 className="md:text-2xl text-xl font-bold">INTERVIEW SIMULATION </h1> 
                <p className="md:text-lg text-sm text-slate-600">Practice with AI-powered voice interviews</p>
            </div>
            <div className="flex flex-col justify-center items-center text-start">
                <div className="bg-white md:p-10 p-5 rounded-md shadow shadow-slate-500 md:m-10 m-5 md:space-y-5 space-y-2">
                    <h1 className="md:text-xl font-semibold">Interview Guidelines</h1>
                    {
                        interviewGuidelinesArray.map((i, k) => (
                            <li key={k} className="text-slate-500">{i.title}</li>
                        ))
                    }
                    <Button title="Start Interview" variants="primary" onclick={startInterview}/>
                    {/* <Button title="Give audio access" variants="primary" onclick={enableAudio}/> */}
                </div>
                
            </div>
        </WrapperComponet>
    )
}


const interviewGuidelinesArray = [
    {title : "This is a voice-based interview simulation."},
    {title : "Make sure your microphone is working properly."},
    {title : "Speak clearly and at a moderate pace."},
    {title : "You can pause or end the interview at any time"},
    {title : "The AI interviewer will ask questions related to your selected topic."}

]