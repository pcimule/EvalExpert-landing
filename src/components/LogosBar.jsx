import { useTranslation } from '../i18n/LanguageContext'

const logos = [
  'Nexus Group', 'TechVentures', 'GlobalRecruit', 'Apex Capital', 'InnovateCo',
  'PrimeStaff', 'FutureHR', 'EliteSearch', 'VisionCorp', 'StarTalent',
  'Nexus Group', 'TechVentures', 'GlobalRecruit', 'Apex Capital', 'InnovateCo',
  'PrimeStaff', 'FutureHR', 'EliteSearch', 'VisionCorp', 'StarTalent',
]

const LogoChip = ({ name }) => (
  <div className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-[#161b22] border border-[#21262d] rounded-xl mx-2">
    <div className="w-6 h-6 rounded bg-gradient-to-br from-[#1f6feb]/60 to-[#388bfd]/40 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
      {name.charAt(0)}
    </div>
    <span className="text-[#7d8590] text-sm font-medium whitespace-nowrap">{name}</span>
  </div>
)

export default function LogosBar() {
  const { t } = useTranslation()

  return (
    <section className="py-14 border-y border-[#21262d] bg-[#0d1117] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm text-[#7d8590] font-medium tracking-wide uppercase">
          {t.logos.title}
        </p>
      </div>
      <div className="relative">
        <div
          className="flex animate-scroll-left"
          style={{ width: 'max-content' }}
        >
          {logos.map((name, i) => <LogoChip key={i} name={name} />)}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d1117] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0d1117] to-transparent z-10" />
      </div>
    </section>
  )
}
