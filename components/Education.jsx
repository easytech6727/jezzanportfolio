import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Sc. (Hons) Quantity Surveying',
      institution: 'De Montfort University (DMU)',
      location: 'United Kingdom',
      period: '2020 - 2023',
      type: 'Bachelor\'s Degree',
      highlights: [
        'Specialized in Construction Cost Management',
        'Project-based learning approach',
        'UK construction industry standards'
      ]
    },
    {
      degree: 'Pearson BTEC HND in Quantity Surveying',
      institution: 'CSCT (College of Science and Construction Technology)',
      location: 'Sri Lanka',
      period: '2018 - 2020',
      type: 'Higher National Diploma',
      highlights: [
        'Foundation in QS principles',
        'Practical industry exposure',
        'Technical drawing and measurement'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Educational <span className="text-gold">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Academic qualifications in Quantity Surveying from reputable institutions
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="md:flex">
                {/* Left Side - Icon & Type */}
                <div className="md:w-1/4 bg-gradient-to-br from-navy to-blue-900 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                  <div className="bg-gold/20 p-6 rounded-full mb-4">
                    <GraduationCap className="text-gold" size={48} />
                  </div>
                  <span className="text-white font-semibold text-lg">{edu.type}</span>
                </div>

                {/* Right Side - Details */}
                <div className="md:w-3/4 p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-2">{edu.degree}</h3>
                      <div className="flex items-center gap-2 text-lg text-gray-700 mb-2">
                        <Award className="text-gold" size={20} />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <p className="text-gray-600">{edu.location}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-lg">
                      <Calendar className="text-gold" size={18} />
                      <span className="text-navy font-semibold">{edu.period}</span>
                    </div>
                  </div>

                  {/* Mobile Period */}
                  <div className="md:hidden flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-lg mb-4 inline-flex">
                    <Calendar className="text-gold" size={18} />
                    <span className="text-navy font-semibold">{edu.period}</span>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-navy mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications Section */}
        <div className="mt-12 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Professional Development</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-lightgray rounded-xl">
              <div className="text-gold text-4xl font-bold mb-2">FIDIC</div>
              <p className="text-gray-700">Contract Management Training</p>
            </div>
            <div className="text-center p-6 bg-lightgray rounded-xl">
              <div className="text-gold text-4xl font-bold mb-2">AutoCAD</div>
              <p className="text-gray-700">Certified in 2D/3D Design</p>
            </div>
            <div className="text-center p-6 bg-lightgray rounded-xl">
              <div className="text-gold text-4xl font-bold mb-2">Revit</div>
              <p className="text-gray-700">BIM Software Proficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
