import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const AgenticHero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#020617]">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{backgroundImage:'url(https://images.unsplash.com/photo-1654547615539-f937a90de28d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydHxlbnwwfHx8cHVycGxlfDE3NzQ2Mjc1NzZ8MA&ixlib=rb-4.1.0&q=85)',backgroundSize:'cover',backgroundPosition:'center',mixBlendMode:'overlay'}}></div>
            
            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-blue-900/20 via-slate-900/10 to-transparent pointer-events-none blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Enterprise-Grade Governance</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                    Govern, Secure, and Control <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                        Your AI Agents
                    </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                    Elshaddai's Agentic Mesh brings sound governance to all your agents and LLMs, using the <span className="text-white font-semibold">A2A</span> and <span className="text-white font-semibold">MCP protocols</span> you already know and trust.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-5 rounded-2xl font-bold uppercase text-sm tracking-widest transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105">
                        Get a Demo
                    </button>
                    <button className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/50 text-white px-10 py-5 rounded-2xl font-bold uppercase text-sm tracking-widest transition-all hover:bg-white/5">
                        View Pricing
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AgenticHero;
