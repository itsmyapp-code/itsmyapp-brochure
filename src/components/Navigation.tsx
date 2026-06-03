"use client";

import { useState } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Our Philosophy', href: '#philosophy' },
    { name: 'Zero Server Apps', href: '#zero-server' },
    { name: 'Full Stack Apps', href: '#full-stack' },
    { name: 'Websites', href: '#websites' },
    { name: 'Website Additions', href: '#additions' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu}
        className="fixed top-8 left-8 z-50 p-3 bg-cyber-black/80 backdrop-blur-md border border-white/10 rounded-full hover:border-neon-cyan/50 transition-colors duration-300 group"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`w-full h-[2px] bg-white transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-[2px]' : ''}`}></span>
          <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-full h-[2px] bg-white transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-[2px]' : ''}`}></span>
        </div>
      </button>

      {/* Full Screen Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-cyber-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={toggleMenu}
              className="text-3xl md:text-5xl font-bold font-inter text-white hover:text-neon-cyan transition-colors duration-300 hover:scale-105 transform cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
