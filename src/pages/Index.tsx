import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import RoadmapSection from "@/components/RoadmapSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionSection />
      <RoadmapSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
