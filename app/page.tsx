import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyMoonEX from "@/components/WhyMoonEX";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <WhyMoonEX />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
