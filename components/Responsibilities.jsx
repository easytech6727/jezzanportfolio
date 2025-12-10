import { CheckCircle2 } from 'lucide-react';

export default function Responsibilities() {
  const responsibilities = [
    'Prepare Interim Payment Certificates (IPCs) and validate contractor claims',
    'Develop comprehensive Bills of Quantities (BOQs) and tender documentation',
    'Perform accurate quantity take-offs from architectural and engineering drawings',
    'Maintain detailed measurement sheets and cost tracking systems',
    'Conduct value engineering analysis to optimize project costs',
    'Prepare project budgets and cost estimates for new construction works',
    'Perform detailed rate analysis and cost breakdowns for various work items',
    'Review and verify AutoCAD drawings for quantity measurement accuracy',
    'Coordinate with sub-contractors for pricing and scope clarification',
    'Conduct regular site inspections to verify work progress and quality',
    'Prepare variation orders and assess change order impacts',
    'Ensure compliance with FIDIC contract conditions and requirements'
  ];

  return (
    <section id="responsibilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Key <span className="text-gold">Responsibilities</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Core duties and professional activities performed throughout my quantity surveying career
          </p>
        </div>

        {/* Responsibilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {responsibilities.map((responsibility, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-lightgray p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-l-4 hover:border-gold group"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="text-gold group-hover:scale-110 transition-transform duration-300" size={24} />
              </div>
              <p className="text-gray-700 leading-relaxed">{responsibility}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-navy to-blue-900 p-8 rounded-2xl text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Professional Approach</h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Committed to delivering accurate cost estimates, maintaining rigorous documentation standards, 
              and ensuring project financial objectives are met through proactive cost management and 
              collaborative stakeholder engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
