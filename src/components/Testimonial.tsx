import TestimonialCard, { TestimonialCardProps } from "./ui/testimonialCard";

const TestimonialsArray : TestimonialCardProps[] = [
    {
        username :  "Alex Chen",
        jobTitle : "Software Engineer at Google",
        image : "/interviewr.webp",
        testimonial : "After 3 weeks of using CareerCypher, I felt confident tackling Google's interview questions. The platform's feedback helped me refine my approach to complex problems."
    },
    {
        username :  "Alex Chen",
        jobTitle : "Software Engineer at Google",
        image : "/interviewr.webp",
        testimonial : "After 3 weeks of using CareerCypher, I felt confident tackling Google's interview questions. The platform's feedback helped me refine my approach to complex problems."
    },
    {
        username :  "Alex Chen",
        jobTitle : "Software Engineer at Google",
        image : "/interviewr.webp",
        testimonial : "After 3 weeks of using CareerCypher, I felt confident tackling Google's interview questions. The platform's feedback helped me refine my approach to complex problems."
    },
    
]



export default function TestimonialComponent (){
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {
                TestimonialsArray.map((t, k) => (
                    <TestimonialCard username={t.username} jobTitle={t.jobTitle} image={t.image} testimonial={t.testimonial}  key={k}/>
                ))
            }
        </div>
    )
}