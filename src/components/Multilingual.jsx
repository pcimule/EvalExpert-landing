import { useTranslation } from '../i18n/LanguageContext'

export default function Multilingual() {
  const { t } = useTranslation()
  const m = t.multilingual

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-[#388bfd]/08 top-1/2 -translate-y-1/2 -left-48"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Language cards */}
          <div className="reveal">
            <div className="space-y-3">
              {(m.langs || []).map((lang, i) => (
                <div
                  key={lang.code}
                  className="glass-card p-4 flex items-start gap-4"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-[10px] font-bold text-[#388bfd] tracking-wider">{lang.code}</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#e6edf3] mb-1">{lang.name}</div>
                    <p className="text-xs text-[#7d8590] leading-relaxed italic">{lang.sample}</p>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3fb950]/15 border border-[#3fb950]/30 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#3fb950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Copy */}
          <div className="reveal animate-delay-200">
            <span className="section-label">{m.label}</span>
            <h2 className="section-title mb-6">
              {m.title}{' '}
              <span className="gradient-text">{m.titleAccent}</span>
            </h2>
            <p className="text-[#7d8590] leading-relaxed mb-6">{m.desc}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {(m.stats || []).map(s => (
                <div key={s.label} className="glass-card p-4">
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div className="text-[#e6edf3] font-bold text-sm">{s.value}</div>
                  <div className="text-[#7d8590] text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#1f6feb]/08 border border-[#1f6feb]/20 rounded-xl">
              <svg className="w-5 h-5 text-[#388bfd] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <p className="text-sm text-[#7d8590]">{m.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
