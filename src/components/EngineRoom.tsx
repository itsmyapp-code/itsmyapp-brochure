import React from "react";

export default function EngineRoom() {
  return (
    <footer className="py-24 px-6 md:px-12 bg-cyber-black relative border-t-4 border-neon-cyan overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-neon-cyan shadow-[0_0_30px_5px_rgba(0,229,255,0.8)]" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-sm text-neon-cyan font-mono uppercase tracking-[0.3em] mb-4">Section 4</h2>
        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-text-primary text-glow-cyan mb-6">
          The Technical Infrastructure Profile
        </h3>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-16">
          The engineering stack powering itsmyapp.co.uk is unified under a lightweight, high-speed, modern standard suite to maximize computational velocity and enforce strict user data isolation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Application Framework", value: "React 19 & Next.js" },
            { label: "Visual Synthesis", value: "Tailwind CSS (Fluid & Container Queries)" },
            { label: "Data Isolation Layer", value: "Localized Firebase & Web Crypto API" },
            { label: "Global Infrastructure", value: "Vercel Static Edge Network" }
          ].map((tech, idx) => (
            <div key={idx} className="bg-cyber-panel border border-cyber-border p-6 hover:border-neon-cyan transition-colors">
              <div className="text-xs text-text-muted uppercase tracking-widest mb-2 font-mono">{tech.label}</div>
              <div className="text-sm font-bold text-text-primary">{tech.value}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-cyber-border pt-12 pb-6">
           <h3 className="text-2xl font-bold uppercase tracking-tight text-text-primary mb-6">Ultra-Modern Web Experience & UX Strategy</h3>
           <div className="grid md:grid-cols-2 gap-8 text-left text-sm text-text-secondary max-w-4xl mx-auto">
              <div>
                <h4 className="text-neon-cyan font-bold mb-2 uppercase">Native View Transitions API</h4>
                <p className="mb-6">Experience fluid, app-like page morphing and state transitions natively handled by the browser engine.</p>
                
                <h4 className="text-neon-cyan font-bold mb-2 uppercase">Scroll-Driven CSS Animations</h4>
                <p>Leverage hardware-accelerated, zero-thread timeline animations. Elements dynamically scale and fade precisely as the user scrolls.</p>
              </div>
              <div>
                <h4 className="text-neon-cyan font-bold mb-2 uppercase">Advanced CSS Grid & Container Queries</h4>
                <p className="mb-6">Layouts adapt perfectly not just to screen breakpoints, but to the size of their parent components.</p>
                
                <h4 className="text-neon-cyan font-bold mb-2 uppercase">Instant Progressive Web App (PWA)</h4>
                <p>Fully configured for native OS integration with rich offline caching. Experience absolute 120Hz scrolling fluidity.</p>
              </div>
           </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cyber-border/50 text-xs text-text-muted font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} itsmyapp.co.uk | Built for Performance & Privacy.
        </div>
      </div>
    </footer>
  );
}
