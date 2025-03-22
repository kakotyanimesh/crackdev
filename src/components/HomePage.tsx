"use client"

import { BrainCircuit, Code, Mic, BarChart3 } from 'lucide-react';
import Button from "./ui/button"
import FeatureCard, { FeatureCardPropTypes } from "./ui/featureCard"
import HomeCodeEditor from "./ui/homeCodeEditor"
import SimpleCard, { SimpleCardTypes } from './ui/simpleCard';
import { useEffect, useState } from 'react';
import InterviewFeatureDiv from './interviewFeaturediv';
import PricingComponent from './pricingComponent';

import TechBadge from './ui/TechBadge';
import Cta from './cta';

export default function HomePage () {
  const [activeCard, setActiveCard] = useState<number>(1)


  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard(prev => (prev % 3) + 1)
      // 2 % 3 => 2 
      // 1 , 3 sec => 1 + 1 (2) , 3 sec 3, 3%3 (0) + 1 -> 2-> 3 ....
    }, 3000);
  
    return () => {
      clearInterval(timer)
    }
  }, [])
  
  const simpleCardArray : SimpleCardTypes[] = [
    {
      title : "Choose Your Path",
      desc : "Select your programming language, role, and skill level to personalize your interview experience.",
      num : 1,
      setActive :  activeCard === 1
    },
    {
      title : "Practice and Solve",
      desc : "Engage in realistic interview scenarios with live coding challenges and verbal Q&A sessions.",
      num : 2,
      setActive : activeCard === 2
    },
    {
      title : "Get Detailed Feedback",
      desc : "Receive comprehensive analysis of your performance with specific areas for improvement.",
      num : 3,
      setActive :  activeCard === 3
    }
  ]

  
    return (
        <div className='space-y-30 mt-20'>
          <div className=' grid lg:grid-cols-2 grid-cols-1'>
                <div className='md:space-y-10 space-y-5'>
                  <div className='bg-purple-100 items-center transition-colors text-purple-700 text-sm font-medium rounded-full px-5 py-1 inline-flex'>
                    <h1 className='animate-pulse'><span className='mr-2'>•</span>New: GPT-4o Integration</h1>
                  </div>
                  <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold md:leading-16 tracking-tight'>
                    Outsmart Technical Interviews with AI-Powered Precision
                  </h1>
                  <p className='md:text-xl text-sm text-slate-700'>
                    The only platform combining GPT-4 intelligence with real-time code execution + human-like voice interviews.
                  </p>
                  <div className='flex md:flex-row flex-col space-y-2  space-x-20 '>
                    <Button style='md:text-xl' title='Start Free Trial' variants='primary' onclick={() => alert('adads')}/>
                    <Button style='md:text-xl' title='Watch Demo (2min)' variants='default' onclick={() => alert("no demo")}/>
                  </div>
                </div>
                <div>
                  <HomeCodeEditor language='JAVASCRIPT'/>
                </div>
          </div>
          <div className=" text-center space-y-20">
            <div className="space-y-4 text-center">
              <h1 className="md:text-4xl text-3xl font-bold">Future-proof your career with AI precision</h1>
              <p className="md:text-lg text-sm  text-slate-500">Our platform uses cutting-edge AI to prepare you for technical interviews with unprecedented accuracy.</p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
                {
                  FeaturesArray.map((f, key) => (
                    <FeatureCard icons={f.icons} title={f.title} desc={f.desc} key={key}/>
                  ))
                }
            </div>
          </div>
          <div className='space-y-10 bg-gray-100 md:-mx-24 md:px-24 px-10 py-32 -mx-10'>
            <div className='text-center'>
              <h1 className='md:text-4xl text-purple-900 text-3xl font-bold'>Simple Process, Powerful Results</h1>
              <p className='md:text-lg text-sm text-slate-500'>Our streamlined workflow helps you focus on what matters most - mastering technical interviews.</p>
            </div>
            <div className='grid md:grid-cols-3 md:gap-10 gap-5 grid-cols-1'> 
              {
                simpleCardArray.map((s, key) => (
                  <SimpleCard title={s.title} desc={s.desc} num={s.num} key={key} setActive={s.setActive}/>
                ))
              }
            </div>
              {/* <div className='w-96 flex justify-center text-center items-center'>
                <Button title='Click to Get Started' variants='default' onclick={() => alert("ada")}/>
              </div> */}
          </div>
          <div className='space-y-10'>
            <div className='text-center'>
              <h1 className='md:text-4xl text-purple-900 text-3xl font-bold'>Powerful Features for Real Interviews</h1>
              <p className='md:text-lg text-sm text-slate-500'>Customize your experience to match your unique career goals.</p>
            </div>
            <InterviewFeatureDiv />
          </div>
          <div className='space-y-10 bg-gray-100 md:-mx-24 py-32 -mx-10  md:px-24 px-10'>
            <div className='text-center'>
              <h1 className='md:text-4xl text-purple-900 text-3xl font-bold'>Plans for Every Career Stage</h1>
              <p className='md:text-lg text-sm text-slate-500'>Choose the plan that fits your needs and take your interview skills to the next level.</p>
            </div>
              <PricingComponent/>
          </div>
          <div className="space-y-10 text-center">
              <div className='space-y-4'>
                <h1 className='md:text-4xl text-purple-900 text-3xl font-bold'>Powered by Advanced Technology</h1>
                <p className='md:text-lg text-sm text-slate-500'>We have built CareerCypher with cutting-edge tools and platforms.</p>
              </div>
              <div className='flex flex-wrap justify-center gap-4'>
                {
                  TeachBageArray.map((t ,key ) => (
                    <TechBadge title={t.title} key={key}/>
                  ))
                }
              </div>
          </div>
          <Cta/>
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


const TeachBageArray = [
  {
    title : "GPT-4o"
  },
  {
    title : "99.9% Uptime"
  },
  {
    title : "Gemini"
  },
  {
    title : "leetcode premium question"
  },
  {
    title : "I hate DSA"
  }
]
