import { useTranslation } from '../i18n/LanguageContext'

const pillIcons = ['🤖', '🌐', '🔒', '📊']
const competencyColors = ['#388bfd', '#a78bfa', '#3fb950', '#d29922']

const EvalMockup = ({ m }) => (
  <div className="relative w-full max-w-[520px] mx-auto">
    <div className="absolute inset-0 bg-[#1f6feb]/20 rounded-3xl blur-3xl scale-110 -z-10" />

    <div className="gradient-border">
      <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-2xl text-sm">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#21262d]">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#f85149]"/>
            <div className="w-3 h-3 rounded-full bg-[#d29922]"/>
            <div className="w-3 h-3 rounded-full bg-[#3fb950]"/>
          </div>
          <div className="flex items-center gap-2 bg-[#0d1117] px-3 py-1 rounded text-[10px] text-[#7d8590]">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            app.evalexpertpro.com
          </div>
          <div className="w-16"/>
        </div>

        <div className="flex" style={{height: 360}}>
          {/* Sidebar */}
          <div className="w-36 bg-[#0a0f1a] border-r border-[#161b22] flex flex-col py-3 px-2 gap-1 flex-shrink-0">
            {(m.sidebar || ['Dashboard','Roles','Candidates','Evaluations','Reports','Settings']).map((label, idx) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-medium ${
                  idx === 3 ? 'bg-[#1f6feb] text-white' : 'text-[#7d8590]'
                }`}
              >
                <span className="text-[11px]">{['⊞','◈','◉','★','▤','⚙'][idx]}</span>
                {label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 overflow-hidden">
            <div className="text-[10px] text-[#7d8590] mb-3">
              {m.breadcrumb || 'Evaluations › Senior Product Manager'}
            </div>

            {/* Candidate header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1f6feb] to-[#a78bfa] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">SC</div>
                <div>
                  <div className="text-[#e6edf3] font-semibold text-sm">Sarah Chen</div>
                  <div className="text-[#7d8590] text-[10px]">Sr. Product Manager · 7 yrs exp.</div>
                </div>
              </div>
              <span className="bg-[#3fb950]/15 text-[#3fb950] text-[9px] font-bold px-2 py-1 rounded-full border border-[#3fb950]/30 whitespace-nowrap">
                {m.badge || 'AI RECOMMENDED'}
              </span>
            </div>

            {/* Match score ring */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14 flex-shrink-0">
                <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                  <circle cx="28" cy="28" r="22" fill="none" stroke="#21262d" strokeWidth="5"/>
                  <circle cx="28" cy="28" r="22" fill="none" stroke="url(#scoreGrad)" strokeWidth="5"
                    strokeDasharray={`${0.87 * 138.2} 138.2`} strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1f6feb"/>
                      <stop offset="100%" stopColor="#388bfd"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[#388bfd] font-bold text-sm leading-none">87%</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-[#7d8590] mb-1">{m.matchScore || 'Match Score'}</div>
                <div className="text-[10px] text-[#e6edf3] mb-2 leading-tight">{m.fitLabel || 'Excellent fit across all core competencies'}</div>
                <div className="flex gap-1.5 flex-wrap">
                  {(m.competencies || ['Leadership','Strategy','Communication']).slice(0,3).map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 bg-[#1f6feb]/15 text-[#388bfd] text-[9px] rounded border border-[#1f6feb]/20">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Competency bars */}
            <div className="space-y-2 mb-4">
              {(m.competencies || ['Leadership','Technical','Communication','Strategic']).map((name, idx) => (
                <div key={name} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#7d8590] w-[74px] flex-shrink-0">{name}</span>
                  <div className="flex-1 h-1.5 bg-[#21262d] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${[92,85,90,88][idx]}%`, background: competencyColors[idx] }} />
                  </div>
                  <span className="text-[9px] font-semibold text-[#e6edf3] w-6 text-right">{[92,85,90,88][idx]}</span>
                </div>
              ))}
            </div>

            {/* Action button */}
            <button className="w-full py-1.5 rounded-md text-[10px] font-semibold text-white flex items-center justify-center gap-1.5"
              style={{ background: 'linear-gradient(135deg, #1f6feb, #388bfd)' }}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
              {m.generateBtn || 'Generate Interview Questions'}
            </button>
          </div>
        </div>

        {/* Status bar */}
        <div className="bg-[#161b22] border-t border-[#21262d] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse"/>
            <span className="text-[9px] text-[#7d8590]">{m.statusLabel || 'AI Analysis Complete · Claude 3.5 Sonnet'}</span>
          </div>
          <span className="text-[9px] text-[#7d8590]">🌐 EN · ES · PT · FR · DE</span>
        </div>
      </div>
    </div>

    <div className="absolute -top-3 -right-3 bg-[#1f6feb] text-white text-[10px] font-bold px-2.5 py-1.5 rounded-xl shadow-lg shadow-[#1f6feb]/30 animate-float">
      ✦ AI Powered
    </div>
    <div className="absolute -bottom-3 -left-3 bg-[#0d1117] border border-[#3fb950]/40 text-[#3fb950] text-[10px] font-semibold px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5">
      <span className="text-base">🎯</span> 87% {m.matchScore || 'Match Score'}
    </div>
  </div>
)

export default function Hero() {
  const { t } = useTranslation()
  const h = t.hero
  const m = h.mockup || {}

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden grid-bg">
      <div className="glow-orb w-[600px] h-[600px] bg-[#1f6feb]/20 -top-32 -left-48" />
      <div className="glow-orb w-[500px] h-[500px] bg-[#a78bfa]/15 top-1/2 -right-64" />
      <div className="glow-orb w-[300px] h-[300px] bg-[#388bfd]/10 bottom-0 left-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f6feb]/10 border border-[#1f6feb]/25 text-[#388bfd] text-xs font-semibold mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#388bfd] opacity-75"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#388bfd]"/>
              </span>
              {h.badge}
            </div>

            <h1 className="section-title mb-6 animate-fade-up text-balance">
              {h.headline}{' '}
              <span className="gradient-text-animate bg-300%">{h.headlineAccent}</span>
            </h1>

            <p className="text-lg lg:text-xl text-[#7d8590] leading-relaxed mb-8 animate-fade-up animate-delay-100 text-balance">
              {h.subtitle}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10 animate-fade-up animate-delay-200">
              {(h.pills || []).map((label, i) => (
                <span key={label} className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#161b22] border border-[#21262d] rounded-full text-xs font-medium text-[#e6edf3]">
                  <span>{pillIcons[i]}</span> {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12 animate-fade-up animate-delay-300">
              <a href="#contact" className="btn-primary text-base px-7 py-3.5">
                {h.ctaPrimary}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
              <a href="#how-it-works" className="btn-secondary text-base px-7 py-3.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {h.ctaSecondary}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up animate-delay-400">
              {(h.stats || []).map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-[#7d8590] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mockup */}
          <div className="animate-float animate-delay-200">
            <EvalMockup m={m} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7d8590] animate-bounce">
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}
