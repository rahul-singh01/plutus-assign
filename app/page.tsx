import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#051422] text-white overflow-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
    </main>
  );
}
