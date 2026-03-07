'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users2, HeartHandshake, Sparkles, GraduationCap, TrendingUp } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const programs = [
  {
    icon: GraduationCap,
    title: 'E-CAP 2020',
    subtitle: 'Employment Career Awareness Program',
    description: 'Our flagship program reaching thousands of students across 33+ colleges, providing comprehensive career guidance and employment awareness.',
    stats: [
      { value: '20,000+', label: 'Students' },
      { value: '33+', label: 'Colleges' },
    ],
    color: 'primary',
    image: 'ecap2020',
  },
  {
    icon: TrendingUp,
    title: 'Ennuvathu Uyarvu',
    subtitle: 'என்னுவது உயர்வு',
    description: 'Intensive skill development sessions helping students achieve excellence through 50+ comprehensive sessions and workshops.',
    stats: [
      { value: '800+', label: 'Registered' },
      { value: '50+', label: 'Sessions' },
    ],
    color: 'ocean',
    image: 'ennuvathu-uyarvu',
  },
  {
    icon: HeartHandshake,
    title: 'Uyir Kapom',
    subtitle: 'உயிர் காப்போம்',
    description: 'First aid awareness program training students with life-saving skills and emergency response techniques.',
    stats: [
      { value: '300+', label: 'Attended' },
      { value: '12+', label: 'Sessions' },
    ],
    color: 'coral',
    image: 'uyir-kapom',
  },
  {
    icon: BookOpen,
    title: 'Karpoom Karpipom',
    subtitle: 'கற்போம் கற்பிப்போம்',
    description: 'Knowledge sharing initiative where students learn and teach, fostering a culture of continuous learning.',
    stats: [
      { value: '500+', label: 'Participants' },
      { value: '25+', label: 'Topics' },
    ],
    color: 'earth',
    image: 'karpoom-karpipom',
  },
  {
    icon: Users2,
    title: 'Anbum Aramum',
    subtitle: 'அன்பும் அறமும்',
    description: 'Social service program promoting values, ethics, and community service among students.',
    stats: [
      { value: '1,000+', label: 'Beneficiaries' },
      { value: '15+', label: 'Events' },
    ],
    color: 'primary',
    image: 'anbum-aramum',
  },
  {
    icon: Sparkles,
    title: 'Info Board',
    subtitle: 'Information Hub',
    description: 'Comprehensive information sharing platform keeping students updated with latest opportunities and trends.',
    stats: [
      { value: '5,000+', label: 'Reach' },
      { value: '100+', label: 'Updates' },
    ],
    color: 'ocean',
    image: 'info-board',
  },
];

const colorClasses = {
  primary: {
    gradient: 'from-primary-500 to-coral-500',
    bg: 'bg-primary-100',
    text: 'text-primary-700',
    border: 'border-primary-200',
  },
  ocean: {
    gradient: 'from-ocean-500 to-primary-500',
    bg: 'bg-ocean-100',
    text: 'text-ocean-700',
    border: 'border-ocean-200',
  },
  coral: {
    gradient: 'from-coral-500 to-primary-500',
    bg: 'bg-coral-100',
    text: 'text-coral-700',
    border: 'border-coral-200',
  },
  earth: {
    gradient: 'from-earth-500 to-primary-500',
    bg: 'bg-earth-100',
    text: 'text-earth-700',
    border: 'border-earth-200',
  },
};

export default function Programs() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="programs" className="py-24 md:py-32 bg-gradient-to-br from-earth-50 to-primary-50 grain-overlay" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border border-primary-200 text-primary-700 font-accent font-medium shadow-lg">
            Our Programs
          </div>
          <h2 className="heading-2 text-earth-900 mb-6">
            Transforming Lives Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-coral-600">
              Education & Empowerment
            </span>
          </h2>
          <p className="body-large text-earth-700">
            Comprehensive programs designed to guide students towards successful careers 
            and personal development.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const colors = colorClasses[program.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-earth-100 h-full flex flex-col">
                  {/* Icon Header */}
                  <div className={`p-8 bg-gradient-to-br ${colors.gradient} relative overflow-hidden`}>
                    <div className="relative z-10">
                      <Icon className="w-12 h-12 text-white mb-4" />
                      <h3 className="font-display font-bold text-2xl text-white mb-2">
                        {program.title}
                      </h3>
                      <p className="font-tamil text-white/90 text-lg">
                        {program.subtitle}
                      </p>
                    </div>
                    {/* Decorative circle */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-earth-700 leading-relaxed mb-6 flex-grow">
                      {program.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      {program.stats.map((stat, i) => (
                        <div
                          key={i}
                          className={`${colors.bg} ${colors.border} border rounded-xl p-4 text-center`}
                        >
                          <div className={`font-display font-bold text-2xl ${colors.text} mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-earth-600 text-sm font-accent">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="body-large text-earth-700 mb-6">
            Want to bring these programs to your institution?
          </p>
          <a href="#contact" className="btn-primary">
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
