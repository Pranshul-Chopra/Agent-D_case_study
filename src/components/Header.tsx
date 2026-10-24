import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { CASE_STUDY } from '../content/caseStudyData';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-[41px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="#"
            className="text-base sm:text-lg font-bold text-slate-900 hover:text-[#2563EB] transition-colors truncate focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1"
          >
            {CASE_STUDY.title}
          </a>
          <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF]">
            Case Study
          </span>
        </div>

        <nav aria-label="Quick links" className="flex items-center gap-3 sm:gap-4 shrink-0 text-sm font-semibold">
          <a
            href={CASE_STUDY.links.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1 px-2"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Repository</span>
          </a>

          <a
            href={CASE_STUDY.links.demoBuildUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
          >
            <span>Demo Build</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
};
