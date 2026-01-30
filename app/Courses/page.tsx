'use client';

import Navbar from "@/components/navBar";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Clock, BarChart } from 'lucide-react'; // Install lucide-react if you haven't

const courses = [
  {
    title: 'Web Development Bootcamp',
    category: 'Development',
    description: 'Master HTML, CSS, JavaScript, React, and Next.js to build modern web applications.',
    duration: '12 weeks',
    level: 'Beginner',
    price: '₦150,000',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Python for Data Science',
    category: 'Data Science',
    description: 'Learn Python from scratch and dive into data science, automation, and AI.',
    duration: '10 weeks',
    level: 'Intermediate',
    price: '₦120,000',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Mobile App Design',
    category: 'Design',
    description: 'Build cross-platform mobile apps with React Native and deploy to iOS & Android.',
    duration: '14 weeks',
    level: 'Advanced',
    price: '₦180,000',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'UI/UX Design Masterclass',
    category: 'Design',
    description: 'Master Figma, design thinking, and create beautiful user experiences.',
    duration: '8 weeks',
    level: 'Beginner',
    price: '₦100,000',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Cybersecurity Ethical Hacking',
    category: 'Security',
    description: 'Learn ethical hacking, network security, and protect digital systems.',
    duration: '12 weeks',
    level: 'Intermediate',
    price: '₦160,000',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'AI & Machine Learning',
    category: 'Artificial Intelligence',
    description: 'Explore artificial intelligence, neural networks, and build ML models.',
    duration: '16 weeks',
    level: 'Advanced',
    price: '₦200,000',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-cabinet-grotesk">
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
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black leading-[0.9]">
                Unlock Your <br /> Potential.
              </h1>
            </div>
            <p className="text-xl text-gray-500 max-w-sm mb-2">
              Explore our curated selection of high-impact courses designed to get you hired.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col"
              >
                {/* Course Image Wrapper */}
                <Link href={`/courses/${course.slug}`} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-6 block">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
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

                {/* Course Details */}
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4">
                      {course.title}
                    </h3>
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
          </div>
        </div>
      </section>
    </div>
  );
}