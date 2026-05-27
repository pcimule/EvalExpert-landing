import { useState, useEffect, useRef } from 'react'
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
      <span className="font-semibold text-[#e6edf3] text-xl leading-none tracking-tight">EvalExpert</span>
      <span className="text-[#388bfd] font-semibold text-xl leading-none"> Pro</span>
    </div>
  </a>
)

function LanguageDropdown({ lang, languages, changeLang }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = languages.find(l => l.code === lang) || languages[0]

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#161b22] transition-all duration-150"
        aria-label="Select language"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="text-xs font-semibold">{current.code.toUpperCase()}</span>
        <svg className={`w-3 h-3 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-[#161b22] border border-[#21262d] rounded-xl shadow-xl overflow-hidden z-50">
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => { changeLang(l.code); setOpen(false) }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                l.code === lang
                  ? 'text-[#388bfd] bg-[#1f6feb]/10'
                  : 'text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#0d1117]'
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span className="font-medium">{l.name}</span>
              {l.code === lang && (
                <svg className="ml-auto w-3.5 h-3.5 text-[#388bfd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const { t, lang, changeLang, languages } = useTranslation()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('')

  const navLinks = [
    { label: t.nav.features,    href: '#features' },
    { label: t.nav.howItWorks,  href: '#how-it-works' },
    { label: t.nav.ai,          href: '#ai' },
    { label: t.nav.modules,     href: '#modules' },
    { label: t.nav.pricing,     href: '#pricing' },
    { label: t.nav.faq,         href: '#faq' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    setActiveLink(href)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeLink === link.href
                    ? 'text-[#388bfd] bg-[#1f6feb]/10'
                    : 'text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#161b22]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: language + CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageDropdown lang={lang} languages={languages} changeLang={changeLang} />
            <a
              href="https://app.evalexpertpro.com/auth"
              className="px-4 py-2 text-sm font-medium text-[#7d8590] hover:text-[#e6edf3] transition-colors duration-150"
            >
              {t.nav.signIn}
            </a>
            <a href="#contact" onClick={e => handleNav(e, '#contact')} className="btn-primary text-sm px-5 py-2.5">
              {t.nav.startFree}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#161b22] transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0d1117] border border-[#21262d] rounded-2xl mb-4 p-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#161b22] transition-all"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-[#21262d] my-2" />
            <div className="px-2 py-1">
              <div className="flex flex-wrap gap-2">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      l.code === lang
                        ? 'bg-[#1f6feb]/20 text-[#388bfd] border border-[#1f6feb]/30'
                        : 'text-[#7d8590] border border-[#21262d] hover:border-[#388bfd]/40'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
            <hr className="border-[#21262d] my-1" />
            <a href="https://app.evalexpertpro.com/auth" className="px-4 py-2.5 text-sm font-medium text-[#7d8590]">{t.nav.signIn}</a>
            <a href="#contact" onClick={e => handleNav(e, '#contact')} className="btn-primary justify-center text-sm mt-1">
              {t.nav.startFree}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
