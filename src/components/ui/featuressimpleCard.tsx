import { ReactNode } from "react";

interface FeatureSimpleCardProps {
    title : string,
    desc : string,
    icons : ReactNode
}



export default function FeatureSimpleCard({title, desc, icons } : FeatureSimpleCardProps) {
    return (
        <div className="flex flex-row text-start place-items-start gap-5 md:w-[500px] w-full ">
            <div className="bg-purple-300 w-fit md:p-2 p-1 rounded-md">
                {icons}
            </div>
            <div className="space-y-[4px]">
                <h1 className="md:text-xl tex-lg font-bold text-purple-500">{title}</h1>
                <p className="md:text-lg text-sm text-slate-700">{desc}</p>
            </div>
        </div>
    )
}