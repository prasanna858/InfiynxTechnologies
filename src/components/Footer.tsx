import React from 'react';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Globe,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        'AI & Machine Learning',
        'Blockchain Technology',
        'IoT Solutions',
        'Custom Development',
        'Smart Cities',
        'Cloud Services'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'News & Updates',
        'CIN: U63999OD2025PTC047988',
        'TAN: BBNI01878C',
        'Case Studies',
        'Partners'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Documentation',
        'API Reference',
        'Support Center',
        'Tutorials',
        'Webinars',
        'Blog'
      ]
    },
    {
      title: 'Legal',
      links: [
        'Privacy Policy',
        'Terms of Service',
        'Cookie Policy',
        'Data Protection',
        'Compliance',
        'Security'
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Zap className="h-8 w-8 text-blue-400" />
                <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white">
                Infiynx<span className="text-blue-400">Technologies</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pioneering the future through innovative technology solutions that transform 
              businesses and empower digital transformation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">support@inflynxtechnologies.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">+91 6202620644</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Inflynx Technologies, Bhubaneswar, Odisha, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
            <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news and updates about our technology solutions.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-r-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} InfiynxTechnologies. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300 group"
            >
              <span>Back to top</span>
              <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;