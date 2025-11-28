"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-20">

            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero_bg.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-40 md:opacity-100"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background md:hidden" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -right-[10%] -top-[10%] -bottom-[10%] w-[120%] z-[1] pointer-events-none"
            >
                <Image
                    src="/assets/hero_fg.png"
                    alt="Crypto Sphere"
                    fill
                    className="object-contain object-center animate-float"
                    priority
                />
            </motion.div>

            <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10 flex items-center h-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6 md:gap-8 max-w-4xl"
                >
                    <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                        <span className="whitespace-nowrap">Trusted Multi-Chain</span>
                        <br />
                        <span className="whitespace-nowrap">
                            <span className="text-primary">DEX</span> Platform
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-2xl font-light">
                        Trade, earn, and own crypto on the all-in-one multi-chain DEX
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button className="bg-gradient-to-r from-primary to-secondary text-black font-extrabold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-base">
                            Connect Wallet
                        </button>
                        <button className="border-2 border-primary text-primary font-extrabold px-8 py-4 rounded-full hover:bg-primary/10 transition-colors text-base">
                            Trade Crypto
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
