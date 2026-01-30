import React from 'react';

const INTEGRATIONS = [
    { name: "VS Code", logo: "VS" },
    { name: "OpenAI", logo: "AI" },
    { name: "LangChain", logo: "LC" },
    { name: "Azure", logo: "AZ" },
    { name: "AWS", logo: "AWS" },
    { name: "Cursor", logo: "CR" },
];

const AgenticIntegrations: React.FC = () => {
    return (
        <section className="py-20 bg-[#020617] border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-10">
                    Seamlessly Integrates With Your Stack
                </p>
                <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-60 hover:opacity-100 transition-opacity">
                    {/* Placeholder content for logos - replacing images with styled text blocks for now */}
                    {INTEGRATIONS.map((tool) => (
                        <div key={tool.name} className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-white/50 border border-white/5">
                                {tool.logo}
                            </div>
                            <span className="text-xl font-bold text-slate-400 hover:text-white transition-colors">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgenticIntegrations;
