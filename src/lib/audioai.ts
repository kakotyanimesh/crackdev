import { TextPromptType } from "@/utils/types";
import { ElevenLabsClient } from "elevenlabs";

export const textToAudio = async ({ text } : TextPromptType) => {
    try {
        const elevenlabsClient = new ElevenLabsClient({apiKey : process.env.ELVENLEBS_API_KEY})

        const response = await elevenlabsClient.textToSpeech.convertAsStream("JBFqnCBsd6RMkjVDRZzb", {
            output_format : "mp3_44100_128",
            text : text,
            model_id : "eleven_multilingual_v2",
            voice_settings: {
                stability: 0,
                similarity_boost: 1.0,
                use_speaker_boost: true,
                speed: 1.0,
            }
        })

        if(!response){
            throw new Error("this is not required error but error while getting res from audio ai")
        }

        const chunks : Buffer[] = []
        // buffer helps to store and manipulate raw binary data in node js 

        for await (const chunk of response) {
            chunks.push(chunk)    
        }
        
        const content = Buffer.concat(chunks)
        // making one audio file by concatinating it 
        return content
    } catch (error) {
        console.log(`error while text to speech ${error}`);
        throw new Error(`error while text to speech ${error}`)
    }
}