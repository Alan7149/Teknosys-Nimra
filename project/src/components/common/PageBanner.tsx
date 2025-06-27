import React from 'react';
import { Link } from 'react-router-dom';

interface Breadcrumb {
  label: string;
  path?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage: string;
  style?: React.CSSProperties; // Add optional style prop for dynamic styling
}

const PageBanner: React.FC<PageBannerProps> = ({ title, breadcrumbs, backgroundImage, style }) => {
  return (
    <section
      className="relative py-36 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        ...style, // Spread the provided style object to apply dynamic styles
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container relative z-10 text-left text-white">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <nav aria-label="Breadcrumb" className="flex ">
          <ol className="flex space-x-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PageBanner;
export type { PageBannerProps }; // Export the prop type for reuse