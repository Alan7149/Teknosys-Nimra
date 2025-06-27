import React from "react";
import { Quote } from "lucide-react";

const TestimonialsSection: React.FC = () => {
	const testimonials = [
		{
			id: 1,
			quote: "Nimra Electricals provided us with top-quality enclosures and excellent support for our commercial project in Jeddah.",
			author: "Ahmed Al-Faisal",
			company: "Jeddah Commercial Co.",
		},
		{
			id: 2,
			quote: "Their energy monitoring solutions helped us reduce costs significantly. Highly recommend their services!",
			author: "Sara Mohammed",
			company: "Industrial Complex Jeddah",
		},
		{
			id: 3,
			quote: "The team at Nimra Electricals delivered a seamless automation upgrade for our manufacturing plant.",
			author: "Khalid Hassan",
			company: "Saudi Manufacturing Ltd.",
		},
	];

	return (
		<section className="section bg-gradient-to-b  py-12 sm:py-16">
			<div className="container">
				<h2 className="section-title text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-700 mb-10">
					What Our Clients Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, idx) => (
						<div
							key={testimonial.id}
							className="card p-6 sm:p-8 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between opacity-0 translate-y-8 animate-fade-in-up"
							style={{
								animationDelay: `${idx * 0.15 + 0.2}s`,
								animationFillMode: "forwards",
							}}
						>
							<div>
								<Quote className="w-10 h-10 text-primary-500 mx-auto mb-6" />
								<p className="text-gray-600 text-lg sm:text-xl mb-6 italic leading-relaxed">
									"{testimonial.quote}"
								</p>
							</div>
							<div className="text-center">
								<p className="font-semibold text-xl text-primary-800">
									{testimonial.author}
								</p>
								<p className="text-sm text-gray-500 mt-1">
									{testimonial.company}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
