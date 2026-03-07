'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your environment variables.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          message: formData.message,
          to_email: 'ecapofficial@outlook.com',
        },
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: '',
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly via email.',
      });

      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-earth-900 via-primary-900 to-ocean-900 text-white grain-overlay relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-accent font-medium">
            Get in Touch
          </div>
          <h2 className="heading-2 mb-6">
            Let's Create{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-coral-300">
              Impact Together
            </span>
          </h2>
          <p className="body-large text-earth-100">
            Whether you're a student, institution, or volunteer, we'd love to hear from you. 
            Reach out and join us in empowering the next generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <div>
                <h3 className="heading-4 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <MapPin className="w-6 h-6 text-primary-300" />
                    </div>
                    <div>
                      <p className="font-accent font-semibold mb-1">Location</p>
                      <p className="text-earth-200">Karur, Tamil Nadu, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <Phone className="w-6 h-6 text-primary-300" />
                    </div>
                    <div>
                      <p className="font-accent font-semibold mb-1">Phone</p>
                      <a href="tel:9786406411" className="text-earth-200 hover:text-primary-300 transition-colors">
                        +91 97864 06411
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <Mail className="w-6 h-6 text-primary-300" />
                    </div>
                    <div>
                      <p className="font-accent font-semibold mb-1">Email</p>
                      <a href="mailto:ecapofficial@outlook.com" className="text-earth-200 hover:text-primary-300 transition-colors break-all">
                        ecapofficial@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="font-tamil text-xl text-primary-300 mb-4">
                  மாற்றத்திற்கான விதையாய் நாம் இருப்போம்
                </p>
                <p className="text-earth-200">
                  Let's be the seeds of change together
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-accent font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
                             text-white placeholder-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-400 
                             transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-accent font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
                             text-white placeholder-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-400 
                             transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-accent font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
                             text-white placeholder-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-400 
                             transition-all duration-300"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block font-accent font-medium mb-2">
                    Organization/Institution
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
                             text-white placeholder-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-400 
                             transition-all duration-300"
                    placeholder="Your college/company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-accent font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
                           text-white placeholder-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-400 
                           transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-start space-x-3 ${
                    status.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/30'
                      : status.type === 'error'
                      ? 'bg-red-500/20 border border-red-500/30'
                      : 'bg-white/10 border border-white/20'
                  }`}
                >
                  {status.type === 'loading' && <Loader2 className="w-5 h-5 animate-spin flex-shrink-0 mt-0.5" />}
                  {status.type === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                  {status.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                  <p className="text-sm">{status.message}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full 
                         bg-white text-primary-700 font-accent font-semibold hover:bg-earth-50 
                         transform transition-all duration-300 hover:scale-105 disabled:opacity-50 
                         disabled:cursor-not-allowed disabled:hover:scale-100 shadow-xl"
              >
                {status.type === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
