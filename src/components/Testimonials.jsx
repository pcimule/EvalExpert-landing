import { useTranslation } from '../i18n/LanguageContext'

const testimonialColors = ['#1f6feb', '#3fb950', '#a78bfa']

export default function Testimonials() {
  const { t } = useTranslation()
  const ts = t.testimonials

  return (
    <section className="py-24 bg-[#0d1117] relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-[#1f6feb]/08 top-0 right-0"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">{ts.label}</span>
          <h2 className="section-title mb-4">
            {ts.title}{' '}
            <span className="gradient-text">{ts.titleAccent}</span>
          </h2>
          <p className="section-subtitle mx-auto">{ts.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {(ts.items || []).map((item, i) => (
            <div
              key={item.author}
              className="glass-card p-7 flex flex-col reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#d29922]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#e6edf3] text-sm leading-relaxed flex-1 mb-6">
                "{item.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${testimonialColors[i]}, ${testimonialColors[i]}99)` }}
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="text-[#e6edf3] font-semibold text-sm">{item.author}</div>
                  <div className="text-[#7d8590] text-xs">{item.role} · {item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof numbers */}
        <div className="mt-16 reveal">
          <div className="gradient-border p-px">
            <div className="bg-[#0d1117] rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {(ts.stats || []).map(s => (
                  <div key={s.label} className="flex flex-col items-center">
                    <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                    <div className="text-[#e6edf3] text-sm font-semibold mb-0.5">{s.label}</div>
                    <div className="text-[#7d8590] text-xs">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
