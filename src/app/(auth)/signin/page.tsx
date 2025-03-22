"use client"

import Button from "@/components/ui/button";
import { signIn } from "next-auth/react";


export default function SignIn() {
    // const router = useRouter()
    const signin = async () => {
        await signIn("google", {
            callbackUrl : "/interview"
        })
        
    }
    return (
        <div className="bg-slate-100">

            <div className="flex flex-col space-y-5 justify-center items-center text-center min-h-screen">
                <div>
                    <h1 className="text-3xl font-bold text-purple-800">CRACK THE DEV</h1>
                    <p className="text-slate-500 text-lg">Please signin with google for now </p>
                </div>
                <div className="bg-white shadow-md shadow-slate-500 p-15 flex flex-col rounded-md space-y-5">
                    <div className="flex flex-col space-y-5">
                        <input className="px-4 py-2 border-slate-400 border-1 rounded-md shadow w-72 shadow-slate-200" type="text" placeholder="Enter your Email" />
                        <input className="px-4 py-2 border-slate-400 border-1 rounded-md shadow w-72 shadow-slate-200" type="password" placeholder="Enter your password" />

                        <div className="flex flex-row gap-10">
                            <h1><input type="checkbox" /> <span>Remember me </span></h1>
                            <button className="text-purple-700 ">forget password ?</button>
                        </div>

                        <Button variants="primary" title="Sign in" onclick={signin}/>
                    </div>
                    <div>
                        <Button title="signin with google" variants="default" onclick={signin}/>
                    </div>     
                </div> 
            </div>  
        </div>
    )
}