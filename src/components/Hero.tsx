import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Terminal, 
  Sparkles, 
  Check, 
  Copy,
  Code2,
  Cpu,
  BrainCircuit
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 sm:pb-24 lg:pt-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Greeting & Heading */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-100 tracking-tight leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Subtitle / Role */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 mb-6 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-blue-400 font-semibold">AIML Engineering Student</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-indigo-300">Website Creator</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-purple-400">Coding Enthusiast</span>
            </h2>

            {/* Introduction paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.bio} Currently pursuing Computer Science Engineering in Artificial Intelligence & Machine Learning at AJIET Mangaluru, exploring intelligent software, creative web aesthetics, and practical digital problem-solving.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Junaid_Hashir_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
                title="Download Junaid Hashir's Resume"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Contact & Location Badges */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-6 border-t border-slate-800/80 w-full text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors bg-slate-900/60 hover:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-800"
                  title="Click to copy email address"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="font-mono">{PERSONAL_INFO.email}</span>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-500 ml-1" />
                  )}
                </button>
                {copied && (
                  <span className="text-emerald-400 text-[11px] animate-fadeIn">Copied!</span>
                )}
              </div>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-500" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Visual Glass Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse-slow" />
              
              {/* Main Profile Showcase Card */}
              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/60 overflow-hidden">
                {/* Tech card header decor */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>aiml_developer.py</span>
                  </div>
                </div>

                {/* Avatar / Portrait placeholder with tech styling */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl p-[3px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/20 mb-4 group">
                    <div className="w-full h-full rounded-[13px] bg-[#090d1a] flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Photo instruction: Replace with <img src="/profile.jpg" alt="Junaid Hashir" className="w-full h-full object-cover" /> when photo provided */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-2">
                        <BrainCircuit className="w-10 h-10 text-indigo-400 animate-pulse" />
                      </div>
                      <span className="text-xs font-mono text-slate-400">Junaid Hashir</span>
                      <span className="text-[10px] text-slate-500 mt-0.5">AIML Engineer</span>
                    </div>

                    {/* Floating micro badges */}
                    <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-indigo-500/40 rounded-lg p-1.5 shadow-lg">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-100">
                    Junaid Hashir
                  </h3>
                  <p className="text-xs text-indigo-300 font-mono mt-1">
                    AJIET Mangaluru &bull; CSE (AIML)
                  </p>
                </div>

                {/* Mini stats / Highlights grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-slate-200">B.E. Student</div>
                    <div className="text-[11px] text-slate-400">AIML Specialization</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-cyan-400">Creative</div>
                    <div className="text-[11px] text-slate-400">Web & Video Editing</div>
                  </div>
                </div>

                {/* Focus Pills */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="px-2.5 py-1 rounded-md text-[11px] bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
                    #ArtificialIntelligence
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
                    #MachineLearning
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">
                    #WebDevelopment
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
