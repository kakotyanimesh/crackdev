
import axios from "axios"




export const frontEndGptcall = async (prompt : string) => {
    try {
        const res = await axios.post('api/gpt_text', {
            prompt
        })

        return res.data
    } catch (error) {
        throw new Error(`frontend gpt call err ${error}`)
    }
}