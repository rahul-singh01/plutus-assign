"use client";

import { useState } from "react";
import Image from "next/image";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "How do I get a Referral Code?",
        answer:
            "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
        question: "Do I get rewarded in tokens or ETH when I refer buyers?",
        answer:
            "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
        question: "How do I get a Referral Code?",
        answer:
            "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-visible">

            {/* Glare */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-visible mix-blend-screen">

                <div className="absolute -left-40 -bottom-2 w-96 h-96 bg-yellow-200/30 rounded-full blur-[220px]" />

                <div
                    className="absolute -right-32 -top-2 w-96 h-96 bg-yellow-200/30 rounded-full blur-[220px]"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto bg-background">
                <div className="relative rounded-[8px] border border-white/5 p-6 md:p-8 bg-[#0b1d2e]/50 backdrop-blur-md">

                    <div className="text-center border-b border-white/10 last:border-b-0">
                        <h2 className="text-2xl md:text-4xl font-bold text-center text-white text-yellow-500 mb-6">
                            FAQs
                        </h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="relative space-y-0">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-white/10 last:border-b-0"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between gap-4 py-3 md:py-6 text-left group transition-all rounded-sm px-2"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-base md:text-lg font-normal text-white/90 group-hover:text-white transition-colors flex-1">
                                        {faq.question}
                                    </span>

                                    {/* Toggle */}
                                    <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#1a2942] flex items-center justify-center group-hover:bg-[#243550] transition-all">
                                        {openIndex === index ? (
                                            // Chevron Down Icon
                                            <svg
                                                width="16"
                                                height="10"
                                                viewBox="0 0 16 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="transition-transform duration-300"
                                            >
                                                <path
                                                    d="M1 1L8 8L15 1"
                                                    stroke="#FFFFFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            // Plus Icon
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="transition-transform duration-300"
                                            >
                                                <path
                                                    d="M9 1V17"
                                                    stroke="#FFFFFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M1 9H17"
                                                    stroke="#FFFFFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                                        ? "max-h-96 opacity-100 pb-6 md:pb-8"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-sm md:text-base text-white/60 leading-relaxed px-2">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
