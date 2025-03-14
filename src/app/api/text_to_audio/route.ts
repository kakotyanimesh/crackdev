import { textToAudio } from "@/lib/audioai"
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    try {
        const { text } = await req.json()

        if(!text || text.length === 0){
            return NextResponse.json({msg : "No text provided "}, {status : 400})
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
                "Content-Length" : audioBuffer.length.toLocaleString()
            }
        })
    } catch (error) {
        return NextResponse.json({msg : `Internal server error ${error}`}, {status : 500})
    }
}