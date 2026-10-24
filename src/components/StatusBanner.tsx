import React from 'react';
import { AlertCircle } from 'lucide-react';
import { CASE_STUDY } from '../content/caseStudyData';

export const StatusBanner: React.FC = () => {
  return (
    <aside
      aria-label="Case study status"
      className="bg-[#FEF3C7] border-b border-[#FDE68A] text-[#92400E] px-4 py-2.5 text-center text-xs sm:text-sm font-medium sticky top-0 z-50 select-none shadow-xs"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <AlertCircle className="w-4 h-4 text-[#B45309] shrink-0" aria-hidden="true" />
        <span>{CASE_STUDY.statusBanner}</span>
      </div>
    </aside>
  );
};
