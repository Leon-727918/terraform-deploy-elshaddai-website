import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="flex flex-col">
                        <div className="flex flex-col leading-none mb-4">
                            <span className="text-xl font-black tracking-tight text-[#BE123C] uppercase">
                                ELSHADDAI
                            </span>
                            <span className="text-xl font-black tracking-tight text-[#BE123C] uppercase">
                                CLOUD
                            </span>
                            <span className="text-xl font-black tracking-tight text-[#BE123C] uppercase">
                                SOLUTIONS
                            </span>
                            <span className="text-[8px] font-medium text-slate-500 tracking-[0.2em] mt-1">
                                TRANSFORMACIÓN DIGITAL
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs">
                            Enterprise cloud and agentic AI transformation for global industry leaders.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div className="flex flex-col space-y-3">
                            <span className="text-white font-bold text-sm uppercase tracking-widest">Solutions</span>
                            <a href="/#services" className="text-slate-500 text-sm hover:text-[#BE123C] transition-colors">Migration</a>
                            <a href="/#ai" className="text-slate-500 text-sm hover:text-[#BE123C] transition-colors">Agentic AI</a>
                            <a href="/#services" className="text-slate-500 text-sm hover:text-[#BE123C] transition-colors">Security</a>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <span className="text-white font-bold text-sm uppercase tracking-widest">Industries</span>
                            <a href="/#industries" className="text-slate-500 text-sm hover:text-[#BE123C] transition-colors">Finance</a>
                            <a href="/#industries" className="text-slate-500 text-sm hover:text-[#BE123C] transition-colors">Healthcare</a>
                            <a href="/#industries" className="text-slate-500 text-sm hover:text-[#BE123C] transition-colors">Retail</a>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <span className="text-white font-bold text-sm uppercase tracking-widest">Follow</span>
                            <div className="flex space-x-4">
                                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-xs">
                        © {new Date().getFullYear()} ELshaddai Cloud Solutions. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-slate-600">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
