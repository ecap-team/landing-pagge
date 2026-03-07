'use client';

import { motion } from 'framer-motion';
import { Users, Building2, BookOpen, Award } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const impactStats = [
  {
    icon: Users,
    value: '20,000+',
    label: 'Students Empowered',
    description: 'Lives touched through our programs',
    color: 'from-primary-500 to-coral-500',
  },
  {
    icon: Building2,
    value: '33+',
    label: 'Partner Institutions',
    description: 'Colleges and universities',
    color: 'from-ocean-500 to-primary-500',
  },
  {
    icon: BookOpen,
    value: '100+',
    label: 'Sessions Conducted',
    description: 'Workshops and training programs',
    color: 'from-coral-500 to-primary-500',
  },
  {
    icon: Award,
    value: '3L+',
    label: 'Free Notebooks',
    description: 'Distributed by parent trust',
    color: 'from-primary-500 to-ocean-500',
  },
];

const testimonials = [
  {
    quote: "E-CAP's guidance helped me understand the real-world requirements and prepare better for my career. The sessions were incredibly valuable.",
    author: "Engineering Student",
    college: "PSNA College",
  },
  {
    quote: "The first aid training from Uyir Kapom program gave me confidence and life-saving skills that everyone should have.",
    author: "Final Year Student",
    college: "KSR Institute",
  },
  {
    quote: "Ennuvathu Uyarvu sessions transformed my approach to learning and career planning. Highly recommend to all students!",
    author: "Computer Science Student",
    college: "GTN Arts College",
  },
];

export default function Impact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="impact" className="py-24 md:py-32 bg-white grain-overlay" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-primary-100 text-primary-700 font-accent font-medium">
            Our Impact
          </div>
          <h2 className="heading-2 text-earth-900 mb-6">
            Creating Real{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-ocean-600">
              Measurable Change
            </span>
          </h2>
          <p className="body-large text-earth-700">
            Numbers tell our story of dedication, reach, and transformation across Tamil Nadu.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-earth-100 text-center overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-display font-bold text-5xl text-earth-900 mb-3">
                      {stat.value}
                    </div>
                    <div className="font-accent font-semibold text-lg text-earth-800 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-earth-600 text-sm">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="heading-3 text-earth-900 text-center mb-12">
            Student Voices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-earth-50 to-primary-50 rounded-2xl p-8 border border-earth-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl text-primary-300 mb-4">"</div>
                <p className="text-earth-700 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-earth-200 pt-4">
                  <p className="font-accent font-semibold text-earth-900">
                    {testimonial.author}
                  </p>
                  <p className="text-earth-600 text-sm">
                    {testimonial.college}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Parent Trust Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 bg-gradient-to-br from-primary-900 via-earth-800 to-ocean-900 rounded-3xl p-10 md:p-12 text-white text-center"
        >
          <h3 className="font-display font-bold text-3xl mb-6">
            Legacy of Service Since 1979
          </h3>
          <p className="body-large text-earth-100 max-w-3xl mx-auto mb-8">
            Our parent organization, <strong>Sri Mariamman Education & Charitable Trust</strong>, 
            has been providing free notebooks to 110+ Government and Government-aided schools, 
            supporting sports development, and uplifting education across Karur District.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass rounded-xl p-6">
              <div className="text-4xl text-earth-900 font-display font-bold mb-2">1979</div>
              <div className="text-earth-800">Established</div>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-4xl text-earth-900 font-display font-bold mb-2">110+</div>
              <div className="text-earth-800">Schools Supported</div>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-4xl text-earth-900 font-display font-bold mb-2">3L+</div>
              <div className="text-earth-800">Notebooks Distributed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
