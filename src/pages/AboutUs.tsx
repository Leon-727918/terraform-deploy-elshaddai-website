import React from 'react';
import { TEAM_MEMBERS } from '../../constants';
import { Linkedin, Award, Users, Globe2, Sparkles } from 'lucide-react';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 blur-[120px] -z-10"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-600/5 blur-[100px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">Who We Are</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                        Powering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Future</span> of Cloud.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        At Elshaddai Cloud Solutions, we combine deep technical expertise with a passion for innovation. Meet the team driving your digital transformation.
                    </p>
                </div>
            </section>

            {/* Stats / Mission Grid */}
            <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#BE123C]">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                            <p className="text-slate-400">Enterprise Clients</p>
                        </div>
                        <div className="p-6 border-x border-white/5">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
                            <p className="text-slate-400">Years Experience</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
                                <Globe2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Global</h3>
                            <p className="text-slate-400">Delivery Capability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-[#BE123C] font-bold tracking-widest uppercase text-sm mb-4">Leadership & Experts</h2>
                        <p className="text-4xl font-bold text-white">Meet Our Team</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TEAM_MEMBERS.map((member) => (
                            <div key={member.id} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-[#BE123C]/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                <div className="glass rounded-3xl p-6 h-full border border-white/10 hover:border-rose-500/30 transition-all duration-300">
                                    <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5] group-hover:shadow-2xl transition-all">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10"></div>
                                        <img
                                            src={member.imageUrl}
                                            alt={member.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-end">
                                            <a
                                                href={member.linkedinUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#0077b5] text-white transition-colors"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#BE123C] transition-colors">{member.name}</h3>
                                    <p className="text-emerald-400 font-medium mb-3">{member.role}</p>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
