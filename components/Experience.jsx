import { Building2, Calendar } from 'lucide-react';

export default function Experience() {
  const projects = [
    {
      name: 'Professorial Unit – Batticaloa',
      value: 'LKR 133M',
      type: 'Educational Facility'
    },
    {
      name: 'PLC Auditorium – Dankotuwa',
      value: 'LKR 112M',
      type: 'Auditorium Complex'
    },
    {
      name: "St. Anne's College Classroom Building",
      value: 'LKR 112M',
      type: 'Educational Facility'
    },
    {
      name: 'Holy Family Balika Laboratory',
      value: 'LKR 30M',
      type: 'Laboratory Facility'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Work <span className="text-gold">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gold hidden md:block"></div>

            {/* Company Experience */}
            <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:ml-20 mb-8">
              {/* Timeline Dot */}
              <div className="absolute -left-12 top-8 w-8 h-8 bg-gold rounded-full border-4 border-white shadow-lg hidden md:block"></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    Quantity Surveyor
                  </h3>
                  <div className="flex items-center gap-2 text-gold font-semibold text-lg mb-2">
                    <Building2 size={20} />
                    <span>Nazeeha Construction (PVT) Ltd</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-lg">
                  <Calendar size={18} />
                  <span className="font-semibold">Jan 2023 – Present</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Leading quantity surveying activities for multiple large-scale construction projects, 
                managing cost estimation, BOQ preparation, and ensuring project delivery within budget constraints.
              </p>

              {/* Projects Grid */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-navy mb-4">Key Projects:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-lightgray p-5 rounded-xl border-l-4 border-gold hover:shadow-lg transition-shadow duration-300"
                    >
                      <h5 className="font-bold text-navy mb-2">{project.name}</h5>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{project.type}</span>
                        <span className="text-gold font-bold">{project.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Value */}
              <div className="mt-6 bg-gradient-to-r from-navy to-blue-900 text-white p-6 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Project Value:</span>
                  <span className="text-3xl font-bold text-gold">LKR 387M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
