import { ChatwithAi } from "@/lib/chatai";
import { PropmpTypes } from "@/utils/types";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
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