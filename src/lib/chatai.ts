import { PropmpTypes } from "@/utils/types";
import { OpenAI } from "openai"



export const ChatwithAi = async ({systemPrompt, userPrompt} : PropmpTypes) => {
    try {
        const aichat = new OpenAI({
            baseURL : process.env.BASE_URL,
            apiKey : process.env.AIML_API_KEY
        })

        const completion = await aichat.chat.completions.create({
            model : "gpt-4o",
            messages : [
                {
                    role : 'system',
                    content : systemPrompt
                },
                {
                    role : "user",
                    content : userPrompt
                }
            ],
            temperature : 0.7,
            max_tokens : 256,
            stream : true
        })

        if(!completion){
            throw new Error('no response from chat gpt  ')
        }

        let streamResponse = ""
        for await (const chunk of completion) {
            // console.log(chunk.choices[0].delta);
            if (!chunk.choices || !chunk.choices[0] || !chunk.choices[0].delta) {
                console.error("Unexpected OpenAI response format:", chunk);
                continue;
            }
            streamResponse += await chunk.choices[0].delta.content
        }

        if(!streamResponse){
            throw new Error("no streaming response from open ai may be its down or im ran out of token ")
        }

        return streamResponse
    } catch (error) {
        console.log(error);
        throw new Error(`error : ${error}`)
    }
}