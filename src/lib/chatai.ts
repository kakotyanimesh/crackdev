// import { PropmpTypes } from "@/utils/types";
// import { OpenAI } from "openai"

import { GoogleGenerativeAI } from "@google/generative-ai";


export const ChatwithAi = async (prompt : string) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)

        const model = genAI.getGenerativeModel({model : "gemini-2.0-flash"})

        const res = await model.generateContentStream(prompt)

        let fullResponse = ""

        for await (const chunks of res.stream) {
            fullResponse += chunks.text()
        }

        if(!fullResponse){
            throw new Error("no streaming response from open ai may be its down or im ran out of token ")
        }

        return fullResponse
    } catch (error) {
        console.log(error);
        throw new Error(`error : ${error}`)
    }
}




/**
 * const aichat = new OpenAI({
        //     baseURL : process.env.BASE_URL,
        //     apiKey : process.env.AIML_API_KEY
        // })

        // const completion = await aichat.chat.completions.create({
        //     model : "gpt-4o",
        //     messages : [
        //         {
        //             role : 'system',
        //             content : systemPrompt
        //         },
        //         {
        //             role : "user",
        //             content : userPrompt
        //         }
        //     ],
        //     temperature : 0.7,
        //     max_tokens : 256,
        //     stream : true
        // })

        // if(!completion){
        //     throw new Error('no response from chat gpt  ')
        // }

        // let streamResponse = ""
        // for await (const chunk of completion) {
        //     // console.log(chunk.choices[0].delta);
        //     if (!chunk.choices || !chunk.choices[0] || !chunk.choices[0].delta) {
        //         console.error("Unexpected OpenAI response format:", chunk);
        //         continue;
        //     }
        //     streamResponse += await chunk.choices[0].delta.content
        // }
 */