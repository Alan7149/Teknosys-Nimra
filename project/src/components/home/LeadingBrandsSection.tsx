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
    <section className=" py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-secondary-500">Our</span> Brands
        </h2>
        <div className="border-b-2 border-gray-300 mb-6"></div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 prc-ul leading-brands-ul text-left">
          {brandLogos.map((brand, index) => {
            const imageSrc = images[`../../assets/images/brands/${brand.file}`] as string;
            return (
              <li key={index} className="flex justify-center items-center p-2">
                <img
                  src={imageSrc}
                  alt={brand.alt}
                  className="transition duration-300 grayscale hover:grayscale-0 object-contain h-16 w-auto max-h-16"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default LeadingBrandsSection;