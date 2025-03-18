
import { useEffect, useState } from "react"
import { 
    LayoutDashboard, 
    Code, 
    Mic, 
    LineChart, 
    Settings as SettingsIcon, 
    HelpCircle, 
    CreditCard, 
    Info, 
    // LogOut 
  } from 'lucide-react';
import { useRouter } from "next/navigation";

interface SideBarProps {
    title : "Dashboard" | "Interview" | "Code Execution" | "Progress Analysis" | "Pricing" | "Settings" | "About Us"
    minimize : boolean,


}


export default function SideBar({ title , minimize} : SideBarProps){
    const [sidebarselect, setSidebarselect] = useState<string>(title)
    const [showSideBar, setShowSideBar] = useState(true)
    const router = useRouter()

    console.log(title);
    

    useEffect(() => {
      const mini = () => {
        setShowSideBar(window.innerWidth > 768)
      }
    
      window.addEventListener("resize", mini)
      return () => {
        window.removeEventListener("resize", mini)
      }
    }, [])
    
    

    // 
    return (
        <div className={`space-y-6 text-xl pl-6 min-h-screen ${showSideBar && minimize ? "px-4 w-64" : "px-2 w-20"}`}>
            <div className="space-y-4">
                {
                sideBarArray.map((s, k) => (
                    <div key={k} className={`${sidebarselect === s.name ? "bg-purple-300" : undefined}  rounded-md p-2 transition-colors ease-in duration-300`}>
                        {
                            showSideBar && minimize ? (
                                <button className=" cursor-pointer flex items-center justify-center gap-3" onClick={() => {
                                    setSidebarselect(`${s.name}`)
                                    router.push(`${s.path}`)
                                    }}>
                                {s.icon}
                                {s.name}
                            </button>
                            ) : (
                                <button onClick={() => {
                                    setSidebarselect(`${s.name}`)
                                    router.push(`${s.path}`)
                                    }} className={`cursor-pointer ${sidebarselect === s.name ? "text-purple-600" : undefined}`}>
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
    { name: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, path: '/prod_dashboard' },
    { name: 'Code Execution', icon: <Code className="h-5 w-5" />, path: '/code-execution' },
    { name: 'Interview', icon: <Mic className="h-5 w-5" />, path: '/interview' },
    { name: 'Progress Analytics', icon: <LineChart className="h-5 w-5" />, path: '/progress-analytics' },
    { name: 'Settings', icon: <SettingsIcon className="h-5 w-5" />, path: '/settings' },
    { name: 'FAQ & Support', icon: <HelpCircle className="h-5 w-5" />, path: '/faq' },
    { name: 'Pricing', icon: <CreditCard className="h-5 w-5" />, path: '/pricing' },
    { name: 'About Us', icon: <Info className="h-5 w-5" />, path: '/about' }
  ];