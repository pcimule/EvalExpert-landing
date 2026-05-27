import { useTranslation } from '../i18n/LanguageContext'

const pillarIcons = [
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>,
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>,
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>,
]
const pillarColors = ['#388bfd','#3fb950','#a78bfa','#d29922','#f78166','#388bfd']

export default function Security() {
  const { t } = useTranslation()
  const s = t.security

  return (
    <section className="py-24 bg-[#0d1117] relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-[#3fb950]/08 top-1/2 -translate-y-1/2 -right-32"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">{s.label}</span>
          <h2 className="section-title mb-4">
            {s.title}{' '}
            <span className="gradient-text">{s.titleAccent}</span>
          </h2>
          <p className="section-subtitle mx-auto">{s.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {(s.pillars || []).map((p, i) => (
            <div
              key={p.title}
              className="glass-card p-6 reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${pillarColors[i]}15`, color: pillarColors[i], border: `1px solid ${pillarColors[i]}25` }}>
                  {pillarIcons[i]}
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                  style={{ color: pillarColors[i], borderColor: `${pillarColors[i]}30`, background: `${pillarColors[i]}10` }}>
                  {p.badge}
                </span>
              </div>
              <h3 className="text-[#e6edf3] font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-[#7d8590] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="reveal gradient-border p-px">
          <div className="bg-[#0d1117] rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {(s.trust || []).map(trust => (
                <div key={trust.label} className="flex flex-col items-center gap-2">
                  <span className="text-3xl">{trust.icon}</span>
                  <div className="text-[#e6edf3] font-semibold text-sm">{trust.label}</div>
                  <div className="text-[#7d8590] text-xs">{trust.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
