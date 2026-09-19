import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Sparkles, FileCode2, Globe } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/generateStandaloneHtml';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const standaloneHtml = generateStandaloneHtml();

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(standaloneHtml);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chaitra-shetty-webpage.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const fileSizeKb = Math.round(new Blob([standaloneHtml]).size / 1024);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shadow-xs">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Single-File HTML Exporter
              </h3>
              <p className="text-xs text-slate-500">
                100% self-contained • Zero build tools needed • Ready to host anywhere
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-600">
          
          {/* Quick instructions banner */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-indigo-950 text-sm">
                Ready for Instant Hosting
              </div>
              <p className="text-indigo-800/80 text-xs mt-1 leading-relaxed">
                This single file has all Tailwind CDN styling, fonts, metadata, and responsive sections bundled in one HTML document. You can drop it directly into GitHub Pages, Netlify Drop, Cloudflare Pages, S3, or any web server.
              </p>
            </div>
          </div>

          {/* Quick Action Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              id="copy-standalone-html-btn"
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs tracking-wide shadow-sm transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied HTML!' : 'Copy 1-File HTML'}</span>
            </button>

            <button
              id="download-standalone-html-btn"
              type="button"
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wide shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download .html</span>
            </button>

            <a
              id="preview-standalone-tab-btn"
              href="/standalone.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs tracking-wide shadow-xs transition-all"
            >
              <Globe className="w-4 h-4 text-indigo-600" />
              <span>Live File Preview</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Code preview snippet */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span>Code Preview (~{fileSizeKb} KB)</span>
              <span>index.html</span>
            </div>
            <pre className="p-4 rounded-2xl bg-slate-900 text-slate-300 font-mono text-[11px] leading-relaxed max-h-56 overflow-auto border border-slate-800 select-all">
              {standaloneHtml.slice(0, 1500)}...
              {'\n\n<!-- [Entire document continues: ~' + fileSizeKb + ' KB of clean semantic code] -->'}
            </pre>
          </div>

          {/* 3 Step Deployment Guide */}
          <div className="border-t border-slate-100 pt-4">
            <h4 className="font-bold text-slate-900 mb-2">3 Ways to Host in 30 Seconds:</h4>
            <ul className="space-y-1.5 text-slate-500">
              <li><strong className="text-slate-800">1. GitHub Pages:</strong> Create a repository, upload this file as <code className="text-indigo-600 bg-indigo-50 px-1 rounded">index.html</code>, and enable Pages in Settings.</li>
              <li><strong className="text-slate-800">2. Netlify Drop:</strong> Drag and drop a folder containing this file straight onto netlify.com/drop.</li>
              <li><strong className="text-slate-800">3. Any Web Server:</strong> Upload directly to any Apache, NGINX, cPanel, or AWS S3 bucket.</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
