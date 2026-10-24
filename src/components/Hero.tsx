import React from 'react';
import { User, Calendar, ShieldAlert } from 'lucide-react';
import { CASE_STUDY } from '../content/caseStudyData';
import { Callout } from './Callout';

export const Hero: React.FC = () => {
  return (
    <header className="pt-8 sm:pt-12 pb-10 border-b border-slate-200">
      {/* Status Chip */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900 mb-6">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
        <span>{CASE_STUDY.statusText}</span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-4">
        {CASE_STUDY.title}
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-6">
        {CASE_STUDY.subtitle}
      </p>

      {/* Metadata Badges */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-1.5 font-medium">
          <User className="w-4 h-4 text-slate-400" aria-hidden="true" />
          <span>{CASE_STUDY.author}</span>
        </div>
        <span className="text-slate-300" aria-hidden="true">·</span>
        <div className="flex items-center gap-1.5 font-medium">
          <Calendar className="w-4 h-4 text-slate-400" aria-hidden="true" />
          <span>{CASE_STUDY.date}</span>
        </div>
        <span className="text-slate-300" aria-hidden="true">·</span>
        <span className="text-slate-500 font-medium">6 min read</span>
      </div>

      {/* In Short (TL;DR) Callout */}
      <Callout title="In short" variant="accent">
        <p className="text-slate-800 font-medium leading-relaxed">
          {CASE_STUDY.inShort}
        </p>
      </Callout>
    </header>
  );
};
