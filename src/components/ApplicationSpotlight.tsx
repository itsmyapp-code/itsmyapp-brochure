import React from "react";
import PremiumCard from "./PremiumCard";

export default function ApplicationSpotlight() {
  return (
    <section id="spotlight" className="py-24 px-6 md:px-12 bg-cyber-black border-b border-cyber-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-sm text-neon-cyan font-mono uppercase tracking-[0.3em] mb-4">Section 2</h2>
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-text-primary text-glow-cyan mb-6">
            The Premium Application Spotlights
          </h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            High-performance web applications using state-of-the-art frontend patterns, fluid micro-interactions, and uncompromising visual storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <PremiumCard 
            number="01"
            title="PackitTrackit"
            subtitle="Visual Inventory Logistics"
            desc="Fundamentally reengineers the chaotic, error-prone manual labeling paradigms associated with packing, high-density moving, and complex collection management."
            features={[
              { title: "Deterministic Tracking Vectors", desc: "Generates cryptographic-grade unique QR tokens for physical containers." },
              { title: "AI-Enhanced Visual Capture", desc: "Indexes container contents via localized image analysis." },
              { title: "Localized Sub-Second Indexing", desc: "Bypasses external cloud querying. Pinpoints items in fractions of a second." }
            ]}
            colorTheme="cyan"
          />

          <PremiumCard 
            number="02"
            title="Whole Hospitality"
            subtitle="Dynamic Margin Defense"
            desc="An analytical software environment designed to insulate hospitality margins against supplier volatility, inflationary pressures, and operational waste."
            features={[
              { title: "Dynamic GP Calculator", desc: "Executes mathematical Gross Profit modeling against real-time invoices." },
              { title: "Frictionless Workflows", desc: "Slashes administrative labor overhead by over 40%." },
              { title: "Compliance & Waste Auditor", desc: "Localized cryptographic logging for operational shrinkage." }
            ]}
            colorTheme="green"
          />

          <PremiumCard 
            number="03"
            title="Its My Cutlist"
            subtitle="Parametric Material Yield Engine"
            desc="A high-performance optimization utility built for custom material creators. It eliminates raw material waste by computing exact geometric material distribution profiles."
            features={[
              { title: "Multi-Dimensional Nesting", desc: "Executes combinatorial optimization math to compute the absolute highest yield." },
              { title: "Parametric Component Modeler", desc: "Empowers operators to establish adaptive geometric design rules." },
              { title: "High-Fidelity Vector Blueprints", desc: "Generates clean, high-contrast, low-tolerance cutting paths." }
            ]}
            colorTheme="cyan"
          />

          <PremiumCard 
            number="04"
            title="Its My Screen"
            subtitle="Decentralized Edge Signage"
            desc="Dismantles the predatory Digital Signage SaaS model. Transforms any commercial display node into a high-performance visual asset using a client-side browser runtime."
            features={[
              { title: "Infrastructure-Free Deployment", desc: "Requires no proprietary external hardware players or dongles." },
              { title: "Dynamic Local Provisioning", desc: "Update menu boards, pricing tiers, and layouts instantly." },
              { title: "Total Disconnection Immunity", desc: "Runs entirely on persistent client-side caching. Rendering flawlessly offline." }
            ]}
            colorTheme="green"
          />
        </div>
      </div>
    </section>
  );
}
