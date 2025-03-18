import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AiInterview() {
  return (
    <div className='relative md:w-[200px] md:h-[200px] p-1.5'>
      <motion.div 
        className='absolute hidden md:flex inset-0 rounded-full bg-[conic-gradient(#A020F0_70deg,transparent_200deg)]'
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>
      {/* <div className='absolute inset-3 bg-white rounded-full z-10'></div> */}
      <Image 
        className='rounded-full relative z-20' 
        src="/interviewr.webp" 
        width={194} 
        height={194} 
        alt="Picture of the author" 
      />
      <h1 className='text-center text-2xl font-bold text-purple-900'>AI INTERVIEWER </h1>
    </div>
  )
}   