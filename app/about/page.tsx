'use client';

import Navbar from "@/components/navBar";
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Mr Nosa ',
    role: 'Founder & CEO',
    bio: '15+ years in tech education, former Google engineer',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Mrs Nosa',
    role: 'Head of Curriculum',
    bio: 'EdTech specialist with Ph.D. in Computer Science',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Michael Benson',
    role: 'Lead Instructor',
    bio: 'Full-stack developer, 10+ years teaching experience',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Chioma Nwachukwu',
    role: 'Student Success Manager',
    bio: 'Passionate about student growth and career development',
    color: 'from-orange-500 to-red-500',
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technology and teaching methods to provide the best learning experience.',
    icon: '💡',
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in education and are committed to student success.',
    icon: '🎯',
  },
  {
    title: 'Community',
    description: 'We foster a supportive, inclusive environment where everyone can thrive and grow together.',
    icon: '🤝',
  },
  {
    title: 'Impact',
    description: 'We empower individuals to create meaningful change in their communities through technology.',
    icon: '🚀',
  },
];

export default function AboutPage() {
  return (
    <div className="font-cabinet-grotesk">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-br from-black via-gray-800 to-black bg-clip-text text-transparent"
          >
            About Parach
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We are on a mission to democratize technology education in Africa, 
            empowering the next generation of innovators and problem solvers.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-black to-gray-800 rounded-3xl p-12 md:p-16 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Parach ICT Academy was founded with a simple yet powerful vision: to bridge the digital divide 
              and provide world-class technology education accessible to everyone. We believe that technology 
              is the great equalizer, and by equipping individuals with the right skills, we can transform 
              lives, communities, and entire economies. Our comprehensive programs are designed by industry 
              experts and delivered by passionate educators who are committed to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black mb-16 text-center"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black mb-16 text-center"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${member.color}`} />
                
                {/* Avatar placeholder */}
                <div className="p-8">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} mx-auto mb-6`} />
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 mb-4 text-center">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-center leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '2020', label: 'Year Founded' },
              { value: '500+', label: 'Students Graduated' },
              { value: '50+', label: 'Expert Instructors' },
              { value: '95%', label: 'Job Placement Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}