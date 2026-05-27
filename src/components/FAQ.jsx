import { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

export default function FAQ() {
  const { t } = useTranslation()
  const f = t.faq
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 bg-[#0d1117] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">{f.label}</span>
          <h2 className="section-title mb-4">
            {f.title}{' '}
            <span className="gradient-text">{f.titleAccent}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {f.subtitle}{' '}
            {f.contact}{' '}
            <a href="#contact" className="text-[#388bfd] hover:underline">{f.contactLink}</a>
          </p>
        </div>

        <div className="space-y-3 reveal">
          {(f.items || []).map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                open === i
                  ? 'border-[#388bfd]/40 bg-[#161b22]'
                  : 'border-[#21262d] bg-[#0d1117] hover:border-[#30363d]'
              }`}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`text-sm font-semibold leading-relaxed transition-colors ${
                  open === i ? 'text-[#e6edf3]' : 'text-[#c9d1d9]'
                }`}>
                  {faq.q}
                </span>
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  open === i
                    ? 'border-[#388bfd] bg-[#1f6feb]/20 rotate-45'
                    : 'border-[#30363d]'
                }`}>
                  <svg className={`w-3 h-3 transition-colors ${open === i ? 'text-[#388bfd]' : 'text-[#7d8590]'}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#7d8590] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
