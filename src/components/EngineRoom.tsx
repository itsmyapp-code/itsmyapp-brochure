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
    <footer id="contact" className="bg-[#0A192F] relative overflow-hidden font-sans">
      
      {/* Newsletter Section exactly like old site */}
      <section className="bg-[#495670]/10 text-white border-y border-[#495670]/20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Stay Ahead of the Curve</h2>
          <p className="text-lg text-[#8892B0] mb-8 max-w-xl mx-auto">
            Join our newsletter to get the latest news, updates, and early access to our apps in development.
          </p>

          <div className="max-w-md mx-auto bg-[#495670]/5 rounded-xl p-4 md:p-8 backdrop-blur-sm border border-white/5 shadow-2xl">
            {/* MailerLite Embedded Form */}
            <div className="ml-embedded" data-form="buJ2S3"></div>
          </div>

          <p className="text-xs text-[#495670] mt-6 italic">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* Contact Form Section exactly like old site */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-lg text-[#8892B0] mb-8">Have questions, feedback, or a project in mind? We'd love to hear from you.</p>
          
          {isSubmitted ? (
            <div className="p-8 bg-[#495670]/10 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-[#64FFDA]">Thank You!</h3>
                <p className="text-[#8892B0] mt-2">Your message has been sent. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="p-8 bg-[#495670]/10 rounded-xl shadow-lg space-y-4">
              <div>
                  <label htmlFor="name" className="block text-[#8892B0] text-sm font-bold mb-2 text-left">Name</label>
                  <input type="text" id="name" name="name" value={formInput.name} onChange={handleInputChange} className="shadow-sm appearance-none bg-[#495670]/20 border border-[#495670] rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#64FFDA]" required />
              </div>
              <div>
                  <label htmlFor="email" className="block text-[#8892B0] text-sm font-bold mb-2 text-left">Email</label>
                  <input type="email" id="email" name="email" value={formInput.email} onChange={handleInputChange} className="shadow-sm appearance-none bg-[#495670]/20 border border-[#495670] rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#64FFDA]" required />
              </div>
              <div>
                  <label htmlFor="message" className="block text-[#8892B0] text-sm font-bold mb-2 text-left">Message</label>
                  <textarea id="message" name="message" value={formInput.message} onChange={handleInputChange} rows={4} className="shadow-sm appearance-none bg-[#495670]/20 border border-[#495670] rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#64FFDA]" required></textarea>
              </div>
              {/* Honeypot field for spam protection */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <div className="text-center">
                  <button type="submit" className="w-full bg-[#64FFDA] text-[#0A192F] font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-colors duration-300">
                      Send Message
                  </button>
              </div>
              {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form>
          )}
        </div>
      </section>

      <div className="py-8 border-t border-[#495670]/20 text-xs text-[#8892B0] text-center">
        © {new Date().getFullYear()} itsmyapp.co.uk
      </div>
    </footer>
  );
}
