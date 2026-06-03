import React from "react";

export default function EngineRoom() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-cyber-black relative border-t border-cyber-border overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-neon-cyan shadow-[0_0_30px_5px_rgba(0,229,255,0.8)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-text-primary text-glow-cyan mb-4">
            Contact & Connect
          </h2>
          <p className="text-lg text-gray-400 font-mono">
            Reach out to our team or join our secure newsletter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-cyber-panel border border-cyber-border p-8 rounded-xl shadow-lg relative overflow-hidden group hover:border-neon-cyan transition-colors duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 font-inter uppercase">Get In Touch</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-mono text-neon-cyan mb-2 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-cyber-dark border border-cyber-border p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors font-sans"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-neon-cyan mb-2 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-cyber-dark border border-cyber-border p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors font-sans"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-neon-cyan mb-2 uppercase tracking-widest">Message</label>
                <textarea 
                  className="w-full bg-cyber-dark border border-cyber-border p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors font-sans h-32 resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black font-bold uppercase tracking-widest py-4 transition-colors duration-300"
              >
                Send Transmission
              </button>
            </form>
          </div>

          {/* Newsletter Form */}
          <div className="bg-cyber-panel border border-cyber-border p-8 rounded-xl shadow-lg relative overflow-hidden group hover:border-neon-green transition-colors duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 font-inter uppercase">The Newsletter</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-sans">
              No spam. No trackers. Just high-quality updates on new Zero Server apps, technical deep dives, and digital sovereignty insights, delivered straight to your inbox.
            </p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-mono text-neon-green mb-2 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-cyber-dark border border-cyber-border p-3 text-white focus:outline-none focus:border-neon-green transition-colors font-sans"
                  placeholder="Enter your email"
                />
              </div>
              <button 
                type="button" 
                className="w-full bg-transparent border border-neon-green text-neon-green hover:bg-neon-green hover:text-cyber-black font-bold uppercase tracking-widest py-4 transition-colors duration-300"
              >
                Secure Subscribe
              </button>
            </form>
            
            <div className="mt-8 p-4 bg-cyber-dark border border-cyber-border rounded-lg text-center">
               <span className="text-neon-green text-xl block mb-2">🛡️</span>
               <span className="text-xs text-gray-500 font-mono uppercase">Your data is strictly encrypted</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cyber-border/50 text-xs text-text-muted font-mono uppercase tracking-widest text-center">
          © {new Date().getFullYear()} itsmyapp.co.uk | Built for Performance & Privacy.
        </div>
      </div>
    </footer>
  );
}
