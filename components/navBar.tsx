'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

type NavLink = {
  name: string;
  href?: string;
  isComingSoon?: boolean;
  action?: 'link' | 'modal';
};

const navLinks: NavLink[] = [
  { name: 'Home', href: '/', action: 'link' },
  { name: 'Courses', href: '/courses', action: 'link' },
  { name: 'Blog', href: '/blog', action: 'link' },
  { name: '10X Talent', href: '#', isComingSoon: true, action: 'modal' },
  { name: 'Contact', href: '/contact', action: 'link' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [notifyRequested, setNotifyRequested] = useState(false);
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


  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

 
  useEffect(() => {
    if (isOpen || isComingSoonOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isComingSoonOpen]);

  useEffect(() => {
    if (!isComingSoonOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsComingSoonOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isComingSoonOpen]);

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: navBackground,
          borderBottomColor: navBorder,
        }}
        className="fixed top-0 left-0 right-0 z-[100] border-b backdrop-blur-xl transition-all duration-300"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5">

          {/* Logo */}
          <Link href="/" className="group relative z-[110]">
            <motion.span
              className="relative z-10 text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tighter text-[#003366]"
            >
              10X
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
              const isActive = link.href ? pathname === link.href : false;

              if (link.action === 'modal') {
                return (
                  <li key={link.name} className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setNotifyRequested(false);
                        setIsComingSoonOpen(true);
                      }}
                      className="relative flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full transition-colors duration-300 z-10 text-slate-600 hover:text-[#003366]"
                    >
                      <span className="relative z-20">{link.name}</span>
                      {link.isComingSoon && (
                        <span className="inline-flex items-center rounded-full border border-[#00A3FF]/20 bg-[#00A3FF]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#003366]">
                          Coming Soon
                        </span>
                      )}
                    </button>
                  </li>
                );
              }

              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href || '/'}
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


            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 md:hidden text-[#003366] hover:bg-[#003366]/5 rounded-full transition-colors"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} className="sm:hidden" /> : <Menu size={24} className="sm:hidden" />}
              {isOpen ? <X size={28} className="hidden sm:block" /> : <Menu size={28} className="hidden sm:block" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[90] bg-white pt-24 px-6 sm:pt-28 sm:px-8 md:pt-32 overflow-y-auto md:hidden"
          >
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-full h-full bg-[#F8FAFC] -z-10" />

     
            <motion.nav
              className="flex flex-col gap-5 sm:gap-8"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => {
                const isActive = link.href ? pathname === link.href : false;

                if (link.action === 'modal') {
                  return (
                    <motion.div
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, x: -24 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setNotifyRequested(false);
                          setIsComingSoonOpen(true);
                        }}
                        className="flex flex-wrap items-center gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter transition-colors text-[#003366]"
                      >
                        <span>{link.name}</span>
                        {link.isComingSoon && (
                          <span className="inline-flex items-center rounded-full border border-[#00A3FF]/20 bg-[#00A3FF]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#003366]">
                            Coming Soon
                          </span>
                        )}
                      </button>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -24 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <Link
                      href={link.href || '/'}
                      className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter transition-colors ${
                        isActive ? 'text-[#00A3FF]' : 'text-[#003366]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                className="pt-6 sm:pt-8 border-t border-slate-200 mt-2 sm:mt-4 pb-28 sm:pb-24"
              >
                <Link
                  href="https://10X-sms.vercel.app/"
                  className="flex items-center justify-between bg-[#003366] text-white p-5 sm:p-6 rounded-3xl shadow-lg shadow-black/20"
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight">Enroll Now</span>
                  <ArrowUpRight size={28} className="shrink-0 sm:hidden" />
                  <ArrowUpRight size={32} className="shrink-0 hidden sm:block" />
                </Link>
              </motion.div>
            </motion.nav>

           
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="fixed bottom-6 left-6 sm:absolute sm:bottom-12 sm:left-8"
            >
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-2">Help Center</p>
              <p className="text-[#003366] font-black text-base sm:text-lg">+234 705 524 7562</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isComingSoonOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[130] flex items-center justify-center bg-slate-950/60 px-4 py-8 backdrop-blur-sm"
            onClick={() => setIsComingSoonOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-white p-5 sm:p-8 shadow-2xl shadow-slate-950/20"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#00A3FF]/10 text-[#00A3FF]">
                  <Sparkles size={22} />
                </div>
                <button
                  type="button"
                  onClick={() => setIsComingSoonOpen(false)}
                  className="rounded-full border border-slate-200 p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Close coming soon notice"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-[#00A3FF]/20 bg-[#00A3FF]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-[#003366]">
                  Launching Soon
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#003366]">
                  🚀 10X Talent is Coming Soon
                </h2>
                <p className="text-base leading-7 sm:leading-8 text-slate-600">
                  We&apos;re building <span className="font-semibold text-[#003366]">10X Talent</span>—a next-generation platform that connects exceptional tech talent with world-class career opportunities.
                </p>
                <p className="text-base leading-7 sm:leading-8 text-slate-600">
                  From developer profiles and portfolio showcases to job matching, recruitment tools, and career growth resources, 10X Talent will help bridge the gap between skilled professionals and innovative companies.
                </p>
                <p className="text-base leading-7 sm:leading-8 text-slate-600">
                  We&apos;re working hard to deliver an incredible experience. Stay tuned!
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setNotifyRequested(true);
                    setIsComingSoonOpen(false);
                  }}
                  className="rounded-full border border-[#003366]/10 bg-[#003366]/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#003366] transition-colors hover:bg-[#003366]/10"
                >
                  {notifyRequested ? 'You&apos;re on the list' : 'Notify Me'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsComingSoonOpen(false)}
                  className="rounded-full bg-[#00A3FF] px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#0097e6]"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}