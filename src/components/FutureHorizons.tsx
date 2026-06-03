import React from "react";

export default function FutureHorizons() {
  return (
    <section className="py-24 px-6 md:px-12 bg-cyber-dark border-b border-cyber-border overflow-hidden relative">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-sm text-neon-cyan font-mono uppercase tracking-[0.3em] mb-4">Section 3</h2>
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-text-primary text-glow-cyan mb-6">
            Future R&D Horizons
          </h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            (Development Pipeline)
          </p>
        </div>

        <div className="bg-cyber-black border border-cyber-border p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-neon-cyan opacity-5 blur-[80px] rounded-full pointer-events-none group-hover:opacity-10 transition-opacity duration-700" />
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-text-primary mb-2 uppercase text-glow-cyan">3D Furniture Modeler</h4>
              <p className="text-sm text-neon-cyan font-mono mb-6 uppercase tracking-widest">(Parametric Spatial Component Engine)</p>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                An upcoming, professional-grade 3D environment built natively on the <strong className="text-text-primary">Three.js WebGL framework</strong>. Purpose-built to conform strictly with UK Standard Manufacturing Dimensions, this upcoming module allows for the rapid digital prototyping of bespoke wardrobes, kitchen cabinetry, and custom structural furniture components.
              </p>
              
              <div className="border-l-2 border-neon-cyan pl-6 py-2 mb-6">
                <p className="text-sm text-text-muted">
                  The interface features complete parametric scaling—adjusting total height, width, or depth automatically recalibrates internal shelving, partitions, hardware placement, and material thickness tolerances.
                </p>
              </div>

              <p className="text-sm text-neon-green font-mono">
                <span className="mr-2">⚡</span> Native Data Pipeline to Its My Cutlist: Converts complete 3D structural designs into optimized, ready-to-cut physical fabrication plans with a single tap.
              </p>
            </div>
            
            {/* 3D wireframe placeholder */}
            <div className="w-full md:w-1/3 aspect-square border border-cyber-border bg-cyber-panel flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] transform rotate-12 scale-150 opacity-50" />
               <div className="w-32 h-32 border-2 border-neon-cyan opacity-80 animate-[spin_10s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 border-2 border-neon-cyan rotate-45" />
                  <div className="absolute inset-0 border-2 border-neon-cyan -rotate-45" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
