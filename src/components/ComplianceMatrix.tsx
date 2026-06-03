import React from "react";

export default function ComplianceMatrix() {
  return (
    <section id="compliance" className="py-24 px-6 md:px-12 bg-cyber-dark border-b border-cyber-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-sm text-neon-green font-mono uppercase tracking-[0.3em] mb-4">Section 1</h2>
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-text-primary text-glow-cyan mb-6">
            The Trust & Compliance Matrix
          </h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Every software application engineered, deployed, and hosted within the itsmyapp.co.uk matrix is bound to a strict, non-negotiable architectural framework. Built natively into the client-side execution layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-panel border border-cyber-border p-8 relative overflow-hidden group hover:border-neon-cyan transition-colors duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl group-hover:text-neon-cyan transition-colors">01</div>
            <h4 className="text-xl font-bold text-text-primary mb-4 uppercase">Compliance MD</h4>
            <ul className="space-y-3 font-mono text-sm text-text-secondary">
              <li className="flex items-center"><span className="text-neon-cyan mr-2">→</span> Dynamic Cookie Consent Banner</li>
              <li className="flex items-center"><span className="text-neon-cyan mr-2">→</span> Comprehensive Terms of Service (ToS)</li>
              <li className="flex items-center"><span className="text-neon-cyan mr-2">→</span> Zero-Leak Privacy Policy</li>
              <li className="flex items-center"><span className="text-neon-cyan mr-2">→</span> Granular Cookie Policy</li>
              <li className="flex items-center"><span className="text-neon-cyan mr-2">→</span> Universal Accessibility Statement</li>
            </ul>
            <p className="mt-6 text-sm text-text-muted">
              Integrated directly into the source code out of the box, requiring zero external tracking calls or third-party dependencies.
            </p>
          </div>

          <div className="bg-cyber-panel border border-cyber-border p-8 relative overflow-hidden group hover:border-neon-green transition-colors duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl group-hover:text-neon-green transition-colors">02</div>
            <h4 className="text-xl font-bold text-text-primary mb-4 uppercase">The Zero-Server Paradigm</h4>
            <p className="text-sm text-text-secondary mb-4">
              Modern enterprise software suffers from a structural data-surveillance defect. We reject this centralized model entirely. Our portfolio operates on a strict, pure Zero-Server Architecture.
            </p>
            <div className="bg-cyber-black p-4 border border-cyber-border font-mono text-xs text-neon-green mt-6 rounded-sm">
              <div className="mb-2 text-text-muted">// Localized Execution Pipeline</div>
              <div className="mb-1">[Your Device / Local Browser]</div>
              <div className="mb-1 pl-4 text-neon-cyan">└── (Strict Client-Side Compute Only)</div>
              <div className="mb-1 pl-8">└── [Data Stays Isolated]</div>
              <div className="mt-4 pl-4 text-red-400">
                <div>[X] No External Databases</div>
                <div>[X] No Cloud Tracking Pixels</div>
                <div>[X] No Third-Party Telemetry</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Zero Data Retention Risk", desc: "There are no external cloud databases to breach, leak, or compromise." },
            { title: "Zero Interception Vectors", desc: "Proprietary metadata, operational logs, and sensitive configurations never transit across a multi-tenant backend server." },
            { title: "Instantaneous Edge Execution", desc: "100% of compute cycles happen directly on your local silicon hardware, eliminating network latency and guaranteeing offline resilience." }
          ].map((item, i) => (
            <div key={i} className="border-l-2 border-neon-cyan pl-6 py-2">
              <h5 className="font-bold text-text-primary uppercase mb-2 text-sm">{item.title}</h5>
              <p className="text-text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
