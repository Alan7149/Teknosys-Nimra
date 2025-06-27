import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/contact/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Nimra Jeddah Electric Est.</title>
        <meta
          name="description"
          content="Get in touch with Nimra Jeddah Electric Est. for all your electrical material and service needs in Jeddah, KSA."
        />
      </Helmet>

      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get in Touch</h2>
              <p className="mb-6">
                Have questions or need assistance? Our team at Nimra Electricals is here to help. Reach out to us via the form or contact details below.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1 text-primary-500" />
                  <span>
                    P.O. Box 52325, Othman Centre, Jeddah 21563, Kingdom of Saudi Arabia
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-primary-500" />
                  <span>
                    <a href="tel:+966126697155">+966 12 669 7155</a>,{' '}
                    <a href="tel:+966126687733">+966 12 668 7733</a>
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-primary-500" />
                  <a href="mailto:nimraelectric@gmail.com">nimraelectric@gmail.com</a>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Our Sales Team</h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Shoukath Mohammed Ali:</strong>{' '}
                    <a href="tel:+966564676336">+966 564 676 336</a>
                  </li>
                  <li>
                    <strong>Mohammed Rasi:</strong>{' '}
                    <a href="tel:+966567850906">+966 567 850 906</a>
                  </li>
                  <li>
                    <strong>Rahmath Mirza:</strong>{' '}
                    <a href="tel:+966508344852">+966 508 344 852</a>
                  </li>
                  <li>
                    <strong>Shujaat Syed Ahmed:</strong>{' '}
                    <a href="tel:+966508044763">+966 508 044 763</a>
                  </li>
                  <li>
                    <strong>Syed Muzammil:</strong>{' '}
                    <a href="tel:+966572164982">+966 572 164 982</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;