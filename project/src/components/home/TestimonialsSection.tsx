import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: 'Nimra Electricals provided us with top-quality enclosures and excellent support for our commercial project in Jeddah.',
      author: 'Ahmed Al-Faisal',
      company: 'Jeddah Commercial Co.',
    },
    {
      id: 2,
      quote: 'Their energy monitoring solutions helped us reduce costs significantly. Highly recommend their services!',
      author: 'Sara Mohammed',
      company: 'Industrial Complex Jeddah',
    },
    {
      id: 3,
      quote: 'The team at Nimra Electricals delivered a seamless automation upgrade for our manufacturing plant.',
      author: 'Khalid Hassan',
      company: 'Saudi Manufacturing Ltd.',
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-6 text-center">
              <Quote className="w-8 h-8 text-primary-500 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;