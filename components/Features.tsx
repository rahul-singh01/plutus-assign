import { DollarSign, ShieldCheck, PhoneOff, Sliders } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <DollarSign className="w-6 h-6 text-white" />,
            title: "Cheapest TXs",
            description: "Exchange popular digital currencies at the cheapest possible transaction price",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-white" />,
            title: "CerTIK",
            description: "We are Audited by Certik. CertiK is the leading security-focused ranking platform to",
        },
        {
            icon: <PhoneOff className="w-6 h-6 text-white" />,
            title: "No Contract Sells",
            description: "No contract sells to fund the marketing wallets",
        },
        {
            icon: <Sliders className="w-6 h-6 text-white" />,
            title: "CrossDex Support",
            description: "Exchange popular digital currencies at the cheapest possible transaction price",
        },
    ];

    return (
        <div className="w-full pt-10 pb-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                    Our <span className="text-primary">Features</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#0b1d2e] p-8 rounded-[20px] border border-white/5 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
