'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

export default function WorkPhotos() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      src: '/IMG-20251210-WA0098.jpg',
      alt: 'Site Visit - Professorial Unit Batticaloa',
      category: 'Site Visit'
    },
    {
      src: '/IMG-20251210-WA0099.jpg',
      alt: 'Construction Progress - PLC Auditorium',
      category: 'Progress'
    },
    {
      src: '/IMG-20251210-WA0100.jpg',
      alt: 'BOQ Documentation Sample',
      category: 'Documentation'
    },
    {
      src: '/IMG-20251210-WA0101.jpg',
      alt: 'AutoCAD Drawing Review',
      category: 'Technical'
    },
    {
      src: '/IMG-20251210-WA0102.jpg',
      alt: 'Site Measurement Activity',
      category: 'Site Visit'
    },
    {
      src: '/IMG-20251210-WA0103.jpg',
      alt: 'Project Meeting',
      category: 'Collaboration'
    },
    {
      src: '/IMG-20251210-WA0104.jpg',
      alt: 'Quality Inspection',
      category: 'Inspection'
    },
    {
      src: '/IMG-20251210-WA0105.jpg',
      alt: 'Measurement Sheets',
      category: 'Documentation'
    }
  ];

  return (
    <section id="work-photos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Project Photo <span className="text-gold">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visual documentation of site visits, technical work, and project milestones
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(photo)}
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent p-4">
                <span className="inline-block bg-gold text-navy px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  {photo.category}
                </span>
                <p className="text-white text-sm font-medium">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            <div className="max-w-5xl w-full">
              <div className="relative h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-6">
                <span className="inline-block bg-gold text-navy px-4 py-2 rounded-full text-sm font-semibold mb-3">
                  {selectedImage.category}
                </span>
                <p className="text-white text-lg">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}

        {/* Note about uploading photos */}
        <div className="mt-12 bg-lightgray p-6 rounded-xl max-w-3xl mx-auto text-center">
          <p className="text-gray-700">
            <span className="font-semibold text-navy">Note:</span> Replace placeholder images by adding your actual project photos to the{' '}
            <code className="bg-white px-2 py-1 rounded text-gold">/public/work/</code> folder.
          </p>
        </div>
      </div>
    </section>
  );
}
