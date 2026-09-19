import React, { useState } from 'react';
import { Layers, Database, ShieldCheck, Check, Search } from 'lucide-react';
import { profileData } from '../data/profileData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const icons = [
    <Layers key="cloud" className="w-5 h-5 text-indigo-600" />,
    <Database key="db" className="w-5 h-5 text-emerald-600" />,
    <ShieldCheck key="gov" className="w-5 h-5 text-amber-600" />,
  ];

  const filteredCategories = profileData.skillsCategories
    .map((category, idx) => {
      const matchesTab = activeTab === 'all' || activeTab === idx;
      const filteredSkills = category.skills.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...category,
        index: idx,
        skills: filteredSkills,
        visible: matchesTab && (searchQuery === '' || filteredSkills.length > 0),
      };
    })
    .filter(cat => cat.visible);

  return (
    <section id="skills" className="py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Technical Core
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Skills & Domain Competencies
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl">
              18+ years across public multi-cloud platforms, mission-critical relational & analytical databases, and high-stakes service delivery.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72 no-print">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. AWS, Cluster, ITIL)..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8 no-print">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Competencies
          </button>
          {profileData.skillsCategories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {icons[category.index % icons.length]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-xl bg-white border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 ${
                        skill.highlight
                          ? 'border-indigo-200 shadow-xs'
                          : 'border-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Check className={`w-3.5 h-3.5 shrink-0 ${skill.highlight ? 'text-indigo-600' : 'text-slate-400'}`} />
                        <span className={`text-xs font-bold ${skill.highlight ? 'text-slate-900' : 'text-slate-700'}`}>
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-md self-start sm:self-auto ${
                          skill.highlight
                            ? 'bg-indigo-50 text-indigo-700 font-semibold'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
