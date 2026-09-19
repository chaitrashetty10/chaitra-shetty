import React from 'react';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export const EducationSection: React.FC = () => {
  const { education } = profileData;

  return (
    <section id="education" className="py-16 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Education & Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Academic Background
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                {education.institution}
              </h3>
              <p className="text-sm font-semibold text-indigo-700 mt-0.5">
                {education.degree} — {education.field}
              </p>
              <p className="text-xs text-slate-400 font-medium flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                {education.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-bold self-start sm:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Graduated</span>
          </div>
        </div>

      </div>
    </section>
  );
};
