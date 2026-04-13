import React, { useState, useEffect } from 'react';
import { Layers, Shield, Settings, Banknote, HeartPulse, ShoppingCart, Factory, BookOpen, Film, Download, ChevronLeft, ChevronRight, Lock, Database, Network, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../carousel-custom.css';

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

  // Data-Azavel carousel slides
  const dataAzavelSlides = [
    {
      title: 'Blockchain-Powered Cyber Threat Intelligence',
      subtitle: 'Critical Infrastructure Protection',
      icon: <Lock className="w-16 h-16 text-[#67CB0C]" />,
      description: 'DataAsavel is a permissioned blockchain-anchored platform that prevents ransomware attacks and protects critical infrastructure using Hyperledger Fabric.',
      stats: [
        { label: '300%+', detail: 'Increase in ransomware attacks (2022-2025)' },
        { label: '60%+', detail: 'Reduction in Mean Time to Detect' },
        { label: '100%', detail: 'Tamper-evident log audit trail' },
      ],
    },
    {
      title: 'AI-Powered Threat Analytics',
      subtitle: 'Real-time Detection & Prevention',
      icon: <Network className="w-16 h-16 text-[#E58F2E]" />,
      description: 'Advanced ML models including IP Reputation Scoring, Behavioral Anomaly Detection, and Ransomware Kill-Chain LSTM with 87%+ recall accuracy.',
      features: [
        'IP Reputation Scoring Engine (15-min updates)',
        'Behavioral Anomaly Detection (Isolation Forest)',
        'Ransomware LSTM Sequence Prediction',
        'Smart Contract Automation',
      ],
    },
    {
      title: 'Multi-Stakeholder Trust Infrastructure',
      subtitle: 'Hyperledger Fabric 2.5 LTS',
      icon: <Database className="w-16 h-16 text-[#5C1E51]" />,
      description: 'Permissioned blockchain network enabling cross-boundary threat correlation with complete data sovereignty and forensic-grade immutability.',
      benefits: [
        'Decentralized multi-org threat sharing',
        'Immutable audit trails for compliance',
        'Smart contract-driven remediation',
        'Government-grade data sovereignty',
      ],
    },
    {
      title: 'Performance & Scalability',
      subtitle: 'Enterprise-Ready Platform',
      icon: <TrendingUp className="w-16 h-16 text-[#F73D1F]" />,
      description: 'Built for high-volume production environments with horizontal scaling, serverless architecture, and real-time processing capabilities.',
      metrics: [
        { metric: '50,000', label: 'Events/second ingestion' },
        { metric: '<3s', label: 'Blockchain anchor latency' },
        { metric: '<30s', label: 'Alert generation MTTR' },
        { metric: '99.9%', label: 'System availability SLA' },
      ],
    },
    {
      title: 'Regulatory Compliance',
      subtitle: 'Government & Enterprise Ready',
      icon: <CheckCircle className="w-16 h-16 text-[#B13259]" />,
      description: 'Fully compliant with Indian cybersecurity regulations including IT Act 2000, CERT-In Directions 2022, NCIIPC Guidelines, and DPDP Act 2023.',
      compliance: [
        'IT Act 2000 & Amendment 2008',
        'CERT-In Directions 2022',
        'DPDP Act 2023 (Data Privacy)',
        'ISO 27001/27002 Aligned',
        'NIST Cybersecurity Framework',
      ],
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

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

      {/* Data-Azavel Section with Carousel */}
      <section 
        id="data-azavel" 
        className="py-20 px-4 md:px-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-[#67CB0C]" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Data-Azavel
              </h2>
              <AlertTriangle className="w-8 h-8 text-[#67CB0C]" />
            </div>
            <p className="text-[#67CB0C] text-xl font-semibold mb-2">
              Blockchain-Powered Cybersecurity Platform
            </p>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Protecting India's critical infrastructure with tamper-proof threat intelligence and AI-driven ransomware prevention
            </p>
          </div>

          {/* Carousel */}
          <div className="carousel-wrapper" data-aos="fade-up" data-aos-delay="200">
            <Slider {...sliderSettings}>
              {dataAzavelSlides.map((slide, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#67CB0C]/20 min-h-[500px]">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">{slide.icon}</div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-[#E58F2E] font-semibold text-lg mb-6">
                        {slide.subtitle}
                      </p>
                      <p className="text-gray-300 text-lg mb-8 max-w-3xl">
                        {slide.description}
                      </p>

                      {/* Different content types per slide */}
                      {slide.stats && (
                        <div className="grid md:grid-cols-3 gap-6 w-full">
                          {slide.stats.map((stat, i) => (
                            <div key={i} className="bg-[#67CB0C]/10 rounded-xl p-4 border border-[#67CB0C]/30">
                              <div className="text-4xl font-bold text-[#67CB0C] mb-2">
                                {stat.label}
                              </div>
                              <div className="text-gray-300 text-sm">{stat.detail}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.features && (
                        <div className="grid md:grid-cols-2 gap-4 w-full">
                          {slide.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 bg-[#E58F2E]/10 rounded-lg p-4 border border-[#E58F2E]/30">
                              <CheckCircle className="w-5 h-5 text-[#E58F2E] flex-shrink-0" />
                              <span className="text-gray-300 text-left">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.benefits && (
                        <div className="grid md:grid-cols-2 gap-4 w-full">
                          {slide.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3 bg-[#5C1E51]/10 rounded-lg p-4 border border-[#5C1E51]/30">
                              <Shield className="w-5 h-5 text-[#5C1E51] flex-shrink-0" />
                              <span className="text-gray-300 text-left">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.metrics && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                          {slide.metrics.map((item, i) => (
                            <div key={i} className="bg-[#F73D1F]/10 rounded-xl p-4 border border-[#F73D1F]/30">
                              <div className="text-3xl font-bold text-[#F73D1F] mb-1">
                                {item.metric}
                              </div>
                              <div className="text-gray-300 text-xs">{item.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.compliance && (
                        <div className="grid md:grid-cols-3 gap-3 w-full">
                          {slide.compliance.map((item, i) => (
                            <div key={i} className="bg-[#B13259]/10 rounded-lg p-3 border border-[#B13259]/30">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#B13259] flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{item}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Download Button */}
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
            <a 
              href="/Blockchain_ThreatIntelligense.pdf" 
              download="Blockchain_ThreatIntelligense.pdf"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#67CB0C] to-[#E58F2E] text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:shadow-[#67CB0C]/50 hover:scale-110 transition-all duration-300"
            >
              <Download className="w-6 h-6" />
              Download Full Blockchain Threat Intelligence Report
            </a>
            <p className="text-gray-400 text-sm mt-4">18 MB PDF • Comprehensive Technical Documentation</p>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#67CB0C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E58F2E] rounded-full blur-3xl"></div>
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

// Custom arrow components for carousel
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#67CB0C]/80 hover:bg-[#67CB0C] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#67CB0C]/80 hover:bg-[#67CB0C] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

export default CloudSolutions;
