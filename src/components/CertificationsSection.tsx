import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profileData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Validated Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Industry Certifications
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Accredited certifications spanning cloud solution architecture, agile methodologies, and enterprise governance.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-slate-700 shadow-xs self-start md:self-auto">
            <Award className="w-4 h-4 text-amber-500" />
            <span>5 Verified Professional Credentials</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {profileData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.badgeColor} text-white flex items-center justify-center font-black text-xs shadow-sm mb-4 group-hover:scale-105 transition-transform`}>
                  {cert.id.toUpperCase().slice(0, 3)}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {cert.issuer}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mt-1 mb-2 leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-emerald-600">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Active Credential
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">
                  {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
