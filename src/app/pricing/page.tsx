"use client"
import PricingComponent from "@/components/pricingComponent";
import WrapperComponet from "@/components/wrappercomponent";
import { useState } from "react";
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";

import Button from "@/components/ui/button";


export interface FaqItems {
    question : string,
    answer : string,
    index : number
}

export default function Pricing (){
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const faqArray : FaqItems[] = [
        {
            question : "How do I update my billing information",
            answer : "To update your billing information, go to your account settings and select the Billing tab. From there, you can update your payment method, billing address, and other related information.",
            index : 1
        },
        {
            question : "How do I contact the customer support",
            answer : "You can contact our customer support team via email at support@prepally.com, through the in-app chat feature, or by phone at +1-800-123-4567. Our support hours are Monday to Friday, 9am to 6pm EST.",
            index : 2
        },
        {
            question : "How do I update my Profile Information",
            answer : "To update your profile information, navigate to your account settings and select the Profile tab. Here you can update your name, email, password, and other personal details.",
            index : 3
        },
        {
            question : "How do I update my billing information",
            answer : "To update your billing information, go to your account settings and select the Billing tab. From there, you can update your payment method, billing address, and other related information.",
            index : 4
        },
        {
            question : "How do I contact the customer support",
            answer : "You can contact our customer support team via email at support@prepally.com, through the in-app chat feature, or by phone at +1-800-123-4567. Our support hours are Monday to Friday, 9am to 6pm EST.",
            index : 5
        },
        {
            question : "How do I update my Profile Information",
            answer : "To update your profile information, navigate to your account settings and select the Profile tab. Here you can update your name, email, password, and other personal details.",
            index : 6
        }

    ]
    return (
        <WrapperComponet sidebarTitle="Pricing">
            <div className="md:mx-10 mx-4 space-y-20">
                <div className="text-center space-y-5">
                    <h1 className="md:text-4xl text-xl font-bold">Pricing Plans</h1> 
                    <p className="md:text-lg text-sm text-slate-600">Choose the perfect plan to accelerate your interview preparation and land your dream job.</p>
                </div>
                <PricingComponent/>
                <div className="space-y-10">
                    <h1 className="md:text-2xl text-xl text-center font-bold">Frequently Asked Questions </h1> 
                    <div className="space-y-10">
                    {
                        faqArray.map((f, k) => (
                          <div 
                            key={k} 
                            className={`text-start flex justify-center flex-col md:mx-28 items-center ${
                              f.index === faqOpen ? "bg-purple-200 py-4 rounded-md md:px-20" : undefined
                            }`}
                          >
                            <div className="flex flex-row text-start items-center md:gap-36">
                              <button 
                                className="md:text-xl cursor-pointer" 
                                onClick={() => setFaqOpen(f.index === faqOpen ? null : f.index)}
                              >
                                {f.question}
                              </button>
                              <motion.div
                                animate={{ rotate: f.index === faqOpen ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Plus 
                                  size={18} 
                                  className="cursor-pointer text-purple-600" 
                                  onClick={() => setFaqOpen(f.index === faqOpen ? null : f.index)}
                                />
                              </motion.div>
                            </div>

                            <AnimatePresence>
                              {f.index === faqOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <p className="text-slate-600 mt-4">{f.answer}</p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))
                    }
                    </div>
                </div>
                <div className="text-center items-center flex flex-col  bg-purple-200 rounded-md py-10 mb-20 md:mx-20 space-y-3.5">
                    <h1 className="md:text-2xl text-lg font-bold">Ready to ace your next interview?</h1>
                    <p className="md:text-lg text-sm text-slate-600">Join thousands of developers who have landed jobs at top tech companies using Crackthedev.</p>
                    <div className="flex md:flex-row flex-col md:gap-10 gap-4">
                        <Button title="Start Free Trial" variants="primary" onclick={() => alert("asdas")}/>
                        <Button title="Schedule a Demo" variants="default" onclick={() => alert("asdasd")}/>
                    </div>
                </div>
                <div className="text-center border-t-2 border-slate-300 md:mx-28  py-5">
                    @2025 CracktheDEV. All rights reserved.
                </div>
            </div>
        </WrapperComponet>
    )
}