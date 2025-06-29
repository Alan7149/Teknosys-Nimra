import React from 'react';

// Dynamically import all logo images
const images = import.meta.glob('../../assets/images/brands/*.png', {
  eager: true,
  import: 'default',
});

const brandLogos = [
  { file: 'sch.png', alt: 'schneider electric' },
  { file: 'alfnar.png', alt: 'alfanar' },
  { file: 'himel.png', alt: 'himel' },
  { file: 'cawabel.png', alt: 'cawabel' },
  { file: 'RRKabel.png', alt: 'RRKabel' },
  { file: 'elmex.png', alt: 'elmex' },
  { file: 'bahra.png', alt: 'bahra' },
  { file: 'selec.png', alt: 'selec' },
  { file: 'trinity.png', alt: 'Trinity Touch' },
  { file: 'nvent3.png', alt: 'nvent hoffman' },
  { file: 'pce.png', alt: 'PCE' },
  { file: 'cs.png', alt: 'c&s electric' },
];

const LeadingBrandsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 animate-slide-down">
          <span className="text-[var(--secondary-500)]">Our</span> Leading Brands
        </h2>
        <div className="border-b-4 border-[var(--primary-500)] w-16 mx-auto mb-10 animate-pulse-slow"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brandLogos.map((brand, index) => {
            const imageSrc = images[`../../assets/images/brands/${brand.file}`] as string;
            return (
              <div
                key={index}
                className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 animate-slide-up-delay"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={imageSrc}
                  alt={brand.alt}
                  className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:grayscale-0 grayscale filter"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadingBrandsSection;