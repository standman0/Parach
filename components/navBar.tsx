'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

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
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transition background from transparent to solid white with a blue tint on scroll
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 51, 102, 0.1)'] // Subtle Navy border
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        borderBottomColor: navBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        
        {/* Logo - Parach Navy */}
        <Link href="/" className="group relative">
          <motion.span
            className="relative z-10 text-2xl font-black uppercase tracking-tighter text-[#003366]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Parach
          </motion.span>
          <motion.div
            className="absolute inset-0 -z-10 bg-[#00A3FF]/20 blur-xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Center Navigation - Premium Sliding Pill */}
        <motion.ul
          className="hidden md:flex items-center gap-1 rounded-full bg-[#003366]/5 px-2 py-2 backdrop-blur-sm relative border border-[#003366]/5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      style={{ zIndex: 10 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </motion.ul>

        {/* CTA Button - Parach Gold */}
        <Link href="/register">
          <motion.div
            className="group relative overflow-hidden rounded-full bg-[#00A3FF] px-7 py-3 text-sm font-black uppercase tracking-wider text-[#003366] shadow-lg shadow-yellow-500/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 25px -5px rgba(255, 215, 0, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">Get Started</span>
            
            {/* Subtle Shine/Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-white/20 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </motion.div>
        </Link>
      </div>
    </motion.nav>
  );
}