
import React from 'react';
import { ArrowUpRight, Search, Zap, BarChart3 } from 'lucide-react';

const EngagementModel: React.FC = () => {
  const steps = [
    {
      title: "Consult",
      subtitle: "for the Cloud Strategy",
      gradient: "from-[#0078D4] to-[#005A9E]",
      icon: <Search className="w-12 h-12 text-white/20 mb-6" />,
      delay: "0"
    },
    {
      title: "Migrate",
      subtitle: "to LIVE Environments",
      gradient: "from-[#76C100] to-[#68AA00]",
      icon: <Zap className="w-12 h-12 text-white/20 mb-6" />,
      delay: "100"
    },
    {
      title: "Optimize",
      subtitle: "the Performance",
      gradient: "from-[#2D3E50] to-[#1A252F]",
      icon: <BarChart3 className="w-12 h-12 text-white/20 mb-6" />,
      delay: "200"
    }
  ];

  return (
    <section className="py-24 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Our Methodology</h2>
          <p className="text-4xl lg:text-5xl font-extrabold text-white">Execution Framework</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={step.title}
              className={`relative group aspect-square overflow-hidden rounded-[3rem] bg-gradient-to-br ${step.gradient} p-10 flex flex-col items-center justify-center text-center transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/40 cursor-pointer`}
              style={{ transitionDelay: `${step.delay}ms` }}
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="text-white w-10 h-10" />
              </div>
              
              {/* Animated Inner Glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                {step.icon}
                <h3 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white mb-2 leading-none">
                  {step.title}
                </h3>
                <p className="text-lg lg:text-xl font-light text-white/80 max-w-[200px]">
                  {step.subtitle}
                </p>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-45 pointer-events-none group-hover:top-[100%] group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
