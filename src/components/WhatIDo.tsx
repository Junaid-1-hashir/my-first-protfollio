import React from 'react';
import { Layout, Code2, Film, Sparkles, Check, ArrowRight } from 'lucide-react';
import { WHAT_I_DO } from '../data/portfolioData';

export const WhatIDo: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Layout: Layout,
    Code2: Code2,
    Film: Film,
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative z-10 bg-slate-950/40 border-y border-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Focus Areas</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-100 tracking-tight">
            What I <span className="text-gradient">Do & Specialize In</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-center text-sm sm:text-base mt-3">
            Combining engineering rigor, practical programming, and creative multimedia production.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHAT_I_DO.map((item) => {
            const Icon = iconMap[item.icon] || Code2;
            return (
              <div
                key={item.id}
                className="group relative glass-panel rounded-2xl p-7 sm:p-8 border border-slate-800/80 transition-all duration-300 hover:-translate-y-2 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                {/* Background ambient subtle gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-indigo-400 group-hover:text-blue-400 group-hover:border-indigo-500/40 group-hover:scale-105 transition-all mb-6 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-mono text-indigo-400 tracking-wide uppercase font-semibold">
                    {item.subtitle}
                  </span>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-100 mt-1 mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags / Highlights */}
                <div className="relative z-10 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA note */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 text-sm">
            Have a project idea or looking for a motivated AIML student intern?{' '}
            <a href="#contact" className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4 ml-1">
              Let's talk &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
