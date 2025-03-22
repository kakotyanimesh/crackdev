"use client"
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import TestimonialComponent from "@/components/Testimonial";
import Button from "@/components/ui/button";
import HeadingDiv from "@/components/ui/headingDiv";
import SimpleCard, { SimpleCardTypes } from "@/components/ui/simpleCard";
import WrokCard from "@/components/ui/workcard";
import { useEffect, useState } from "react";

export default function Works (){
    const [activeCard, setActiveCard] = useState<number>(1)

    useEffect(() => {
      const timer = setInterval(() => {
        setActiveCard(prev => prev % 3 + 1)
      }, 3000);
    
      return () => {
        clearInterval(timer)
      }
    }, [])


    const simpleCardarray : SimpleCardTypes[] = [
        {
            title : "Create Your Profile",
            desc : "Tell us about your background, skills, and the types of roles you're targeting to personalize your experience.",
            num : 1,
            setActive : activeCard === 1
        },
        {
            title : "Customize Your Path",
            desc : "Select programming languages, difficulty levels, and specific companies to tailor your interview preparation.",
            num : 2,
            setActive : activeCard === 2
        },
        {
            title : "Practice & Improve",
            desc : "Engage in realistic mock interviews, solve coding challenges, and receive detailed feedback to improve.",
            num : 3,
            setActive : activeCard === 3
        }
    ]
    
    return (
        <div className="space-y-24 md:mx-24 mx-10">
            <NavBar/>
            <div className="flex justify-center flex-col items-center space-y-4">
                <HeadingDiv title="How CrackDev Works" p="A simple, effective process designed to help you ace your technical interviews" />
                <div className="w-fit">
                    <Button title="watch demo" variants="primary" onclick={() => alert("adad")}/>
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 bg-gray-100 md:-mx-24 md:px-24 px-10 py-20 -mx-10">
                {
                    simpleCardarray.map((s, k) => (
                        <SimpleCard title={s.title} desc={s.desc} key={k} num={s.num} setActive={s.setActive}/>
                    ))
                }
            </div>
            <div className="space-y-20">
                <WrokCard className="order-1" order="left" imagesrc="/interviewr.webp" title="AI-Driven Mock Interviews" desc="Our AI interviewer adapts to your skill level and provides personalized questions that challenge you appropriately." featuresArray={["Natural conversation flow with voice recognition", "Real-time code execution and feedback", "Personalized difficulty progression"]} buttonTitle="Try a sample Interview"/>
                <WrokCard imagesrc="/interviewr.webp" order="right"  title="Track Your Progress" desc="Our detailed analytics help you identify areas for improvement and track your growth over time." featuresArray={["Performance metrics across different question types", "Code quality and efficiency analysis", "Comparison with industry benchmarks"]} buttonTitle="View simple Problems "/>
            </div>
            <div className="bg-gray-100 md:-mx-24 -mx-10 md:p-20 p-4">
                <TestimonialComponent/>
            </div>
            <Cta/>
            <Footer/>
        </div>
    )
}


