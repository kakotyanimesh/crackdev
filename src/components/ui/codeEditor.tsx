import { Editor } from "@monaco-editor/react"

interface CodeEditorPropsType {
    code : string,
    language : string,
    onchange : (value : string | undefined) => void
}
export default function CodeEditor({code , language, onchange} : CodeEditorPropsType){
    const handleCodeChange = (value : string | undefined) => {
        onchange(value)
    }
    return (
        <div className="overlay rounded-md overflow-hidden h-full shadow-4xl w-[80%] border-3 border-emerald-500">
            <Editor language={language} value={code} onChange={handleCodeChange} height="80vh"/>
        </div>
    )
}