import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'What I Do', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlight logic
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-500/20">
              <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-bold text-lg bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  JH
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-slate-100 text-base sm:text-lg tracking-tight group-hover:text-indigo-400 transition-colors">
                Junaid Hashir
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-1">
                AIML &bull; Web
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-indigo-300 bg-indigo-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-indigo-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-800/80 px-4 pt-4 pb-6 mt-3 space-y-2 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-indigo-600/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/60 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/25"
            >
              Get In Touch
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Junaid_Hashir_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
