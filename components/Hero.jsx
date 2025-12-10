'use client';

import { Download, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-navy via-navy to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6">
            <div className="inline-block">
              <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold">
                Quantity Surveyor
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Mohamed <span className="text-gold">Jezan</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">
              Quantity Surveyor | CAD Operator
            </h2>
            
            <p className="text-xl text-gray-400">
              2.5 Years Experience in QS | Sri Lanka → Dubai
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Experienced construction professional specializing in cost estimation, 
              BOQ preparation, and project documentation with expertise in AutoCAD, 
              Revit, and PlanSwift.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/cv/Mohamed_Jezan_CV.pdf"
                download
                className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download size={20} />
                Download CV
              </a>
              
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative Background Circle */}
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl"></div>
              
              {/* Profile Photo Container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 sm:border-8 border-gold shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Mohamed Jezan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-6 py-3 rounded-lg font-bold shadow-lg">
                2.5+ Years
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
