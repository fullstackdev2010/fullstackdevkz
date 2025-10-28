import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#1C1B33] text-white font-serif">
      <Hero />
      <About />
      <Featured />
      <Footer />
    </div>
  );
}
