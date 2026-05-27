import { useTranslation } from '../i18n/LanguageContext'

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
    <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
    <path d="M6 18a4 4 0 0 1-1.967-.516"/>
    <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
  </svg>
)

const Logo = () => (
  <a href="#" className="flex items-center gap-2.5 group">
    <div className="w-8 h-8 bg-[#1f6feb] rounded-lg flex items-center justify-center text-white flex-shrink-0
                    group-hover:bg-[#388bfd] transition-colors duration-200">
      <BrainIcon />
    </div>
    <div className="flex items-baseline gap-0">
      <span className="font-semibold text-[#e6edf3] text-lg leading-none">EvalExpert</span>
      <span className="text-[#388bfd] font-semibold text-lg leading-none"> Pro</span>
    </div>
  </a>
)

const columnHrefs = [
  ['#features', '#how-it-works', '#ai', '#modules', '#pricing', '#'],
  ['#', '#', '#', '#', '#'],
  ['#', '#', '#', '#', '#'],
  ['#', '#', '#', '#', '#contact'],
]

export default function Footer() {
  const { t } = useTranslation()
  const f = t.footer
  const cta = f.ctaBanner || {}

  return (
    <footer className="bg-[#0d1117] border-t border-[#21262d]">
      {/* CTA Banner */}
      <div className="border-b border-[#21262d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#21262d] p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f6feb]/10 via-transparent to-[#a78bfa]/10"/>
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-[#e6edf3] mb-3">
                {cta.title}
              </h3>
              <p className="text-[#7d8590] mb-8 max-w-xl mx-auto">
                {cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#contact" className="btn-primary text-base px-8 py-3.5">
                  {cta.primary}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>
                <a href="#contact" className="btn-secondary text-base px-8 py-3.5">
                  {cta.secondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Logo />
            <p className="text-[#7d8590] text-sm leading-relaxed mt-4 mb-6">
              {f.desc}
            </p>
            <div className="flex gap-3">
              {[
                { label: 'Twitter/X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { label: 'LinkedIn',  path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                { label: 'GitHub',    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              ].map(social => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-[#161b22] border border-[#21262d] flex items-center justify-center text-[#7d8590] hover:text-[#e6edf3] hover:border-[#388bfd] transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(f.columns || []).map((col, ci) => (
            <div key={col.title}>
              <h4 className="text-[#e6edf3] font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {(col.links || []).map((label, li) => (
                  <li key={label}>
                    <a
                      href={columnHrefs[ci]?.[li] || '#'}
                      className="text-sm text-[#7d8590] hover:text-[#e6edf3] transition-colors duration-150"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#21262d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7d8590]">{f.copyright}</p>
          <div className="flex items-center gap-6">
            {(f.legal || []).map(item => (
              <a key={item} href="#" className="text-xs text-[#7d8590] hover:text-[#e6edf3] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-[#7d8590]">
            <div className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse"/>
            {f.status}
          </div>
        </div>
      </div>
    </footer>
  )
}
