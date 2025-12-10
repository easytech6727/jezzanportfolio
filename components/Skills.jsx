import { FileText, Calculator, Pencil, DollarSign, TrendingUp, Ruler, Users, ClipboardCheck, FileSpreadsheet, Building } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      name: 'BOQ Preparation',
      icon: FileText,
      description: 'Bills of Quantities'
    },
    {
      name: 'Cost Estimation',
      icon: Calculator,
      description: 'Accurate Pricing'
    },
    {
      name: 'AutoCAD',
      icon: Pencil,
      description: '2D/3D Drawings'
    },
    {
      name: 'Revit',
      icon: Building,
      description: 'BIM Modeling'
    },
    {
      name: 'PlanSwift',
      icon: Ruler,
      description: 'Digital Takeoff'
    },
    {
      name: 'Excel',
      icon: FileSpreadsheet,
      description: 'Data Analysis'
    },
    {
      name: 'Value Engineering',
      icon: TrendingUp,
      description: 'Cost Optimization'
    },
    {
      name: 'Rate Breakdown',
      icon: DollarSign,
      description: 'Detailed Analysis'
    },
    {
      name: 'Cost Control',
      icon: ClipboardCheck,
      description: 'Budget Management'
    },
    {
      name: 'Tender Documentation',
      icon: FileText,
      description: 'Contract Preparation'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Technical <span className="text-gold">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in quantity surveying tools, software, and methodologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon Container */}
                  <div className="bg-gradient-to-br from-navy to-blue-900 p-4 rounded-lg group-hover:from-gold group-hover:to-yellow-500 transition-all duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="font-bold text-navy text-lg">{skill.name}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Additional Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-gold text-3xl font-bold mb-2">FIDIC</div>
              <p className="text-gray-600">Contract Documentation</p>
            </div>
            <div className="text-center p-4">
              <div className="text-gold text-3xl font-bold mb-2">IPC</div>
              <p className="text-gray-600">Payment Certificates</p>
            </div>
            <div className="text-center p-4">
              <div className="text-gold text-3xl font-bold mb-2">Site QS</div>
              <p className="text-gray-600">On-site Measurements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
