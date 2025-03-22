import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Button from './button';
interface WorkCardPropsType {
    title : string,
    desc : string,
    featuresArray : string[],
    buttonTitle : string
    imagesrc : string,
    className ?: string,
    order ? : "left" | "right"
}


export default function WrokCard({title, desc, featuresArray, buttonTitle, imagesrc, className, order} : WorkCardPropsType){
    return (
        <div className={`bg-slate-200 shadow-md shadow-purple-300 py-15 rounded-xl  md:px-30 px-4 flex md:flex-row gap-10 flex-col justify-between items-center ${order === "right" ? "md:flex-row-reverse" : ""}`}>
            <div className='md:w-[500px] w-full space-y-4'>
                <h1 className='text-xl md:text-2xl font-bold md:leading-16 tracking-tight'>{title}</h1>
                <p className='md:text-lg text-sm text-slate-700'>{desc}</p>
                <div className='space-y-4'>
                    
                    {featuresArray.map((f, k) => (
                        <ul key={k} className='flex items-center'> <ChevronRight color="#5f2191" /> {f}</ul>
                    ))}
                </div>
                <div className='w-fit'>
                    <Button title={buttonTitle} variants='primary' onclick={() => alert("Adasd")} />
                </div>
            </div>
            <div className={`${className} `}>
                <Image src={imagesrc} className='rounded-3xl' width={300} height={300} alt='mage'/>
            </div>
        </div>
    )
}