
import React from 'react';
import { 
  Network, 
  Workflow, 
  ShieldAlert, 
  SearchCode, 
  Users, 
  Sparkles,
  Database,
  Cpu,
  ArrowRight,
  Fingerprint,
  Zap,
  Layers
} from 'lucide-react';

const AGENT_SOLUTIONS = [
  {
    title: "Universal Enterprise Knowledge Agent",
    subtitle: "Cross-Industry RAG + MCP Hub",
    description: "A single orchestrator connecting 5-10 MCP servers (Google, Teradata, custom Python) and multiple RAG backends. Routes queries across Finance, Healthcare, and Legal by autonomously selecting the right tool/context.",
    tech: "LangGraph • MCP Federation • Weaviate/Pinecone • DPO Tuning",
    impact: "Demonstrates 'one agent rules them all'—deployable as a cross-departmental copilot or internal SaaS tool.",
    icon: <Network className="w-8 h-8" />,
    image: "/images/ai.png",
    gradient: "from-rose-600/20 via-transparent to-transparent",
    industries: ["Finance", "Healthcare", "Legal", "Retail", "Manufacturing"],
    dpo: "Aligns routing logic by preferring successful multi-source trajectories over hallucinated paths."
  },
  {
    title: "Supply Chain Orchestrator Agent",
    subtitle: "End-to-End Multi-Industry Logistics",
    description: "Managed actions: demand forecasting (Retail RAG), supplier status (Manufacturing MCP), and logistics optimization (Maps MCP). Integrates directly with SAP/Oracle ERP systems via custom MCP servers.",
    tech: "ReAct Flow • SAP/Oracle MCP • Google Maps MCP • Finance APIs",
    impact: "Massively reduces manual coordination across Logistics and Retail. Prefers cost-efficient vs risky planning through DPO.",
    icon: <Workflow className="w-8 h-8" />,
    image: "/images/supplychain.png",
    gradient: "from-violet-600/20 via-transparent to-transparent",
    industries: ["Retail", "Manufacturing", "Logistics", "Finance"],
    dpo: "Tuned to prioritize delivery speed and cost-efficiency in complex multi-step logistics."
  },
  {
    title: "Regulated Compliance & Audit Agent",
    subtitle: "Continuous Governance & Risk Guardrails",
    description: "Audits documents/processes for KYC/AML, HIPAA, and contract review. Pulls context via secure RAG policy docs and executes live database queries via MCP without exposing raw sensitive data.",
    tech: "Secure MCP Gateway • Teradata-style RAG • Risk Flagging • Citations",
    impact: "Provides citation-backed answers and auto-generates compliance reports. Risk-averse reasoning built-in.",
    icon: <ShieldAlert className="w-8 h-8" />,
    image: "/images/audit.png",
    gradient: "from-rose-500/20 via-transparent to-transparent",
    industries: ["Finance", "Healthcare", "Legal"],
    dpo: "Tuned to prefer conservative/safe recommendations over aggressive or non-compliant actions."
  },
  {
    title: "Cross-Domain Research & Due Diligence",
    subtitle: "M&A Intelligence & Market Entry",
    description: "Automated research for M&A: analyzes tech patents (RAG), financials (Finance MCP), news (Web MCP), and regulatory filings. Combines Apify and Google Services into a unified research output.",
    tech: "Apify MCP • Finance Tool-Calling • RAG-as-MCP • Traceable Citations",
    impact: "Synthesizes multi-domain reports with traceable sources for pharma deals and tech investments.",
    icon: <SearchCode className="w-8 h-8" />,
    image: "/images/crossdomain.png",
    gradient: "from-pink-600/20 via-transparent to-transparent",
    industries: ["Finance", "Tech", "Legal", "Healthcare"],
    dpo: "Enhances source verification by preferring trajectories with verified citations."
  },
  {
    title: "Hybrid Multi-Agent System (MCP Federation)",
    subtitle: "Orchestrated specialized sub-agents",
    description: "A hierarchy of agents (one per industry) communicating via a shared MCP router. A Healthcare agent consults a Finance agent for billing, while Manufacturing handles device supply.",
    tech: "Agent Orchestration • Shared MCP Router • LangGraph Logic",
    impact: "Scales intelligence by silo-breaking. Orchestrates collaborative behavior across Energy, Healthcare, and Finance.",
    icon: <Users className="w-8 h-8" />,
    image: "/images/multiagent1.png",
    gradient: "from-violet-500/20 via-transparent to-transparent",
    industries: ["Healthcare", "Finance", "Manufacturing", "Energy"],
    dpo: "Optimizes orchestration plans to prefer collaborative paths over redundant siloed queries."
  },
  {
    title: "Multi-Industry Life/Corporate Assistant",
    subtitle: "Executive Edge & HR Automation",
    description: "Employee-facing agent handling mixed tasks: travel booking (Maps MCP), investment tracking (Finance MCP), and HR policy queries (Internal RAG). Deployed via desktop/mobile local MCP clients.",
    tech: "Local MCP Client • HR Policy RAG • Investment APIs • Remote Routing",
    impact: "Increases employee productivity by unifying disparate corporate tools into a single reasoning interface.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "/images/multiindustry.png",
    gradient: "from-rose-400/20 via-transparent to-transparent",
    industries: ["Travel/Retail", "Finance", "HR/Legal", "Healthcare"],
    dpo: "Aligns assistant tone and task priority with corporate culture and user preferences."
  }
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
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8 border-b border-white/5 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <Layers className="w-5 h-5 text-rose-500" />
              <h2 className="text-rose-500 font-bold tracking-[0.3em] uppercase text-xs">
                Deep Dive: Agentic Systems
              </h2>
            </div>
            <p className="text-4xl lg:text-7xl font-black text-white leading-none tracking-tighter mb-8">
              High-Impact <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500">
                Agentic Architectures
              </span>
            </p>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              We build specialized, reasoning-capable systems that leverage MCP (Model Context Protocol) and RAG to bridge legacy gaps and automate the "impossible."
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="glass p-6 rounded-3xl border-rose-500/20 flex items-center space-x-6">
              <Zap className="w-8 h-8 text-rose-500 animate-pulse" />
              <div>
                <p className="text-white font-bold text-sm uppercase">Federated MCP Hub</p>
                <p className="text-slate-500 text-xs font-medium">REAL-TIME AGENT ORCHESTRATION ACTIVE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {AGENT_SOLUTIONS.map((agent, index) => (
            <div 
              key={index} 
              className="group relative glass rounded-[4rem] border-white/5 overflow-hidden transition-all duration-1000 hover:border-rose-500/30"
            >
              <div className="flex flex-col lg:flex-row items-stretch min-h-[500px]">
                {/* Visual Side */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${agent.gradient}`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] flex items-center justify-center text-rose-500 shadow-2xl group-hover:rotate-12 transition-transform duration-700">
                      {agent.icon}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-3/5 p-8 lg:p-20 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-8">
                    <span className="px-5 py-2 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-[0.25em] rounded-full">
                      {agent.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-5xl font-black text-white mb-8 group-hover:text-rose-400 transition-colors leading-tight">
                    {agent.title}
                  </h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                        <Cpu className="w-3 h-3 mr-2 text-rose-500" /> Core Concept & Flow
                      </h4>
                      <p className="text-slate-300 text-lg leading-relaxed font-light">
                        {agent.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <div>
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                          <Database className="w-3 h-3 mr-2 text-blue-500" /> Technical Stack
                        </h4>
                        <p className="text-slate-400 text-sm font-medium">{agent.tech}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                          <Fingerprint className="w-3 h-3 mr-2 text-purple-500" /> DPO Twist
                        </h4>
                        <p className="text-slate-400 text-sm font-medium italic">"{agent.dpo}"</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Industries Connected</h4>
                      <div className="flex flex-wrap gap-3">
                        {agent.industries.map(ind => (
                          <span key={ind} className="px-4 py-1.5 bg-white/5 text-slate-300 text-xs font-bold rounded-xl border border-white/5 group-hover:border-rose-500/20 transition-all">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <button className="bg-[#BE123C] text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.1em] hover:bg-rose-700 transition-all flex items-center group/btn shadow-xl shadow-rose-900/20">
                      Case Study <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-slate-500 text-xs font-bold italic max-w-[200px]">
                      {agent.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-32 glass p-12 lg:p-20 rounded-[4rem] border-rose-500/20 text-center relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-transform duration-1000 group-hover:scale-150"></div>
           <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 relative z-10">
             Ready to deploy your <br />
             <span className="text-rose-500 italic">Federated</span> Intelligence?
           </h3>
           <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 relative z-10">
             Our architects don't just build agents; we build the standardized MCP infrastructure that allows them to reason across your entire organization.
           </p>
           <button className="relative z-10 bg-white text-rose-600 px-12 py-5 rounded-[2rem] font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-2xl">
             Consult a Lead Architect
           </button>
        </div>
      </div>
    </section>
  );
};

export default AgenticAIDetails;
