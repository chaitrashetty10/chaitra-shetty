/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { Footer } from './components/Footer';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { ContactModal } from './components/ContactModal';
import { FileCode, Check, Copy, Download } from 'lucide-react';
import { generateStandaloneHtml } from './utils/generateStandaloneHtml';

export default function App() {
  const [viewMode, setViewMode] = useState<'detailed' | 'executive'>('detailed');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleQuickCopyHtml = async () => {
    const html = generateStandaloneHtml();
    try {
      await navigator.clipboard.writeText(html);
      showToast('Single-file HTML copied to clipboard!');
    } catch (e) {
      setIsExportModalOpen(true);
    }
  };

  const handleQuickDownloadHtml = () => {
    const html = generateStandaloneHtml();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chaitra-shetty-webpage.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Downloaded chaitra-shetty-webpage.html');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 animate-in slide-in-from-top-4 fade-in duration-200">
          <div className="bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 border border-slate-700">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        <Hero
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onOpenExportModal={() => setIsExportModalOpen(true)}
        />
        <StatsBar />
        <SkillsSection />
        <CertificationsSection />
        <ExperienceTimeline viewMode={viewMode} />
        <EducationSection />
      </main>

      {/* Footer */}
      <Footer onOpenExportModal={() => setIsExportModalOpen(true)} />

      {/* Floating Single-File HTML Utility Bar (Quick access) */}
      <div className="fixed bottom-5 right-5 z-30 no-print flex flex-col sm:flex-row items-end sm:items-center gap-2">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-1.5 border border-slate-200/90 shadow-xl flex items-center gap-1 text-xs">
          <button
            id="floating-export-btn"
            type="button"
            onClick={() => setIsExportModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold transition-all"
            title="Open single-file HTML exporter & hosting instructions"
          >
            <FileCode className="w-4 h-4 text-indigo-600" />
            <span className="hidden sm:inline">1-File HTML</span>
          </button>

          <button
            id="floating-copy-btn"
            type="button"
            onClick={handleQuickCopyHtml}
            className="p-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-slate-100 transition-all"
            title="Quick Copy Standalone HTML"
          >
            <Copy className="w-4 h-4" />
          </button>

          <button
            id="floating-download-btn"
            type="button"
            onClick={handleQuickDownloadHtml}
            className="p-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-slate-100 transition-all"
            title="Quick Download HTML file"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <ExportHtmlModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
