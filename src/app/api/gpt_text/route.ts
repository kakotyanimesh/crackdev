import { ChatwithAi } from "@/lib/chatai";
import rateLimitWithRedis from "@/lib/limitapicall";
import { PropmpTypes } from "@/utils/types";
import { NextResponse } from "next/server";

const ratelimiterfn = rateLimitWithRedis({allowedApiReq : 10, duration : 5})

export async function POST(req:Request) {
    try {
        const ip = await req.headers.get("x-forwarded-for") || "anonymous"
        // x-forwarded-for users ip address it has two parameters 

        const limitCheck = await ratelimiterfn(ip)

        if(limitCheck.status === 429){return NextResponse.json({msg : "Limit exceed of api call come back later"}, {status : 429})}

         const {systemPrompt, userPrompt} : PropmpTypes = await req.json()

        if(!systemPrompt || !userPrompt){
            return NextResponse.json({
                msg : "no user prompt or system prompt provided"
            },{status : 400})
        }

        const response = await ChatwithAi({systemPrompt, userPrompt})

        if(!response){
            return NextResponse.json({
                msg : "Failed to genereate response from AI, try after some time"
            },{status : 500})
        }

        return NextResponse.json({
            msg : response
        }, {status : 200})
    } catch (error) {
        return NextResponse.json({
            msg : `something went wrong while making api req ${error}`
        },{status : 500})
    }
}