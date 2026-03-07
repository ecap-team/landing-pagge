'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-earth-800 to-ocean-900">
        {/* Animated background shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-ocean-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-coral-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-primary-200 font-accent font-medium">
                Since 2013 • Empowering Students
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-1 text-white mb-6 leading-tight"
          >
            E-CAP{' '}
            <span className="block font-tamil text-5xl md:text-6xl lg:text-7xl mt-4 text-primary-300">
              என்னும் வழிகாட்டி
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-earth-100 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Employment Career Awareness Program
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="body-large text-earth-200 mb-12 max-w-3xl mx-auto"
          >
            Guiding students towards successful careers through awareness, mentorship, 
            and real-world insights. Join us in shaping the future leaders of tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="#contact"
              className="btn-primary group shadow-2xl"
            >
              Get Involved
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://www.youtube.com/watch?v=f-grWKLJC1Q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-accent font-semibold 
                       rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white
                       hover:bg-white/20 transform transition-all duration-300 hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
              Watch Video
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: '20,000+', label: 'Students Reached' },
              { number: '33+', label: 'Partner Institutions' },
              { number: '50+', label: 'Sessions Conducted' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 shadow-lg border border-white/50"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-earth-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-earth-600 font-accent font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
