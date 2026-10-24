import React from 'react';
import { Cloud, Cpu, FileCheck, ShieldCheck } from 'lucide-react';

export const Timeline: React.FC = () => {
  const steps = [
    {
      phase: 'Phase 1',
      title: 'Cloud AI Assistant',
      badge: 'Evaluated & Retired',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: Cloud,
      description:
        'Fast and capable chat assistant, but sent clinical free-text to external third-party servers. Free-tier models permit provider training, while paid enterprise models require DPAs, patient consent, and cross-border transfer assessments.',
    },
    {
      phase: 'Phase 2',
      title: 'Local Ollama Engine',
      badge: 'Evaluated & Retired',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: Cpu,
      description:
        'Kept all data inside 127.0.0.1, but small local models had higher error rates, required dedicated GPU hardware, caused workstation latency, and introduced medical device ambiguity.',
    },
    {
      phase: 'Phase 3',
      title: 'Rule-Based Extractor',
      badge: 'Shipped (v0.5.0)',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: FileCheck,
      description:
        'Fixed, predictable rules scanning visit notes for medication changes and lab orders. Suggests entries as before-and-after diffs. Doctor approval gate remains the source of truth.',
    },
    {
      phase: 'Phase 4',
      title: 'Legal Review & Supervised Pilot',
      badge: 'Roadmap',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: ShieldCheck,
      description:
        'Comprehensive clinic legal review, supervised evaluation with consenting adult patients, and empirical time-loss measurement before evaluating any future model integration.',
    },
  ];

  return (
    <div className="my-8 relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <div key={idx} className="relative group">
            {/* Marker Circle */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    {step.phase}
                  </span>
                  <span className="text-slate-300">·</span>
                  <h4 className="text-base font-bold text-slate-900">
                    {step.title}
                  </h4>
                </div>
                <span
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${step.badgeColor}`}
                >
                  {step.badge}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
