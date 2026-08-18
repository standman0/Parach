'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Instagram, Twitter, Linkedin, Github, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003366] pt-24 pb-12 px-8 font-cabinet-grotesk text-white overflow-hidden relative">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A3FF] blur-[180px] opacity-[0.03] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: Brand & Description */}
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <Link href="/" className="text-4xl font-black tracking-tighter uppercase mb-8 block">
              10X
            </Link>
            <p className="text-xl text-blue-100/70 leading-relaxed max-w-md italic mb-10">
              "10X helps learners build practical tech skills, ship real projects, and grow into confident professionals through guided mentorship and weekly learning programs."
            </p>
            <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4 text-3xl font-black group cursor-pointer w-fit">
              
                           </div>
            </div>
          </div>

          {/* Locations Grid */}
      
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-white/10">
          <div>
            <h4 className="font-black text-lg mb-8 text-[#00A3FF]">Popular Courses</h4>
            <ul className="space-y-4 font-bold text-blue-100/60">
              <li><Link href="/courses" className="hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Product & Web Skills</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Data & Automation</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Mentored Cohorts</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Portfolio Building</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 text-[#00A3FF]">Learning Resources</h4>
            <ul className="space-y-4 font-bold text-blue-100/60">
              <li><Link href="/courses" className="hover:text-white transition-colors">Explore Programs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Career Growth Resources</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors italic">Community Learning Hub</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-2">
            <h4 className="font-black text-lg mb-4 italic uppercase tracking-tight text-white">Join the Community</h4>
            <p className="text-blue-100/60 font-bold mb-8">Stay updated with new cohorts, practical insights, and career-ready learning opportunities.</p>
            <form className="relative group max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 font-bold focus:ring-2 focus:ring-[#00A3FF] outline-none transition-all placeholder:text-white/20 text-white"
              />
              <button className="absolute right-3 top-3 bottom-3 px-6 bg-[#00A3FF] text-[#003366] rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                <span>Subscribe</span>
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xs uppercase tracking-[0.2em] text-blue-100/40">
              © {new Date().getFullYear()} 10X. Talent development for the next generation of builders.
            </p>
          </div>
          
          <div className="flex gap-8">
            {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
              <Link key={i} href="#" className="text-white/40 hover:text-[#00A3FF] transition-colors">
                <Icon size={22} strokeWidth={2.5} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}