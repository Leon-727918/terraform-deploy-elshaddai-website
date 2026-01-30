
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EXTENDED_INDUSTRIES } from '../constants';

const IndustriesShowcase: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-[#020617] relative overflow-hidden scroll-mt-20">
      {/* Background Orbs with Rose/Violet/Pink gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[140px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 font-bold tracking-widest uppercase text-sm mb-4">
            Vertical Mastery
          </h2>
          <p className="text-4xl lg:text-6xl font-extrabold text-white mb-6">
            Cloud Solutions for Every <span className="text-[#BE123C] underline decoration-rose-500/30 underline-offset-8">Frontier</span>
          </p>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We architect specialized cloud ecosystems that bridge the gap between complex industry regulations and cutting-edge technical performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXTENDED_INDUSTRIES.map((industry, index) => (
            <div 
              key={industry.id} 
              className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-rose-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col h-full`}
            >
              {/* Image Header with dynamic gradient overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={industry.imageUrl} 
                  alt={industry.name} 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Floating Icon Badge */}
                <div className="absolute bottom-6 left-6 p-4 bg-gradient-to-br from-rose-500 via-pink-500 to-violet-600 rounded-2xl shadow-xl shadow-rose-900/20 text-white">
                  {industry.icon}
                </div>
              </div>

              {/* Content area */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                  {industry.description}
                </p>

                {/* Highlights / Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {industry.highlights.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full group-hover:border-rose-500/20 group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center space-x-3 text-[#BE123C] font-bold text-sm group/btn">
                  <span>View Case Studies</span>
                  <div className="w-8 h-8 rounded-full border border-rose-500/20 flex items-center justify-center group-hover/btn:bg-[#BE123C] group-hover/btn:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>

              {/* Bottom decorative accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}

          {/* Special CTA Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-600 via-pink-600 to-violet-700 p-10 flex flex-col justify-center items-start group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            <h3 className="text-3xl font-black text-white mb-6 leading-tight">
              Don't See Your <br />Sector Listed?
            </h3>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Our engineering DNA is built on solving "impossible" problems. We custom-build for niche enterprise needs.
            </p>
            <button className="bg-white text-rose-600 px-8 py-4 rounded-2xl font-bold shadow-xl shadow-black/20 hover:scale-105 transition-all">
              Consult an Architect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesShowcase;
