"use client"

import { signIn } from "next-auth/react";


export default function SignIn() {
    // const router = useRouter()
    const signin = async () => {
        await signIn("google", {
            callbackUrl : "/dashboard"
        })
        
    }
    return (
        <div>
            <button onClick={signin}>signin with google</button>
        </div>
    )
}