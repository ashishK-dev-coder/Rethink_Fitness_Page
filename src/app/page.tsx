import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import TransformationSection from "@/components/TransformationSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <StatsSection />
      <AboutSection />
      <TransformationSection />
      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
