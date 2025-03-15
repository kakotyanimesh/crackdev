"use client"
import { useState } from "react";
import Button from "./ui/button";
import { Menu, X } from 'lucide-react';
import LinkTag from "./ui/LinkTag";

export default function NavBar(){
    const [clickmenu, setClickmenu] = useState<boolean>(true)

    const LinksArray = [
        {
            title : "Features",
            src : "/features"
        },
        {
            title : "How it works",
            src : "/works"
        },
        {
            title : "Pricing",
            src : "/pricing"
        },
        {
            title : "Blogs",
            src : "/blogs"
        }
    ]

    return (
        <div className="">
            <div className="flex justify-between items-center text-center mt-10 md:mx-24 mx-10">
                <div>
                    <h1 className="text-xl font-bold text-carbon-900">CracktheDEV</h1>
                </div>
                <div className="hidden md:flex flex-row gap-10">
                    {
                        LinksArray.map((link, key) => (
                            <LinkTag title={link.title} src={link.src} key={key}/>
                        ))
                    }
                </div>
                <div className="hidden md:flex gap-4">
                    <Button title="Sign In" variants="default" onclick={() => alert("ada")}/>
                    <Button title="Start Free trial" variants="primary" onclick={() => alert("adas")}/>
                </div>
                <div className="flex md:hidden">
                    {
                        clickmenu ? (
                            <button onClick={() => setClickmenu(!clickmenu)}>
                                <Menu className="h-6 w-6" />
                            </button>
                        ) : (
                            <button onClick={() => setClickmenu(!clickmenu)}>
                                <X className="h-6 w-6" />
                            </button>
                        )
                    }

                </div>
            </div>
            <div className="">
            {
                !clickmenu && <div className="flex flex-col justify-center mx-10 mt-3 gap-5 ">
                    {
                        LinksArray.map((link, key) => (
                            <LinkTag title={link.title} src={link.src} key={key}/>
                        ))
                    }
                    <Button title="Sign In" variants="default" onclick={() => alert("ada")}/>
                    <Button title="Start Free trial" variants="primary" onclick={() => alert("adas")}/>
                </div>
            }
            </div>
        </div>
    )
}