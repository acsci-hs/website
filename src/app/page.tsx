import Navbar from "@/components/Navbar";
import Programs from "@/components/homepage/Programs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/homepage/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Programs />
      <Footer />
    </>
  );
}
