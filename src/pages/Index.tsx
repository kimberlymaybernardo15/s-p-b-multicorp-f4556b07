import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoadmapSection from "@/components/RoadmapSection";
import MissionSection from "@/components/MissionSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PackagesSection from "@/components/PackagesSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RoadmapSection />
      <MissionSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <PackagesSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
