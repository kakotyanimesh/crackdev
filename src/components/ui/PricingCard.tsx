export interface PricingCardTypes {
    title : string,
    desc : string,
    price : number | string,
    features : string[]
}

export default function PricingCard ({title, desc, price, features} : PricingCardTypes) {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <h1>{price}</h1>
            <div>
                {features.map((f, key) => (
                    <h1 key={key}>{f}</h1>
                ))}
            </div>
        </div>
    )
}