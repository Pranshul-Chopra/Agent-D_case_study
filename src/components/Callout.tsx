import React from 'react';
import { Sparkles, AlertTriangle, Info, BookOpen } from 'lucide-react';

interface CalloutProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'accent' | 'lesson';
}

export const Callout: React.FC<CalloutProps> = ({
  title,
  children,
  variant = 'info',
}) => {
  const styles = {
    info: {
      bg: 'bg-[#F8FAFC]',
      border: 'border-slate-200',
      icon: Info,
      iconColor: 'text-[#2563EB]',
      titleColor: 'text-slate-900',
    },
    warning: {
      bg: 'bg-amber-50/70',
      border: 'border-amber-200',
      icon: AlertTriangle,
      iconColor: 'text-amber-600',
      titleColor: 'text-amber-900',
    },
    accent: {
      bg: 'bg-[#EFF6FF]',
      border: 'border-[#BFDBFE]',
      icon: Sparkles,
      iconColor: 'text-[#2563EB]',
      titleColor: 'text-[#1E40AF]',
    },
    lesson: {
      bg: 'bg-white',
      border: 'border-slate-300',
      icon: BookOpen,
      iconColor: 'text-slate-700',
      titleColor: 'text-slate-900',
    },
  }[variant];

  const Icon = styles.icon;

  return (
    <div
      role="region"
      aria-label={title || 'Callout'}
      className={`rounded-2xl p-5 sm:p-6 border ${styles.bg} ${styles.border} my-6 shadow-2xs`}
    >
      <div className="flex items-start gap-3.5">
        <div className="shrink-0 mt-0.5">
          <Icon className={`w-5 h-5 ${styles.iconColor}`} aria-hidden="true" />
        </div>
        <div className="flex-1">
          {title && (
            <h4 className={`text-base font-bold ${styles.titleColor} mb-2`}>
              {title}
            </h4>
          )}
          <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
