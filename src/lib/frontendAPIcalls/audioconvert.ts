import { TextPromptType } from "@/utils/types";
import axios from "axios";

export default async function CovertTextToAudio ({text} : TextPromptType){
    try {
        const res = await axios.post('api/text_to_audio', {
            text : text
        })

        return res.data
    } catch (error) {
        throw new Error(`error at audio conversion ${error}`)
    }
}