'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Star, CheckCircle } from 'lucide-react';
import { courses } from '@/lib/data'; 

export default function HomePage() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <main className="font-cabinet-grotesk overflow-hidden bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 px-5 sm:pt-24 sm:pb-20 sm:px-8 md:pt-28 md:pb-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
            
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] sm:leading-[0.85]  mb-6 sm:mb-8 text-[#003366]">
                Learn
                <span className=" pl-2 text-[#00A3FF]">Beyond</span> <br /> 
                Limits.
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-500 max-w-lg mb-8 sm:mb-10 leading-relaxed font-medium">
                Join Ibadan's premier  . Master high-demand tech skills through project-based learning and expert mentorship.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/courses">
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="px-7 py-4 sm:px-10 sm:py-5 bg-[#003366] text-white rounded-full font-black text-base sm:text-lg flex items-center gap-3 shadow-xl shadow-blue-900/20"
                  >
                    Explore Programs <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <button className="px-6 py-4 sm:px-8 sm:py-5 bg-white border-2 border-[#003366] text-[#003366] rounded-full font-black text-base sm:text-lg flex items-center gap-3 hover:bg-slate-50 transition-colors">
                  <div className="p-2 bg-[#00A3FF] rounded-full text-[#003366]"><Play size={14} fill="currentColor" /></div>
                  See How It Works
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative mt-4 sm:mt-0"
            >
              <div className="aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl border-[8px] sm:border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Students at 10X" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 bg-[#00A3FF] p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl max-w-[160px] sm:max-w-[200px] text-[#003366]">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="sm:hidden" fill="currentColor" />)}
                  {[...Array(5)].map((_, i) => <Star key={`d-${i}`} size={16} className="hidden sm:block" fill="currentColor" />)}
                </div>
                <p className="font-black text-xl sm:text-2xl leading-tight">Hands-On</p>
                <p className="text-[#003366]/70 text-xs sm:text-sm font-bold uppercase tracking-tighter">Career Growth</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / LOGOS */}
      <section className="py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-8 sm:mb-12">Trusted by ambitious learners and growing teams</p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-24 opacity-40 grayscale contrast-125">
             <span className="text-lg sm:text-2xl font-black text-[#003366]">MICROSOFT</span>
             <span className="text-lg sm:text-2xl font-black text-[#003366]">GOOGLE</span>
             <span className="text-lg sm:text-2xl font-black text-[#003366]">CISCO</span>
             <span className="text-lg sm:text-2xl font-black text-[#003366]">COMPTIA</span>
             <span className="text-lg sm:text-2xl font-black text-[#003366]">NITDA</span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED COURSES */}
      <section className="py-20 px-5 sm:py-32 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4">
            <div>
              <span className="text-[#00A3FF] font-black uppercase tracking-widest text-sm">Featured Learning Tracks</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none mt-4 text-[#003366]">Build Real <br /> Experience.</h2>
            </div>
            <Link href="/courses" className="bg-[#003366] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-blue-800 transition-colors">
              Explore All Tracks
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredCourses.map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} className="group">
                <div className="relative aspect-[4/5] rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                    <span className="px-3 py-1 bg-[#00A3FF] text-[#003366] text-[10px] font-black uppercase rounded-full w-fit mb-3">
                      {course.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight group-hover:underline decoration-[#00A3FF] underline-offset-8">
                      {course.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY US SECTION */}
      <section className="py-20 px-5 sm:py-32 sm:px-8 bg-[#003366] text-white rounded-[2.5rem] sm:rounded-[4rem] mx-3 sm:mx-4 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A3FF] blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.9] mb-8 sm:mb-12">
                Why 10X <br /> <span className="text-[#00A3FF]">stands out</span>
              </h2>
              
              <div className="space-y-8 sm:space-y-10">
                {[
                  { title: "Hands-On Practice", desc: "You learn by building real products, solving real problems, and shipping work that reflects industry standards." },
                  { title: "Mentorship & Feedback", desc: "Live guidance from experienced instructors helps you improve faster and grow with confidence." },
                  { title: "Career Readiness", desc: "From portfolio projects to collaboration and weekly classes, every step prepares you for the next opportunity." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 sm:gap-6 items-start">
                    <div className="p-3 bg-[#00A3FF] rounded-2xl shrink-0"><CheckCircle className="text-[#003366]" /></div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-blue-100/60 text-base sm:text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 sm:p-4 bg-white/5 rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/10 backdrop-blur-sm">
               <div className="aspect-square rounded-[2rem] sm:rounded-[3rem] bg-slate-900 overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#00A3FF] rounded-full flex items-center justify-center text-[#003366] shadow-2xl animate-pulse">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 text-center px-5 sm:py-32 sm:px-8 md:py-40">
        <span className="text-[#003366] font-black uppercase tracking-[0.5em] text-xs">Launch your tech career</span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mt-5 mb-8 sm:mt-6 sm:mb-10 italic text-[#003366]">
          READY TO <span className="text-[#00A3FF] not-italic">GROW?</span>
        </h2>
        <p className="text-lg sm:text-2xl text-slate-500 mb-10 sm:mb-12 max-w-2xl mx-auto font-medium">
          Join a community of learners building skills, projects, and momentum for the next chapter of their careers.
        </p>
        <Link href="https://10X-sms.vercel.app/">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-6 sm:px-16 sm:py-8 bg-[#00A3FF] text-[#003366] rounded-full font-black text-lg sm:text-2xl shadow-2xl shadow-yellow-500/20 uppercase tracking-widest"
          >
            Join the Next Cohort
          </motion.button>
        </Link>
      </section>
      
    </main>
  );
}