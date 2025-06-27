import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/home/HeroSlider';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import LeadingBrandsSection from '../components/home/LeadingBrandsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const slides = [
  {
    image: '/assets/images/electrical-bg1.webp',
    title: 'Welcome to Nimra Electricals',
    subtitle: 'Leading provider of electrical solutions in Jeddah, KSA since 2009.',
    ctaText: 'Explore Our Services',
    ctaLink: '/services',
  },
  {
    image: '/assets/images/electrical-bg2.webp',
    title: 'Quality You Can Trust',
    subtitle: 'Delivering innovative electrical products and services.',
    ctaText: 'View Projects',
    ctaLink: '/projects',
  },
];

const services = [
  {
    id: '1',
    title: 'Electrical Supply',
    description: 'High-quality electrical materials including transformers, switch gears, and cables.',
    image: '/assets/images/service-supply.webp',
    link: '/services/supply',
  },
  {
    id: '2',
    title: 'Installation & Commissioning',
    description: 'Expert installation and testing of electrical systems for optimal performance.',
    image: '/assets/images/service-installation.webp',
    link: '/services/installation',
  },
  {
    id: '3',
    title: 'Maintenance Services',
    description: 'Preventive maintenance and automation solutions to ensure reliability.',
    image: '/assets/images/service-maintenance.webp',
    link: '/services/maintenance',
  },
];

const aboutProps = {
  title: 'About Nimra Electricals',
  description:
    'Founded in 2009, Nimra Jeddah Electric Est. is a trusted name in electrical solutions, offering a wide range of products and services in Jeddah, KSA.',
  ctaText: 'Learn More',
  ctaLink: '/about',
  image: '/assets/images/about-bg.webp',
};

const HomePage: React.FC = () => {
  return (
    <main id="main-content">
      <Helmet>
        <title>Nimra Jeddah Electric Est. - Electrical Solutions</title>
        <meta
          name="description"
          content="Nimra Jeddah Electric Est. provides top-quality electrical materials and services in Jeddah, KSA. Explore our solutions today."
        />
      </Helmet>

      <HeroSlider slides={slides} />

      <section className="section bg-neutral-50 mt-8 sm:mt-10 md:mt-12">
        <div className="container">
          <ServicesSection services={services} />
        </div>
      </section>

      <section className="section mt-8 sm:mt-10 md:mt-12">
        <div className="container">
          <AboutSection {...aboutProps} />
        </div>
      </section>

      <section className="section bg-neutral-50 py-12 sm:py-16 mt-8 sm:mt-10 md:mt-12">
        <div className="container-full">
          <LeadingBrandsSection />
        </div>
      </section>

      <section className="section mt-8 sm:mt-10 md:mt-12">
        <div className="container">
          <TestimonialsSection />
        </div>
      </section>

      <section className="section bg-primary-500 text-white mt-8 sm:mt-10 md:mt-12">
        <div className="container-full">
          <CtaSection />
        </div>
      </section>
    </main>
  );
};

export default HomePage;