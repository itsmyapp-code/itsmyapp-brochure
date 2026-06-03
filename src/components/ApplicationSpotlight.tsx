import PremiumCard from './PremiumCard';
import { AppData } from '../data/portfolio';

interface ApplicationSpotlightProps {
  id?: string;
  title: string;
  description?: string;
  apps: AppData[];
}

export function ApplicationSpotlight({ id, title, description, apps }: ApplicationSpotlightProps) {
  return (
    <section id={id} className="relative py-32 bg-cyber-black scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-white mb-6 tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-400 font-mono">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <PremiumCard 
              key={index}
              title={app.title}
              description={app.description}
              image={app.image}
              link={app.link}
              badge={app.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
