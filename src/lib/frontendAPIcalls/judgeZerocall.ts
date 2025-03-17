import axios from "axios"
import { JudgeZeroPropsType } from "../codeexecution"

export const Judge0 = async({languageNumber, codeData, customInputData} : JudgeZeroPropsType) => {
    try {
        
        const res = await axios.post('api/judgezero', {
            languageNumber,
            codeData,
            customInputData
            
        })

        return res.data

    } catch (error) {
        throw new Error(`frontend error at judgezero check inside frontendapi calls folder ${error} `)
    }
}