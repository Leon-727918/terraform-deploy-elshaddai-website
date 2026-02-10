import React, { useState, useRef } from 'react';
import Hero from '../../components/Hero';
import ServiceCard from '../../components/ServiceCard';
import EngagementModel from '../../components/EngagementModel';
import IndustriesShowcase from '../../components/IndustriesShowcase';
import { SERVICES } from '../../constants';
import { Mail, Phone, MapPin, CheckCircle2, Cpu, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

interface ContactFormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Home: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: '' });

        if (!formRef.current) return;

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
            console.error('EmailJS Configuration Error:', { serviceId, templateId, publicKey });
            setStatus({ type: 'error', message: 'Configuration Error: Please update .env with valid EmailJS IDs.' });
            setLoading(false);
            return;
        }

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                {
                    publicKey: publicKey,
                }
            );
            setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later or contact us directly.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Hero />

            {/* Services Section */}
            <section id="services" className="py-24 bg-slate-950 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-[#BE123C] font-bold tracking-widest uppercase text-sm mb-4">Core Capabilities</h2>
                        <p className="text-4xl lg:text-5xl font-extrabold text-white">Full-Spectrum Cloud Engineering</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* New Enhanced Industries Showcase Section */}
            <IndustriesShowcase />

            {/* Engagement Model Section with reference image gradients */}
            <EngagementModel />

            {/* Agentic AI Section - Summary Overview */}
            <section id="ai" className="py-24 relative overflow-hidden scroll-mt-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-600/5 blur-[120px] -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass rounded-[40px] p-8 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <div className="bg-[#BE123C] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                                <CheckCircle2 className="text-white w-7 h-7" />
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Next-Gen Agentic AI Workflows</h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Go beyond simple chatbots. ELshaddai builds autonomous agents that integrate with your legacy systems to automate complex end-to-end business processes using reasoning and planning.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center space-x-3 text-slate-300">
                                    <CheckCircle2 className="text-[#BE123C] w-5 h-5" />
                                    <span>Autonomous Decision Engines</span>
                                </li>
                                <li className="flex items-center space-x-3 text-slate-300">
                                    <CheckCircle2 className="text-[#BE123C] w-5 h-5" />
                                    <span>Multi-Agent Orchestration</span>
                                </li>
                                <li className="flex items-center space-x-3 text-slate-300">
                                    <CheckCircle2 className="text-[#BE123C] w-5 h-5" />
                                    <span>RAG-Enhanced Corporate Knowledge Bases</span>
                                </li>
                            </ul>
                            <Link
                                to="/agentic-ai"
                                className="inline-block bg-[#BE123C] hover:bg-rose-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-rose-900/20"
                            >
                                Scale your AI Strategy
                            </Link>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative p-4 glass rounded-3xl border-white/10 aspect-video flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-blue-500/10"></div>
                                <div className="relative z-10 text-center">
                                    <div className="mb-4 inline-block p-6 bg-rose-600/10 rounded-full border border-rose-500/20">
                                        <Cpu className="w-12 h-12 text-[#BE123C] animate-pulse" />
                                    </div>
                                    <p className="text-white font-semibold">AI Ecosystem Simulation</p>
                                    <p className="text-slate-500 text-sm">Real-time workflow monitoring active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-slate-950 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">Let's build something <br />extraordinary.</h2>
                            <p className="text-slate-400 text-lg mb-12">
                                Ready to transform your legacy systems or migrate to the cloud? Our architects are ready to design your roadmap.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-rose-400">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest">Email Us</p>
                                        <p className="text-white font-bold">elshaddai.cloud@hotmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-purple-400">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest">Call Us</p>
                                        <p className="text-white font-bold">+91-7358718587</p>
                    
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-emerald-400">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest">Global HQ</p>
                                        <p className="text-white font-bold">EL-shaddai Cloud Solutions Pvt Ltd</p>
                                        <p className="text-white font-bold">Vencode, near Karungal Town, Kanyakumari District.</p>
                                        <p className="text-white font-bold">Tamil Nadu, South India.</p>
                                        <p className="text-white font-bold">Pin 629171</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-8 lg:p-12 rounded-[40px] border-white/10">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Name</label>
                                        <input
                                            name="user_name"
                                            required
                                            type="text"
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Work Email</label>
                                        <input
                                            name="user_email"
                                            required
                                            type="email"
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Subject</label>
                                    <select
                                        name="subject"
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                                    >
                                        <option value="Cloud Migration">Cloud Migration</option>
                                        <option value="Agentic AI Consulting">Agentic AI Consulting</option>
                                        <option value="Full Stack Development">Full Stack Development</option>
                                        <option value="Legacy Modernization">Legacy Modernization</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 h-32"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                {status.message && (
                                    <div className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                                        {status.message}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#BE123C] hover:bg-rose-700 text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-rose-900/20 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Inquiry'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
