import React from 'react';
import { StatusBanner } from './components/StatusBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { TableOfContents } from './components/TableOfContents';
import { DecisionTable } from './components/DecisionTable';
import { Timeline } from './components/Timeline';
import { Callout } from './components/Callout';
import { Footer } from './components/Footer';
import { CASE_STUDY } from './content/caseStudyData';
import { Check, ArrowRight, AlertTriangle } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Top Demo Banner */}
      <StatusBanner />

      {/* Main Header */}
      <Header />

      {/* Main Container with Sticky TOC */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Main Reading Column */}
          <main className="flex-1 max-w-3xl min-w-0">
            {/* Hero Section with In Short Box */}
            <Hero />

            {/* 1. The ask */}
            <Section id="the-ask" title={CASE_STUDY.theAsk.title}>
              {CASE_STUDY.theAsk.paragraphs.map((p, idx) => (
                <p key={idx} className="font-normal text-slate-700">
                  {p}
                </p>
              ))}
            </Section>

            {/* 2. What I built first */}
            <Section id="what-i-built-first" title={CASE_STUDY.whatIBuiltFirst.title}>
              <p className="font-normal text-slate-700">
                {CASE_STUDY.whatIBuiltFirst.intro}
              </p>
              <ul className="space-y-3 my-4">
                {CASE_STUDY.whatIBuiltFirst.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2.5 shrink-0" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#2563EB] text-slate-800 font-medium text-sm sm:text-base my-4">
                {CASE_STUDY.whatIBuiltFirst.closingEmphasis}
              </div>
            </Section>

            {/* 3. What I found */}
            <Section id="what-i-found" title={CASE_STUDY.whatIFound.title}>
              <p className="font-normal text-slate-700 mb-4">
                {CASE_STUDY.whatIFound.intro}
              </p>
              <div className="space-y-5 my-6">
                {CASE_STUDY.whatIFound.items.map((item) => (
                  <div
                    key={item.num}
                    className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200"
                  >
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE]">
                        0{item.num}
                      </span>
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 4. The decision path */}
            <Section id="the-decision-path" title={CASE_STUDY.theDecisionPath.title}>
              {/* Decision Table */}
              <DecisionTable />

              <p className="font-normal text-slate-700 mt-6">
                {CASE_STUDY.theDecisionPath.conclusion}
              </p>

              {/* Architectural Evolution Timeline */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Architectural evolution
                </h3>
                <p className="text-sm text-slate-600 mb-4 font-normal">
                  How the system progressed across evaluation iterations before arriving at the current v0.5.0 build.
                </p>
                <Timeline />
              </div>
            </Section>

            {/* 5. What I shipped */}
            <Section id="what-i-shipped" title={CASE_STUDY.whatIShipped.title}>
              <p className="font-normal text-slate-700">
                {CASE_STUDY.whatIShipped.intro}
              </p>
              <ul className="space-y-3 my-4">
                {CASE_STUDY.whatIShipped.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm sm:text-base text-slate-600 italic bg-slate-50 p-4 rounded-xl border border-slate-200">
                {CASE_STUDY.whatIShipped.metricsNote}
              </p>
            </Section>

            {/* 6. What I got wrong */}
            <Section id="what-i-got-wrong" title={CASE_STUDY.whatIGotWrong.title}>
              <p className="font-normal text-slate-700 font-semibold mb-4">
                {CASE_STUDY.whatIGotWrong.intro}
              </p>
              <div className="space-y-5 my-6">
                {CASE_STUDY.whatIGotWrong.mistakes.map((mistake, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-amber-50/50 border border-amber-200/80"
                  >
                    <h3 className="text-base font-bold text-amber-950 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                      <span>{mistake.title}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {mistake.body}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-normal text-slate-700">
                {CASE_STUDY.whatIGotWrong.conclusion}
              </p>
            </Section>

            {/* 7. Where it stands */}
            <Section id="where-it-stands" title={CASE_STUDY.whereItStands.title}>
              <p className="font-normal text-slate-700">
                {CASE_STUDY.whereItStands.body}
              </p>
            </Section>

            {/* 8. What I would do next */}
            <Section id="what-i-would-do-next" title={CASE_STUDY.whatIWouldDoNext.title}>
              <ol className="space-y-3.5 my-4">
                {CASE_STUDY.whatIWouldDoNext.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base text-slate-700 font-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </Section>

            {/* 9. What I learned */}
            <Section id="what-i-learned" title={CASE_STUDY.whatILearned.title}>
              <div className="space-y-4 my-4">
                {CASE_STUDY.whatILearned.lessons.map((lesson) => (
                  <Callout
                    key={lesson.num}
                    title={`${lesson.num}. ${lesson.headline}`}
                    variant="lesson"
                  >
                    <p className="text-slate-700 font-normal">
                      {lesson.body}
                    </p>
                  </Callout>
                ))}
              </div>
            </Section>

            {/* 10. Links */}
            <Section id="links" title="Links">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <a
                  href={CASE_STUDY.links.tradeoffAnalysisUrl}
                  className="p-5 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-white hover:border-[#2563EB] transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">
                      Analysis
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1">
                    AI vs Non-AI Tradeoff Analysis
                  </div>
                  <div className="text-xs text-slate-500 font-normal">
                    Plain-language document prepared for clinic counsel
                  </div>
                </a>

                <a
                  href={CASE_STUDY.links.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-white hover:border-[#2563EB] transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">
                      Codebase
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1">
                    Agent-D Repository
                  </div>
                  <div className="text-xs text-slate-500 font-normal">
                    Inspect the desktop code and archived AI subsystems
                  </div>
                </a>

                <a
                  href={CASE_STUDY.links.demoBuildUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-white hover:border-[#2563EB] transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">
                      Executable
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1">
                    Demo Build (Windows)
                  </div>
                  <div className="text-xs text-slate-500 font-normal">
                    Pre-release for evaluation with synthetic data only
                  </div>
                </a>
              </div>
            </Section>
          </main>

          {/* Sticky Table of Contents Sidebar */}
          <TableOfContents />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
