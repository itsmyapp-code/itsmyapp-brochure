import HeroSection from "@/components/HeroSection";
import Philosophy from "@/components/Philosophy";
import ZeroServerInfo from "@/components/ZeroServerInfo";
import { ApplicationSpotlight } from "@/components/ApplicationSpotlight";
import EngineRoom from "@/components/EngineRoom";
import { zeroServerApps, fullStackApps, websites, websiteAdditions } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-cyber-black overflow-x-hidden">
      <HeroSection />
      
      <Philosophy />

      <ZeroServerInfo />

      <ApplicationSpotlight 
        id="zero-server" 
        title="ZERO SERVER APPS" 
        description="Our portfolio operates on a strict, pure Zero-Server Architecture. Your data never touches a cloud."
        apps={zeroServerApps} 
      />

      <ApplicationSpotlight 
        id="full-stack" 
        title="FULL STACK APPS" 
        description="Powerful, scalable, and beautifully designed premium web applications."
        apps={fullStackApps} 
      />

      <ApplicationSpotlight 
        id="websites" 
        title="WEBSITES" 
        description="Next-generation digital experiences and landing pages."
        apps={websites} 
      />

      <ApplicationSpotlight 
        id="additions" 
        title="WEBSITE ADDITIONS" 
        description="Integrations, digital brochures, and AI voice receptionists to supercharge your business."
        apps={websiteAdditions} 
      />

      <div id="about">
      </div>

      <div id="contact">
        <EngineRoom />
      </div>
    </main>
  );
}
