
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import FeatureCard, { FeatureCardPropTypes } from "@/components/ui/featureCard";
import FeatureSimpleCard from "@/components/ui/featuressimpleCard";
import HeadingDiv from "@/components/ui/headingDiv";
import { BarChart3, BookHeart, BrainCircuit, Clock11, Code, Mic, Star } from "lucide-react";
import Image from "next/image";

export default function Features (){
    return (
        <div className="space-y-24 md:mx-24 mx-10">
            <NavBar/> 
            <HeadingDiv title="Features That Make A Difference" p="Discover all the powerful tools and capabilities we have built to help you ace your technical interviews."/>
            <div className="grid md:grid-cols-4 gap-10 grid-cols-1">
                {
                    FeaturesArray.map((f, k) => (
                        <FeatureCard key={k} title={f.title} icons={f.icons} desc={f.desc} />
                    ))
                }
            </div>
            <div className="space-y-10 text-center ">
                <div className="">
                    <h1 className="text-2xl md:text-4xl font-bold md:leading-16 tracking-tight">Advanced Capabilities</h1>
                    <p className="md:text-lg text-sm text-slate-700">Take your interview preparation to the next level with these powerful features.</p>
                </div>
                <div className="flex md:flex-row flex-col gap-10 justify-between items-center">
                    <div className="space-y-5 w-fit">
                        <FeatureSimpleCard title="Company-Specific Preparation" desc="Get customized interview simulations based on the company you're applying to, with questions tailored to their known interview patterns." icons={<Code color="#165dd0" absoluteStrokeWidth />} />
                        <FeatureSimpleCard title="AI Code Review" desc="Receive detailed code reviews with suggestions for optimization, better practices, and potential bugs in your solutions." icons={<Star color="#165dd0" absoluteStrokeWidth />} />
                    </div>
                    <div className="">
                        <Image className="rounded-md" src="/interviewr.webp" width={400} height={100} alt="just and imnage"/>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between gap-10 items-center mt-32">
                    <div className="">
                        <Image className="rounded-md" src="/interviewr.webp" width={400} height={100} alt="just and imnage"/>
                    </div>
                    <div className="space-y-5">
                        <FeatureSimpleCard title="Personalized Learning Path" desc="Follow a customized learning path based on your strengths and weaknesses to efficiently improve your skills." icons={<BookHeart color="#165dd0" absoluteStrokeWidth />} />
                        <FeatureSimpleCard title="Interview Scheduling" desc="Schedule mock interviews in advance to simulate real interview pressure and time constraints." icons={<Clock11 color="#165dd0" absoluteStrokeWidth />} />
                    </div>
                    
                </div>
            </div>
            <Cta/>
            <Footer/>
        </div>
    )
}


const FeaturesArray : FeatureCardPropTypes[] = [
    {
      icons : <BrainCircuit color="#165dd0" absoluteStrokeWidth />,
      title : "AI Mock Interviews",
      desc : "Practice with our AI interviewer 24/7, available whenever you are ready to prepare"
    },
    {
      icons : <Code color="#165dd0" absoluteStrokeWidth />,
      title : "Instant Code Analysis",
      desc : "Get real-time feedback on your code across 50+ programming languages and frameworks."
    },
    {
      icons : <Mic color="#165dd0" absoluteStrokeWidth />,
      title : "Voice-Based Scenarios",
      desc : "Experience the pressure of real interviews with our voice recognition technology."
    },
    {
      icons : <BarChart3 color="#165dd0" absoluteStrokeWidth />,
      title : "Progress Analytics",
      desc : "Track your improvement and benchmark against other candidates in your field."
    },
  ]


