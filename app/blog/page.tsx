'use client';

import Navbar from "@/components/navBar";
import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Future of AI in Education',
    excerpt: 'Exploring how artificial intelligence is transforming the way we learn and teach in the digital age.',
    author: 'Dr. Sarah Johnson',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    category: 'AI & Technology',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: '10 Tips for Learning to Code',
    excerpt: 'Essential strategies and best practices for beginners starting their coding journey.',
    author: 'Michael Chen',
    date: 'Jan 12, 2026',
    readTime: '8 min read',
    category: 'Programming',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Building Your First Web App',
    excerpt: 'A step-by-step guide to creating your first full-stack web application from scratch.',
    author: 'Emily Rodriguez',
    date: 'Jan 10, 2026',
    readTime: '12 min read',
    category: 'Web Development',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cybersecurity Best Practices',
    excerpt: 'Protect yourself and your projects with these essential security tips for developers.',
    author: 'James Williams',
    date: 'Jan 8, 2026',
    readTime: '6 min read',
    category: 'Security',
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'The Rise of No-Code Platforms',
    excerpt: 'How no-code and low-code tools are democratizing software development.',
    author: 'Lisa Anderson',
    date: 'Jan 5, 2026',
    readTime: '7 min read',
    category: 'Industry Trends',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Career Paths in Tech',
    excerpt: 'Discover the diverse opportunities available in the technology industry.',
    author: 'David Kim',
    date: 'Jan 3, 2026',
    readTime: '10 min read',
    category: 'Career',
    color: 'from-yellow-500 to-amber-500',
  },
];

export default function BlogPage() {
  return (
    <div className="font-cabinet-grotesk">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-br from-black via-gray-800 to-black bg-clip-text text-transparent"
          >
            Blog & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Stay updated with the latest trends, tips, and insights from the world of technology and education.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${post.color}`} />
                
                <div className="p-8">
                  {/* Category badge */}
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-black/5 rounded-full text-gray-700">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Author info */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                    <span className="text-xs font-medium text-gray-500">{post.readTime}</span>
                  </div>

                  {/* Read more arrow */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-sm font-semibold text-black"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Hover gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}