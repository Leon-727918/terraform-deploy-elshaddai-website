import React, { useState } from 'react';
import { X, Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface DemoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoFormModal: React.FC<DemoFormModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    industry: '',
    companySize: '',
    useCase: '',
    aiMaturity: '',
    demoFocus: [] as string[],
    preferredDate: '',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    consent: false,
  });

  const industries = [
    'Banking / Financial Services',
    'Healthcare',
    'Retail / E-commerce',
    'Manufacturing',
    'Technology',
    'Government',
    'Other'
  ];

  const companySizes = ['1–50', '51–200', '201–1000', '1000+'];
  
  const aiMaturityLevels = [
    'Exploring AI',
    'Pilot / POC stage',
    'Production use',
    'Scaling AI across organization'
  ];

  const demoFocusOptions = [
    'Agent Governance',
    'Security & Compliance',
    'MCP / A2A Integration',
    'Observability & Monitoring',
    'Custom Use Case'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'consent') {
        setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
      } else {
        // Multi-select checkboxes
        setFormData(prev => ({
          ...prev,
          demoFocus: checkbox.checked
            ? [...prev.demoFocus, value]
            : prev.demoFocus.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        to_email: 'elshaddai.cloud@hotmail.com',
        full_name: formData.fullName,
        work_email: formData.workEmail,
        phone: formData.phone || 'Not provided',
        company_name: formData.companyName,
        industry: formData.industry,
        company_size: formData.companySize,
        use_case: formData.useCase,
        ai_maturity: formData.aiMaturity,
        demo_focus: formData.demoFocus.join(', ') || 'Not specified',
        preferred_date: formData.preferredDate || 'Not specified',
        time_zone: formData.timeZone,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setFormData({
          fullName: '',
          workEmail: '',
          phone: '',
          companyName: '',
          industry: '',
          companySize: '',
          useCase: '',
          aiMaturity: '',
          demoFocus: [],
          preferredDate: '',
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          consent: false,
        });
      }, 2000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[#BE123C] to-rose-700 text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold mb-2">Request a Demo</h2>
          <p className="text-rose-100">Fill out the form below and we'll get back to you shortly</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">👤</span> Basic Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE123C] focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Work Email *</label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE123C] focus:border-transparent outline-none"
                  placeholder="john@company.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Phone Number (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE123C] focus:border-transparent outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🏢</span> Company Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE123C] focus:border-transparent outline-none"
                  placeholder="Acme Corporation"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Industry *</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE123C] focus:border-transparent outline-none"
                >
                  <option value="">Select industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Company Size *</label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE123C] focus:border-transparent outline-none"
                >
                  <option value="">Select size</option>
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* AI / Use Case Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🤖</span> AI / Use Case Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">What are you looking to achieve? *</label>
                <textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE123C] focus:border-transparent outline-none resize-none"
                  placeholder="Example: AI governance, LLM security, agent orchestration, compliance, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Current AI Maturity Level</label>
                <select
                  name="aiMaturity"
                  value={formData.aiMaturity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE123C] focus:border-transparent outline-none"
                >
                  <option value="">Select maturity level</option>
                  {aiMaturityLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Demo Focus (Multi-select)</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {demoFocusOptions.map(option => (
                    <label key={option} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        name="demoFocusOption"
                        value={option}
                        checked={formData.demoFocus.includes(option)}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#BE123C] border-gray-300 rounded focus:ring-[#BE123C]"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scheduling */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📅</span> Scheduling
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Demo Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE123C] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Time Zone</label>
                <input
                  type="text"
                  name="timeZone"
                  value={formData.timeZone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BE123C] focus:border-transparent outline-none bg-gray-50"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Consent */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🔒</span> Consent
            </h3>
            <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="w-5 h-5 mt-0.5 text-[#BE123C] border-gray-300 rounded focus:ring-[#BE123C]"
              />
              <span className="text-sm text-gray-700">
                I agree to be contacted regarding this request and understand that my information will be used in accordance with privacy policies.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4 pt-4">
            {submitStatus === 'success' && (
              <div className="w-full p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                ✅ Demo request submitted successfully! We'll contact you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                ❌ Failed to submit. Please try again or email us directly at elshaddai.cloud@hotmail.com
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting || !formData.consent}
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#BE123C] to-rose-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Demo Request
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoFormModal;