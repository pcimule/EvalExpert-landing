import { useTranslation } from '../i18n/LanguageContext'

const stepIcons = [
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
]

const stepMockups = [
  (
    <div className="bg-[#0d1117] rounded-xl border border-[#21262d] p-4 text-xs">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded bg-[#1f6feb]/20 flex items-center justify-center">
          <svg className="w-3 h-3 text-[#388bfd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        </div>
        <span className="text-[#e6edf3] font-semibold">Senior Product Manager</span>
      </div>
      <div className="space-y-1.5 text-[#7d8590]">
        <div className="flex justify-between"><span>AI Extraction Status</span><span className="text-[#3fb950]">✓ Complete</span></div>
        <div className="flex justify-between"><span>Competencies Found</span><span className="text-[#388bfd]">8 dimensions</span></div>
        <div className="flex justify-between"><span>Experience Required</span><span className="text-[#e6edf3]">5+ years</span></div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1">
        {['Leadership','Strategy','Roadmapping','Stakeholders','Data Analysis'].map(t => (
          <span key={t} className="px-2 py-0.5 bg-[#1f6feb]/15 text-[#388bfd] rounded text-[9px] border border-[#1f6feb]/20">{t}</span>
        ))}
      </div>
    </div>
  ),
  (
    <div className="bg-[#0d1117] rounded-xl border border-[#21262d] p-4 text-xs">
      <div className="text-[#7d8590] mb-2 text-[10px] uppercase tracking-wide">Candidate Pool · 4 profiles</div>
      {[
        { name: 'Sarah Chen',    role: '7 yrs · PM', match: 87, color: '#3fb950' },
        { name: 'Marcus Rivera', role: '5 yrs · PM', match: 74, color: '#d29922' },
        { name: 'Aisha Okafor',  role: '9 yrs · PM', match: 91, color: '#3fb950' },
      ].map(c => (
        <div key={c.name} className="flex items-center justify-between py-2 border-b border-[#161b22] last:border-0">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#1f6feb]/30 flex items-center justify-center text-[8px] font-bold text-[#388bfd]">
              {c.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="text-[#e6edf3] font-medium text-[10px]">{c.name}</div>
              <div className="text-[#7d8590] text-[9px]">{c.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-12 h-1.5 bg-[#21262d] rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${c.match}%`, background: c.color }}/>
            </div>
            <span className="text-[9px] font-semibold" style={{ color: c.color }}>{c.match}%</span>
          </div>
        </div>
      ))}
    </div>
  ),
  (
    <div className="bg-[#0d1117] rounded-xl border border-[#21262d] p-4 text-xs">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#e6edf3] font-semibold text-[10px]">Evaluation Report · Aisha Okafor</span>
        <span className="bg-[#3fb950]/15 text-[#3fb950] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#3fb950]/30">RECOMMENDED</span>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl font-bold text-[#388bfd]">91%</div>
        <div>
          <div className="text-[#e6edf3] text-[10px] font-medium">Overall Match</div>
          <div className="text-[#7d8590] text-[9px]">Top candidate for this role</div>
        </div>
      </div>
      <div className="space-y-1.5 mb-3">
        {[['Leadership', 95],['Strategic Thinking', 93],['Product Execution', 89]].map(([n,v]) => (
          <div key={n} className="flex items-center gap-2">
            <span className="text-[#7d8590] text-[9px] w-28">{n}</span>
            <div className="flex-1 h-1 bg-[#21262d] rounded-full overflow-hidden">
              <div className="h-full bg-[#388bfd] rounded-full" style={{ width: `${v}%` }}/>
            </div>
            <span className="text-[9px] font-semibold text-[#e6edf3] w-5 text-right">{v}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        <button className="flex-1 py-1 text-[9px] font-semibold text-white rounded" style={{ background: 'linear-gradient(135deg, #1f6feb, #388bfd)' }}>
          View Full Report
        </button>
        <button className="px-3 py-1 text-[9px] font-medium text-[#7d8590] rounded border border-[#21262d]">PDF</button>
      </div>
    </div>
  ),
]

export default function HowItWorks() {
  const { t } = useTranslation()
  const h = t.howItWorks

  return (
    <section id="how-it-works" className="py-24 bg-[#0d1117] relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-[#1f6feb]/10 top-0 right-0"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">{h.label}</span>
          <h2 className="section-title mb-4">
            {h.title}{' '}
            <span className="gradient-text">{h.titleAccent}</span>
            {h.titleSuffix}
          </h2>
          <p className="section-subtitle mx-auto">{h.subtitle}</p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {(h.steps || []).map((step, i) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center reveal ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0">
                    <div className="text-[10px] font-bold text-[#7d8590] tracking-widest mb-2">{step.number}</div>
                    <div className="w-14 h-14 rounded-2xl bg-[#1f6feb]/15 border border-[#1f6feb]/25 flex items-center justify-center text-[#388bfd]">
                      {stepIcons[i]}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#e6edf3] mb-1">{step.title}</h3>
                    <p className="text-[#388bfd] font-medium text-sm">{step.subtitle}</p>
                  </div>
                </div>
                <p className="text-[#7d8590] leading-relaxed mb-6">{step.desc}</p>
                <ul className="space-y-2.5">
                  {(step.highlights || []).map(h => (
                    <li key={h} className="flex items-center gap-3 text-sm text-[#e6edf3]">
                      <div className="w-5 h-5 rounded-full bg-[#3fb950]/15 border border-[#3fb950]/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#3fb950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${i % 2 === 1 ? 'lg:[direction:ltr]' : ''} reveal`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#1f6feb]/10 rounded-2xl blur-2xl scale-95 -z-10"/>
                  {stepMockups[i]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
