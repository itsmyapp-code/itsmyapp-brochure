import React from "react";

export default function ComplianceMD() {
  const features = [
    {
      title: "Spring 2027 Future-Proofed",
      description: "Fully aligned with the upcoming Data (Use and Access) Act and DMCCA regulations, putting your platform a full year ahead of the competition.",
      icon: "⚡"
    },
    {
      title: "Zero-Trap Subscription Logic",
      description: "Features built-in, hard-coded 'Easy Exit' logic, transparent anti-drip pricing, and automated renewal reminders to guarantee total transparency.",
      icon: "🔓"
    },
    {
      title: "Equal Prominence Consent",
      description: "Clean, compliant cookie consent modules that banish manipulative 'dark patterns' while optimizing user opt-ins legally.",
      icon: "⚖️"
    },
    {
      title: "Universal Accessibility",
      description: "Fully optimized for WCAG 2.1 Level AA compliance out of the box, ensuring seamless screen reader and keyboard navigation.",
      icon: "👁️"
    }
  ];

  return (
    <section className="py-24 bg-cyber-black border-y border-cyber-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-green opacity-5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-cyan opacity-5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header & Hook */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 border border-neon-green/30 bg-neon-green/10 text-neon-green text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full mb-6">
            Compliance MD Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white text-glow-green mb-6">
            Built for Tomorrow.<br />
            <span className="text-neon-green">Compliant Today.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-sans leading-relaxed">
            Every platform we build is armed with <strong>Compliance MD</strong>—our proprietary legal architecture engineered to meet the strict UK GDPR, PECR, and upcoming Spring 2027 consumer protection laws. We don't just build software; we protect your digital footprint.
          </p>
        </div>

        {/* Core Value Proposition */}
        <div className="bg-cyber-panel border border-cyber-border rounded-2xl p-8 md:p-12 mb-16 shadow-2xl relative group hover:border-neon-green/50 transition-colors duration-500">
          <p className="text-lg text-gray-400 leading-relaxed font-sans text-center max-w-4xl mx-auto">
            In a landscape where digital regulations shift overnight, your application cannot afford to lag behind. Compliance MD is an elite, future-proof compliance engine baked directly into the DNA of your platform. By integrating current privacy laws with the strict incoming 2027 UK standards, we ensure your app remains uninterrupted, your user trust remains absolute, and your business stays entirely risk-free.
          </p>
        </div>

        {/* Bulleted Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 p-6 border border-cyber-border/50 bg-cyber-dark rounded-xl hover:bg-cyber-panel transition-colors duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-neon-green/10 text-2xl border border-neon-green/20">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-inter">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* The Technical Trust Statement Callout */}
        <div className="max-w-4xl mx-auto text-center border-l-4 border-neon-cyan pl-8 py-4 bg-gradient-to-r from-neon-cyan/5 to-transparent">
          <h4 className="text-neon-cyan font-mono font-bold uppercase tracking-widest text-sm mb-3">The Compliance MD Promise</h4>
          <p className="text-gray-300 italic font-sans text-lg">
            "We believe transparency builds the strongest user relationships. Our Compliance MD architecture ensures that user data rights are explicitly respected, storage is localized whenever possible, and privacy policies are straightforward, scannable, and legally watertight. Zero friction. Absolute trust."
          </p>
        </div>

        {/* Short Blurb Footer */}
        <div className="mt-16 text-center text-xs font-mono text-gray-500 uppercase tracking-widest">
          Built with Compliance MD: Bulletproof legal frameworks keeping your app safe past 2027.
        </div>

      </div>
    </section>
  );
}
