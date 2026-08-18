'use client';

import { useParams } from 'next/navigation';
import { courses } from '@/lib/data'; // Import your shared data
import Navbar from "@/components/navBar";
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, BarChart, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/footer';
import { getWhatsAppEnrollmentUrl } from '@/lib/utils';

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-blue-600 font-bold underline">Back to All Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-cabinet-grotesk text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <Link href="/courses" className="flex items-center gap-2 text-gray-400 hover:text-black mb-12 transition-colors group w-fit">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-[10px]">Back to Catalog</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Content Left */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="px-4 py-1.5 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                  {course.category}
                </span>
                <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
                  {course.title}
                </h1>
                
                {/* Hero Image */}
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>

                {/* Body Content */}
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-black mb-6">What you'll build</h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-12">
                    {course.longDescription}
                  </p>

                  <h2 className="text-3xl font-black mb-6">What the program covers</h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-16">
                    {course.lessons.map((lesson, i) => (
                      <div key={i} className="flex items-center gap-3 p-5 bg-[#F8F9FA] rounded-2xl border border-gray-100">
                        <CheckCircle2 className="text-black" size={20} />
                        <span className="font-bold text-gray-800">{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar Right (Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="p-8 bg-black rounded-[2.5rem] text-white shadow-2xl">
                  <div className="mb-8">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Program Investment</p>
                    <div className="text-5xl font-black">{course.price}</div>
                  </div>

                  <div className="space-y-5 mb-8">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock size={16} /> <span>Weekly Schedule</span>
                      </div>
                      <span className="font-bold">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <BarChart size={16} /> <span>Experience Level</span>
                      </div>
                      <span className="font-bold">{course.level}</span>
                    </div>
                  </div>

                  <motion.a
                    href={getWhatsAppEnrollmentUrl(course.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full py-5 bg-white text-black rounded-full font-black text-lg shadow-lg text-center"
                  >
                    Enroll Now
                  </motion.a>

                  <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 uppercase text-[10px] font-bold tracking-tighter">
                    <ShieldCheck size={14} />
                    <span>Live mentorship • portfolio-ready outcomes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
   
  );
}