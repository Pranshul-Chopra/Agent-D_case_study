import React from 'react';
import { CASE_STUDY } from '../content/caseStudyData';

export const DecisionTable: React.FC = () => {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[580px]">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
              <th scope="col" className="py-3.5 px-4 sm:px-6 w-1/4">
                Option
              </th>
              <th scope="col" className="py-3.5 px-4 sm:px-6 w-1/3">
                What it gave me
              </th>
              <th scope="col" className="py-3.5 px-4 sm:px-6">
                Why I moved on
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
            {CASE_STUDY.theDecisionPath.table.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50/70 transition-colors"
              >
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 align-top">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] text-xs font-semibold">
                    {row.option}
                  </span>
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-700 align-top leading-relaxed font-normal">
                  {row.whatItGaveMe}
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600 align-top leading-relaxed font-normal">
                  {row.whyIMovedOn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
