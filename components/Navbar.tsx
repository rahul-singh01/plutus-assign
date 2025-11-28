"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact Us", href: "#contact" },
    { name: "Crypto Data", href: "/crypto-data" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-12 xl:px-20 flex justify-between items-center transition-all duration-300 ${isScrolled
                ? "py-4 bg-background/30 backdrop-blur-md border-b border-white/5"
                : "py-6 bg-transparent"
                }`}
        >

            <div className="flex items-center gap-2">
                <Image
                    src="/assets/logo.png"
                    alt="Moonex Logo"
                    width={150}
                    height={40}
                    className="object-contain w-32 md:w-40"
                />
            </div>

            <div className="hidden lg:flex items-center gap-6 xl:gap-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-base font-bold transition-colors duration-200 ${link.name === "Home" ? "text-primary" : "text-white hover:text-primary"
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="hidden lg:block">
                <button className="bg-gradient-to-r from-primary to-secondary text-black font-extrabold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm">
                    Connect Wallet
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md p-6 flex flex-col items-center gap-6 lg:hidden border-b border-white/10"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-bold ${link.name === "Home" ? "text-primary" : "text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-gradient-to-r from-primary to-secondary text-black font-extrabold px-8 py-3 rounded-full w-full max-w-xs">
                            Connect Wallet
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
