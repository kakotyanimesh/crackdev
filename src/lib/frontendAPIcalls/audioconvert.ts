
import axios from "axios";

export default async function CovertTextToAudio (text : string){
    try {
        const audio = await axios.post("/api/text_to_audio", {
            text : JSON.stringify({text})  
            },{
                responseType : 'arraybuffer'
            })

        const audioBlob = new Blob([audio.data], {type : 'audio/mpeg'})

        return audioBlob
    } catch (error) {
        throw new Error(`error at audio conversion ${error}`)
    }
}