interface GptResponse {
    question: string
    input: string | undefined
    expected_output: undefined | string
}

export const parseGptResponse = (response: { msg: string }): GptResponse => {
    try {

        const rawMsg = response.msg.trim().replace(/```json|```/g, "").trim()

        const parsedData: Partial<GptResponse> = JSON.parse(rawMsg)

        return {
            question: parsedData.question || "No question provided.",
            input: parsedData.input , 
            expected_output: parsedData.expected_output !== undefined ? parsedData.expected_output : "No expected output.",
        }
    } catch (error) {
        console.error("Error parsing response:", error)
        return { question: "Error parsing question.", input : undefined, expected_output: "Error parsing output." }
    }
}


interface TestCaseResponse {
    msg: string
}

export const parseTestCaseResponse = (response: { msg: string }): TestCaseResponse => {
    try {
        const rawMsg = response.msg.trim().replace(/```json|```/g, "").trim()

       
        const parsedData: { result?: string } = JSON.parse(rawMsg)

        return {
            msg: parsedData.result || "Error parsing result."
        }
    } catch (error) {
        console.error("Error parsing response:", error)
        return { msg: "Error parsing result." }
    }
}

