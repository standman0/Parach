'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Globe, 
  ArrowUpRight, 
  Plus, 
  Minus,
  CheckCircle2
} from 'lucide-react';

const faqs = [
  {
    question: "When is the next enrollment cohort?",
    answer: "We start new cohorts every month for most of our courses. Our flagship bootcamps (Web Dev and Data Science) have quarterly intakes in January, April, July, and October."
  },
  {
    question: "Do you offer weekend classes for working professionals?",
    answer: "Yes, we have dedicated weekend sessions and evening tracks designed specifically for professionals looking to transition into tech without quitting their current jobs."
  },
  {
    question: "Are your certificates globally recognized?",
    answer: "Absolutely. Parach ICT Academy is a registered training center. Our curriculum is aligned with international industry standards, and our alumni work at top firms globally."
  },
  {
    question: "Is there a payment plan available?",
    answer: "Yes, we offer flexible installment plans. Typically, you can pay 60% to start and spread the balance over the first half of your program duration."
  }
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white font-cabinet-grotesk text-[#003366] pt-48 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. HEADER SECTION */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase bg-[#003366]/5 text-[#003366] rounded-full border border-[#003366]/10"
          >
            Get in touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter italic"
          >
            LET'S <br /> 
            <span className="not-italic text-[#00A3FF]">TALK.</span>
          </motion.h1>
        </div>

        {/* 2. CONTACT INFO & FORM SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 mb-40">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="max-w-md">
              <p className="text-2xl text-slate-500 leading-relaxed font-medium italic">
                "Have a question about our courses or need career advice? Our team is here to help you navigate your tech journey."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#00A3FF] uppercase text-[10px] font-black tracking-widest">
                  <Mail size={16} /> <span>Email Us</span>
                </div>
                <p className="text-xl font-bold hover:text-[#00A3FF] transition-colors cursor-pointer underline decoration-slate-200 underline-offset-8">hello@parachict.com</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#00A3FF] uppercase text-[10px] font-black tracking-widest">
                  <MessageSquare size={16} /> <span>Support</span>
                </div>
                <p className="text-xl font-bold hover:text-[#00A3FF] transition-colors cursor-pointer underline decoration-slate-200 underline-offset-8">+234 705 524 7562</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#00A3FF] uppercase text-[10px] font-black tracking-widest">
                  <MapPin size={16} /> <span>Main Center</span>
                </div>
                <p className="text-xl font-bold leading-tight">
                  Complex Beside Odusote Bookstores, <br />
                  Samonda, Ibadan.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#00A3FF] uppercase text-[10px] font-black tracking-widest">
                  <Globe size={16} /> <span>Follow Us</span>
                </div>
                <div className="flex gap-6 font-black text-sm">
                  <span className="hover:text-[#00A3FF] cursor-pointer transition-colors">TWITTER</span>
                  <span className="hover:text-[#00A3FF] cursor-pointer transition-colors">INSTAGRAM</span>
                  <span className="hover:text-[#00A3FF] cursor-pointer transition-colors">LINKEDIN</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#F8FAFC] rounded-[3.5rem] p-8 md:p-14 border border-slate-100 shadow-sm"
          >
            <form className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-[#00A3FF] transition-colors font-bold text-lg placeholder:text-slate-300 text-[#003366]"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-[#00A3FF] transition-colors font-bold text-lg placeholder:text-slate-300 text-[#003366]"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">What are you interested in?</label>
                <select className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-[#00A3FF] transition-colors font-bold text-lg appearance-none cursor-pointer text-[#003366]">
                  <option>Select an option</option>
                  <option>Web Development</option>
                  <option>Data Analysis</option>
                  <option>UI/UX Design</option>
                  <option>Advanced Excel</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-[#00A3FF] transition-colors font-bold text-lg placeholder:text-slate-300 resize-none text-[#003366]"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-[#003366] text-white rounded-full font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/20 hover:bg-[#002850] transition-colors"
              >
                Send Message 
                <div className="p-1 bg-[#00A3FF] rounded-full">
                   <ArrowUpRight size={20} className="text-white" />
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* 3. FAQ SECTION */}
        <section className="pt-32 border-t border-slate-100">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <span className="text-[#00A3FF] font-black uppercase tracking-widest text-xs">Support Center</span>
              <h2 className="text-5xl md:text-6xl font-black leading-[0.9] mt-6 mb-8">
                Common <br /> <span className="text-[#00A3FF]">Questions.</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg italic">
                Can't find the answer you're looking for? Reach out to our admissions team directly.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="divide-y divide-slate-100">
                {faqs.map((faq, index) => (
                  <div key={index} className="py-2">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full py-8 flex items-center justify-between text-left group transition-all"
                    >
                      <span className={`text-xl md:text-2xl font-black transition-colors duration-300 ${openIndex === index ? 'text-[#00A3FF]' : 'text-[#003366]'}`}>
                        {faq.question}
                      </span>
                      <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-[#003366] text-white rotate-180' : 'bg-slate-100 text-[#003366]'}`}>
                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 flex gap-4">
                            <div className="mt-1.5"><CheckCircle2 size={18} className="text-[#00A3FF]" /></div>
                            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl font-medium">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}