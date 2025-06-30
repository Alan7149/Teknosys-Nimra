import React from 'react';

// Dynamically import all logo images
const images = import.meta.glob('../../assets/images/brands/*{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

const brandLogos = [
  { file: 'sch.png', alt: 'Schneider Electric' },
  { file: 'alfnar.png', alt: 'Alfanar' },
  { file: 'himel.png', alt: 'Himel' },
  { file: 'cawabel.png', alt: 'Cawabel' },
  { file: 'RRKabel.png', alt: 'RRKabel' },
  { file: 'elmex.png', alt: 'Elmex' },
  { file: 'bahra.png', alt: 'Bahra' },
  { file: 'selec.png', alt: 'Selec' },
  { file: 'trinity.png', alt: 'Trinity Touch' },
  { file: 'ksa_enclosure.jpg', alt: 'KSA Enclosure' },
  { file: 'nvent3.png', alt: 'nVent Hoffman' },
  { file: 'pce.png', alt: 'PCE' },
  { file: 'axis.jpg', alt: 'Axis' },
  { file: 'abb.png', alt: 'ABB' },
  { file: 'cs.png', alt: 'C&S Electric' },
  { file: 'jeddahcablescomapny.png', alt: 'Jeddah Cables Company' },
  { file: 'lselectric.jpg', alt: 'LS Electric' },
  { file: 'socomec.png', alt: 'Socomec' },
  { file: 'furse.jpg', alt: 'Furse' },
  { file: 'leipole.png', alt: 'Leipole' },
];

const LeadingBrandsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800 animate-slide-down">
          <span className="text-[var(--secondary-500)]">Our</span> Top Brands
        </h2>
        <div className="border-b-8 border-[var(--primary-500)] w-24 mx-auto mb-12 animate-pulse-slow"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6 w-full mx-auto max-w-full">
          {brandLogos.map((brand, index) => {
            const imageSrc = images[`../../assets/images/brands/${brand.file}`] as string;
            return (
              <div
                key={index}
                className="flex justify-center items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-slide-up-delay"
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