import React from "react";

export default function ZeroServerInfo() {
  return (
    <section className="py-24 px-6 md:px-12 bg-cyber-dark border-t border-cyber-border">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-inter text-white mb-4">
          Zero Server. Zero Surveillance. <span className="text-neon-cyan">Zero Cost.</span>
        </h2>
        <p className="text-lg text-gray-400 italic mb-16">
          The ultimate in digital sovereignty.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
          <div className="bg-cyber-panel border border-cyber-border p-8 rounded-xl shadow-lg relative overflow-hidden group">
            <h4 className="text-sm font-bold font-mono text-neon-cyan mb-4 uppercase tracking-wider">The Transparency Gap</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              Most free apps pay for their servers by selling your habits. <strong className="text-white">ItsMyApp</strong> does things differently. We don't have servers to maintain, so we don't need your data to pay for them.
            </p>
          </div>

          <div className="bg-cyber-panel border border-cyber-border p-8 rounded-xl shadow-lg relative overflow-hidden group">
            <h4 className="text-sm font-bold font-mono text-neon-cyan mb-4 uppercase tracking-wider">Local Execution</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              Our Zero Server apps run entirely on your device. Your data never touches a cloud, never enters a database, and never leaves your sight. This is true privacy by design.
            </p>
          </div>

          <div className="bg-cyber-panel border border-cyber-border p-8 rounded-xl shadow-lg relative overflow-hidden group flex flex-col justify-center items-center space-y-6 text-center">
            <h4 className="text-sm font-bold font-mono text-neon-cyan uppercase tracking-widest">Private By Design</h4>
            <h4 className="text-sm font-bold font-mono text-neon-cyan uppercase tracking-widest">Free By Choice</h4>
            <h4 className="text-sm font-bold font-mono text-neon-cyan uppercase tracking-widest">Yours By Right</h4>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-400 mb-8">
            Zero Server apps are expensive to build but cost us nothing to run. If you find value in these tools, consider fueling our mission with a small donation.
          </p>
          <a 
            href="https://buy.stripe.com/fZucN589J6kNfWS8CzgYU03" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-neon-cyan text-cyber-black font-bold rounded-full hover:bg-white transition-colors duration-300"
          >
            Support the Developers
          </a>
        </div>
      </div>
    </section>
  );
}
