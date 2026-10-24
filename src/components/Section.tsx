import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-28 py-10 sm:py-12 border-b border-slate-200">
      <div className="group flex items-center gap-2 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
        <a
          href={`#${id}`}
          aria-label={`Link to section: ${title}`}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-[#2563EB] text-xl font-mono focus:opacity-100 focus:outline-hidden"
        >
          #
        </a>
      </div>
      <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
        {children}
      </div>
    </section>
  );
};
