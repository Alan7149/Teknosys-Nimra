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
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="mb-8">The blog post you are looking for does not exist.</p>
        <Link to="/blog" className="btn btn-primary">
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

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <div className="flex items-center mr-6">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="bg-primary-500 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6">
                  Want to learn more about our insights and industry trends? Check out our latest blog posts.
                </p>
                <Link to="/blog" className="btn bg-white text-primary-500 border-white hover:bg-white/90">
                  View All Posts
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-3">
                  {['All', 'Technology', 'Efficiency', 'Guide'].map(
                    (category) => (
                      <li key={category}>
                        <Link
                          to="/blog"
                          className={`inline-flex items-center ${
                            post.category === category ? 'text-secondary-500 font-semibold' : 'text-gray-700 hover:text-secondary-500'
                          } transition-colors`}
                          onClick={() => {
                            // Ideally, update filter in BlogPage; here we just link
                          }}
                        >
                          <ArrowRight className={`w-4 h-4 mr-2 ${post.category === category ? 'text-secondary-500' : 'text-gray-400'}`} />
                          <span>{category}</span>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;