import React from 'react';
import { Download, Code, Mail, Printer, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profileData';

interface NavbarProps {
  onOpenExportModal: () => void;
  onOpenContactModal: () => void;
  viewMode: 'detailed' | 'executive';
  setViewMode: (mode: 'detailed' | 'executive') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenExportModal,
  onOpenContactModal,
  viewMode,
  setViewMode,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-700 text-white flex items-center justify-center font-black text-base shadow-sm">
              CS
            </div>
            <div>
              <a href="#about" className="font-bold text-slate-900 tracking-tight text-base block hover:text-indigo-600 transition-colors">
                {profileData.name}
              </a>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Specialist Cloud Consultant • Teradata
              </span>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-indigo-600 transition-colors">Certifications</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-indigo-600 transition-colors">Education</a>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Mode Toggle */}
            <div className="hidden sm:inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200/70 text-xs">
              <button
                type="button"
                onClick={() => setViewMode('executive')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  viewMode === 'executive'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Concise executive recruiter overview"
              >
                Executive
              </button>
              <button
                type="button"
                onClick={() => setViewMode('detailed')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  viewMode === 'detailed'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Deep dive into all technical operations"
              >
                Detailed
              </button>
            </div>

            {/* Standalone HTML Export button (explicit user request) */}
            <button
              id="export-html-btn"
              type="button"
              onClick={onOpenExportModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-xs tracking-tight transition-all shadow-xs"
              title="Get single HTML file to copy-paste & host anywhere"
            >
              <Code className="w-3.5 h-3.5 text-indigo-600" />
              <span className="hidden sm:inline">Get 1-File</span> HTML
            </button>

            {/* Print button */}
            <button
              type="button"
              onClick={() => window.print()}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-xs transition-all"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              Print
            </button>

            {/* Contact Button */}
            <button
              id="contact-nav-btn"
              type="button"
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs tracking-wide shadow-sm transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
