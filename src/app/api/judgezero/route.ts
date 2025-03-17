import CodeExecution from "@/lib/codeexecution";
import rateLimitWithRedis from "@/lib/limitapicall";
import { NextResponse } from "next/server";


const limit = rateLimitWithRedis({
    allowedApiReq : 2, 
    duration : 5
})

export default async function JudgeZero(req:Request) {
    try {
        const identifier = await req.headers.get("x-forwarded-for") || "anonymous"

        const limitCheck = await limit(identifier)

        if(limitCheck.status === 429) {return NextResponse.json({msg : "limit exceed of api call"}, {status : 429})}


        const { languageNumber, codeData, customInputData } = await req.json()
        const res = await CodeExecution({languageNumber, codeData, customInputData})

        if(!res){
            return NextResponse.json({
                msg : "NO respones from server code execution"
            }, {status : 403})
        }

        return NextResponse.json({
            msg : "successfully executed code",
            res
        }, {status : 200})


    } catch (error) {
        return NextResponse.json({
            msg : `error at code execution ${error}`
        }, {status : 500})
    }
}