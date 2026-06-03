import React from "react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 bg-cyber-dark border-b border-cyber-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-inter text-white mb-6">
            Our Philosophy
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-cyber-panel border border-cyber-border p-8 rounded-xl shadow-lg relative overflow-hidden group">
            <h4 className="text-xl font-bold font-inter text-white mb-4 italic">Quality Over Quantity</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              We are a small, passionate team of developers with a love for creating high-quality, user-friendly apps and websites. Our philosophy is simple: we believe in quality over quantity. In a world of bloated software and rushed releases, we take a different approach.
            </p>
          </div>

          <div className="bg-cyber-panel border border-cyber-border p-8 rounded-xl shadow-lg relative overflow-hidden group">
            <h4 className="text-xl font-bold font-inter text-neon-green mb-4 italic">The Scalebanana Principle</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              We focus on perfecting a single product before scaling. This allows us to pour all our energy and creativity into making each app and website we release a robust, reliable, and polished product that truly solves a real-world problem.
            </p>
          </div>

          <div className="bg-cyber-panel border border-cyber-border p-8 rounded-xl shadow-lg relative overflow-hidden group">
            <h4 className="text-xl font-bold font-inter text-white mb-4 italic">The Agility of Small</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              Being a small team is our strength. It allows us to be agile, to collaborate closely, and to pay attention to the details that matter most. We are not a faceless corporation; we are a passionate team of individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
