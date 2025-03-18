import { Smile,Frown  } from 'lucide-react';
import MiniCard from './ui/miniCardOne';
import { useState } from 'react';
import CodeQualityMeter from './codeQualityMeter';



export default function InterviewFeatureDiv() {
    const [cardInder, setCardInder] = useState(Number)

    const InterViewCardArray = [
        {
            title :  "Supportive Mentor" ,
            icon : <Smile absoluteStrokeWidth size={30}/>,
            desc : "Guiding questions with helpful feedback",
            
        },
        {
            title : "Strict Interviewer",
            desc : "Chalanging questions with minimal hints",
            icon : <Frown absoluteStrokeWidth  size={30}/>
        }
    ]
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-20 justify-between items-center text-center'>
            <div className=' space-y-5 bg-gray-100 p-10 rounded-xl shadow-md'>
                <h1 className='font-bold text-xl'>Powerful Features for Real Interviews</h1>
                <div className="grid gap-10 items-center">
                   {
                    InterViewCardArray.map((i, key) => (
                        <MiniCard title={i.title} icon={i.icon} desc={i.desc} key={key} isActive={cardInder === key} onclick={() => setCardInder(key)}/>
                    ))
                   }
                </div>
            </div>
            <div>
                <CodeQualityMeter/>

            </div>
        </div>
    )
}


