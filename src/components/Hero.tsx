import React from 'react';
import { Mail, MapPin, Building2, ShieldCheck, ArrowRight, FileCode, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

interface HeroProps {
  onOpenContactModal: () => void;
  onOpenExportModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal, onOpenExportModal }) => {
  return (
    <section id="about" className="relative overflow-hidden pt-10 pb-12 lg:pt-16 lg:pb-16 border-b border-slate-200/70 bg-gradient-to-b from-indigo-50/50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Left */}
          <div className="lg:col-span-8">
            {/* Pill status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-indigo-100 shadow-xs mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-800">
                18+ Years Global IT Infrastructure & Cloud Support
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              {profileData.name}
            </h1>

            <div className="mt-3 text-lg sm:text-xl font-semibold text-indigo-700 max-w-2xl leading-snug">
              {profileData.subHeadline}
            </div>

            {/* Micro Details Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 font-medium mt-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span>Teradata (Senior Cloud Operations Specialist)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold border border-emerald-200/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ITIL Framework & L3 Operations</span>
              </div>
            </div>

            {/* Executive Bio */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-6 max-w-3xl">
              {profileData.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-8 no-print">
              <button
                id="hero-contact-btn"
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-80" />
              </button>

              <a
                id="hero-linkedin-btn"
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 font-semibold text-xs tracking-wide shadow-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </a>

              <button
                id="hero-export-html-btn"
                type="button"
                onClick={onOpenExportModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80 font-bold text-xs tracking-wide shadow-xs transition-all"
              >
                <FileCode className="w-4 h-4 text-indigo-600" />
                <span>Single HTML Host File</span>
              </button>
            </div>
          </div>

          {/* Right Bento Overview Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-slate-200/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Domain Competencies
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
                  Senior Level
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100/90">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Public Cloud Engineering</span>
                  </div>
                  <p className="text-slate-500 pl-6 leading-relaxed">
                    AWS Solutions Architect, Azure Certified, GCP cloud operations, Kubernetes Vantage Analyst, IAM policies & VM lifecycle.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100/90">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Enterprise Database Administration</span>
                  </div>
                  <p className="text-slate-500 pl-6 leading-relaxed">
                    Teradata Certified Professional, MSSQL 2000-2008, Active/Active clustering, log shipping, query tuning & DBCC checks.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100/90">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>High Availability & Disaster Recovery</span>
                  </div>
                  <p className="text-slate-500 pl-6 leading-relaxed">
                    BAR & DSA restores, zero-disruption maintenance windows, CRT post-release validation, and 99.99% uptime rigor.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100/90">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Cross-Functional & L3 Support</span>
                  </div>
                  <p className="text-slate-500 pl-6 leading-relaxed">
                    Certified ScrumMaster (CSM), PRINCE2 Practitioner, direct client-facing outage leadership for UK & France enterprise accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
