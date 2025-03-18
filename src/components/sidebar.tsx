
import { useState } from "react"
import { ChevronLeft } from 'lucide-react';
import { motion } from "motion/react";
import { 
    LayoutDashboard, 
    Code, 
    Mic, 
    LineChart, 
    Settings as SettingsIcon, 
    HelpCircle, 
    CreditCard, 
    Info, 
    LogOut 
  } from 'lucide-react';


export default function SideBar(){
    const [sidebarselect, setSidebarselect] = useState<string>("Dashboard")
    const [showSidebar, setShowSidebar] = useState<boolean>(true)

    return (
        <div className={`space-y-10 text-xl pt-5 pl-6 bg bg-white min-h-screen ${showSidebar ? "px-4 w-64" : "px-2 w-20"}`}>
            <div className="flex justify-between ">
                    <h1 className="text-xl font-bold">
                        {
                            showSidebar ? "CracktheDEv" : "CD"
                        }
                    </h1>
                    {/* <div></div> */}
                    <button onClick={() => setShowSidebar(!showSidebar)} className="cursor-pointer">
                        <ChevronLeft />
                    </button>
            </div>
            <div className="space-y-4">
                {
                sideBarArray.map((s, k) => (
                    <div key={k} className={`${sidebarselect === s.name ? "bg-purple-300" : undefined}  rounded-md p-2 transition-colors ease-in duration-300`}>
                        {
                            showSidebar ? (
                                <button className=" cursor-pointer flex items-center justify-center gap-3" onClick={() => setSidebarselect(`${s.name}`)}>
                                {s.icon}
                                {s.name}
                            </button>
                            ) : (
                                <button onClick={() => setSidebarselect(`${s.name}`)} className={`cursor-pointer ${sidebarselect === s.name ? "text-purple-600" : undefined}`}>
                                    {s.icon}
                                </button>
                            )
                        }
                    </div>
                ))
            }
            </div>
        </div>
    )
}


const sideBarArray  = [
    { name: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, path: '/dashboard' },
    { name: 'Code Execution', icon: <Code className="h-5 w-5" />, path: '/code-execution' },
    { name: 'Interview', icon: <Mic className="h-5 w-5" />, path: '/interview-simulation' },
    { name: 'Progress Analytics', icon: <LineChart className="h-5 w-5" />, path: '/progress-analytics' },
    { name: 'Settings', icon: <SettingsIcon className="h-5 w-5" />, path: '/settings' },
    { name: 'FAQ & Support', icon: <HelpCircle className="h-5 w-5" />, path: '/faq' },
    { name: 'Pricing', icon: <CreditCard className="h-5 w-5" />, path: '/pricing' },
    { name: 'About Us', icon: <Info className="h-5 w-5" />, path: '/about' }
  ];