"use client"
import { useRouter } from "next/navigation"


export default function Cta(){
    const router = useRouter()
    return (
        <div className="flex flex-col justify-center space-y-3 items-center bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl md:py-20 p-10 md:px-20">
            <h1 className="md:text-4xl text-white text-3xl font-bold">Ready to transform your interview performance?</h1>
            <p className="md:text-lg text-sm text-slate-100">Last month, 218 candidates received offers using CareerCypher. Never miss your opportunity.</p>

            <div className="text-center mt-5 ">
            {/* <Button title="Start Free Trial" variants="default" onclick={() => alert("sasd")}/> */}
            <button className="bg-white cursor-pointer font-medium disabled:pointer-events-none transition-colors disabled:backdrop-blur-3xl inline-flex justify-center text-center items-center whitespace-nowrap px-4 py-2 rounded-md" onClick={() => router.push("/signin")}>Start Free Trial</button>
            </div>
        </div>
    )
}