import { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

const API_BASE = import.meta.env.VITE_API_URL || ''

export default function DemoSection() {
  const { t, lang } = useTranslation()
  const d = t.demo
  const f = d.form || {}

  const [form, setForm]     = useState({ name: '', email: '', company: '', size: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState(null)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/api/backoffice/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, language: lang }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to submit request')
      }
      setSent(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-[#1f6feb]/15 top-1/2 -translate-y-1/2 -right-64"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — benefits */}
          <div className="reveal">
            <span className="section-label">{d.label}</span>
            <h2 className="section-title mb-6">
              {d.title}{' '}
              <span className="gradient-text">{d.titleAccent}</span>
            </h2>
            <p className="text-[#7d8590] leading-relaxed mb-10">{d.desc}</p>

            <div className="space-y-5 mb-10">
              {(d.benefits || []).map(item => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#1f6feb]/15 border border-[#1f6feb]/25 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[#e6edf3] font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-[#7d8590] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 bg-[#1f6feb]/08 border border-[#1f6feb]/20 rounded-xl">
              <div className="flex -space-x-2">
                {['AM','CR','PS'].map((initials, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0d1117] bg-[#1f6feb] flex items-center justify-center text-white text-[10px] font-bold">
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#7d8590]">
                {d.socialProof} <span className="text-[#e6edf3] font-medium">{d.socialProofOrgs}</span> {d.socialProofSuffix}
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal animate-delay-200">
            <div className="glass-card p-8">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#3fb950]/15 border border-[#3fb950]/30 flex items-center justify-center text-4xl mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-[#e6edf3] mb-2">{d.success?.title || 'Request Received!'}</h3>
                  <p className="text-[#7d8590]">{d.success?.subtitle || "We'll be in touch within 24 hours."}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-[#e6edf3] mb-2">{f.title || 'Request a Demo'}</h3>
                  <p className="text-[#7d8590] text-sm mb-6">{f.subtitle}</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#7d8590] mb-1.5">{f.nameLabel} *</label>
                        <input
                          name="name" required value={form.name} onChange={handleChange}
                          placeholder={f.namePlaceholder || 'Sarah Chen'}
                          className="w-full bg-[#161b22] border border-[#21262d] rounded-xl px-4 py-2.5 text-sm text-[#e6edf3] placeholder-[#7d8590] focus:outline-none focus:border-[#388bfd] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#7d8590] mb-1.5">{f.emailLabel} *</label>
                        <input
                          name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder={f.emailPlaceholder || 'sarah@company.com'}
                          className="w-full bg-[#161b22] border border-[#21262d] rounded-xl px-4 py-2.5 text-sm text-[#e6edf3] placeholder-[#7d8590] focus:outline-none focus:border-[#388bfd] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#7d8590] mb-1.5">{f.companyLabel} *</label>
                      <input
                        name="company" required value={form.company} onChange={handleChange}
                        placeholder={f.companyPlaceholder || 'Acme Corp'}
                        className="w-full bg-[#161b22] border border-[#21262d] rounded-xl px-4 py-2.5 text-sm text-[#e6edf3] placeholder-[#7d8590] focus:outline-none focus:border-[#388bfd] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#7d8590] mb-1.5">{f.sizeLabel}</label>
                      <select
                        name="size" value={form.size} onChange={handleChange}
                        className="w-full bg-[#161b22] border border-[#21262d] rounded-xl px-4 py-2.5 text-sm text-[#e6edf3] focus:outline-none focus:border-[#388bfd] transition-colors appearance-none"
                      >
                        <option value="">{f.sizeLabel}</option>
                        {(f.sizes || []).map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#7d8590] mb-1.5">{f.messageLabel}</label>
                      <textarea
                        name="message" rows={3} value={form.message} onChange={handleChange}
                        placeholder={f.messagePlaceholder}
                        className="w-full bg-[#161b22] border border-[#21262d] rounded-xl px-4 py-2.5 text-sm text-[#e6edf3] placeholder-[#7d8590] focus:outline-none focus:border-[#388bfd] transition-colors resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-xs text-red-400 text-center px-2">{error}</p>
                    )}

                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? (
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                        </svg>
                      ) : (
                        <>
                          {f.submit || 'Request Demo'}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-[#7d8590]">
                      {f.privacy}{' '}
                      <a href="#" className="text-[#388bfd] hover:underline">{f.privacyPolicy}</a>
                      {' '}{f.and}{' '}
                      <a href="#" className="text-[#388bfd] hover:underline">{f.terms}</a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
