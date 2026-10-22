import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Info, 
  Code, 
  Terminal, 
  Cpu, 
  Video, 
  Check, 
  X,
  HelpCircle
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { SAMPLE_PROJECTS, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'AIML' | 'Web Development' | 'Creative'>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedFilter === 'All' 
    ? SAMPLE_PROJECTS 
    : SAMPLE_PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work & Concepts</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Projects & <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-center text-sm sm:text-base mt-3">
            Curated project concepts and interactive web applications. Sample placeholders are clearly marked until real repositories and deployments are added.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', 'AIML', 'Web Development', 'Creative'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {filter === 'All' ? 'All Projects' : filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Card Tech Visual Header (No broken images: pure custom tech vector visual) */}
              <div className="relative h-48 sm:h-52 w-full bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-800/80">
                
                {/* Tech background pattern */}
                <div className="absolute inset-0 bg-tech-grid opacity-40 group-hover:opacity-60 transition-opacity" />
                
                {/* Glow backdrop */}
                <div className={`absolute w-36 h-36 rounded-full bg-gradient-to-r ${project.accentColor} opacity-20 blur-2xl group-hover:opacity-40 group-hover:scale-125 transition-all duration-500`} />
                
                {/* Center Vector Icon Illustration */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {project.category === 'AIML' && <Cpu className="w-10 h-10 text-blue-400" />}
                  {project.category === 'Web Development' && <Code className="w-10 h-10 text-cyan-400" />}
                  {project.category === 'Creative' && <Video className="w-10 h-10 text-purple-400" />}
                </div>

                {/* Badge: Placeholder vs Live */}
                <div className="absolute top-3 left-3 z-10">
                  {project.isPlaceholder ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300 backdrop-blur-md">
                      <HelpCircle className="w-3 h-3" />
                      <span>Sample Placeholder</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Portfolio</span>
                    </span>
                  )}
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/80 border border-slate-800 text-slate-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-indigo-400 font-semibold block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-slate-100 group-hover:text-white transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    {project.isPlaceholder ? (
                      <div className="flex items-center gap-3 w-full justify-between">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="text-xs font-semibold text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 transition-all"
                        >
                          <Info className="w-3.5 h-3.5" />
                          <span>Placeholder Info</span>
                        </button>
                        <span className="text-[11px] text-slate-500 font-mono">
                          Ready for your project link
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 w-full justify-between">
                        <a
                          href={project.liveUrl}
                          className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 py-1.5 px-3 rounded-lg shadow-sm inline-flex items-center gap-1.5 transition-all"
                        >
                          <span>Current App</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <span className="text-xs text-slate-400">
                          Active Showcase
                        </span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Helpful instructions footer */}
        <div className="mt-12 text-center text-xs text-slate-400 bg-slate-900/50 border border-slate-800 rounded-xl p-4 max-w-2xl mx-auto">
          <span className="font-semibold text-slate-300">How to add your actual projects:</span> Open <code className="text-indigo-300 bg-slate-950 px-1.5 py-0.5 rounded">src/data/portfolioData.ts</code>, update the <code className="text-indigo-300 bg-slate-950 px-1.5 py-0.5 rounded">SAMPLE_PROJECTS</code> array with your real project titles, GitHub links, and live URLs!
        </div>

      </div>

      {/* Placeholder Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative glass-panel rounded-2xl max-w-lg w-full p-6 sm:p-7 border border-slate-700 shadow-2xl">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-white">
                  Sample Project Placeholder
                </h4>
                <p className="text-xs text-amber-300 font-mono">
                  {activeModalProject.title}
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              This card is a temporary template placeholder designed to showcase how your projects will be displayed without inventing unconfirmed repositories or fictitious achievements.
            </p>

            <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800 text-xs font-mono text-slate-300 mb-5 space-y-1">
              <div className="text-slate-500">// Easily customize in src/data/portfolioData.ts:</div>
              <div>title: "{activeModalProject.title}"</div>
              <div>githubUrl: "https://github.com/your-username/your-repo"</div>
              <div>liveUrl: "https://your-demo-url.vercel.app"</div>
              <div>isPlaceholder: false</div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
