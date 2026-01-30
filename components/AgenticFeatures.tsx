import React from 'react';
import { Shield, Activity, Grid, Lock, Eye, Network } from 'lucide-react';

const FEATURES = [
    {
        icon: <Grid className="w-6 h-6" />,
        title: "Agent Catalog",
        description: "A centralized hub to discover, manage, and scale autonomous agents across your entire organization."
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Secure AI Agents",
        description: "Enforce consistent security policies (RBAC, PII redaction) across all agents and LLM interactions."
    },
    {
        icon: <Activity className="w-6 h-6" />,
        title: "Advanced Observability",
        description: "Real-time visibility into agent actions, token usage, and costs with comprehensive audit trails."
    },
    {
        icon: <Network className="w-6 h-6" />,
        title: "Protocol Native",
        description: "Built-in support for Model Context Protocol (MCP) and Agent-to-Agent (A2A) standards."
    }
];

const AgenticFeatures: React.FC = () => {
    return (
        <section className="py-24 bg-[#020617] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4">Core Capabilities</h2>
                    <p className="text-3xl lg:text-4xl font-bold text-white">The Platform for Governed Autonomy</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="group glass p-8 rounded-3xl border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgenticFeatures;
