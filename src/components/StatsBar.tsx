import React from 'react';
import { profileData } from '../data/profileData';

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200/70 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-100/90 shadow-xs hover:border-indigo-200 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
