import HeroSection from "@/components/HeroSection";
import ComplianceMatrix from "@/components/ComplianceMatrix";
import ApplicationSpotlight from "@/components/ApplicationSpotlight";
import FutureHorizons from "@/components/FutureHorizons";
import EngineRoom from "@/components/EngineRoom";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-cyber-black overflow-x-hidden">
      <HeroSection />
      <ComplianceMatrix />
      <ApplicationSpotlight />
      <FutureHorizons />
      <EngineRoom />
    </main>
  );
}
