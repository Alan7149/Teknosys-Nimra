import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';

const blogPosts = [
  {
    id: 1,
    title: 'Advancements in Low Voltage Components',
    slug: 'advancements-low-voltage-components',
    excerpt: 'Discover the latest innovations in low voltage components and their impact on energy efficiency.',
    content: `
      <p>Low voltage components are evolving rapidly, with advancements in circuit breakers, contactors, and VFDs leading the way. These innovations are improving energy efficiency in industrial and commercial applications.</p>
      <p>At Nimra Electricals, we distribute top brands like ABB and LS Electric, offering solutions that enhance performance and reduce energy consumption. Recent developments include smart circuit breakers with remote monitoring capabilities.</p>
    `,
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    author: 'Shoukath Mohammed Ali',
    date: '2025-02-15',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Benefits of Energy Monitoring Systems',
    slug: 'benefits-energy-monitoring-systems',
    excerpt: 'Learn how energy monitoring systems can reduce costs and improve power quality.',
    content: `
      <p>Energy monitoring systems are essential for managing power consumption in large facilities. By using digital meters and current transformers, businesses can track usage in real-time.</p>
      <p>Nimra Electricals provides advanced metering solutions, including Diris Digiwire systems, helping clients save on operational costs while improving power quality.</p>
    `,
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    author: 'Mohammed Rasi',
    date: '2025-01-20',
    category: 'Efficiency',
  },
  {
    id: 3,
    title: 'Choosing the Right Enclosure for Your Project',
    slug: 'choosing-right-enclosure',
    excerpt: 'A guide to selecting enclosures for switchgear and control gear applications.',
    content: `
      <p>Selecting the right enclosure is critical for protecting electrical systems. Factors to consider include material (e.g., sheet steel, stainless steel), mounting type, and environmental conditions.</p>
      <p>Nimra Electricals offers a wide range of enclosures, from wall-mounted to floor-standing, ensuring durability and safety for all applications.</p>
    `,
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    author: 'Rahmath Mirza',
    date: '2024-12-10',
    category: 'Guide',
  },
];

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.slug === id);

  if (!post) {
    return (
      <div className="py-32 text-center bg-gradient-to-br from-gray-100 to-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">Blog Post Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          The blog post you are looking for does not exist.
        </p>
        <Link to="/blog" className="btn bg-[var(--primary-500)] text-white px-6 py-3 rounded-full hover:bg-[var(--primary-600)] hover:shadow-lg transition-all duration-300 animate-bounce-in" style={{ animationDelay: '400ms' }}>
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Nimra Jeddah Electric Est.</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <PageBanner
        title={post.title}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post.title },
        ]}
        backgroundImage={post.image}
      />

      <section className="section py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-fade-in-up">
            <div className="lg:col-span-2">
              <div className="mb-8 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[var(--primary-500)]/20 opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center text-sm text-gray-500 mb-6 space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-[var(--primary-500)]" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-[var(--primary-500)]" />
                  <span className="font-medium">{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</span>
                </div>
              </div>
              <div
                className="prose prose-lg max-w-none mb-10 text-gray-700 leading-relaxed animate-slide-up"
                style={{ animationDelay: '200ms' }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--secondary-500)] text-white p-8 rounded-xl shadow-lg animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6 text-lg">Explore more insights and trends in our blog to stay ahead in the electrical industry.</p>
                <Link to="/blog" className="btn bg-white text-[var(--primary-500)] px-6 py-3 rounded-full hover:bg-white/90 hover:shadow-md transition-all duration-300">
                  View All Posts <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md animate-slide-up" style={{ animationDelay: '300ms' }}>
                <h3 className="text-xl font-bold mb-4 text-[var(--primary-500)]">Categories</h3>
                <ul className="space-y-3">
                  {['All', 'Technology', 'Efficiency', 'Guide'].map((category) => (
                    <li key={category}>
                      <Link
                        to="/blog"
                        className={`inline-flex items-center ${post.category === category ? 'text-[var(--secondary-500)] font-semibold' : 'text-gray-700 hover:text-[var(--primary-500)]'} transition-colors`}
                        onClick={() => {}}
                      >
                        <ArrowRight className={`w-4 h-4 mr-2 ${post.category === category ? 'text-[var(--secondary-500)]' : 'text-gray-400'}`} />
                        <span>{category}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md animate-slide-up" style={{ animationDelay: '500ms' }}>
                <h3 className="text-xl font-bold mb-4 text-[var(--primary-500)]">Related Posts</h3>
                <ul className="space-y-3">
                  {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                    <li key={relatedPost.id}>
                      <Link to={`/blog/${relatedPost.slug}`} className="text-gray-700 hover:text-[var(--primary-500)] transition-colors">
                        {relatedPost.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[var(--primary-500)]/5 -z-10 transform skew-y-3 opacity-50"></div>
      </section>
    </>
  );
};

export default BlogDetailPage;