import React from 'react';
import { 
  BrainCircuit, 
  Code, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Compass, 
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: BrainCircuit,
      title: "AI & Machine Learning Focus",
      desc: "Deeply interested in artificial intelligence, neural networks, predictive models, and how intelligent systems transform technology.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      icon: Code,
      title: "Website Creation & UI Design",
      desc: "Passionate about creating modern, responsive, and visually appealing web experiences with clean component architecture.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      icon: Terminal,
      title: "Coding & Algorithmic Logic",
      desc: "Committed to strengthening core programming fundamentals, structured data logic, and practical implementation.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      icon: Sparkles,
      title: "Creative Digital Solutions",
      desc: "Blending analytical engineering thinking with creative sound and video editing to deliver engaging multimedia experiences.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Engineering Student & <span className="text-gradient">Digital Solution Creator</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5">
              <h3 className="font-heading font-semibold text-xl text-slate-100 flex items-center gap-2">
                <span>Who I Am & What Drives Me</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-base">
                Hello! I am <strong className="text-white">Junaid Hashir</strong>, an Engineering student based in <span className="text-indigo-300">Mangaluru, Karnataka, India</span>, pursuing Computer Science Engineering with a specialization in <strong className="text-blue-300">Artificial Intelligence and Machine Learning</strong> at <span className="text-slate-200">AJ Institute of Engineering and Technology</span>.
              </p>

              <p className="text-slate-300 leading-relaxed text-base">
                My passion is centered on learning how intelligent technologies work and applying them to create real, practical digital solutions. I enjoy diving into programming logic, understanding the mechanics of machine learning, and designing attractive, responsive websites that deliver great user experiences.
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                Beyond conventional coding, I believe in versatility: combining engineering discipline with creative sound and video editing. I am enthusiastic about emerging tech, eager to collaborate on innovative projects, and actively seeking internship and technical growth opportunities.
              </p>

              {/* Quick checklist */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>AJIET Mangaluru (CSE-AIML)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Responsive Web Creator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Curious & Continuous Learner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Creative Content Enthusiast</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights 4-box Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-11 h-11 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h4 className="font-heading font-semibold text-base text-slate-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
