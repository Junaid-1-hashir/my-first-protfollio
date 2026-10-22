import React from 'react';
import { ArrowUp, Heart, Mail, MapPin } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'What I Do', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-slate-900 bg-[#03050c] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Brief */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0b1120] rounded-[11px] flex items-center justify-center font-bold text-sm text-indigo-300">
                  JH
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-slate-100">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              AIML Engineering Student at AJ Institute of Engineering & Technology, Mangaluru. Passionate about artificial intelligence, modern web creation, and creative problem solving.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-indigo-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect / Socials */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Direct Channels
            </h4>
            
            <div className="flex flex-col gap-2.5">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-500" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-indigo-400 transition-colors font-mono"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
