import { ReactNode } from "react"


export interface FeatureCardPropTypes {
    icons : ReactNode,
    title : string,
    desc : string
}

export default function FeatureCard({icons, title, desc} : FeatureCardPropTypes){
    return (
        <div className="border-2 border-purple-950 p-10 relative rounded-md  group hover:shadow-md hover:shadow-slate-700">
            <div className="bg-purple-300 w-fit p-2 rounded-md">
            {icons}
            </div>
            <div className="text-start pt-4">
                <h1 className="font-bold">{title}</h1>
                <p className="text-slate-700">{desc}</p>
            </div> 
            <div className="bg-purple-900 w-full h-2 absolute bottom-0 right-0 scale-x-0 transition-transform group-hover:scale-x-100 origin-left duration-300">

            </div>
            <div className="size-6 bg-purple-500 absolute top-12 rounded-md right-10">

            </div>
        </div>
    )
}