'use client';

import { motion } from 'framer-motion';
import { Building2, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const partners = [
  {
    name: 'PSNA College of Engineering and Technology',
    shortName: 'PSNA',
    location: 'Dindigul',
    description: 'Pioneering technical education with values.',
    logo: 'https://www.psnacet.edu.in/images/logo-white.png',
    website: 'https://www.psnacet.edu.in/',
  },
  {
    name: 'KSR Institute for Engineering and Technology',
    shortName: 'KSRIET',
    location: 'Tiruchengode',
    description: 'Leading engineering institution fostering innovation and excellence.',
    logo: '/images/partners/ksriet.jpeg',
    website: '#',
  },
  {
    name: 'GTN Arts College',
    shortName: 'GTN',
    location: 'Dindigul',
    description: 'Premier arts college dedicated to holistic education.',
    logo: '/images/partners/gtn.jpeg',
    website: '#',
  },
  {
    name: 'Sri Venkateswara College of Engineering',
    shortName: 'SVCET',
    location: 'Pennagaram',
    description: 'Excellence in engineering education and research.',
    logo: '/images/partners/svcet.png',
    website: '#',
  },
  
  {
    name: 'Achariya College',
    shortName: 'Achariya',
    location: 'Puducherry',
    description: 'Innovation-driven education for tomorrow\'s leaders.',
    logo: '/images/partners/archariya.png',
    website: '#',
  },
];

export default function Partners() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="partners" className="py-24 md:py-32 bg-gradient-to-br from-primary-50 to-ocean-50 grain-overlay" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border border-primary-200 text-primary-700 font-accent font-medium shadow-lg">
            Our Partners
          </div>
          <h2 className="heading-2 text-earth-900 mb-6">
            Collaborating With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-ocean-600">
              Leading Institutions
            </span>
          </h2>
          <p className="body-large text-earth-700">
            Together with prestigious educational institutions, we're creating opportunities 
            and shaping the future of thousands of students.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-earth-100 h-full">
                {/* Logo Area */}
                <div className="aspect-[2/1] bg-gradient-to-br from-earth-100 to-primary-100 flex items-center justify-center p-4 relative overflow-hidden group-hover:from-primary-100 group-hover:to-ocean-100 transition-all duration-500">
                  {/* Placeholder - replace with actual logos */}
                  <div className="relative z-10 text-center">
                    <Building2 className="w-12 h-12 text-earth-400 mx-auto mb-2" />
                    <div className="font-display font-bold text-lg text-earth-700">
                      {partner.shortName}
                    </div>
                  </div>
                  {/* Decorative circle */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-700" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-earth-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-earth-600 text-sm mb-4 flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    {partner.location}
                  </p>
                  <p className="text-earth-700 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Add Partner CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: partners.length * 0.1 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-primary-600 to-ocean-600 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex items-center justify-center p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative z-10">
                <div className="inline-flex p-6 rounded-full bg-white/20 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-12 h-12" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4">
                  Your Institution Here
                </h3>
                <p className="mb-6 text-white/90">
                  Partner with us to empower your students with career guidance and professional development.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-primary-700 font-accent font-semibold hover:bg-earth-50 transition-all duration-300 hover:scale-105"
                >
                  Become a Partner
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-earth-100">
            <h3 className="heading-4 text-earth-900 mb-8 text-center">
              Why Partner With E-CAP?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expert Guidance',
                  description: 'Professional mentors with real-world industry experience',
                },
                {
                  title: 'Proven Impact',
                  description: '20,000+ students already benefited from our programs',
                },
                {
                  title: 'No Cost',
                  description: 'Free programs as part of our social service mission',
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-ocean-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-display font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-lg text-earth-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-earth-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
