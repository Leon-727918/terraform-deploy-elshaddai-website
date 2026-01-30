
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group glass p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-white/20">
      <div className="mb-6 inline-block p-4 bg-slate-900 rounded-2xl group-hover:scale-110 transition-transform duration-500">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
      <p className="text-slate-400 mb-6 leading-relaxed">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map(tag => (
          <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-900 text-slate-300 rounded-full border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
