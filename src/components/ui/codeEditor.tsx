import { Editor } from "@monaco-editor/react"

interface CodeEditorPropsType {
    code : string,
    language : string,
    onchange: (value: string | undefined) => void;
}
export default function CodeEditor({code , language, onchange} : CodeEditorPropsType){
    const handleCodeChange = (value : string | undefined) => {
        onchange(value)
    }
    return (
        <div className="overlay rounded-md overflow-hidden h-[30vw] shadow-4xl w-[100%] border-1 pt-2">
            <Editor theme="vs-light" language={language} value={code} onChange={handleCodeChange} options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    wordWrap: 'on',
                    fontFamily: 'JetBrains Mono, monospace',
                  }} height="80vh"/>
        </div>
    )
}