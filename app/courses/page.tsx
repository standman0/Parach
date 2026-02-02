'use client';

import { useState } from 'react';
import Navbar from "@/components/navBar";
import { courses } from "@/lib/data";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Clock, BarChart, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '@/components/footer';

export default function CoursesPage() {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Logic to calculate displayed courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to top of grid when page changes
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-cabinet-grotesk text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-12"
          >
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider uppercase bg-black text-white rounded-full">
                Our Catalog
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
                Unlock Your <br /> Potential.
              </h1>
            </div>
            <p className="text-xl text-gray-500 max-w-sm mb-2">
              Explore our curated selection of {courses.length} high-impact courses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* We use AnimatePresence to make page transitions smooth */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            <AnimatePresence mode="wait">
              {currentCourses.map((course, index) => (
                <motion.div
                  key={course.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex flex-col"
                >
                  {/* Link to Detail Page */}
                  <Link href={`/courses/${course.slug}`} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-6 block">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={course.image}
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-black text-xs font-bold uppercase rounded-full shadow-sm">
                        {course.category}
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <Link href={`/courses/${course.slug}`}>
                        <h3 className="text-2xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4">
                          {course.title}
                        </h3>
                      </Link>
                      <div className="bg-black text-white p-2 rounded-full -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-6 mb-8 mt-auto">
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <Clock size={16} />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <BarChart size={16} />
                        {course.level}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black">{course.price}</span>
                      <Link 
                        href="/register"
                        className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-24 flex items-center justify-center gap-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-4 rounded-full border border-gray-200 transition-all ${
                  currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black hover:text-white'
                }`}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`w-12 h-12 rounded-full font-bold text-sm transition-all ${
                      currentPage === i + 1 
                        ? 'bg-black text-white' 
                        : 'bg-white border border-gray-200 hover:border-black'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-4 rounded-full border border-gray-200 transition-all ${
                  currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black hover:text-white'
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </section>
    
    </div>
  );
}