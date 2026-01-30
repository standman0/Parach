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
  { name: 'Courses', href: '/Courses' },
  { name: 'Blog', href: '/Blog' },
  { name: 'About', href: '/About' },
  { name: 'Contact', href: '/Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );

  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.05)']
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        
        <Link href="/" className="group relative">
          <motion.span
            className="relative z-10 text-2xl font-black uppercase tracking-tight bg-gradient-to-br from-black via-gray-800 to-black bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Parach
          </motion.span>
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        
        <motion.ul
          className="hidden md:flex items-center gap-1 rounded-full bg-black/5 px-2 py-2 backdrop-blur-sm relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
              >
                <Link 
                  href={link.href} 
                  className={`relative block px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-200 z-10 ${
                    isActive ? 'text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            );
          })}
          
         
          <AnimatePresence mode="wait">
            {navLinks.map((link, index) => {
              if (pathname === link.href) {
                return (
                  <motion.div
                    key={link.href}
                    layoutId="activeNav"
                    className="absolute bg-black rounded-full shadow-lg shadow-black/20"
                    initial={false}
                    animate={{
                      x: index * 88, 
                      width: 80, 
                      height: 40,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                    style={{ top: 8 }}
                  />
                );
              }
              return null;
            })}
          </AnimatePresence>
        </motion.ul>

        {/* CTA Button */}
        <Link href="/register">
          <motion.div
            className="group relative overflow-hidden rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 pointer-events-auto">Get Started</span>
            
            {/* Gradient overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
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