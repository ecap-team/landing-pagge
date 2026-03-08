'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Target, Award } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import Image from 'next/image';

const features = [
  {
    icon: Heart,
    title: 'Our Mission',
    description: 'Creating awareness and motivating students towards successful employment and career development.',
    gradient: 'from-primary-500 to-coral-500',
  },
  {
    icon: Users,
    title: 'Our Team',
    description: 'A dedicated team of professionals with intense experience sharing their vision through E-CAP.',
    gradient: 'from-ocean-500 to-primary-500',
  },
  {
    icon: Target,
    title: 'Our Vision',
    description: 'Guiding future leaders with our ideas and creating responsible citizens for tomorrow.',
    gradient: 'from-coral-500 to-primary-500',
  },
  {
    icon: Award,
    title: 'Our Impact',
    description: 'Helping students from various prestigious institutions across different cities achieve their dreams.',
    gradient: 'from-primary-500 to-ocean-500',
  },
];

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 md:py-32 bg-white grain-overlay" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-primary-100 text-primary-700 font-accent font-medium">
              About Us
            </div>
            <h2 className="heading-2 text-earth-900 mb-6 decorative-line pb-6">
              Empowering Students,<br />
              <span className="text-primary-600">Building Futures</span>
            </h2>
            <div className="space-y-6 text-earth-700 body-large">
              <p>
                E-CAP was founded with a vision to influence and help students by guiding them 
                towards a positive career path. In today's competitive society, students face numerous 
                challenges in securing employment after completing their degrees.
              </p>
              <p>
                What started as a solo initiative has grown into a team of like-minded professionals 
                from various domains and organizations. Together, we share our experiences and insights 
                to help upcoming students navigate their future.
              </p>
              <p>
                We conduct Employment Career Awareness Programs for 3rd and final year students 
                at various prestigious institutions across different cities, reaching thousands 
                of students each year.
              </p>
              <div className="pt-4">
                <p className="font-tamil text-2xl text-primary-700 font-semibold mb-4">
                  மாற்றத்திற்கான விதையாய் நாம் இருப்போம்
                </p>
                <div className="bg-earth-100 rounded-2xl p-6 border-l-4 border-primary-500">
                  <p className="font-display font-semibold text-lg text-earth-900 mb-2">
                    Functioning under our Parent Organization
                  </p>
                  <p className="text-earth-700 font-semibold">
                    SRI MARIAMMAN EDUCATION & CHARITABLE TRUST
                  </p>
                  <p className="text-earth-600 text-sm mt-1">
                    Since 1979 (REG No: 30/2013)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-[4/5] bg-gradient-to-br from-primary-100 to-ocean-100 transition-all duration-500 hover:shadow-3xl"
              whileHover={{ scale: 1.02 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/ecap-group.jpeg"
                  alt="E-CAP Team"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-32 h-32 bg-coral-400 rounded-full opacity-20 blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-ocean-400 rounded-full opacity-20 blur-2xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.35, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-earth-100">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-earth-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-earth-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Founder Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary-50 to-ocean-50 rounded-3xl p-10 md:p-12 border border-primary-200 shadow-xl">
            <div className="text-6xl text-primary-300 mb-4">"</div>
            <p className="text-xl md:text-2xl text-earth-800 font-display leading-relaxed mb-6">
              I always had the right attitude on influencing and helping students by guiding them 
              towards a positive way. Students of this generation are facing more challenges towards 
              their employment in this competitive society.
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src="/images/members/gokul-tcm.jpg"
                alt="Gokul TCM"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-contain bg-gradient-to-br from-primary-100 to-ocean-100"
              />
              <div>
                <p className="font-display font-bold text-xl text-earth-900">Gokul TCM</p>
                <p className="text-earth-600 font-accent">Founder & Director, E-CAP</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
