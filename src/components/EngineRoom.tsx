"use client";

import React, { useState, useEffect } from "react";

export default function EngineRoom() {
  const [formInput, setFormInput] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormInput(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Formspree ID from the old site
    const formspreeId = 'mojnoejw';

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: JSON.stringify(formInput),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormInput({ name: '', email: '', message: '' });
      } else {
        setError(data.error || "Oops! There was a problem submitting your form.");
      }
    } catch (err) {
      console.error('Error:', err);
      setError("Oops! There was a network problem. Please try again later.");
    }
  };

  // MailerLite Initialization
  useEffect(() => {
    const init = () => {
      if (typeof window !== 'undefined' && (window as any).ml) {
        (window as any).ml('account', '2088496');
      }
    };
    init();
    const timer = setTimeout(init, 1500);
    return () => clearTimeout(timer);
  }, []);

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
            
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <span className="text-neon-cyan text-5xl mb-4 block">✓</span>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent</h4>
                <p className="text-gray-400 font-mono">We will securely process your inquiry and respond shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label className="block text-xs font-mono text-neon-cyan mb-2 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formInput.name}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-dark border border-cyber-border p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors font-sans"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neon-cyan mb-2 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formInput.email}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-dark border border-cyber-border p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors font-sans"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neon-cyan mb-2 uppercase tracking-widest">Message</label>
                  <textarea 
                    name="message"
                    value={formInput.message}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-dark border border-cyber-border p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors font-sans h-32 resize-none"
                    placeholder="How can we help?"
                    required
                  ></textarea>
                </div>
                
                {/* Honeypot field for spam protection */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                
                {error && <p className="text-red-500 text-sm font-mono">{error}</p>}
                
                <button 
                  type="submit" 
                  className="w-full bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black font-bold uppercase tracking-widest py-4 transition-colors duration-300"
                >
                  Send Transmission
                </button>
              </form>
            )}
          </div>

          {/* Newsletter Form */}
          <div className="bg-cyber-panel border border-cyber-border p-8 rounded-xl shadow-lg relative overflow-hidden group hover:border-neon-green transition-colors duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 font-inter uppercase">The Newsletter</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-sans">
              No spam. No trackers. Just high-quality updates on new Zero Server apps, technical deep dives, and digital sovereignty insights, delivered straight to your inbox.
            </p>
            
            {/* MailerLite Embedded Form */}
            <div className="ml-embedded" data-form="buJ2S3"></div>
            
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
