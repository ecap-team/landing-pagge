'use client';

import { motion } from 'framer-motion';
import { User, Mail } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const teamMembers = [
  {
    name: 'Gokul TCM',
    email: 'gokultcm11@gmail.com',
    designation: 'Senior HR',
    company: 'ChampionX GTC India',
    experience: '7 Years',
    image: '/images/members/gokul-tcm.jpg',
  },
  {
    name: 'Harish Manen D.',
    email: 'harishmanenbe@gmail.com',
    designation: 'Sr. SDET (DevOps)',
    company: 'Alation Inc',
    experience: '7 years 10 months',
    image: '/images/members/harish-manen.jpg',
  },
  {
    name: 'Sathish Kannan Lakshmanan',
    email: 'saka.crazy@gmail.com',
    designation: 'Business Consultant',
    company: 'Emologic Management Consulting',
    experience: '12 Years',
    image: '/images/members/sathish-kannan.jpg',
  },
  {
    name: 'Varshath Gupta',
    email: 'varshathgupta@gmail.com',
    designation: 'Software Engineer (Cloud)',
    company: 'Extenda Retail',
    experience: '4 Years',
    image: '/images/members/varshath-gupta.jpg',
  },
  {
    name: 'Gomathi Shruthy S',
    email: 'gomathishruthys@gmail.com',
    designation: 'SAP Technical Consultant',
    company: 'Kaar Technology',
    experience: '2 Years',
    image: '/images/members/gomathi-shruthy.jpg',
  },
  {
    name: 'Karthik Krishnan',
    email: 'karthikshanu87@gmail.com',
    designation: 'HR',
    company: 'Virtusa',
    experience: '10 Years',
    image: '/images/members/karthik-krishnan.jpg',
  },
  {
    name: 'Saran V',
    email: 'saranvaradharajan7@gmail.com',
    designation: 'Developer',
    company: 'Indus Novauter',
    experience: '2 Years',
    image: '/images/members/saran-v.jpg',
  },
  {
    name: 'Muheshpandian M',
    email: 'muheshpandian@gmail.com',
    designation: 'Sales Operations Specialist',
    company: 'JFrog India Pvt. Ltd.',
    experience: '5 Years',
    image: '/images/members/muheshpandian-m.jpg',
  },
  {
    name: 'Gowtham Kesavan',
    email: 'gowthamkesavan16091@gmail.com',
    designation: 'Embedded Engineer',
    company: 'Larsen & Toubro Limited',
    experience: '3.5 Years',
    image: '/images/members/gowtham-kesavan.jpg',
  },
  {
    name: 'Abiyash F',
    email: 'yashelectro.er@gmail.com',
    designation: 'Software Engineer 2',
    company: 'HCL Software',
    experience: '3.5 Years',
    image: '/images/members/abiyash-f.jpg',
  },
  {
    name: 'Hari Hara Sudhan R',
    email: 'hariharasudhankarthikeyan@gmail.com',
    designation: 'Silicon Validation Engineer',
    company: 'Microchip Technology Pvt Ltd',
    experience: '4.4 Years',
    image: '/images/members/hari-hara-sudhan.jpg',
  },
  {
    name: 'Mani Kandan G',
    email: 'manikandan329171@gmail.com',
    designation: 'Data Analyst',
    company: 'AstraZeneca',
    experience: '2 Years',
    image: '/images/members/mani-kandan.jpg',
  },
];

export default function Team() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="team" className="py-24 md:py-32 bg-white grain-overlay" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-primary-100 text-primary-700 font-accent font-medium">
            Our Team
          </div>
          <h2 className="heading-2 text-earth-900 mb-6">
            Dedicated{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-coral-600">
              Professionals
            </span>
          </h2>
          <p className="body-large text-earth-700">
            A team of passionate professionals from diverse domains, united by a 
            common goal: empowering the next generation.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-earth-100 h-full flex flex-col">
                {/* Image */}
                <div className="aspect-square bg-gradient-to-br from-primary-200 to-ocean-200 relative overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <User className="w-16 h-16 text-earth-400" />
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  {/* <div className="absolute bottom-2 left-0 right-0 flex justify-center translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-white hover:bg-primary-500 hover:text-white transition-all duration-300"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-3 text-center flex-1 flex flex-col justify-center">
                  <h3 className="font-display font-bold text-sm text-earth-900 mb-1 line-clamp-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-accent font-semibold mb-0.5 text-xs line-clamp-2">
                    {member.designation}
                  </p>
                  <p className="text-earth-700 font-medium mb-1 text-xs line-clamp-1">
                    {member.company}
                  </p>
                  <p className="text-earth-500 text-xs">
                    {member.experience}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-primary-600 to-ocean-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10">
              <h3 className="heading-3 mb-6">Join Our Team</h3>
              <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
                Are you a professional passionate about guiding students? Join our team of 
                dedicated volunteers making a real difference in students' lives.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary-700 font-accent font-semibold hover:bg-earth-50 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
