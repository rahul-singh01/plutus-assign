import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-background py-10 md:py-14 relative overflow-hidden z-50">
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 lg:gap-0 px-4 md:px-8">

                <div className="relative w-[120px] md:w-[150px] lg:w-[200px] h-[80px] md:h-[100px] flex items-center justify-center">
                    <Image
                        src="/assets/footer_bg_rect.svg"
                        alt="Moonex Text"
                        fill
                        className="object-contain"
                    />
                </div>


                {/* Links Section */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-6 lg:gap-16 items-center">
                    <Link href="#about" className="text-white font-extrabold text-base md:text-sm lg:text-lg hover:text-[#E4B40D] transition-colors">
                        About Us
                    </Link>
                    <Link href="#roadmap" className="text-white font-extrabold text-base md:text-sm lg:text-lg hover:text-[#E4B40D] transition-colors">
                        Roadmap
                    </Link>
                    <Link href="#faqs" className="text-white font-extrabold text-base md:text-sm lg:text-lg hover:text-[#E4B40D] transition-colors">
                        FAQs
                    </Link>
                    <Link href="#contact" className="text-white font-extrabold text-base md:text-sm lg:text-lg hover:text-[#E4B40D] transition-colors">
                        Contact Us
                    </Link>
                </div>

                {/* Contact Us & Socials */}
                <div className="flex flex-col items-center gap-4 md:gap-6">
                    <span className="text-white font-extrabold text-xl md:text-2xl lg:text-3xl tracking-wide">
                        Contact <span className="text-[#E4B40D]">Us</span>
                    </span>
                    <div className="flex gap-6 items-center">
                        {/* Social Icons */}
                        <Image
                            src="/assets/contact_icon.svg"
                            alt="Social Icons"
                            width={185}
                            height={31}
                            className="h-6 md:h-8 w-auto"
                        />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
