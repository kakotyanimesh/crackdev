"use client"


import Button from "./ui/button"
import HomeCodeEditor from "./ui/homeCodeEditor"

export default function HomePage () {

  
    return (
        <div>
          <div className='my-18 grid lg:grid-cols-2 grid-cols-1'>
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
                  <div className='grid-cols-1 space-y-2 md:grid-cols-2 space-x-20 '>
                    <Button style='md:text-xl' title='Start Free Trial' variants='primary' onclick={() => alert('adads')}/>
                    <Button style='md:text-xl' title='Watch Demo (2min)' variants='default' onclick={() => alert("no demo")}/>
                  </div>
                </div>
                <div>
                  <HomeCodeEditor language='JAVASCRIPT'/>
                </div>
          </div>
          <div className="mb-18 text-center">
            <div>
              <h1>Future-proof your career with AI precision</h1>
              <p>Our platform uses cutting-edge AI to prepare you for technical interviews with unprecedented accuracy.</p>
            </div>
            <div>

            </div>
          </div>
        </div>
    )
}