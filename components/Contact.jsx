import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 722 471 104',
      href: 'tel:+94722471104'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mohamedjezan648@gmail.com',
      href: 'mailto:mohamedjezan648@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'mohamed-jezan',
      href: 'https://www.linkedin.com/in/mohamed-jezan-9b6857395'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dubai / Sri Lanka',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy via-navy to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your project needs? Feel free to reach out for QS opportunities in Dubai
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Open to discussing Quantity Surveying opportunities in Dubai. 
                Let's connect and explore how I can contribute to your construction projects.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/10 p-4 sm:p-5 rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="bg-gold p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-navy" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label === 'LinkedIn' ? '_blank' : undefined}
                          rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                          className="text-white font-semibold hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability Badge */}
            <div className="bg-gold/20 border-2 border-gold p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gold font-bold text-lg">Available for Opportunities</span>
              </div>
              <p className="text-white text-sm">
                Currently seeking Quantity Surveyor positions in Dubai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
