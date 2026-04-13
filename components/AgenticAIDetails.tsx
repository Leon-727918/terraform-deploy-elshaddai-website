import React from 'react';
import { 
  MessageSquare,
  Brain,
  FileText,
  Users,
  Briefcase,
  Shield,
  ArrowRight
} from 'lucide-react';

const USE_CASES = [
  {
    id: 1,
    number: '1️⃣',
    title: 'Multi-Channel Customer Support',
    subtitle: 'Build a 24/7 AI support system across WhatsApp, Telegram & Email',
    before: 'Slow, manual responses',
    after: '80% faster, 60% automated',
    tech: 'WhatsApp API • Telegram Bot • AI Classification',
    description: 'Builds an AI support system that handles customer queries across WhatsApp, Telegram, and Email. Reduces support workload and enables 24/7 customer service.',
    icon: <MessageSquare className="w-12 h-12" />,
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/20',
  },
  {
    id: 2,
    number: '2️⃣',
    title: 'Company Knowledge Assistant (RAG)',
    subtitle: 'AI assistant that answers from internal company knowledge',
    before: 'Hours spent searching',
    after: '75% faster search, 2x onboarding',
    tech: 'Vector DB • Pinecone/Chroma • RAG Pipeline',
    description: 'An AI assistant that answers questions using internal company documents. Improves productivity and makes company knowledge instantly accessible.',
    icon: <Brain className="w-12 h-12" />,
    color: 'from-purple-500 to-pink-500',
    bgGlow: 'bg-purple-500/20',
  },
  {
    id: 3,
    number: '3️⃣',
    title: 'Intelligent Document Processing',
    subtitle: 'Automate extraction of invoices, contracts & documents',
    before: 'Manual errors & delays',
    after: '10x faster, 70% cost reduction',
    tech: 'Document AI • Validation Rules • ERP Integration',
    description: 'Automates extraction and validation of invoices, contracts, and resumes. Eliminates repetitive manual work and improves accuracy.',
    icon: <FileText className="w-12 h-12" />,
    color: 'from-green-500 to-emerald-500',
    bgGlow: 'bg-green-500/20',
  },
  {
    id: 4,
    number: '🔐',
    title: 'Server Security (LLM + Blockchain)',
    subtitle: 'AI-powered real-time server security with tamper-proof logging',
    before: 'Reactive security, tampered logs',
    after: 'Real-time threat detection + immutable audit trail',
    tech: 'LLM Monitoring • SIEM • Blockchain Logs • Smart Contracts',
    description: 'An intelligent security system where an LLM-powered AI agent continuously monitors server activity, detects threats, and logs critical events immutably using blockchain.',
    icon: <Shield className="w-12 h-12" />,
    color: 'from-red-500 to-rose-500',
    bgGlow: 'bg-red-500/20',
    featured: true,
  },
];

const ADDITIONAL_CASES = [
  {
    number: '4️⃣',
    title: 'Multi-Agent Business System',
    description: 'Multiple AI agents collaborate like a team to automate workflows. Handles complex, multi-step business operations efficiently.',
    before: 'Long business cycles (days)',
    after: 'Completed in hours with scalability',
    tech: 'Agent Orchestration • Supervisor-Worker model • State Management',
    icon: <Users className="w-10 h-10" />,
  },
  {
    number: '5️⃣',
    title: 'Smart Business Automation Agent',
    description: 'An autonomous AI agent for departments like Sales, Finance, HR, and Marketing. Automates end-to-end processes with minimal human input.',
    before: 'Hours of manual processing',
    after: '60–80% automation',
    tech: 'React Agents • Function Calling • Memory Systems',
    icon: <Briefcase className="w-10 h-10" />,
  },
];

const AgenticAIDetails: React.FC = () => {
  return (
    <section id="ai-deep-dive" className="py-24 bg-[#020617] relative overflow-hidden scroll-mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-8 pointer-events-none"
        style={{backgroundImage:'url(https://images.pexels.com/photos/7688592/pexels-photo-7688592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',backgroundSize:'cover',backgroundPosition:'center',mixBlendMode:'overlay'}}></div>
      
      {/* Dynamic Background Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(190,18,60,0.08)_0%,_transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-rose-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
            AI Use Cases
          </h2>
          <p className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Transform Your Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              With AI Automation
            </span>
          </p>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Practical, production-ready AI solutions that deliver measurable business impact
          </p>
        </div>

        {/* 2x2 Grid - Main Use Cases */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.id}
              className={`group relative glass rounded-3xl border-white/10 overflow-hidden hover:border-rose-500/30 transition-all duration-500 ${useCase.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 ${useCase.bgGlow} rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${useCase.color} text-white`}>
                    {useCase.icon}
                  </div>
                  <span className="text-4xl">{useCase.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 transition-all">
                  {useCase.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  {useCase.subtitle}
                </p>

                {/* Before/After */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <p className="text-[10px] font-bold text-red-400 uppercase mb-1">BEFORE</p>
                    <p className="text-white text-sm">{useCase.before}</p>
                  </div>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <p className="text-[10px] font-bold text-green-400 uppercase mb-1">AFTER</p>
                    <p className="text-white text-sm">{useCase.after}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Tech Stack</p>
                  <p className="text-cyan-400 text-sm font-mono">{useCase.tech}</p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {useCase.description}
                </p>

                {/* CTA */}
                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn">
                  Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Use Cases - Compact Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            More <span className="text-rose-500">AI Solutions</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {ADDITIONAL_CASES.map((useCase, index) => (
              <div
                key={index}
                className="glass rounded-2xl border-white/10 p-6 hover:border-rose-500/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 text-white">
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{useCase.number}</span>
                      <h4 className="text-lg font-bold text-white">{useCase.title}</h4>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">{useCase.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="p-2 bg-red-500/10 border border-red-500/20 rounded">
                    <p className="text-[9px] font-bold text-red-400 uppercase">Before</p>
                    <p className="text-white text-xs">{useCase.before}</p>
                  </div>
                  <div className="p-2 bg-green-500/10 border border-green-500/20 rounded">
                    <p className="text-[9px] font-bold text-green-400 uppercase">After</p>
                    <p className="text-white text-xs">{useCase.after}</p>
                  </div>
                </div>
                
                <p className="text-cyan-400 text-xs font-mono">{useCase.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="glass p-12 lg:p-16 rounded-3xl border-rose-500/20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-transform duration-1000 group-hover:scale-150"></div>
          <h3 className="text-3xl lg:text-5xl font-black text-white mb-6 relative z-10">
            Ready to Automate <br />
            <span className="text-rose-500 italic">Your Business</span>?
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Let's discuss how AI can transform your operations. Our experts will help you choose the right solution for your needs.
          </p>
          <button className="relative z-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all shadow-2xl hover:scale-105">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgenticAIDetails;