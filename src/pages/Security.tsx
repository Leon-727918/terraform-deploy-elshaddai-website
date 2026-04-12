import React, { useEffect } from 'react';
import { Shield, Lock, Code, TrendingUp, Cloud, CheckCircle, Zap, FolderTree, FileText, AlertTriangle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Security: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: 'Unified Security Management',
      description: 'Manage and monitor all your cloud resources—from virtual machines to databases and containers—through a single, centralized dashboard.',
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-purple-500" />,
      title: 'Advanced Threat Protection',
      description: 'Detect vulnerabilities, malware, and suspicious activities using AI-powered analytics and real-time threat intelligence.',
    },
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      title: 'DevSecOps Integration',
      description: 'Integrate security directly into your CI/CD pipelines to identify and fix vulnerabilities early in the development lifecycle.',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
      title: 'Security Posture & Insights',
      description: 'Track your security health with Secure Score and receive actionable recommendations to strengthen your environment.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-500" />,
      title: 'Multi-Cloud & Hybrid Security',
      description: 'Extend protection beyond Azure to cover AWS, GCP, and on-premise infrastructure from one unified platform.',
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-pink-500" />,
      title: 'Continuous Compliance (PCI Ready)',
      description: 'Prepare for global compliance standards including PCI DSS, ISO, and SOC with automated assessments, monitoring, and audit-ready reporting.',
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'Deep Azure Integration',
      description: 'Seamlessly connect with native Azure services for enhanced monitoring, automation, and rapid incident response.',
    },
  ];

  const folderStructure = [
    '00-Audit-Management/',
    '01-Scope-Definition/',
    '02-Risk-Assessment/',
    'R01-Network-Security/',
    'R02-Secure-Configurations/',
    'R03-Data-Protection/',
    'R04-Encryption-In-Transit/',
    'R05-Malware/',
    'R06-Secure-Development/',
    'R07-Access-Control/',
    'R08-Authentication/',
    'R09-Physical-Security/',
    'R10-Logging-Monitoring/',
    'R11-Testing/',
    'R12-Governance/',
  ];

  const complianceBenefits = [
    'Faster audit reviews',
    'Clear mapping to PCI DSS controls',
    'Well-documented security evidence',
    'Reduced compliance risks',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-semibold border border-white/20">
                Meet your intelligent security co-pilot
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Secure Your Cloud <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                with Confidence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Leverage <strong>Microsoft Defender for Cloud</strong> within the <strong>Microsoft Azure</strong> ecosystem to protect your applications, data, and infrastructure with intelligent, AI-driven security.
            </p>
            
            <p className="text-lg md:text-xl font-semibold mb-8 text-cyan-200">
              Smarter Protection. Simplified Security. Scalable Defense.
            </p>
            
            <p className="text-base md:text-lg text-blue-100 mb-10">
              👉 Monitor, detect, and respond to threats in real time—across cloud and hybrid environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <a 
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-6" data-aos="fade-up">
            Trusted by forward-thinking organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-60">
            <span className="text-2xl font-bold">Microsoft</span>
            <span className="text-2xl font-bold">Azure</span>
            <span className="text-2xl font-bold">Defender</span>
            <span className="text-2xl font-bold">Enterprise</span>
          </div>
        </div>
      </section>

      {/* Features Section with gradient background */}
      <section id="features" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A brain for your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">security.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional security tools just show you what's already broken. Microsoft Defender actively helps you prevent threats before they happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PCI Compliance Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <FileText className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold">
                PCI Compliance <span className="text-purple-600">(Audit-Ready Framework)</span>
              </h2>
            </div>
            <p className="text-xl text-gray-700 font-semibold mb-4">
              Get Ready for PCI DSS Certification (U.S. Compliance Standards)
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help you organize and maintain an <strong>audit-optimized evidence repository</strong> aligned with PCI DSS requirements, making certification smoother and faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Folder Structure */}
            <div data-aos="fade-right">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
                <div className="flex items-center gap-3 mb-6">
                  <FolderTree className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    PCI Evidence Folder Structure
                  </h3>
                </div>
                
                <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                  <div className="text-green-400 mb-2">PCI-DSS/</div>
                  <div className="pl-4 space-y-1 text-blue-300">
                    <div>│</div>
                    {folderStructure.map((folder, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-gray-500">├──</span>
                        <span>{folder}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-6">
                  This structured approach ensures:
                </h3>
                <div className="space-y-4">
                  {complianceBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                      <p className="text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-4xl font-bold mb-1">12</div>
                      <div className="text-sm text-purple-100">PCI DSS Requirements</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-1">100%</div>
                      <div className="text-sm text-purple-100">Evidence Coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Take Control of Your Cloud Security & Compliance Today
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Secure your infrastructure and accelerate your path to PCI certification with a scalable, intelligent security solution.
          </p>
          <p className="text-lg mb-10">
            👉 Start protecting your environment with <strong>Microsoft Defender for Cloud</strong> now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-purple-600 font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
            >
              Talk to an Expert
            </a>
          </div>
          
          <p className="mt-6 text-sm text-blue-200">
            No credit card required • Free consultation available
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Elshaddai Cloud Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Security;
