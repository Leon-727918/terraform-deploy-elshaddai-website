
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2 border-b border-white/5' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section matching the uploaded image style */}
          <a href="/" className="flex items-center space-x-3 group cursor-pointer py-2">
                 <img 
              src="/images/logo3.png" 
              alt="Elshaddai Cloud Solutions" 
              className="w-30 h-20 "
            />
            <div className="flex flex-col leading-[0.5] ">
             
              {/* <span className="text-xl font-black tracking-tight text-[#BE123C] uppercase">
                ELSHADDAI
              </span> */}
              {/* <span className="text-xl font-black tracking-tight text-[#BE123C] uppercase">
                CLOUD
              </span> */}
              <div className="flex items-baseline space-x-2 -mt-2">
                {/* <img 
              src="/images/logo.png" 
              alt="Elshaddai Cloud Solutions" 
              className="w-10 h-10 object-contain"
            /> */}
                <span className="text-2xl font-black tracking-tight text-[#BE123C] uppercase">
                   {/* ELSHADDAI CLOUD SOLUTIONS */}
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-400 tracking-[0.2em] mt-1 ml-0.5">
             {/* TRANSFORMACIÓN DIGITAL */}
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[0.9375rem] font-semibold text-slate-300 hover:text-[#BE123C] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-[#BE123C] hover:bg-rose-700 text-white px-6 py-2.5 rounded-full text-[0.9375rem] font-bold transition-all shadow-lg shadow-rose-900/25">
              Contact Sales
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-b border-white/10 p-6 space-y-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-lg font-bold text-slate-300 hover:text-[#BE123C]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="w-full bg-[#BE123C] text-white py-4 rounded-xl font-bold">
            Contact Sales
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
