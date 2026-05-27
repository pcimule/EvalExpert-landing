import { useTranslation } from '../i18n/LanguageContext'

const ConfigMockup = ({ labels }) => {
  const l = labels || {}
  return (
    <div className="bg-[#0d1117] rounded-2xl border border-[#21262d] overflow-hidden shadow-2xl">
      <div className="bg-[#161b22] border-b border-[#21262d] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-[#388bfd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span className="text-sm font-semibold text-[#e6edf3]">AI Provider Configuration</span>
        </div>
        <span className="text-[10px] text-[#7d8590] bg-[#0d1117] px-2 py-0.5 rounded">Organization Settings</span>
      </div>

      <div className="p-5 space-y-5">
        <div>
          <label className="block text-xs font-medium text-[#7d8590] mb-2">{l.provider || 'Select AI Provider'}</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'OpenAI', sub: 'GPT-4o, GPT-4 Turbo', active: false, logo: '○' },
              { name: 'Anthropic', sub: 'Claude 3.5, Claude 3', active: true, logo: '◆' },
            ].map(p => (
              <div key={p.name} className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${p.active ? 'border-[#1f6feb] bg-[#1f6feb]/10' : 'border-[#21262d] bg-[#161b22]'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-base ${p.active ? 'text-[#388bfd]' : 'text-[#7d8590]'}`}>{p.logo}</span>
                  <span className={`text-xs font-semibold ${p.active ? 'text-[#e6edf3]' : 'text-[#7d8590]'}`}>{p.name}</span>
                  {p.active && <span className="ml-auto text-[9px] bg-[#1f6feb] text-white px-1.5 py-0.5 rounded font-bold">{l.active || 'ACTIVE'}</span>}
                </div>
                <div className="text-[9px] text-[#7d8590]">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#7d8590] mb-2">{l.model || 'Model Selection'}</label>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl px-3 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#388bfd] text-xs font-semibold">claude-3-5-sonnet-20241022</span>
              <span className="text-[9px] bg-[#3fb950]/15 text-[#3fb950] px-1.5 py-0.5 rounded border border-[#3fb950]/25">{l.recommended || 'Recommended'}</span>
            </div>
            <svg className="w-4 h-4 text-[#7d8590]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#7d8590] mb-2">{l.apiKey || 'API Key'}</label>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl px-3 py-2.5 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#3fb950] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            <span className="text-xs text-[#7d8590] font-mono flex-1">sk-ant-••••••••••••••••••••••••••••••••••</span>
            <span className="text-[9px] text-[#3fb950] font-semibold">{l.encrypted || 'AES-256 Encrypted'}</span>
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-3 space-y-2">
          {[
            { label: l.statuses?.[0] || 'API Connection',      status: l.connected || 'Connected',                    ok: true },
            { label: l.statuses?.[1] || 'Evaluation Engine',   status: l.active2   || 'Active',                        ok: true },
            { label: l.statuses?.[2] || 'Translation Service', status: l.active2   || 'Active',                        ok: true },
            { label: l.statuses?.[3] || 'TTS Service',         status: l.fallback  || 'Fallback to Platform Key',      ok: false },
          ].map(item => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-[10px] text-[#7d8590]">{item.label}</span>
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${item.ok ? 'bg-[#3fb950]' : 'bg-[#d29922]'}`}/>
                <span className={`text-[10px] font-medium ${item.ok ? 'text-[#3fb950]' : 'text-[#d29922]'}`}>{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AISection() {
  const { t } = useTranslation()
  const a = t.ai

  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-[#a78bfa]/10 -top-32 -right-48"/>
      <div className="glow-orb w-[400px] h-[400px] bg-[#1f6feb]/10 bottom-0 -left-32"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <span className="section-label">{a.label}</span>
            <h2 className="section-title mb-6">
              {a.title}{' '}
              <span className="gradient-text">{a.titleAccent}</span>
            </h2>
            <p className="text-[#7d8590] leading-relaxed mb-8">{a.desc}</p>

            <div className="space-y-5 mb-8">
              {(a.points || []).map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#161b22] border border-[#21262d] flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[#e6edf3] font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-[#7d8590] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border border-[#21262d] rounded-xl text-xs text-[#e6edf3] font-medium">
                <span className="text-base">○</span> {(a.badges || [])[0] || 'OpenAI Compatible'}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border border-[#21262d] rounded-xl text-xs text-[#e6edf3] font-medium">
                <span className="text-base">◆</span> {(a.badges || [])[1] || 'Anthropic Claude'}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border border-[#21262d] rounded-xl text-xs text-[#3fb950] font-medium border-[#3fb950]/25 bg-[#3fb950]/5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                {(a.badges || [])[2] || 'AES-256-GCM Encrypted'}
              </div>
            </div>
          </div>

          <div className="reveal animate-delay-200">
            <ConfigMockup labels={a.configLabels} />
          </div>
        </div>
      </div>
    </section>
  )
}
