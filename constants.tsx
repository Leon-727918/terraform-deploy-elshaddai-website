
import React from 'react';
import {
  Cloud,
  ShieldCheck,
  Cpu,
  Code,
  RefreshCw,
  Globe,
  HeartPulse,
  Banknote,
  ShoppingCart,
  Factory,
  GraduationCap,
  Building2,
  Truck,
  Film,
  Home,
  Zap,
  Briefcase
} from 'lucide-react';
import { Service, Industry, NavItem, TeamMember } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Cloud Solutions', href: '/cloud-solutions' },
  { label: 'Security', href: '/security' },
  { label: 'Agentic AI', href: '/agentic-ai' },
  { label: 'About', href: '/about-us' },
  { label: 'Contact', href: '/#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'cloud-migration',
    title: 'Cloud Migration',
    description: 'Seamlessly move your infrastructure to AWS, Azure, or GCP with zero downtime and optimized costs.',
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    tags: ['AWS', 'Azure', 'GCP', 'Zero Downtime']
  },
  {
    id: 'legacy-transformation',
    title: 'Legacy System Transformation',
    description: 'Modernize monolithic applications into microservices-based architectures that scale effortlessly.',
    icon: <RefreshCw className="w-8 h-8 text-purple-400" />,
    tags: ['Microservices', 'Modernization', 'Docker', 'K8s']
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security Services',
    description: 'Advanced threat protection, IAM governance, and compliance monitoring for your cloud ecosystem.',
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    tags: ['Zero Trust', 'SOC2', 'GDPR', 'IAM']
  },
  {
    id: 'full-stack-dev',
    title: 'Full Stack Development',
    description: 'Enterprise-grade web and mobile applications built with the latest reactive frameworks.',
    icon: <Code className="w-8 h-8 text-orange-400" />,
    tags: ['React', 'Next.js', 'Node.js', 'Python']
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Solutions',
    description: 'Deploy autonomous AI agents that reason, plan, and execute complex business workflows.',
    icon: <Cpu className="w-8 h-8 text-pink-400" />,
    tags: ['LLMs', 'RAG', 'Auto-GPT', 'Agentic Workflows']
  }
];

export interface ExtendedIndustry extends Industry {
  icon: React.ReactNode;
  highlights: string[];
}

export const EXTENDED_INDUSTRIES: ExtendedIndustry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Modernizing patient care through HIPAA-compliant EHR systems and low-latency telehealth platforms.',
    imageUrl: '/images/healthcare.jpg',
    icon: <HeartPulse className="w-6 h-6" />,
    highlights: ['EHR Modernization', 'Telehealth', 'Bio-Informatics']
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Highly secure cloud ecosystems for retail banking, insurance legacy modernization, and DeFi trading.',
    imageUrl: '/images/finance.jpg',
    icon: <Banknote className="w-6 h-6" />,
    highlights: ['Core Banking', 'InsurTech', 'Risk Modeling']
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    description: 'Scalable POS systems and hyper-personalized e-commerce journeys powered by agentic AI.',
    imageUrl: '/images/ecomm.jpg',
    icon: <ShoppingCart className="w-6 h-6" />,
    highlights: ['POS Integration', 'Supply Chain', 'Customer AI']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Industrial IoT integration and cloud-native ERP solutions for real-time production visibility.',
    imageUrl: '/images/manufacture.jpg',
    icon: <Factory className="w-6 h-6" />,
    highlights: ['ERP Optimization', 'Automation', 'Digital Twin']
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Next-gen Learning Management Systems (LMS) and cloud-based administrative automation.',
    imageUrl: '/images/edu.jpg',
    icon: <GraduationCap className="w-6 h-6" />,
    highlights: ['LMS Scaling', 'Admin Portals', 'Edu-Analytics']
  },
  {
    id: 'government',
    name: 'Government',
    description: 'Secure, compliant public sector infrastructure focusing on data sovereignty and accessibility.',
    imageUrl: '/images/gov.jpg',
    icon: <Building2 className="w-6 h-6" />,
    highlights: ['Compliance', 'Citizen Portals', 'Cloud Security']
  },
  {
    id: 'transportation',
    name: 'Transportation',
    description: 'Logistics, fleet management, and mobility-as-a-service solutions on resilient cloud platforms.',
    imageUrl: '/images/transportation.jpg',
    icon: <Truck className="w-6 h-6" />,
    highlights: ['Logistics AI', 'Fleet Ops', 'Tracking']
  },
  {
    id: 'media',
    name: 'Media & Entertainment',
    description: 'Scalable streaming infrastructure, digital asset management, and AI-driven content generation.',
    imageUrl: '/images/media1.jpg',
    icon: <Film className="w-6 h-6" />,
    highlights: ['CDN Scaling', 'Digital Assets', 'Media AI']
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    description: 'PropTech innovations, virtual tour hosting, and automated property management systems.',
    imageUrl: '/images/realestate.jpg',
    icon: <Home className="w-6 h-6" />,
    highlights: ['PropTech', 'Virtual Tours', 'CRM Ops']
  },
  {
    id: 'energy',
    name: 'Energy',
    description: 'Smart grid management systems and renewable energy monitoring for modern utility providers.',
    imageUrl: '/images/energy.jpg',
    icon: <Zap className="w-6 h-6" />,
    highlights: ['Smart Grid', 'Renewables', 'Data IoT']
  },
  {
    id: 'professional',
    name: 'Professional Services',
    description: 'Secure, high-availability cloud platforms for law firms and global accounting organizations.',
    imageUrl: '/images/professional.png',
    icon: <Briefcase className="w-6 h-6" />,
    highlights: ['LegalTech', 'Audit Tools', 'SaaS Ops']
  }
];

export const INDUSTRIES: Industry[] = EXTENDED_INDUSTRIES.map(({ icon, highlights, ...rest }) => rest);

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Gorlin Sushma',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in banking and FinTech.',
    imageUrl: '/images/sushma2.png',
    linkedinUrl: 'https://www.linkedin.com/in/gorlin-sushma-a0a177135/'
  },
  {
    id: 'cto',
    name: 'Leon Gladston',
    role: 'Co Founder & CTO',
    bio: 'Cloud, AI, and BigData specialist delivering secure migrations, legacy modernization, and large-scale data ingestion for telecom enterprises..',
    imageUrl: '/images/leon1.png',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'pm',
    name: 'Bershika J',
    role: 'Senior Project Manager',
    bio: 'Agile practitioner ensuring seamless delivery of complex cloud transformation projects.',
    imageUrl: '/images/subi2.png',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'azure-sme',
    name: 'Gowtham Raj',
    role: 'SME - Azure Cloud',
    bio: 'Certified Azure Solutions Architect Expert helping clients navigate the Microsoft ecosystem.',
    imageUrl: '/images/gowtham2.png',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'fullstack',
    name: 'Tiffany K,
    role: 'Full Stack Consultant',
    bio: 'Expert in React, Node.js, and modern frontend architectures for scalable applications.',
    imageUrl: '/images/divya-new.png',
    linkedinUrl: 'https://linkedin.com'
  },
   {
    id: 'fullstack',
    name: 'Sandeep V S',
    role: 'Azure Engineer',
    bio: 'Azure Cloud Engineer specializing in secure, scalable solutions, cost optimization, monitoring, and enterprise-grade cloud reliability.',
    imageUrl: '/images/sandeep1.png',
    linkedinUrl: 'https://www.linkedin.com/in/sandeep-v-s-26a060271/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  }
];

