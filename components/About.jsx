import { Briefcase, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            About <span className="text-gold">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Summary */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Experienced Quantity Surveyor with <span className="font-semibold text-navy">2.5 years of experience</span> in reputed construction firms across Sri Lanka. 
              Skilled in pre-contract & post-contract works, BOQs, estimation, tendering, cost control, AutoCAD, PlanSwift, Revit, and FIDIC documentation.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Seeking QS opportunities in Dubai to contribute to high-quality construction projects with my expertise in 
              quantity surveying, cost management, and technical documentation.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-navy mb-4">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  'BOQ Preparation',
                  'Cost Estimation',
                  'Tender Documentation',
                  'Value Engineering',
                  'AutoCAD & Revit',
                  'FIDIC Contracts',
                  'PlanSwift Takeoffs',
                  'Cost Control',
                  'Site Measurement',
                  'Progress Monitoring',
                  'Risk Assessment',
                  'Contract Administration',
                  'Interim Payments',
                  'NRM2,SMM7,POMI'
                ].map((competency, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-gray-700">{competency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="space-y-6">
            <div className="bg-lightgray p-8 rounded-2xl shadow-lg border-l-4 border-gold">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold/20 p-4 rounded-lg">
                  <Briefcase className="text-gold" size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-navy">2.5+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
              <p className="text-gray-700">Working with leading construction firms in Sri Lanka</p>
            </div>

            <div className="bg-lightgray p-8 rounded-2xl shadow-lg border-l-4 border-navy">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-navy/20 p-4 rounded-lg">
                  <Award className="text-navy" size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-navy">LKR 387M+</h4>
                  <p className="text-gray-600">Projects Managed</p>
                </div>
              </div>
              <p className="text-gray-700">Multiple large-scale educational and institutional projects</p>
            </div>

            <div className="bg-lightgray p-8 rounded-2xl shadow-lg border-l-4 border-gold">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold/20 p-4 rounded-lg">
                  <Target className="text-gold" size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-navy">Dubai</h4>
                  <p className="text-gray-600">Target Location</p>
                </div>
              </div>
              <p className="text-gray-700">Ready to relocate and contribute to world-class projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
