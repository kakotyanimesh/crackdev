import axios from "axios"


export interface JudgeZeroPropsType {
    languageNumber : number,
    codeData : string | undefined, 
    customInputData : string
}

export default async function CodeExecution({languageNumber, codeData, customInputData} : JudgeZeroPropsType) {
    try {

        if(!languageNumber || !codeData) return
        
        const formData = {
            source_code : btoa(codeData),
            language_id : Number(languageNumber),
            stdin : btoa(customInputData)
        }

        const options = {
            method : 'POST',
            url : process.env.RAPIDAPI_URL,
            params : {
                base64_encoded: 'true',
                wait: 'false',
                fields: '*'
            },
            headers : {
                'x-rapidapi-key' : process.env.RAPIDAPI_KEY,
                'x-rapidapi-host' : process.env.RAPIDAPI_HOSTNAME,
                'Content-Type': 'application/json'
            },
            data : formData
        }


        const res = await axios.request(options)

        const token = res.data.token


        const max_tries = 4
        let attemps = 0
        let statusId = 1
        let tokenRes

        while (statusId === 1 || statusId === 2) {
            if(attemps >= max_tries){
                throw new Error("code execution is taking too much of time")
            }

            await new Promise((res) => setTimeout(res, 2000))

            tokenRes = await axios.request({
                method : "GET",
                url : `${process.env.RAPIDAPI_URL}/${token}`,
                params : {
                    base64_encoded: 'true',
                    fields: '*'
                },
                headers : {
                    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                    'x-rapidapi-host': process.env.RAPIDAPI_HOSTNAME
                }
            })
            statusId = tokenRes.data.status?.id
            attemps++
        }

        return tokenRes?.data

        
    } catch (error) {
        throw new Error(`error while judge zero api call ${error}`)
    }
}