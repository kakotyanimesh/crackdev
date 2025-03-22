import Image from "next/image"

export interface TestimonialCardProps {
    username : string,
    jobTitle : string,
    image : string,
    testimonial : string
}


export default function TestimonialCard ({username, jobTitle, image, testimonial} : TestimonialCardProps ) {
    return (
        <div className="space-y-4 bg-white p-10 rounded-2xl border-2 border-slate-200">
            <div className="flex flex-row gap-4 items-center text-start">
                <Image src={image} width={40} height={40} className="rounded-full" alt="user profile"/>
                <div className="-space-y-1">
                    <h1 className="font-bold text-lg">{username}</h1>
                    <p className="text-sm text-slate-600">{jobTitle}</p>
                </div>
            </div>
            <p className="italic text-slate-700">{testimonial}</p>
        </div>
    )
}