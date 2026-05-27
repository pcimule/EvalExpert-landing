import { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

const moduleIcons = ['★', '◈', '◉', '▤', '⚙', '◎']
const moduleColors = ['#388bfd', '#a78bfa', '#3fb950', '#d29922', '#f78166', '#388bfd']

const modulePreviews = [
  (
    <div className="space-y-2">
      {[
        { name: 'Leadership',         v: 92 },
        { name: 'Technical Skills',   v: 85 },
        { name: 'Communication',      v: 90 },
        { name: 'Strategic Thinking', v: 88 },
        { name: 'Team Collaboration', v: 95 },
      ].map(c => (
        <div key={c.name} className="flex items-center gap-3 text-xs">
          <span className="text-[#7d8590] w-36 flex-shrink-0">{c.name}</span>
          <div className="flex-1 h-2 bg-[#21262d] rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-[#388bfd] transition-all" style={{ width: `${c.v}%` }}/>
          </div>
          <span className="text-[#e6edf3] font-semibold w-6 text-right">{c.v}</span>
        </div>
      ))}
    </div>
  ),
  (
    <div className="space-y-2">
      {[
        { title: 'Senior Product Manager', dept: 'Product', evals: 12, status: 'Open',        color: '#3fb950' },
        { title: 'Lead Frontend Engineer',  dept: 'Tech',    evals: 8,  status: 'In Progress', color: '#d29922' },
        { title: 'Head of Marketing',       dept: 'Growth',  evals: 5,  status: 'Open',        color: '#3fb950' },
        { title: 'Senior Data Analyst',     dept: 'Data',    evals: 3,  status: 'Closed',      color: '#7d8590' },
      ].map(r => (
        <div key={r.title} className="flex items-center justify-between py-2 border-b border-[#21262d] last:border-0 text-xs">
          <div>
            <div className="text-[#e6edf3] font-medium">{r.title}</div>
            <div className="text-[#7d8590] text-[10px]">{r.dept} · {r.evals} evaluations</div>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold border" style={{ color: r.color, borderColor: `${r.color}40`, background: `${r.color}15` }}>{r.status}</span>
        </div>
      ))}
    </div>
  ),
  (
    <div className="space-y-3">
      <div className="flex items-center gap-3 p-2 bg-[#161b22] rounded-lg text-xs">
        <div className="w-8 h-8 rounded-full bg-[#1f6feb]/30 flex items-center justify-center text-[#388bfd] font-bold text-xs">SC</div>
        <div className="flex-1">
          <div className="text-[#e6edf3] font-medium">Sarah Chen</div>
          <div className="text-[#7d8590] text-[10px]">7 yrs · Product Management · San Francisco</div>
        </div>
        <div className="text-[#3fb950] font-bold text-sm">87%</div>
      </div>
      <div className="text-[10px] text-[#7d8590] space-y-1">
        <div className="flex flex-wrap gap-1">
          {['Product Strategy','Roadmapping','Agile','SQL','Figma','Stakeholder Mgmt'].map(s => (
            <span key={s} className="px-1.5 py-0.5 bg-[#1f6feb]/10 text-[#388bfd] rounded text-[9px] border border-[#1f6feb]/20">{s}</span>
          ))}
        </div>
      </div>
    </div>
  ),
  (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[['Active Roles','12','#388bfd'],['Candidates','48','#3fb950'],['Evaluations','127','#a78bfa']].map(([l,v,c]) => (
          <div key={l} className="bg-[#161b22] rounded-lg p-2 text-center">
            <div className="font-bold text-base" style={{ color: c }}>{v}</div>
            <div className="text-[9px] text-[#7d8590]">{l}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-[10px] text-[#7d8590] mb-1">Match Distribution</div>
        <div className="flex items-end gap-1 h-10">
          {[30,55,80,65,45,90,70,85,60,40].map((h,i) => (
            <div key={i} className="flex-1 rounded-sm bg-[#1f6feb] transition-all" style={{ height: `${h}%`, opacity: 0.4 + (h/200) }}/>
          ))}
        </div>
      </div>
    </div>
  ),
  (
    <div className="space-y-2 text-xs">
      <div className="flex gap-3 text-[10px] text-[#7d8590] border-b border-[#21262d] pb-1.5">
        {['Organizations','Users','Subscriptions','Support'].map(tab => (
          <span key={tab} className={tab === 'Organizations' ? 'text-[#388bfd] font-semibold border-b border-[#388bfd] pb-1' : ''}>{tab}</span>
        ))}
      </div>
      {[
        { name: 'Nexus Group',  plan: 'Enterprise',    status: 'Active',  users: 24 },
        { name: 'TechVentures', plan: 'Professional',  status: 'Active',  users: 8  },
        { name: 'StartupCo',    plan: 'Starter',       status: 'Pending', users: 2  },
      ].map(o => (
        <div key={o.name} className="flex items-center justify-between py-1.5 border-b border-[#161b22] last:border-0">
          <div>
            <div className="text-[#e6edf3] font-medium text-[10px]">{o.name}</div>
            <div className="text-[#7d8590] text-[9px]">{o.plan} · {o.users} users</div>
          </div>
          <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${o.status === 'Active' ? 'bg-[#3fb950]/15 text-[#3fb950]' : 'bg-[#d29922]/15 text-[#d29922]'}`}>{o.status}</span>
        </div>
      ))}
    </div>
  ),
  (
    <div className="space-y-1.5 text-xs font-mono">
      {[
        { time: '14:32:01', user: 'sarah@org.com',  action: 'EVALUATION_CREATED', entity: 'eval-0091' },
        { time: '14:28:45', user: 'admin@org.com',  action: 'CANDIDATE_UPDATED',  entity: 'cand-0034' },
        { time: '14:15:22', user: 'hr@org.com',     action: 'ROLE_CREATED',        entity: 'role-0018' },
        { time: '13:54:10', user: 'sarah@org.com',  action: 'REPORT_EXPORTED',     entity: 'rpt-00221' },
      ].map((log, i) => (
        <div key={i} className="flex gap-2 text-[9px] bg-[#161b22] rounded p-1.5">
          <span className="text-[#7d8590] w-14 flex-shrink-0">{log.time}</span>
          <span className="text-[#388bfd] w-28 flex-shrink-0 truncate">{log.user}</span>
          <span className="text-[#d29922] flex-1 truncate">{log.action}</span>
        </div>
      ))}
    </div>
  ),
]

export default function Modules() {
  const { t } = useTranslation()
  const m = t.modules
  const tabs = m.tabs || []

  const [activeId, setActiveId] = useState('evaluations')
  const currentIdx = tabs.findIndex(tab => tab.id === activeId)
  const current = tabs[currentIdx] || tabs[0]
  const color = moduleColors[currentIdx >= 0 ? currentIdx : 0]
  const icon = moduleIcons[currentIdx >= 0 ? currentIdx : 0]

  return (
    <section id="modules" className="py-24 bg-[#0d1117] relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-[#a78bfa]/10 -bottom-32 -left-32"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="section-label">{m.label}</span>
          <h2 className="section-title mb-4">
            {m.title}{' '}
            <span className="gradient-text">{m.titleAccent}</span>
          </h2>
          <p className="section-subtitle mx-auto">{m.subtitle}</p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 reveal">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeId === tab.id
                  ? 'bg-[#1f6feb] text-white shadow-lg shadow-[#1f6feb]/20'
                  : 'bg-[#161b22] border border-[#21262d] text-[#7d8590] hover:text-[#e6edf3] hover:border-[#388bfd]/40'
              }`}
            >
              <span className="text-base">{moduleIcons[i]}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Module content */}
        {current && (
          <div className="grid lg:grid-cols-2 gap-10 reveal">
            <div>
              <div className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center text-2xl"
                style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-[#e6edf3] mb-3">{current.title}</h3>
              <p className="text-[#7d8590] leading-relaxed mb-6">{current.desc}</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {(current.features || []).map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#e6edf3]">
                    <svg className="w-4 h-4 text-[#3fb950] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl blur-2xl scale-95 -z-10" style={{ background: `${color}15` }}/>
                <div className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-5">
                  <div className="text-[10px] text-[#7d8590] font-medium uppercase tracking-wide mb-4">
                    {current.title} · {m.previewLabel || 'Live Preview'}
                  </div>
                  {modulePreviews[currentIdx >= 0 ? currentIdx : 0]}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
