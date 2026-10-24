import React, { useState, useEffect } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';
import { CASE_STUDY } from '../content/caseStudyData';

export const TableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('the-ask');
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const headings = CASE_STUDY.toc.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      for (let i = headings.length - 1; i >= 0; i--) {
        const el = headings[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(CASE_STUDY.toc[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Sticky Drawer Toggle */}
      <div className="lg:hidden sticky top-[105px] z-30 bg-white border-b border-slate-200 px-4 py-2.5">
        <button
          type="button"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          aria-expanded={isOpenMobile}
          aria-label="Toggle Table of Contents"
          className="w-full flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
        >
          <div className="flex items-center gap-2">
            <List className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
            <span>Table of Contents</span>
          </div>
          {isOpenMobile ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isOpenMobile && (
          <nav aria-label="Mobile Table of Contents" className="mt-2 py-2 border-t border-slate-100 max-h-64 overflow-y-auto space-y-1">
            {CASE_STUDY.toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpenMobile(false)}
                className={`block px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeId === item.id
                    ? 'bg-[#EFF6FF] text-[#2563EB] font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="text-slate-400 mr-2">{item.num}.</span>
                {item.title}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside aria-label="Table of contents" className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-28 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
            <List className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
            <span>Contents</span>
          </div>
          <nav aria-label="Desktop Table of Contents" className="space-y-1">
            {CASE_STUDY.toc.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                    isActive
                      ? 'bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] font-bold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-medium'
                  }`}
                >
                  <span className={`w-4 text-right text-[11px] ${isActive ? 'text-[#2563EB]' : 'text-slate-400'}`}>
                    {item.num}.
                  </span>
                  <span className="truncate">{item.title}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};
