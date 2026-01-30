import React from 'react';
import { Cpu, Database, Globe, Server, ArrowRight } from 'lucide-react';

const AgenticArchitecture: React.FC = () => {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Radial gradient background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.05)_0%,_transparent_50%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                        Architecture
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">The Agent Control Plane</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Move from fragmented agent sprawl to a centralized control mesh. Connect any model, any tool, and any agent securely.
                    </p>
                </div>

                {/* Architecture Visual */}
                <div className="relative glass rounded-[3rem] border-white/10 p-8 lg:p-16 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

                        {/* Left: Models & Tools */}
                        <div className="space-y-6">
                            <div className="glass p-6 rounded-2xl border-white/5 flex items-center space-x-4 opacity-50">
                                <Cpu className="w-8 h-8 text-purple-400" />
                                <div>
                                    <p className="text-white font-bold">LLM Models</p>
                                    <p className="text-xs text-slate-500">GPT-4, Claude 3.5, Llama 3</p>
                                </div>
                            </div>
                            <div className="glass p-6 rounded-2xl border-white/5 flex items-center space-x-4 opacity-50">
                                <Database className="w-8 h-8 text-green-400" />
                                <div>
                                    <p className="text-white font-bold">Enterprise Data</p>
                                    <p className="text-xs text-slate-500">Snowflake, PostgreSQL</p>
                                </div>
                            </div>
                            <div className="glass p-6 rounded-2xl border-white/5 flex items-center space-x-4 opacity-50">
                                <Globe className="w-8 h-8 text-blue-400" />
                                <div>
                                    <p className="text-white font-bold">External APIs</p>
                                    <p className="text-xs text-slate-500">Stripe, Salesforce, Slack</p>
                                </div>
                            </div>
                        </div>

                        {/* Center: The Hub */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full"></div>
                            <div className="relative z-10 bg-[#020617] border border-cyan-500/50 p-8 rounded-[2.5rem] text-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                                    <Server className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Agent Mesh</h3>
                                <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">Central Governance</p>
                                <ul className="text-left space-y-2 text-slate-300 text-sm">
                                    <li className="flex items-center"><ArrowRight className="w-3 h-3 text-cyan-500 mr-2" /> Policy Enforcement</li>
                                    <li className="flex items-center"><ArrowRight className="w-3 h-3 text-cyan-500 mr-2" /> Cost Control</li>
                                    <li className="flex items-center"><ArrowRight className="w-3 h-3 text-cyan-500 mr-2" /> Audit Logging</li>
                                </ul>
                            </div>

                            {/* Connecting Lines (Conceptual) */}
                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -z-10 opacity-30 pointer-events-none">
                                <circle cx="50%" cy="50%" r="30%" fill="none" stroke="url(#pulse)" strokeWidth="1" strokeDasharray="10 10" className="animate-[spin_20s_linear_infinite]" />
                                <defs>
                                    <linearGradient id="pulse" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#020617" />
                                        <stop offset="50%" stopColor="#06b6d4" />
                                        <stop offset="100%" stopColor="#020617" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Right: Agents */}
                        <div className="space-y-6">
                            <div className="glass p-6 rounded-2xl border-cyan-500/20 flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">S</div>
                                <div>
                                    <p className="text-white font-bold">Sales Agent</p>
                                    <p className="text-xs text-green-400">● Active</p>
                                </div>
                            </div>
                            <div className="glass p-6 rounded-2xl border-cyan-500/20 flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">D</div>
                                <div>
                                    <p className="text-white font-bold">DevOp Agent</p>
                                    <p className="text-xs text-green-400">● Active</p>
                                </div>
                            </div>
                            <div className="glass p-6 rounded-2xl border-cyan-500/20 flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 font-bold">H</div>
                                <div>
                                    <p className="text-white font-bold">HR Agent</p>
                                    <p className="text-xs text-green-400">● Active</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgenticArchitecture;
