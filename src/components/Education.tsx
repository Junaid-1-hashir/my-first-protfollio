import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative z-10 bg-slate-950/40 border-y border-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Education Timeline / Feature Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-2xl">
            
            {/* Top Badge & Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    {EDUCATION_DATA.degree}
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-100">
                    {EDUCATION_DATA.institution}
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium self-start sm:self-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{EDUCATION_DATA.status}</span>
              </div>
            </div>

            {/* Specialization & Location Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 py-4 px-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-sm">
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Department & Major</div>
                  <div className="font-medium text-slate-200">{EDUCATION_DATA.specialization}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Campus Location</div>
                  <div className="font-medium text-slate-200">{EDUCATION_DATA.location}</div>
                </div>
              </div>
            </div>

            {/* Program Highlights */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                Curriculum Focus & Core Areas
              </h4>
              <div className="space-y-3">
                {EDUCATION_DATA.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Coursework Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Key Technical Domains
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Machine Learning Algorithms",
                  "Data Structures & Algorithms",
                  "Database Management Systems",
                  "Object-Oriented Programming",
                  "Computer Networks",
                  "Web Technologies",
                ].map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-700/60 text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
