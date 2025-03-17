
import { PropmpTypes } from "@/utils/types"
import axios from "axios"




export const frontEndGptcall = async ({userPrompt, systemPrompt} : PropmpTypes) => {
    try {
        const res = await axios.post('api/gpt_text', {
            userPrompt : userPrompt,
            systemPrompt : systemPrompt
        })

        return res.data
    } catch (error) {
        throw new Error(`frontend gpt call err ${error}`)
    }
}