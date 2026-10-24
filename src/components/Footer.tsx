import React from 'react';
import { Github, ExternalLink, Mail, Linkedin } from 'lucide-react';
import { CASE_STUDY } from '../content/caseStudyData';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-12 border-t border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="text-base font-bold text-slate-900 mb-1">
              {CASE_STUDY.title}
            </div>
            <div className="text-xs sm:text-sm text-slate-500 font-normal">
              {CASE_STUDY.subtitle} · {CASE_STUDY.author} ({CASE_STUDY.date})
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm font-semibold text-slate-600">
            <a
              href={CASE_STUDY.links.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1 px-2"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/pranshul-chopra-269789371/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1 px-2"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <a
              href="mailto:pranshulchopra@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1 px-2"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Email</span>
            </a>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <a
              href={CASE_STUDY.links.demoBuildUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#2563EB] hover:text-[#1D4ED8] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1 px-2"
            >
              <span>Demo Build</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p>
            This case study documents a product evaluation. Agent-D is an organization tool and does not diagnose or recommend treatment.
          </p>
          <p className="shrink-0 text-slate-400">
            © 2026 {CASE_STUDY.author}
          </p>
        </div>
      </div>
    </footer>
  );
};
