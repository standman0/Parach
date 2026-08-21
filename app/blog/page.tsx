'use client';

import Navbar from '@/components/navBar';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, Clock, UserRound } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-cabinet-grotesk text-black">
      <Navbar />

      <section className="pt-40 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-12"
          >
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider uppercase bg-black text-white rounded-full">
                Insights & Stories
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
                Learn From <br /> The Best.
              </h1>
            </div>
            <p className="text-xl text-gray-500 max-w-sm mb-2">
              Explore practical lessons, trends, and expert perspectives from the world of education and technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {blogPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group flex flex-col"
                >
                <div className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-6 bg-gradient-to-br ${post.color} shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_40%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_55%)]" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-black text-xs font-bold uppercase rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                      <Clock size={14} />
                      Featured Insight
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4">
                      {post.title}
                    </h3>
                    <div className="bg-black text-white p-2 rounded-full -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

          

                  <div className="flex items-center justify-between">
                   
                    <span className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                      Read More
                    </span>
                  </div>
                </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}