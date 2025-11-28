import Image from "next/image";
import { Check, X } from "lucide-react";
import Features from "./Features";

export default function WhyMoonEX() {
    const comparisonData = [
        {
            point: "1. Cheapest TXs",
            moonex: true,
            uniswap: false,
        },
        {
            point: "2. CerTIK",
            moonex: true,
            uniswap: false,
        },
        {
            point: "3. No Contract Sells",
            moonex: true,
            uniswap: false,
        },
        {
            point: "4. Buyback & Burn",
            moonex: true,
            uniswap: false,
        },
        {
            point: "5. Cross Dex Support",
            moonex: true,
            uniswap: false,
        },
    ];

    return (
        <section className="relative w-full py-20 overflow-visible bg-background ">
            {/* Glare */}
            <div className="absolute inset-0 overflow-visible pointer-events-none">
                {/* Center Bottom Glow */}
                <div className="absolute left-1/3 -translate-x-1/3 -bottom-1 w-[450px] h-[450px] bg-yellow-300/30 rounded-full blur-[180px] z-10" />

                {/* Top Right Glow */}
                <div className="absolute -right-1/4 top-12 -translate-x-1 w-[500px] h-[500px] bg-yellow-200/30 rounded-full blur-[320px] z-20" />
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 max-w-7xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    Why <span className="text-primary">MoonEX</span> ?
                </h2>

                <div className="bg-[#0b1d2e]/50 backdrop-blur-md rounded-[20px] p-6 md:p-6 border border-white/5">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[700px]">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-4 text-left pl-4 md:pl-8">
                                        <span className="text-xl md:text-3xl font-bold text-primary">
                                            Comparison
                                        </span>
                                    </th>
                                    <th className="py-4 text-center border-l border-white/10">
                                        <div className="flex justify-center items-center">
                                            <div className="relative w-28 h-10 md:w-40 md:h-14">
                                                <Image
                                                    src="/assets/moonex_logo.svg"
                                                    alt="MoonEX"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </th>
                                    <th className="py-4 text-center border-l border-white/10">
                                        <div className="flex justify-center items-center">
                                            <div className="relative w-28 h-10 md:w-40 md:h-14">
                                                <Image
                                                    src="/assets/uniswap_logo.png"
                                                    alt="Uniswap"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((item, index) => (
                                    <tr key={index} className="border-b border-white/5 last:border-0">
                                        <td className="py-5 md:py-6 pl-4 md:pl-8 text-sm md:text-base text-gray-400">
                                            {item.point}
                                        </td>
                                        <td className="py-5 md:py-6 text-center border-l border-white/10">
                                            <div className="flex justify-center items-center">
                                                {item.moonex ? (
                                                    <Check className="w-6 h-6 md:w-7 md:h-7 text-[#B6FF86]" strokeWidth={3} />
                                                ) : (
                                                    <X className="w-6 h-6 md:w-7 md:h-7 text-red-500" strokeWidth={3} />
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-5 md:py-6 text-center border-l border-white/10">
                                            <div className="flex justify-center items-center">
                                                {item.uniswap ? (
                                                    <Check className="w-6 h-6 md:w-7 md:h-7 text-[#B6FF86]" strokeWidth={3} />
                                                ) : (
                                                    <X className="w-6 h-6 md:w-7 md:h-7 text-red-500" strokeWidth={3} />
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </section>
    );
}
