import PricingCard, { PricingCardTypes } from "./ui/PricingCard"

export default function PricingComponent () {
    const pricingArray : PricingCardTypes[]= [
        {
            title : "Aspiring",
            desc : "Perfect for beginners starting their interview prep journey.",
            price : 0,
            features : ["5 AI interviews per month", "Basic code analysis", "Text-based feedback", "Community support" , "Limited programming languages"]
        },
        {
            title : "Professional",
            desc : "The complete toolset for serious job seekers.",
            price : 29,
            features : ["Unlimited AI interviews", "Advanced code analysis", "Voice interview simulation",  "Company-specific benchmarks", "All programming languages", "Priority support", "Progress analytics"]
        },
        {
            title : "Enterprise",
            desc : "Tailored solutions for companies and educational institutions.",
            price : "Custom",
            features : ["Custom interview scenarios", "Custom interview scenarios", "LMS integration", "Custom assessment rubrics", "API access", "Dedicated account manager", "Bulk user management", "Advanced analytics"]
        }
    ]
    return (
        <div className="grid md:grid-cols-3 grid-cols-1">
            {
                pricingArray.map((p, key) => (
                    <PricingCard title={p.title} desc={p.desc} price={p.price} features={p.features} key={key}/>
                ))
            }
        </div>
    )
}