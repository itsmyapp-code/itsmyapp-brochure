"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface KenBurnsHeroProps {
  images: string[];
  title: string;
}

export default function KenBurnsHero({ images, title }: KenBurnsHeroProps) {
  // To handle hydration gracefully since we use complex CSS animations
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-cyber-black flex items-center justify-center">
      {/* Fallback pattern while loading */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

      {mounted && images.map((img, index) => {
        // Animation logic:
        // We have N images. The total cycle time is N * duration per image.
        // We use inline styles to calculate dynamic animation delays based on index and length.
        const duration = 8; // seconds per image
        const totalDuration = images.length * duration;
        const delay = index * duration;
        
        return (
          <div 
            key={index} 
            className="absolute inset-0 z-10 opacity-0 animate-ken-burns"
            style={{
              animationDuration: `${totalDuration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            <Image 
              src={img}
              alt={`Hero Image ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        );
      })}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/50 to-transparent z-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-20" />

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-bold font-inter text-white tracking-tight drop-shadow-2xl">
          {title}
        </h1>
        <div className="w-24 h-1 bg-neon-cyan mx-auto mt-8 shadow-[0_0_15px_rgba(0,229,255,0.8)]"></div>
      </div>
    </div>
  );
}
