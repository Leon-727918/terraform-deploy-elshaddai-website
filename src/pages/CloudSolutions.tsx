import React, { useEffect } from 'react';
import { Layers, Shield, Settings, Banknote, HeartPulse, ShoppingCart, Factory, BookOpen, Film, Download } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CloudSolutions: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <Layers className="w-12 h-12 text-[#E58F2E]" />,
      title: 'Scalability',
      description: 'Seamlessly scale your applications with cloud-native architecture.',
      color: 'orange',
    },
    {
      icon: <Shield className="w-12 h-12 text-[#B13259]" />,
      title: 'Security',
      description: 'Implement enterprise-grade security and compliance standards.',
      color: 'red',
    },
    {
      icon: <Settings className="w-12 h-12 text-[#5C1E51]" />,
      title: 'Automation',
      description: 'Reduce manual effort using automated deployment pipelines.',
      color: 'purple',
    },
  ];

  const useCases = [
    {
      icon: <Banknote className="w-12 h-12 text-[#E58F2E]" />,
      title: 'Banking & Finance',
      description: 'Secure transactions and fraud detection.',
      color: 'orange',
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-[#B13259]" />,
      title: 'Healthcare',
      description: 'Telemedicine and patient data security.',
      color: 'red',
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-[#5C1E51]" />,
      title: 'E-Commerce',
      description: 'Scalable and personalized shopping.',
      color: 'purple',
    },
    {
      icon: <Factory className="w-12 h-12 text-[#F73D1F]" />,
      title: 'Manufacturing',
      description: 'IoT and predictive maintenance.',
      color: 'orangeRed',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-[#67CB0C]" />,
      title: 'Education',
      description: 'Virtual learning platforms.',
      color: 'green',
    },
    {
      icon: <Film className="w-12 h-12 text-[#E58F2E]" />,
      title: 'Media',
      description: 'Global streaming solutions.',
      color: 'orange',
    },
  ];

  const getHoverColor = (color: string) => {
    const hoverColors: { [key: string]: string } = {
      orange: 'hover:shadow-[#E58F2E]/30 hover:border-[#E58F2E]/50',
      red: 'hover:shadow-[#B13259]/30 hover:border-[#B13259]/50',
      purple: 'hover:shadow-[#5C1E51]/30 hover:border-[#5C1E51]/50',
      orangeRed: 'hover:shadow-[#F73D1F]/30 hover:border-[#F73D1F]/50',
      green: 'hover:shadow-[#67CB0C]/30 hover:border-[#67CB0C]/50',
    };
    return hoverColors[color] || '';
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section with vibrant gradient */}
      <section 
        className="text-center py-20 relative overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, #E58F2E 0%, #B13259 25%, #5C1E51 50%, #F73D1F 75%, #67CB0C 100%)`,
        }}
        data-aos="fade-up"
      >
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Cloud Transformation Guide
          </h2>
          <p className="mb-6 text-lg md:text-xl max-w-2xl mx-auto px-4 drop-shadow">
            Modernize your infrastructure and scale efficiently
          </p>
          <a 
            href="/Cloud_Transformation.pdf" 
            download="Cloud_Transformation.pdf"
            className="inline-flex items-center gap-2 bg-white text-[#5C1E51] px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-[#67CB0C] hover:text-white"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:px-8">
        <h3 
          className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#E58F2E] via-[#B13259] to-[#5C1E51] bg-clip-text text-transparent" 
          data-aos="fade-up"
        >
          Key Features
        </h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 border-2 border-transparent ${getHoverColor(feature.color)} hover:shadow-2xl hover:-translate-y-1`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="mb-3">{feature.icon}</div>
              <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Use Cases */}
      <section 
        id="usecases" 
        className="py-16 px-4 md:px-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #f9fafb 0%, #f3f4f6 100%)',
        }}
      >
        {/* Decorative background gradient */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 20% 50%, #E58F2E 0%, transparent 50%),
                        radial-gradient(circle at 80% 50%, #67CB0C 0%, transparent 50%)`,
          }}
        ></div>
        
        <h3 
          className="text-3xl md:text-4xl font-bold text-center mb-10 relative z-10 bg-gradient-to-r from-[#F73D1F] via-[#B13259] to-[#67CB0C] bg-clip-text text-transparent" 
          data-aos="fade-up"
        >
          Industry Use Cases
        </h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 border-2 border-transparent ${getHoverColor(useCase.color)} hover:shadow-2xl hover:-translate-y-1`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-3">{useCase.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{useCase.title}</h4>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section 
        id="download" 
        className="text-center py-20 px-4 relative overflow-hidden text-white"
        style={{
          background: `linear-gradient(45deg, #5C1E51 0%, #B13259 50%, #F73D1F 100%)`,
        }}
        data-aos="fade-up"
      >
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Get Your Free Guide
          </h3>
          <p className="mb-6 text-lg drop-shadow">
            Download the complete Cloud Transformation PDF
          </p>
          <a 
            href="/Cloud_Transformation.pdf" 
            download="Cloud_Transformation.pdf"
            className="inline-flex items-center gap-2 bg-white text-[#B13259] px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-[#67CB0C] hover:text-white"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Footer */}
      <footer 
        className="text-center p-6 shadow-lg text-white"
        style={{
          background: `linear-gradient(90deg, #E58F2E 0%, #5C1E51 50%, #67CB0C 100%)`,
        }}
      >
        <p className="drop-shadow">© 2026 Elshaddai Cloud Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CloudSolutions;
