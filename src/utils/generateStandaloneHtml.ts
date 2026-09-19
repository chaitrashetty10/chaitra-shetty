import { profileData } from '../data/profileData';

export function generateStandaloneHtml(): string {
  const { name, headline, subHeadline, location, email, linkedinUrl, summary, stats, skillsCategories, certifications, experiences, education } = profileData;

  const experienceCardsHtml = experiences.map((exp) => `
    <div class="relative pl-8 md:pl-10 pb-12 border-l-2 border-indigo-200 last:border-l-0 last:pb-0 group">
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 group-hover:scale-125 transition-transform duration-200"></div>
      <div class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div class="flex items-center gap-3">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
              ${exp.company}
            </span>
            <span class="text-xs text-slate-500 font-medium">${exp.location}</span>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
            ${exp.period} (${exp.duration})
          </span>
        </div>
        <h3 class="text-xl font-bold text-slate-900 tracking-tight mb-2">${exp.role}</h3>
        <p class="text-slate-600 text-sm leading-relaxed mb-5 italic border-l-2 border-indigo-300 pl-3">
          ${exp.highlightSummary}
        </p>
        <ul class="space-y-2.5 mb-6 text-sm text-slate-700">
          ${exp.responsibilities.map(r => `
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>${r}</span>
            </li>
          `).join('')}
        </ul>
        <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
          ${exp.technologies.map(t => `
            <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  const certCardsHtml = certifications.map((cert) => `
    <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${cert.badgeColor} flex items-center justify-center text-white mb-4 shadow-sm">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">${cert.issuer}</span>
        <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">${cert.title}</h4>
      </div>
      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-600 font-medium">
        <span>Verified Credential</span>
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  `).join('');

  const skillsCategoriesHtml = skillsCategories.map((cat) => `
    <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      <h3 class="text-lg font-bold text-slate-900 mb-2">${cat.title}</h3>
      <p class="text-xs text-slate-500 mb-5 leading-relaxed">${cat.description}</p>
      <div class="space-y-3">
        ${cat.skills.map(s => `
          <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
            <span class="text-sm font-semibold ${s.highlight ? 'text-indigo-900' : 'text-slate-800'}">${s.name}</span>
            <span class="text-xs font-medium px-2 py-0.5 rounded ${s.highlight ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-700'}">
              ${s.level}
            </span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  const statsHtml = stats.map(s => `
    <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/70 shadow-xs">
      <div class="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">${s.value}</div>
      <div class="text-xs font-bold text-indigo-600 uppercase tracking-wider mt-1">${s.label}</div>
      <div class="text-xs text-slate-500 mt-0.5">${s.sublabel}</div>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${name} - Specialist Cloud Consultant & Solutions Architect</title>
  <meta name="description" content="Personal webpage and portfolio of ${name}, Specialist Cloud Consultant at Teradata. Multi-Cloud (AWS, Azure, GCP) and Enterprise Database Specialist." />
  <meta property="og:title" content="${name} - Specialist Cloud Consultant" />
  <meta property="og:description" content="18+ Years Enterprise Experience in Cloud Architecture, Teradata & MSSQL DBA, and Global Infrastructure." />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    html { scroll-behavior: smooth; }
    @media print {
      .no-print { display: none !important; }
      body { background: white !important; color: black !important; }
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">

  <!-- TOP ANNOUNCEMENT & UTILITIES -->
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 no-print">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white font-black text-base flex items-center justify-center shadow-sm">
          CS
        </div>
        <div>
          <span class="font-bold text-slate-900 tracking-tight text-base block leading-none">${name}</span>
          <span class="text-[11px] text-slate-500 font-medium">Cloud Consultant • Teradata</span>
        </div>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
        <a href="#about" class="hover:text-indigo-600 transition-colors">About</a>
        <a href="#skills" class="hover:text-indigo-600 transition-colors">Core Skills</a>
        <a href="#certifications" class="hover:text-indigo-600 transition-colors">Certifications</a>
        <a href="#experience" class="hover:text-indigo-600 transition-colors">Experience</a>
        <a href="#education" class="hover:text-indigo-600 transition-colors">Education</a>
      </nav>
      <div class="flex items-center gap-2.5">
        <button onclick="window.print()" class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-all">
          <svg class="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print / PDF
        </button>
        <a href="mailto:${email}" class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-all">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contact Chaitra
        </a>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="about" class="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200/60 bg-gradient-to-b from-indigo-50/40 via-white to-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-800 text-xs font-bold mb-4">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Specialist Cloud Consultant • 18+ Years Global IT Infrastructure
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ${name}
          </h1>
          <p class="text-lg lg:text-xl font-semibold text-indigo-700 mt-2">
            ${subHeadline}
          </p>
          <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-3">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              ${location}
            </span>
            <span>•</span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Teradata (Senior Cloud Operations Specialist)
            </span>
          </div>
          <p class="text-slate-600 text-sm md:text-base leading-relaxed mt-6 max-w-3xl">
            ${summary}
          </p>

          <!-- Quick Connect Buttons -->
          <div class="flex flex-wrap gap-3 mt-8">
            <a href="mailto:${email}" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs tracking-wide shadow-sm transition-all">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ${email}
            </a>
            <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 font-semibold text-xs tracking-wide shadow-xs transition-all">
              <svg class="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn Profile
            </a>
          </div>
        </div>

        <!-- Right Quick Card -->
        <div class="lg:col-span-4">
          <div class="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 relative">
            <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Core Credentials</span>
              <span class="text-xs font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">ITIL & Multi-Cloud</span>
            </div>
            <div class="space-y-3 text-xs">
              <div class="flex items-start gap-2.5">
                <div class="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">1</div>
                <div>
                  <div class="font-bold text-slate-900">Cloud Operations & Architecture</div>
                  <div class="text-slate-500">AWS, Azure, GCP, Kubernetes, IAM</div>
                </div>
              </div>
              <div class="flex items-start gap-2.5">
                <div class="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">2</div>
                <div>
                  <div class="font-bold text-slate-900">Enterprise Database Systems</div>
                  <div class="text-slate-500">Teradata DBA, MSSQL 2000-2008, Clustering</div>
                </div>
              </div>
              <div class="flex items-start gap-2.5">
                <div class="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">3</div>
                <div>
                  <div class="font-bold text-slate-900">High Availability & Recovery</div>
                  <div class="text-slate-500">BAR, DSA, Logshipping, Mirroring, Zero Downtime</div>
                </div>
              </div>
              <div class="flex items-start gap-2.5">
                <div class="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">4</div>
                <div>
                  <div class="font-bold text-slate-900">Global Customer L3 Support</div>
                  <div class="text-slate-500">UK & France Enterprise Client Outage Handling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- KEY METRICS STRIP -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        ${statsHtml}
      </div>
    </div>
  </section>

  <!-- SKILLS SECTION -->
  <section id="skills" class="py-16 bg-white border-b border-slate-200/70">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-indigo-600">Technical Competencies</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Multi-Cloud & Enterprise Expertise</h2>
        <p class="text-slate-500 text-sm mt-2">Comprehensive operational and architectural mastery across global infrastructure, databases, and agile delivery.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${skillsCategoriesHtml}
      </div>
    </div>
  </section>

  <!-- CERTIFICATIONS SECTION -->
  <section id="certifications" class="py-16 bg-slate-50 border-b border-slate-200/70">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-end justify-between mb-10 gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-600">Verified Credentials</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Industry Certifications</h2>
          <p class="text-slate-500 text-sm mt-1">Global certifications across cloud architecture, database operations, and project methodologies.</p>
        </div>
        <span class="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-600">
          5 Verified Certifications
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        ${certCardsHtml}
      </div>
    </div>
  </section>

  <!-- PROFESSIONAL EXPERIENCE -->
  <section id="experience" class="py-16 bg-white border-b border-slate-200/70">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-indigo-600">Career Trajectory</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Professional Experience</h2>
        <p class="text-slate-500 text-sm mt-2">Over 18 years of continuous track record driving high availability, cloud migration, and database operations.</p>
      </div>

      <div class="mt-8">
        ${experienceCardsHtml}
      </div>
    </div>
  </section>

  <!-- EDUCATION SECTION -->
  <section id="education" class="py-16 bg-slate-50 border-b border-slate-200/70">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs font-bold uppercase tracking-wider text-indigo-600">Academic Background</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Education</h2>
      </div>

      <div class="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg shrink-0">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900">${education.institution}</h3>
            <p class="text-sm font-semibold text-indigo-700">${education.degree} – ${education.field}</p>
            <p class="text-xs text-slate-400 mt-1">${education.location}</p>
          </div>
        </div>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 self-start sm:self-auto">
          Completed
        </span>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="py-12 bg-white text-center text-xs text-slate-500 no-print">
    <div class="max-w-6xl mx-auto px-4 space-y-3">
      <div class="flex justify-center items-center gap-6 font-medium text-slate-600">
        <a href="mailto:${email}" class="hover:text-indigo-600 transition-colors">Email: ${email}</a>
        <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-600 transition-colors">LinkedIn Profile</a>
      </div>
      <p class="text-slate-400">© 2026 ${name}. Designed with modern Canva aesthetic principles. Ready to host as a single standalone HTML file.</p>
    </div>
  </footer>

</body>
</html>`;
}
