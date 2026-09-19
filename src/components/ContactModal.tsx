import React, { useState } from 'react';
import { X, Mail, Copy, Check, ExternalLink, Send, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profileData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('Cloud Infrastructure / Teradata Inquiry');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const mailtoHref = `mailto:${profileData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shadow-xs">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Contact Chaitra Shetty
              </h3>
              <p className="text-xs text-slate-500">
                Specialist Cloud Consultant • Bengaluru, India
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

        {/* Body */}
        <div className="p-6 space-y-5 text-xs text-slate-600">
          
          {/* Direct Email Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
            <div className="truncate">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Primary Direct Email
              </span>
              <span className="text-sm font-bold text-slate-900 truncate block">
                {profileData.email}
              </span>
            </div>
            <button
              id="copy-email-btn"
              type="button"
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors shrink-0 shadow-xs"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Quick LinkedIn Link */}
          <a
            id="linkedin-modal-link"
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all flex items-center justify-between group shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-sm">
                in
              </div>
              <div>
                <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Connect on LinkedIn
                </div>
                <div className="text-[11px] text-slate-400">
                  {profileData.linkedin}
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
          </a>

          {/* Quick Compose Form */}
          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Topic / Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:outline-none text-xs text-slate-900"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Brief Message
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hello Chaitra, we would love to discuss a cloud consulting / database leadership opportunity..."
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:outline-none text-xs text-slate-900 resize-none"
              />
            </div>

            <a
              id="send-mail-client-btn"
              href={mailtoHref}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs tracking-wide shadow-sm transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Launch Default Email App</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
