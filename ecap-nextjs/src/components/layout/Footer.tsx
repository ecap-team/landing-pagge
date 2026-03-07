'use client';

import Link from 'next/link';
import { Heart, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Partners', href: '#partners' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    { name: 'Facebook', href: 'https://www.facebook.com/ecapteam/', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/ecapofficial/', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ecapteam/', icon: Linkedin },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-earth-900 via-earth-800 to-earth-900 text-white grain-overlay">
      <div className="section-container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-10 h-10 text-primary-400" fill="currentColor" />
              <div>
                <div className="font-display font-bold text-2xl">E-CAP</div>
                <div className="font-tamil text-lg text-earth-300">என்னும் வழிகாட்டி</div>
              </div>
            </div>
            <p className="text-earth-300 body-large max-w-md mb-6">
              Creating employment awareness and guiding students towards successful careers since 2013. 
              Operating under Sri Mariamman Education & Charitable Trust.
            </p>
            <p className="font-tamil text-earth-400 text-lg mb-4">
              மாற்றத்திற்கான விதையாய் நாம் இருப்போம்
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-primary-500 transition-all duration-300 hover:scale-110 group"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-earth-300 hover:text-primary-400 transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <a href="tel:9786406411" className="text-earth-300 hover:text-primary-400 transition-colors">
                  +91 97864 06411
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <a href="mailto:ecapofficial@outlook.com" className="text-earth-300 hover:text-primary-400 transition-colors break-all">
                  ecapofficial@outlook.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-earth-300">
                  Karur, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Parent Organization */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-earth-300 mb-2">Functioning under our Parent Organization</p>
            <p className="font-display text-xl text-white font-semibold">
              SRI MARIAMMAN EDUCATION & CHARITABLE TRUST
            </p>
            <p className="text-earth-400 text-sm mt-2">
              Since 1979 (REG No: 30/2013)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-earth-400 text-sm">
            © {new Date().getFullYear()} E-CAP. All rights reserved.
          </p>
          <p className="text-earth-400 text-sm">
            Built with{' '}
            <Heart className="inline w-4 h-4 text-primary-400 mx-1" fill="currentColor" />{' '}
            for making a difference
          </p>
        </div>
      </div>
    </footer>
  );
}
