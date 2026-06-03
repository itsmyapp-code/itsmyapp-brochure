import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { allApps } from '@/data/portfolio';
import KenBurnsHero from '@/components/KenBurnsHero';

export function generateStaticParams() {
  return allApps.map((app) => ({
    slug: app.slug,
  }));
}

export default async function AppDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const app = allApps.find((a) => a.slug === resolvedParams.slug);

  if (!app) {
    notFound();
  }

  // Fallback to default image if heroImages array is missing
  const heroImages = app.heroImages && app.heroImages.length > 0 
    ? app.heroImages 
    : [app.image, app.image, app.image];

  return (
    <main className="flex flex-col w-full min-h-screen bg-cyber-black overflow-x-hidden pt-20">
      <Link href="/#zero-server" className="fixed top-8 left-8 z-50 text-neon-cyan font-mono hover:text-white transition-colors flex items-center gap-2">
        <span>←</span> BACK TO PORTFOLIO
      </Link>

      <KenBurnsHero images={heroImages} title={app.title} />

      {/* Details Section */}
      <section className="py-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-cyber-panel border border-cyber-border p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
          
          <h2 className="text-3xl font-bold font-inter text-white mb-6 uppercase tracking-tight">
            System Overview
          </h2>
          
          <div className="prose prose-invert prose-p:text-gray-400 prose-p:leading-relaxed max-w-none">
            <p className="text-xl text-neon-cyan mb-8 font-mono">{app.description}</p>
            {app.extendedDescription && (
              <div dangerouslySetInnerHTML={{ __html: app.extendedDescription }} />
            )}
          </div>

          {app.link && (
            <div className="mt-12">
              <a 
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black transition-colors duration-300 px-8 py-4 font-mono font-bold tracking-widest text-sm uppercase"
              >
                Launch Application
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Screenshots Gallery */}
      {app.screenshots && app.screenshots.length > 0 && (
        <section className="py-24 bg-cyber-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold font-inter text-white mb-16 tracking-tight">
              INTERFACE <span className="text-neon-cyan">GALLERY</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {app.screenshots.map((shot, idx) => (
                <div key={idx} className="relative aspect-video border border-cyber-border overflow-hidden group">
                  <Image 
                    src={shot}
                    alt={`${app.title} Screenshot ${idx + 1}`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Narration Placeholder */}
      <section className="py-12 text-center bg-cyber-black border-t border-cyber-border">
         <p className="text-gray-600 font-mono text-sm">
           [Audio Narration Module - Pending Activation]
         </p>
      </section>
    </main>
  );
}
