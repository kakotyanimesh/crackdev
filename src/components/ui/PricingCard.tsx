import { CheckCircle2 } from "lucide-react"
import Button from "./button"
import { useRouter } from "next/navigation"

export interface PricingCardTypes {
    title : string,
    desc : string,
    price : number | string,
    features : string[],
    buttonTitle : string,
    buttonVarients :  "primary" | "default",
    highlightedCardNumber : number
}

export default function PricingCard ({title, desc, price, features, buttonTitle, buttonVarients, highlightedCardNumber} : PricingCardTypes) {
    const router = useRouter()
    return (
        <div className={`relative border-2  rounded-md p-5 space-y-10 ${highlightedCardNumber === 2 ? "border-purple-600 shadow-md shadow-purple-400": "border-slate-300"}`}>
            {
                highlightedCardNumber === 2 && <div className="absolute top-0 right-0 bg-purple-600 px-2 py-1 font-bold text-white text-sm">
                    MOST POPULAR
                </div>
            }
            <div className="space-y-2 my-4">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-sm text-slate-600 ">{desc}</p>
            </div>
            <h1><span className="font-bold text-4xl">${price}</span><span className="text-slate-600">/month</span></h1>
            <div className="space-y-2">
                    {features.map((f, key) => (
                        <ul key={key} className="flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                            <h1>{f}</h1>
                        </ul>
                    ))}
                
            </div>
            <div className="">
                <Button title={buttonTitle} variants={buttonVarients} onclick={() => router.push("/pricing")}/>
            </div>
        </div>
    )
}