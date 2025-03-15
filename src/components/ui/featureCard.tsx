import { ReactNode } from "react"

interface FeatureCardPropTypes {
    icon : ReactNode,
    title : string,
    desc : string
}

export default function FeatureCard({icon, title, desc} : FeatureCardPropTypes){
    return (
        <div>
            {icon}
            <div>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}