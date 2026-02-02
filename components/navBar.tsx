'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 51, 102, 0.1)']
  );

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: navBackground,
          borderBottomColor: navBorder,
        }}
        className="fixed top-0 left-0 right-0 z-[100] border-b backdrop-blur-xl transition-all duration-300"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
          
          {/* Logo */}
          <Link href="/" className="group relative z-[110]">
            <motion.span
              className="relative z-10 text-xl md:text-2xl font-black uppercase tracking-tighter text-[#003366]"
            >
              Parach
            </motion.span>
            <motion.div
              className="absolute inset-0 -z-10 bg-[#00A3FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden md:flex items-center gap-1 rounded-full bg-[#003366]/5 px-2 py-2 backdrop-blur-sm relative border border-[#003366]/5"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link 
                    href={link.href} 
                    className={`relative block px-5 py-2.5 text-sm font-bold rounded-full transition-colors duration-300 z-10 ${
                      isActive ? 'text-white' : 'text-slate-600 hover:text-[#003366]'
                    }`}
                  >
                    <span className="relative z-20">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-[#003366] rounded-full shadow-lg shadow-[#003366]/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        style={{ zIndex: 10 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </motion.ul>

          {/* Right Side: CTA + Mobile Toggle */}
          <div className="flex items-center gap-4 z-[110]">
            <Link href="https://parach-sms.vercel.app/" className="hidden sm:block">
              <motion.div
                className="group relative overflow-hidden rounded-full bg-[#00A3FF] px-6 py-2.5 text-xs md:text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-[#00A3FF]/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 md:hidden text-[#003366] hover:bg-[#003366]/5 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[90] bg-white pt-32 px-8 md:hidden"
          >
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-full h-full bg-[#F8FAFC] -z-10" />
            
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className={`text-5xl font-black tracking-tighter transition-colors ${
                        isActive ? 'text-[#00A3FF]' : 'text-[#003366]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-8 border-t border-slate-200 mt-4"
              >
                <Link 
                  href="https://parach-sms.vercel.app/"
                  className="flex items-center justify-between bg-[#003366] text-white p-6 rounded-3xl"
                >
                  <span className="text-2xl font-bold uppercase tracking-tight">Enroll Now</span>
                  <ArrowUpRight size={32} />
                </Link>
              </motion.div>
            </nav>

            {/* Contact Info in Mobile Menu */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="absolute bottom-12 left-8"
            >
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-2">Help Center</p>
              <p className="text-[#003366] font-black text-lg">+234 705 524 7562</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}