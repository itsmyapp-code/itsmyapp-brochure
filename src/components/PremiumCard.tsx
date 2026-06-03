import React from "react";
import Image from "next/image";

interface AppFeature {
  title: string;
  desc: string;
}

export interface PremiumCardProps {
  title: string;
  slug: string;
  description: string;
  image?: string;
  link?: string;
  badge?: string;
  number?: string;
  subtitle?: string;
  features?: AppFeature[];
  colorTheme?: "cyan" | "green";
}

export default function PremiumCard({
  title,
  slug,
  description,
  image,
  link,
  badge,
  number,
  subtitle,
  features,
  colorTheme = "cyan"
}: PremiumCardProps) {
  const isCyan = colorTheme === "cyan";
  const glowClass = isCyan ? "group-hover:box-glow-cyan group-hover:border-neon-cyan" : "group-hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] group-hover:border-neon-green";
  const textGlowClass = isCyan ? "text-neon-cyan" : "text-neon-green";
  const textTitleGlowClass = isCyan ? "group-hover:text-glow-cyan" : "group-hover:text-glow-green";

  const CardWrapper = slug ? "a" : "div";
  const wrapperProps = slug ? { href: `/apps/${slug}` } : {};

  return (
    <CardWrapper {...wrapperProps} className={`group flex flex-col bg-cyber-panel border border-cyber-border transition-all duration-500 overflow-hidden relative cursor-pointer ${glowClass}`}>
      
      {/* Top Banner Area */}
      <div className="relative h-48 w-full border-b border-cyber-border overflow-hidden bg-cyber-dark flex items-center justify-center">
        {image ? (
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-contain p-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-panel to-cyber-black opacity-50" />
        )}
        
        {/* Number Badge */}
        {number && (
          <div className="absolute top-4 left-4 font-mono text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
            {number}
          </div>
        )}

        {/* Status Badge */}
        {badge && (
          <div className="absolute top-4 right-4 border border-neon-green text-neon-green text-xs font-mono px-2 py-1 bg-cyber-black/80 backdrop-blur-md z-20">
            {badge}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-8 flex-1 flex flex-col relative z-10">
        {subtitle && <h4 className={`font-mono text-xs uppercase tracking-widest mb-2 ${textGlowClass}`}>{subtitle}</h4>}
        <h3 className={`text-2xl font-bold uppercase tracking-tight text-white mb-4 transition-colors ${textTitleGlowClass}`}>
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
          {description}
        </p>

        {/* Features List */}
        {features && features.length > 0 && (
          <div className="mt-auto">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 border-b border-cyber-border pb-2">Core Mechanics</div>
            <ul className="space-y-3">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start">
                  <span className={`mr-2 mt-0.5 ${textGlowClass}`}>▹</span>
                  <div>
                    <span className="text-sm font-bold text-white block">{feat.title}</span>
                    <span className="text-xs text-gray-500">{feat.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Scanline Effect overlay on hover */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
    </CardWrapper>
  );
}
