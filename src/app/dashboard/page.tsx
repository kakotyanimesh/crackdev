"use client"
import Button from "@/components/ui/button";
import CodeEditor from "@/components/ui/codeEditor";
import SelectorComponent from "@/components/ui/selector";
import { useState } from "react";

import { Menu, X } from 'lucide-react';

export default function Dashboard() {

    const [codeingLanguage, setCodeingLanguage] = useState<string>("Javascript")
    const [Questions, setQuestions] = useState<string>("")
    
    const handleCn = (value : string | undefined) => {
    console.log(value);
    
   }


    
    return (
        <div>
            <div className="flex m-10 gap-10">
                <SelectorComponent onchange={(value) => setCodeingLanguage(value)} title="language dropdown" options={["javascript", "python", "typescript"]}/>
                <SelectorComponent onchange={(value) => setCodeingLanguage(value)} title="Questions dropdown" options={["q1", "q2", "q3"]}/>
                <Button title="Run code" onclick={() => alert("adas")} variants="primary" processingText="Running..." processing={false} />

            </div>
            <CodeEditor language="typescript" code="// some coments" onchange={handleCn}/>
        </div>
    )
}