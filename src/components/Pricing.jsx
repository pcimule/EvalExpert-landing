import { useTranslation } from '../i18n/LanguageContext'

const planColors = {
  free:  '#7d8590',
  basic: '#388bfd',
  team:  '#1f6feb',
  pro:   '#a78bfa',
}

const fmt = (v, unlimitedLabel) => v === -1 ? (unlimitedLabel || 'Unlimited') : v

export default function Pricing() {
  const { t } = useTranslation()
  const p = t.pricing
  const plans = p.plans || []

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-[#1f6feb]/10 top-0 -left-32"/>
      <div className="glow-orb w-[400px] h-[400px] bg-[#a78bfa]/10 bottom-0 -right-32"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 reveal">
          <span className="section-label">{p.label}</span>
          <h2 className="section-title mb-4">
            {p.title}{' '}
            <span className="gradient-text">{p.titleAccent}</span>
          </h2>
          <p className="section-subtitle mx-auto">{p.subtitle}</p>
        </div>

        {/* Promo banner */}
        <div className="reveal flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-orange-500/10 border border-orange-500/30 rounded-2xl">
            <span className="text-orange-400 text-lg">{p.promoBanner?.icon || '🎉'}</span>
            <div>
              <span className="text-orange-300 font-semibold text-sm">{p.promoBanner?.title}</span>
              <span className="text-[#7d8590] text-sm ml-2">{p.promoBanner?.sub}</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => {
            const color = planColors[plan.key] || '#7d8590'
            const isPopular = plan.badge === 'Most Popular'
            const isFree = plan.key === 'free'

            return (
              <div
                key={plan.key}
                className={`reveal relative rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  isPopular ? 'border-[#1f6feb] bg-[#0d1117]' : 'border-[#21262d] bg-[#0d1117]'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Top accent line for most popular */}
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1f6feb] via-[#388bfd] to-[#a78bfa]"/>
                )}

                {plan.badge && (
                  <div className="absolute top-3 right-3">
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${color}20`, color, border: `1px solid ${color}40` }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="p-6 pb-4">
                  <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color }}>
                    {plan.name}
                  </div>

                  {/* Free plan */}
                  {isFree ? (
                    <>
                      <div className="mb-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#3fb950]/10 border border-[#3fb950]/25 rounded-full text-[10px] font-bold text-[#3fb950] mb-3">
                          ✦ {p.trialBadge || '14-Day Free Trial'}
                        </div>
                        <div className="flex items-end gap-1.5">
                          <span className="text-4xl font-bold text-[#e6edf3]">$0</span>
                        </div>
                        <div className="text-xs text-[#7d8590] mt-0.5">{plan.period}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-500/15 border border-orange-500/25 rounded-full text-[10px] font-bold text-orange-400 mb-2">
                        {plan.originalPrice ? `${Math.round((1 - parseFloat(plan.price) / parseFloat(plan.originalPrice)) * 100)}% ${p.discountBadge || 'OFF'}` : ''}
                      </div>
                      <div className="flex items-end gap-1.5 mb-0.5">
                        <span className="text-4xl font-bold text-[#e6edf3]">${plan.price}</span>
                        <span className="text-[#7d8590] text-sm mb-1">{p.perMonth || '/mo'}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="text-sm text-[#7d8590] line-through mb-1">
                          {p.wasLabel || 'was'} ${plan.originalPrice}{p.perMonth || '/mo'}
                        </div>
                      )}
                    </>
                  )}

                  <p className="text-[#7d8590] text-sm leading-relaxed mt-2">{plan.desc}</p>
                </div>

                {/* Features */}
                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {(plan.features || []).map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#e6edf3]">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block w-full text-center py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isPopular
                        ? 'btn-primary'
                        : isFree
                        ? 'bg-[#3fb950]/10 border border-[#3fb950]/30 text-[#3fb950] hover:bg-[#3fb950]/20'
                        : 'border border-[#30363d] text-[#e6edf3] hover:border-[#388bfd] hover:bg-[#1f6feb]/10'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center reveal">
          <p className="text-[#7d8590] text-sm">
            {p.footer}{' '}
            <a href="#contact" className="text-[#388bfd] hover:underline">{p.contactUs}</a>
          </p>
        </div>
      </div>
    </section>
  )
}
