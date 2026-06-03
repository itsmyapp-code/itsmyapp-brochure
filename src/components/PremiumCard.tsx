import React from "react";
import Image from "next/image";

interface AppFeature {
  title: string;
  desc: string;
}

interface PremiumCardProps {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  features: AppFeature[];
  imageSrc?: string;
  colorTheme?: "cyan" | "green";
}

export default function PremiumCard({
  number,
  title,
  subtitle,
  desc,
  features,
  imageSrc,
  colorTheme = "cyan"
}: PremiumCardProps) {
  const isCyan = colorTheme === "cyan";
  const glowClass = isCyan ? "group-hover:box-glow-cyan group-hover:border-neon-cyan" : "group-hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] group-hover:border-neon-green";
  const textGlowClass = isCyan ? "text-neon-cyan" : "text-neon-green";
  const textTitleGlowClass = isCyan ? "group-hover:text-glow-cyan" : "group-hover:text-glow-green";

  return (
    <div className={`group flex flex-col bg-cyber-panel border border-cyber-border transition-all duration-500 overflow-hidden relative ${glowClass}`}>
      
      {/* Top Banner Area */}
      <div className="relative h-48 w-full border-b border-cyber-border overflow-hidden bg-cyber-dark flex items-center justify-center">
        {imageSrc ? (
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-panel to-cyber-black opacity-50" />
        )}
        
        {/* Number Badge */}
        <div className="absolute top-4 left-4 font-mono text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
          {number}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex-1 flex flex-col relative z-10">
        <h4 className={`font-mono text-xs uppercase tracking-widest mb-2 ${textGlowClass}`}>{subtitle}</h4>
        <h3 className={`text-2xl font-bold uppercase tracking-tight text-text-primary mb-4 transition-colors ${textTitleGlowClass}`}>
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">
          {desc}
        </p>

        {/* Features List */}
        <div className="mt-auto">
          <div className="text-xs uppercase tracking-widest text-text-muted mb-4 border-b border-cyber-border pb-2">Core Mechanics</div>
          <ul className="space-y-3">
            {features.map((feat, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`mr-2 mt-0.5 ${textGlowClass}`}>▹</span>
                <div>
                  <span className="text-sm font-bold text-text-primary block">{feat.title}</span>
                  <span className="text-xs text-text-muted">{feat.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scanline Effect overlay on hover */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
    </div>
  );
}
