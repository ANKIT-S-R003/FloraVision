import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingSection from "@/components/TrendingSection";
import TopSellingSection from "@/components/TopSellingSection";
import ReviewSection from "@/components/ReviewSection";
import OxygenSection from "@/components/OxygenSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <TrendingSection />
      <TopSellingSection />
      <ReviewSection />
      <OxygenSection />
      <Footer />
    </main>
  );
}
