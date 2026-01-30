
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Database, Shield, Rocket, Cpu, Globe } from 'lucide-react';

interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  primaryBtn: string;
  secondaryBtn: string;
  imageUrl: string;
  icon: React.ReactNode;
  accentColor: string;
  href: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    badge: "Data Transformation",
    title: "Transform Data into a Business Advantage",
    subtitle: "Harness the power of data to build experiences and technologies that work smarter, drive results, and fuel innovation.",
    primaryBtn: "Get in Touch",
    secondaryBtn: "Explore Data",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
    icon: <Database className="w-8 h-8 text-rose-500" />,
    accentColor: "from-rose-600/20",
    href: "#contact"
  },
  {
    id: 2,
    badge: "Cloud Engineering",
    title: "Boost your cloud journey with triple-certified teams",
    subtitle: "Our AWS, Azure, and Google Cloud experts ensure your infrastructure is scalable, secure, and cost-optimized from day one.",
    primaryBtn: "Book Consultation",
    secondaryBtn: "Cloud Services",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    accentColor: "from-blue-600/20",
    href: "#services"
  },
  {
    id: 3,
    badge: "AI-First Strategy",
    title: "The new age of customer service is AI-first",
    subtitle: "Deploy autonomous AI agents that handle complex inquiries, plan workflows, and provide instant insights to your customers.",
    primaryBtn: "View AI Demo",
    secondaryBtn: "Our Agents",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    accentColor: "from-purple-600/20",
    href: "#ai"
  },
  {
    id: 4,
    badge: "Digital Transformation",
    title: "Services, Solutions, Software & DevOps",
    subtitle: "We bridge the gap between business vision and technical execution through end-to-end digital transformation and modern DevOps.",
    primaryBtn: "Get Started",
    secondaryBtn: "Case Studies",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    icon: <Rocket className="w-8 h-8 text-emerald-400" />,
    accentColor: "from-emerald-600/20",
    href: "#industries"
  },
  {
    id: 5,
    badge: "Security & Blockchain",
    title: "Secure Enterprise Ledger & Blockchain Solutions",
    subtitle: "Architecting decentralized, secure, and transparent systems for the next generation of financial and supply chain infrastructure.",
    primaryBtn: "Contact Experts",
    secondaryBtn: "Security Audit",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    accentColor: "from-blue-900/20",
    href: "#contact"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-grid">
      {/* Background Lighting Elements */}
      <div className={`absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[140px] -z-10 transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-40'}`}></div>
      <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] -z-10 transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-40'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className={`lg:col-span-7 text-left transition-all duration-700 transform ${isAnimating ? 'opacity-0 -translate-x-10' : 'opacity-100 translate-x-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">{slide.badge}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-white">
              {slide.title.split(' ').slice(0, -2).join(' ')} <br />
              <span className="text-[#BE123C]">{slide.title.split(' ').slice(-2).join(' ')}</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={slide.href}
                className="w-full sm:w-auto px-10 py-4 bg-[#BE123C] hover:bg-rose-700 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-rose-900/20 flex items-center justify-center group"
              >
                {slide.primaryBtn}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="w-full sm:w-auto px-10 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/10">
                {slide.secondaryBtn}
              </button>
            </div>

            <div className="mt-16 flex items-center space-x-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i + 40 + currentSlide}`} alt="Client" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">Trusted Technology Partner</p>
                <p className="text-slate-500">For a Global Clientele Spanning Multiple Industries</p>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Image Carousel */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className={`relative z-10 float-slow transition-all duration-1000 transform ${isAnimating ? 'opacity-0 scale-95 translate-y-10' : 'opacity-100 scale-100 translate-y-0'}`}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-rose-900/20 border border-white/5 aspect-[4/5]">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.title} 
                  className="w-full h-full object-cover transition-all duration-1000 transform scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${slide.accentColor} to-transparent mix-blend-overlay`}></div>
              </div>

              {/* Decorative dynamic icon bubble */}
              <div className="absolute -top-6 -right-6 p-6 glass rounded-2xl border-white/10 backdrop-blur-xl animate-bounce shadow-2xl">
                {slide.icon}
              </div>
            </div>
            
            {/* Background Glow behind image */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${currentSlide % 2 === 0 ? 'bg-rose-600/5' : 'bg-blue-600/5'} blur-[100px] -z-10 transition-colors duration-1000`}></div>
          </div>

        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-10 left-1/2 lg:left-8 -translate-x-1/2 lg:translate-x-0 flex items-center space-x-6 z-20">
          <div className="flex items-center space-x-3">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentSlide(idx);
                  setTimeout(() => setIsAnimating(false), 600);
                }}
                className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === idx ? 'w-12 bg-[#BE123C]' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full glass border-white/10 hover:bg-white/10 text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full glass border-white/10 hover:bg-white/10 text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
