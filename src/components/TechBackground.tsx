import React from 'react';

export const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radial ambient glow orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px] animate-pulse-slow" />
      <div className="absolute top-[20%] right-[-5%] w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[10%] left-[15%] w-[550px] h-[550px] rounded-full bg-indigo-600/10 blur-[150px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Subtle tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-60" />

      {/* Top vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070f]/40 to-[#05070f]" />
    </div>
  );
};
