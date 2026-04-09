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
      icon: <Layers className="w-12 h-12 text-blue-500" />,
      title: 'Scalability',
      description: 'Seamlessly scale your applications with cloud-native architecture.',
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: 'Security',
      description: 'Implement enterprise-grade security and compliance standards.',
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-500" />,
      title: 'Automation',
      description: 'Reduce manual effort using automated deployment pipelines.',
    },
  ];

  const useCases = [
    {
      icon: <Banknote className="w-12 h-12 text-blue-500" />,
      title: 'Banking & Finance',
      description: 'Secure transactions and fraud detection.',
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-blue-500" />,
      title: 'Healthcare',
      description: 'Telemedicine and patient data security.',
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-500" />,
      title: 'E-Commerce',
      description: 'Scalable and personalized shopping.',
    },
    {
      icon: <Factory className="w-12 h-12 text-blue-500" />,
      title: 'Manufacturing',
      description: 'IoT and predictive maintenance.',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: 'Education',
      description: 'Virtual learning platforms.',
    },
    {
      icon: <Film className="w-12 h-12 text-blue-500" />,
      title: 'Media',
      description: 'Global streaming solutions.',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Cloud Transformation Guide</h2>
        <p className="mb-6 text-lg md:text-xl max-w-2xl mx-auto px-4">
          Modernize your infrastructure and scale efficiently
        </p>
        <a 
          href="#download" 
          className="inline-block bg-gradient-to-r from-white to-gray-200 text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform duration-300"
        >
          Download PDF
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:px-8">
        <h3 
          className="text-3xl md:text-4xl font-bold text-center mb-10" 
          data-aos="fade-up"
        >
          Key Features
        </h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
      <section id="usecases" className="py-16 px-4 md:px-8 bg-gray-100">
        <h3 
          className="text-3xl md:text-4xl font-bold text-center mb-10" 
          data-aos="fade-up"
        >
          Industry Use Cases
        </h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
        className="text-center py-20 px-4"
        data-aos="fade-up"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Guide</h3>
        <p className="mb-6 text-lg text-gray-600">
          Download the complete Cloud Transformation PDF
        </p>
        <a 
          href="/cloud-transformation.pdf" 
          download 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center p-6 shadow-lg">
        <p className="text-gray-600">© 2026 Elshaddai Cloud Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CloudSolutions;
