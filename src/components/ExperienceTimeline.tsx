import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { profileData } from '../data/profileData';

interface ExperienceTimelineProps {
  viewMode: 'detailed' | 'executive';
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ viewMode }) => {
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    'teradata-cloud': true,
    'teradata-dba': true,
    'atos-dba': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedRoles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Career Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Professional Experience
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Over 18 years of continuous hands-on excellence spanning high availability cloud operations, enterprise databases, and customer escalation leadership.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {profileData.experiences.map((exp, idx) => {
            const isExpanded = viewMode === 'detailed' || expandedRoles[exp.id];

            return (
              <div
                key={exp.id}
                className="relative pl-7 sm:pl-9 pb-8 border-l-2 border-indigo-200 last:border-l-0 last:pb-0 group"
              >
                {/* Node Bullet */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 group-hover:scale-125 transition-transform duration-200"></div>

                <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-indigo-200 transition-all">
                  
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-indigo-100/70 text-indigo-800">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 bg-white text-slate-700 rounded-lg border border-slate-200/80 shadow-xs">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                      <span className="text-indigo-600 font-bold">({exp.duration})</span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="p-1 rounded-lg hover:bg-slate-200/70 text-slate-500 transition-colors no-print"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Highlight statement */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2.5 mb-4 italic border-l-2 border-indigo-400 pl-3">
                    {exp.highlightSummary}
                  </p>

                  {/* Responsibilities list (toggleable) */}
                  {isExpanded && (
                    <div className="space-y-2.5 mt-4 pt-4 border-t border-slate-200/60 text-xs sm:text-sm text-slate-700">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-200/60">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-white text-slate-700 border border-slate-200 shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
