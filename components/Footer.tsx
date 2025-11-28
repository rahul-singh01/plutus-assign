import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-background relative overflow-hidden z-50">
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">

                <div className="relative w-50 h-50 overflow-hidden flex items-center justify-center">
                    <Image
                        src="/assets/footer_bg_rect.svg"
                        alt="Moonex Text"
                        width={100}
                        height={100}
                        className="max-w-none absolute"
                        style={{ height: '100px', width: 'auto' }}
                    />
                </div>


                {/* Links Section */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center">
                    <Link href="#about" className="text-white font-extrabold text-base md:text-lg hover:text-[#E4B40D] transition-colors">
                        About Us
                    </Link>
                    <Link href="#roadmap" className="text-white font-extrabold text-base md:text-lg hover:text-[#E4B40D] transition-colors">
                        Roadmap
                    </Link>
                    <Link href="#faqs" className="text-white font-extrabold text-base md:text-lg hover:text-[#E4B40D] transition-colors">
                        FAQs
                    </Link>
                    <Link href="#contact" className="text-white font-extrabold text-base md:text-lg hover:text-[#E4B40D] transition-colors">
                        Contact Us
                    </Link>
                </div>

                {/* Contact Us & Socials */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-white font-extrabold text-2xl md:text-3xl tracking-wide">
                        Contact <span className="text-[#E4B40D]">Us</span>
                    </span>
                    <div className="flex gap-6 items-center">
                        {/* Social Icons */}
                        <Image
                            src="/assets/contact_icon.svg"
                            alt="Social Icons"
                            width={185}
                            height={31}
                            className="h-8 w-auto"
                        />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
