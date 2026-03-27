import React, { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface BenefitItem  { text: string }
interface BenefitGroup { title: string; icon: string; items: BenefitItem[] }
interface CloudSection { id: string; badge: string; heading: string; accent: string; description: string; color: 'teal'|'blue'|'violet'; groups: BenefitGroup[] }

// ─── Azure Data ───────────────────────────────────────────────────────────────
const azureSections: CloudSection[] = [
  {
    id:'patching', badge:'Azure Server Patching', heading:'Keep Systems Fortified', accent:'& Always Current',
    description:'Systematic patch management eliminates vulnerabilities before adversaries can weaponize them — delivering compliance, stability, and savings at scale.',
    color:'teal',
    groups:[
      { title:'Security & Compliance', icon:'🔒', items:[
        {text:'Closes known vulnerabilities before attackers can exploit them, directly reducing the attack surface'},
        {text:'Helps meet regulatory requirements (ISO 27001, SOC 2, HIPAA, PCI-DSS) that mandate timely patch application'},
        {text:'Provides audit trails and compliance reports for internal and external audits'},
      ]},
      { title:'Operational Stability', icon:'⚙️', items:[
        {text:'Reduces system crashes, bugs, and performance issues caused by outdated software'},
        {text:'Improves uptime and reliability by keeping OS and software in vendor-supported states'},
        {text:'Prevents "patch debt" — the accumulation of unpatched systems that become increasingly risky and expensive to fix'},
      ]},
      { title:'Cost Savings', icon:'💰', items:[
        {text:'Proactive patching is far cheaper than incident response after a breach'},
        {text:'Reduces helpdesk and IT overhead from recurring issues that patches would have resolved'},
        {text:'Azure Automation + Update Management enables scheduled, unattended patching — reducing manual labor'},
      ]},
      { title:'Visibility & Control', icon:'📊', items:[
        {text:'Centralized dashboards show patch status across all VMs (Azure + on-premises + multi-cloud)'},
        {text:'Patch compliance reports give leadership clear risk posture snapshots'},
        {text:'Maintenance windows prevent patching from disrupting business hours'},
      ]},
    ],
  },
  {
    id:'defender', badge:'Azure Defender', heading:'Intelligent Threat Defence', accent:'& Cloud Security',
    description:'Microsoft Defender for Cloud continuously guards every workload with AI-powered detection, unified compliance visibility, and seamless multi-cloud reach.',
    color:'blue',
    groups:[
      { title:'Threat Detection & Response', icon:'🎯', items:[
        {text:'Continuously monitors workloads (VMs, containers, databases, storage, APIs) for suspicious activity'},
        {text:'Detects threats in real time using AI/ML — including lateral movement, brute force, and fileless malware'},
        {text:'Generates prioritized security alerts so teams focus on what matters most'},
      ]},
      { title:'Vulnerability Management', icon:'🔍', items:[
        {text:"Integrated vulnerability assessment (powered by Qualys or Microsoft's own scanner) identifies weaknesses across VMs and container images"},
        {text:'Provides actionable remediation guidance, not just findings'},
        {text:"Secure Score gives a measurable, improving metric of the organization's security posture"},
      ]},
      { title:'Regulatory & Compliance Alignment', icon:'📋', items:[
        {text:'Built-in compliance dashboards map controls to frameworks like NIST, CIS, PCI-DSS, and GDPR'},
        {text:'Reduces audit preparation time significantly'},
        {text:'Demonstrates due diligence to customers, partners, and regulators'},
      ]},
      { title:'Multi-Cloud & Hybrid Coverage', icon:'☁️', items:[
        {text:'Extends protection beyond Azure to AWS, GCP, and on-premises environments from a single pane of glass'},
        {text:'Reduces blind spots that attackers exploit in hybrid setups'},
      ]},
      { title:'Business Continuity', icon:'🔄', items:[
        {text:'Early threat detection limits breach impact and reduces mean time to respond (MTTR)'},
        {text:'Protects against ransomware by detecting encryption behaviors before data is fully compromised'},
        {text:'Reduces the risk of costly downtime, data loss, and reputational damage'},
      ]},
    ],
  },
];

const azureTableRows = [
  { area:'Reduced Attack Surface',   patching:true,  defender:true  },
  { area:'Regulatory Compliance',    patching:true,  defender:true  },
  { area:'Threat Detection',         patching:false, defender:true  },
  { area:'Vulnerability Visibility', patching:true,  defender:true  },
  { area:'Lower Breach Costs',       patching:true,  defender:true  },
  { area:'Operational Stability',    patching:true,  defender:true  },
  { area:'Security Posture Scoring', patching:false, defender:true  },
  { area:'Multi-Cloud Coverage',     patching:true,  defender:true  },
];

// ─── Placeholder data for AWS / GCP ──────────────────────────────────────────
const awsFeatures = [
  { icon:'🚀', title:'Seamless Migration', body:'AWS Migration Hub and Application Migration Service deliver lift-and-shift and re-platform journeys with minimal downtime.' },
  { icon:'🔐', title:'AWS Security Hub', body:'Centralise security findings across AWS accounts and Regions, with automated compliance checks against CIS and PCI-DSS benchmarks.' },
  { icon:'💸', title:'Cost Optimisation', body:'AWS Cost Explorer, Savings Plans, and Trusted Advisor recommendations keep cloud spend predictable and efficient.' },
  { icon:'⚡', title:'Elastic Scalability', body:'Auto Scaling Groups and Elastic Load Balancing automatically adjust capacity to match workload demand in real time.' },
  { icon:'🛡️', title:'GuardDuty Threat Intel', body:'Continuous threat detection powered by machine learning and curated threat intelligence feeds protects accounts and workloads.' },
  { icon:'🌐', title:'Global Infrastructure', body:'33 launched Regions and 105+ Availability Zones ensure low-latency, resilient delivery to users anywhere on the planet.' },
];

const gcpFeatures = [
  { icon:'🤖', title:'AI & ML at Scale', body:'Vertex AI, BigQuery ML, and AutoML bring enterprise-grade machine learning without managing infrastructure complexity.' },
  { icon:'🌍', title:'Sustainable Cloud', body:'Google operates the cleanest cloud globally — carbon-neutral since 2007, with a goal of 24/7 carbon-free energy by 2030.' },
  { icon:'🔒', title:'Chronicle Security', body:"Google's planet-scale security operations platform ingests and analyses petabytes of telemetry to surface threats instantly." },
  { icon:'📦', title:'Anthos Hybrid', body:'Run workloads consistently across GCP, AWS, Azure, and on-premises with unified policy management via Anthos.' },
  { icon:'⚡', title:'Serverless First', body:'Cloud Run, Cloud Functions, and Firestore let teams ship without provisioning servers — pay only for what executes.' },
  { icon:'📊', title:'Data & Analytics', body:'BigQuery, Looker, and Dataflow make up the most capable unified analytics platform available in the cloud today.' },
];

// ─── Colour helpers ───────────────────────────────────────────────────────────
const colorMap = {
  teal:   { ring:'ring-teal-500/25 hover:ring-teal-400/50',   dot:'bg-teal-400',   title:'text-teal-300',   glow:'bg-teal-600',   badge:'border-teal-400/30 text-teal-400',   grad:'from-teal-400 to-cyan-300',   div:'from-teal-500/0 via-teal-500/40 to-teal-500/0' },
  blue:   { ring:'ring-blue-500/25 hover:ring-blue-400/50',   dot:'bg-blue-400',   title:'text-blue-300',   glow:'bg-blue-600',   badge:'border-blue-400/30 text-blue-400',   grad:'from-blue-400 to-cyan-400',   div:'from-blue-500/0 via-blue-500/40 to-blue-500/0' },
  violet: { ring:'ring-violet-500/25 hover:ring-violet-400/50', dot:'bg-violet-400', title:'text-violet-300', glow:'bg-violet-700', badge:'border-violet-400/30 text-violet-400', grad:'from-violet-400 to-fuchsia-400', div:'from-violet-500/0 via-violet-500/40 to-violet-500/0' },
};

// ─── Sub-components ───────────────────────────────────────────────────────────
const Check: React.FC<{ok:boolean}> = ({ok}) => ok
  ? <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 text-base font-bold">✓</span>
  : <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-700/60 text-slate-500 text-base font-bold">–</span>;

const GroupCard: React.FC<{group:BenefitGroup; color:'teal'|'blue'|'violet'}> = ({group, color}) => {
  const c = colorMap[color];
  return (
    <div className={`relative rounded-2xl bg-[#0d1f1f]/80 ring-1 ${c.ring} p-6 transition-all duration-300 hover:bg-[#0f2424]/90 hover:-translate-y-0.5`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{group.icon}</span>
        <h3 className={`text-sm font-bold tracking-widest uppercase ${c.title}`}>{group.title}</h3>
      </div>
      <ul className="space-y-3">
        {group.items.map((item,i) => (
          <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
            <span className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full ${c.dot}`} />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CloudSectionBlock: React.FC<{section:CloudSection}> = ({section}) => {
  const c = colorMap[section.color];
  return (
    <section className="py-20 px-4 relative">
      <div className={`pointer-events-none absolute rounded-full opacity-10 ${c.glow}`}
        style={{filter:'blur(130px)',top:'15%',left:'25%',width:'50%',height:'65%'}} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className={`inline-block px-4 py-1.5 text-xs font-semibold tracking-widest border rounded-full uppercase mb-5 ${c.badge}`}>
            {section.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {section.heading}{' '}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${c.grad}`}>{section.accent}</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">{section.description}</p>
        </div>
        <div className={`h-px bg-gradient-to-r ${c.div} mb-14`} />
        <div className="grid sm:grid-cols-2 gap-5">
          {section.groups.map((g,i) => <GroupCard key={i} group={g} color={section.color} />)}
        </div>
      </div>
    </section>
  );
};

// ─── AWS Panel ────────────────────────────────────────────────────────────────
const AWSPanel: React.FC = () => (
  <div className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest border border-orange-400/30 text-orange-400 rounded-full uppercase mb-5">AWS Solutions</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Amazon Web Services,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Built for Scale</span>
        </h2>
        <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Leverage the world's most comprehensive cloud platform — migrate, secure, and optimise with AWS services tailored for your enterprise.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {awsFeatures.map((f,i) => (
          <div key={i} className="rounded-2xl bg-[#1a110a]/80 ring-1 ring-orange-500/20 hover:ring-orange-400/40 p-6 transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{f.icon}</span>
              <h3 className="text-sm font-bold tracking-widest uppercase text-orange-300">{f.title}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-orange-900/20 to-yellow-900/10 ring-1 ring-orange-500/20 p-8 text-center">
        <p className="text-slate-300 text-base font-medium">
          🚧 &nbsp;Detailed AWS benefit breakdowns — including EC2 patching, Security Hub setup, and Well-Architected reviews — are coming soon.
        </p>
      </div>
    </div>
  </div>
);

// ─── GCP Panel ────────────────────────────────────────────────────────────────
const GCPPanel: React.FC = () => (
  <div className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest border border-green-400/30 text-green-400 rounded-full uppercase mb-5">GCP Solutions</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Google Cloud Platform,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Data-First Cloud</span>
        </h2>
        <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Harness Google's infrastructure for AI, analytics, and hybrid cloud — with best-in-class sustainability and open-source commitment.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {gcpFeatures.map((f,i) => (
          <div key={i} className="rounded-2xl bg-[#091a0e]/80 ring-1 ring-green-500/20 hover:ring-green-400/40 p-6 transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{f.icon}</span>
              <h3 className="text-sm font-bold tracking-widest uppercase text-green-300">{f.title}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-green-900/20 to-emerald-900/10 ring-1 ring-green-500/20 p-8 text-center">
        <p className="text-slate-300 text-base font-medium">
          🚧 &nbsp;Full GCP deep-dives — Chronicle SIEM setup, Anthos configuration, and Security Command Center onboarding — are coming soon.
        </p>
      </div>
    </div>
  </div>
);

// ─── Azure Panel (full) ───────────────────────────────────────────────────────
const AzurePanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'patching'|'defender'|'both'>('both');
  const visibleSections = activeTab === 'both' ? azureSections : azureSections.filter(s => s.id === activeTab);

  return (
    <div>
      {/* Azure sub-nav */}
      <div className="flex justify-center pt-10 pb-2 px-4">
        <div className="inline-flex items-center gap-1 bg-[#0d1e1e] border border-teal-700/40 rounded-full p-1">
          {(['patching','defender','both'] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              className={`px-6 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-200 ${
                activeTab === t
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-900/40'
                  : 'text-slate-400 hover:text-white'
              }`}>
              {t === 'patching' ? '🔧 Patching' : t === 'defender' ? '🛡️ Defender' : '📊 Both'}
            </button>
          ))}
        </div>
      </div>

      {visibleSections.map(s => <CloudSectionBlock key={s.id} section={s} />)}

      {activeTab === 'both' && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-slate-400 border border-slate-600 rounded-full uppercase mb-5">Combined Impact</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Side-by-Side{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Benefit Summary</span>
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-teal-700/40">
              <div className="grid grid-cols-3 bg-[#0d1e1e] border-b border-teal-800/60">
                <div className="py-4 px-6 text-xs font-bold tracking-widest text-slate-400 uppercase">Benefit Area</div>
                <div className="py-4 px-4 text-xs font-bold tracking-widest text-teal-400 uppercase text-center">🔧 Patching</div>
                <div className="py-4 px-4 text-xs font-bold tracking-widest text-blue-400 uppercase text-center">🛡️ Defender</div>
              </div>
              {azureTableRows.map((row,i) => (
                <div key={i} className={`grid grid-cols-3 border-b border-teal-900/30 transition-colors hover:bg-teal-900/10 ${i%2===0?'bg-[#0a1818]/60':'bg-[#081414]/80'}`}>
                  <div className="py-4 px-6 text-sm text-slate-300 font-medium flex items-center">{row.area}</div>
                  <div className="py-4 px-4 flex items-center justify-center"><Check ok={row.patching} /></div>
                  <div className="py-4 px-4 flex items-center justify-center"><Check ok={row.defender} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

// ─── Cloud Provider Tab Config ────────────────────────────────────────────────
type CloudProvider = 'azure' | 'aws' | 'gcp';

const providerConfig: Record<CloudProvider, {
  label: string; icon: string;
  activeGrad: string; activeShadow: string; borderHover: string;
}> = {
  azure: { label:'Azure',  icon:'☁️',  activeGrad:'from-teal-600 to-cyan-600',    activeShadow:'shadow-teal-900/50',   borderHover:'hover:border-teal-500/50'  },
  aws:   { label:'AWS',    icon:'🟠',  activeGrad:'from-orange-600 to-amber-500', activeShadow:'shadow-orange-900/50', borderHover:'hover:border-orange-500/50' },
  gcp:   { label:'GCP',    icon:'🟢',  activeGrad:'from-green-600 to-emerald-500',activeShadow:'shadow-green-900/50',  borderHover:'hover:border-green-500/50'  },
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const CloudSolutionsPage: React.FC = () => {
  const [provider, setProvider] = useState<CloudProvider>('azure');

  return (
    <div className="min-h-screen font-sans" style={{background:'#060f0f'}}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden text-center py-24 px-4"
        style={{background:'linear-gradient(160deg,#071a1a 0%,#0a2020 50%,#071515 100%)'}}>

        {/* Background Image */}
        <div className="pointer-events-none absolute inset-0 opacity-10"
          style={{backgroundImage:'url(https://images.unsplash.com/photo-1623410439361-22ac19216577?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MHx8fHRlYWx8MTc3NDYyNzUzOXww&ixlib=rb-4.1.0&q=85)',backgroundSize:'cover',backgroundPosition:'center',mixBlendMode:'overlay'}} />

        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{backgroundImage:'linear-gradient(#2dd4bf 1px,transparent 1px),linear-gradient(90deg,#2dd4bf 1px,transparent 1px)',backgroundSize:'48px 48px'}} />

        {/* Glow orbs */}
        <div className="pointer-events-none absolute -top-20 left-[10%] w-96 h-96 rounded-full blur-3xl"
          style={{background:'radial-gradient(circle,rgba(20,184,166,0.18) 0%,transparent 70%)'}} />
        <div className="pointer-events-none absolute bottom-0 right-[8%] w-80 h-80 rounded-full blur-3xl"
          style={{background:'radial-gradient(circle,rgba(6,182,212,0.15) 0%,transparent 70%)'}} />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-40 rounded-full blur-3xl opacity-20"
          style={{background:'linear-gradient(90deg,#14b8a6,#06b6d4)'}} />

        {/* Badge */}
        <span className="relative inline-block px-5 py-1.5 text-xs font-bold tracking-[0.2em] text-teal-400 border border-teal-400/30 rounded-full uppercase mb-6">
          Cloud Solutions
        </span>

        {/* Headline */}
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
          Enterprise Cloud,{' '}
          <span style={{WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            backgroundImage:'linear-gradient(90deg,#2dd4bf,#22d3ee,#34d399)'}}>
            Modernized &amp; Secured
          </span>
        </h1>

        {/* Sub-copy */}
        <p className="relative mt-6 text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          From seamless AWS migrations to unified networking and security, Elshaddai Cloud Solutions drives your digital transformation end-to-end.
        </p>

        {/* ── PROVIDER BUTTONS ── */}
        <div className="relative mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {(Object.entries(providerConfig) as [CloudProvider, typeof providerConfig['azure']][]).map(([key, cfg]) => (
            <button key={key} onClick={() => setProvider(key)}
              className={`group relative flex items-center gap-3 px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 border ${
                provider === key
                  ? `bg-gradient-to-r ${cfg.activeGrad} text-white border-transparent shadow-xl ${cfg.activeShadow} scale-105`
                  : `bg-transparent text-slate-400 border-slate-700/60 ${cfg.borderHover} hover:text-white hover:scale-102`
              }`}>
              {/* Active indicator glow */}
              {provider === key && (
                <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${cfg.activeGrad} opacity-30 blur-md -z-10`} />
              )}
              <span className="text-lg">{cfg.icon}</span>
              <span>{cfg.label}</span>
              {provider === key && <span className="text-xs opacity-70">▾</span>}
            </button>
          ))}
        </div>

        {/* Active provider label */}
        <p className="relative mt-6 text-xs text-slate-500 tracking-widest uppercase">
          Viewing: <span className="text-teal-400 font-semibold">{providerConfig[provider].label}</span> solutions
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal-600/30 to-transparent" />

      {/* ── CONTENT PANELS ─────────────────────────────────────────────── */}
      <div style={{background:'#060f0f'}}>
        {provider === 'azure' && <AzurePanel />}
        {provider === 'aws'   && <AWSPanel />}
        {provider === 'gcp'   && <GCPPanel />}
      </div>

      {/* ── CTA STRIP ──────────────────────────────────────────────────── */}
      <div className="relative py-24 px-4 text-center overflow-hidden"
        style={{background:'linear-gradient(160deg,#071a1a 0%,#0a2020 60%,#071515 100%)'}}>
        {/* Background Image */}
        <div className="pointer-events-none absolute inset-0 opacity-10"
          style={{backgroundImage:'url(https://images.pexels.com/photos/5475814/pexels-photo-5475814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',backgroundSize:'cover',backgroundPosition:'center',mixBlendMode:'overlay'}} />
        <div className="pointer-events-none absolute inset-0 opacity-15"
          style={{background:'linear-gradient(90deg,#0d9488,#0891b2)',filter:'blur(80px)'}} />
        <h2 className="relative text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Ready to Begin Your Cloud Journey?
        </h2>
        <p className="relative text-slate-400 text-lg max-w-xl mx-auto mb-10 font-light">
          Talk to our experts and design a migration and modernisation roadmap tailored to your organisation.
        </p>
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/#contact"
            className="bg-[#BE123C] hover:bg-rose-700 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-rose-900/30 text-sm tracking-wide">
            Contact Sales
          </a>
          <a href="/agentic-ai"
            className="border border-teal-700/50 hover:border-teal-400/70 text-teal-300 hover:text-white font-semibold px-10 py-4 rounded-full transition-all text-sm tracking-wide">
            Explore Agentic AI →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutionsPage;
