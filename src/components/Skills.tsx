import React from 'react';
import { 
  BrainCircuit, 
  Globe, 
  Terminal, 
  Palette, 
  Sparkles, 
  Layers, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    BrainCircuit: BrainCircuit,
    Globe: Globe,
    Terminal: Terminal,
    Palette: Palette,
    Sparkles: Sparkles,
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical & Creative Toolkit</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-center text-sm sm:text-base mt-3">
            Core areas of study, hands-on practice, and ongoing learning across engineering, web development, and media production.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Disclaimer / Transparency Box */}
        <div className="mb-12 max-w-3xl mx-auto bg-slate-900/60 border border-indigo-500/20 rounded-xl p-4 flex items-start gap-3 backdrop-blur-md">
          <Info className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span className="font-semibold text-indigo-300">Continuous Growth Focus:</span> As an AIML engineering student, I prioritize solid fundamentals over inflated claims. These skill cards represent my active areas of learning, coursework, and applied exploration.
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon] || Layers;
            return (
              <div
                key={category.id}
                className="group glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-750 flex items-center justify-center text-blue-400 group-hover:text-indigo-400 group-hover:scale-105 transition-all shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-slate-100 leading-snug">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills Badges List */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                    Topics & Practices
                  </span>
                  <div className="space-y-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-slate-900/50 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-800/60 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
