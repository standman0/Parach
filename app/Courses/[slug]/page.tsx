'use client';

import { courses } from '@/lib/data';
import Navbar from "@/components/navBar";
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Clock, BarChart, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailPage() {
  const params = useParams();
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) return <div className="pt-32 text-center">Course not found</div>;

  return (
    <div className="min-h-screen bg-white font-cabinet-grotesk">
      <Navbar />

      <main className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/courses" className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-wider text-xs">Back to Courses</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Column: Content */}
            <div className="lg:col-span-2">
              <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-gray-100 text-gray-800 rounded-full"
              >
                {course.category}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black mb-8 leading-[0.95]"
              >
                {course.title}
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-12 border border-gray-100 shadow-2xl"
              >
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </motion.div>

              <div className="prose prose-xl max-w-none">
                <h2 className="text-3xl font-bold mb-4">About this course</h2>
                <p className="text-gray-600 text-xl leading-relaxed mb-12">
                  {course.longDescription}
                </p>

                <h2 className="text-3xl font-bold mb-6">What you'll learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.lessons?.map((lesson, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span className="font-bold text-gray-700">{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 bg-black rounded-[2.5rem] text-white">
                <div className="mb-8">
                  <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Investment</span>
                  <div className="text-5xl font-black mt-2">{course.price}</div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock size={18} />
                      <span>Duration</span>
                    </div>
                    <span className="font-bold">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-gray-300">
                      <BarChart size={18} />
                      <span>Level</span>
                    </div>
                    <span className="font-bold">{course.level}</span>
                  </div>
                </div>

                <Link href="/register">
                  <button className="w-full py-5 bg-white text-black rounded-full font-black text-lg hover:bg-gray-200 transition-colors shadow-xl shadow-white/5">
                    Enroll in Course
                  </button>
                </Link>
                
                <p className="text-center text-gray-500 text-xs mt-6 font-medium uppercase tracking-tighter">
                  Secure Checkout • Instant Access • Certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}