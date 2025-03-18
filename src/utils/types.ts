

export interface PropmpTypes {
    userPrompt : string,
    systemPrompt : string
}

export interface TextPromptType {
    text : string
}


export type languageType = "Javascript" | "Typescript" | "Python"


export type sidebarContent = {
    title : "Dashboard" | "Interview" | "Code Execution" | "Progress Analysis" | "Pricing" | "Settings" | "About Us"
}