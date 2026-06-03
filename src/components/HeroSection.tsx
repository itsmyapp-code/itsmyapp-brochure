"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  // The CSS keyframes are mathematically designed for exactly 4 images to create a seamless crossfade loop.
  const bgImages = [
    '/images/hero_bg_2.png', 
    '/images/hero_bg_1.png', 
    '/images/hero_bg_2.png', 
    '/images/hero_bg_1.png'
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-cyber-border">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan opacity-10 blur-[120px] rounded-full pointer-events-none z-0" />
      
      {/* Ken Burns Background Loop */}
      {mounted && bgImages.map((img, index) => {
        const duration = 8;
        const totalDuration = bgImages.length * duration;
        const delay = index * duration;
        
        return (
          <div 
            key={index} 
            className="absolute inset-0 z-0 opacity-0 animate-ken-burns pointer-events-none mix-blend-overlay"
            style={{
              animationDuration: `${totalDuration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            <Image 
              src={img}
              alt={`Background ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover opacity-20"
            />
          </div>
        );
      })}

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-20">
        <div className="mb-8 relative w-40 h-40">
          <Image
            src="/images/itsmyapp_logo.png"
            alt="ItsMyApp Logo"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]"
            priority
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-text-primary text-glow-cyan font-mono uppercase">
          The Next-Gen <br /> Digital Brochure
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl text-balance mx-auto leading-relaxed mb-12">
          Engineered to showcase high-performance web applications using state-of-the-art frontend patterns, fluid micro-interactions, and uncompromising visual storytelling.
        </p>
        
      </div>
    </section>
  );
}
