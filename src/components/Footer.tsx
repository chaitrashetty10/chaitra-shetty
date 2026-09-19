import React from 'react';
import { Mail, ArrowUp, Code } from 'lucide-react';
import { profileData } from '../data/profileData';

interface FooterProps {
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExportModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          <div className="flex items-center gap-3 text-white">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-sm">
              CS
            </div>
            <div>
              <span className="font-bold tracking-tight text-sm block leading-none">
                {profileData.name}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Specialist Cloud Consultant at Teradata
              </span>
            </div>
          </div>

          {/* Direct links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-slate-300">
            <a href="mailto:chaitrashetty35@gmail.com" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              chaitrashetty35@gmail.com
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-[#0A66C2] font-bold">in</span>
              LinkedIn Profile
            </a>
            <button
              type="button"
              onClick={onOpenExportModal}
              className="hover:text-white text-indigo-400 transition-colors flex items-center gap-1.5"
            >
              <Code className="w-3.5 h-3.5" />
              Single-File HTML Code
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved. Specialist Cloud Consultant & Solutions Architect.
          </p>
          <p className="flex items-center gap-1">
            Built following senior Canva UI design principles • Single-file deployment ready
          </p>
        </div>

      </div>
    </footer>
  );
};
