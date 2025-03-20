import { textToAudio } from "@/lib/audioai"
import rateLimitWithRedis from "@/lib/limitapicall"
import { NextResponse } from "next/server"


const limiter = rateLimitWithRedis({allowedApiReq : 20, duration : 5})

export async function POST(req:Request) {

    try {
        const identifier = await req.headers.get("x-forwarded-for") || "anonymous"

        const limitCheck = await limiter(identifier)

        if(limitCheck.status === 429) {return NextResponse.json({msg : "limit exceed come back later"}, {status : 429})}

        const { text } = await req.json()


        if (!text || typeof text !== 'string' || text.trim().length === 0) {
            return NextResponse.json(
              { msg: "Invalid or missing text parameter" }, 
              { status: 400 }
            );
          }

        const audioBuffer = await textToAudio(text)

        if(!audioBuffer){
            return NextResponse.json({msg : 'Failed to get data from text ai'}, {status : 500})
        }

        // using new NextRespone because this time we sending buffer data not string (for string use json format)
        return new NextResponse(audioBuffer, {
            status : 200,
            headers : {
                "Content-Type" : "audio/mpeg",
                "Content-Length" : audioBuffer.length.toString()
            }
        })
    } catch (error) {
        return NextResponse.json({msg : `Internal server error ${error}`}, {status : 500})
    }
}