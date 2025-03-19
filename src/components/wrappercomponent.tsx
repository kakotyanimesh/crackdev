"use client"

import SideBar from "@/components/sidebar";
import { ReactNode, useEffect, useState } from "react";
import { ChevronLeft } from 'lucide-react';


interface WrapperComponetPropsTypes {
    children : ReactNode,
    sidebarTitle :  "Dashboard" | "Interview" |"Code Execution" | "Progress Analysis" | "Pricing" | "Settings" | "About Us"
}

export default function WrapperComponet({children, sidebarTitle} : WrapperComponetPropsTypes){
    const [mobileview, setMobileview] = useState(true)
    const [minimize, setminimize] = useState(true)

    useEffect(() => {
      const mview = () => {
        setMobileview(window.innerWidth > 768)
      }
    
      window.addEventListener("resize", mview)
      return () => {
        window.removeEventListener("resize", mview)
      }
    }, [])
    


    return (
        <div className="space-y-5 min-h-screen bg-white flex flex-col ">
            <div className={`bg-white flex pt-5 pl-7 gap-10`}>
                <div className={`flex ${minimize ? "gap-10" : "gap-2"}`}>
                    <h1 className="text-xl font-bold ">
                    {minimize && mobileview ? "CRACK THE DEV" : "CD"}
                    </h1>
                    <button onClick={() => setminimize(!minimize)} className="cursor-pointer">
                        <ChevronLeft />
                    </button>
                </div>
                <div className="flex justify-center ">
                    <h1 className="text-xl font-bold">{sidebarTitle}</h1>
                </div>
            </div>
            <div className="flex flex-row">
                <div>
                    <SideBar title={sidebarTitle} minimize={minimize}/>
                </div>
                <div className=" min-h-screen bg-slate-100   pt-5 w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}