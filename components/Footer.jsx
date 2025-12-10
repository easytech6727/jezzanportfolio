import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              © {currentYear} Mohamed Jezan. All rights reserved.
            </p>
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p className="flex items-center gap-2 justify-center md:justify-end">
              Built with <Heart className="text-gold" size={16} fill="currentColor" /> for Dubai opportunities
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            Professional Quantity Surveyor | Open for opportunities in Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
