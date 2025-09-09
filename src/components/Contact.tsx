import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  Globe,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: ['General Inquiries: info@inflynxtechnologies.com','  ||  Business Development: business@inflynxtechnologies.com','  ||  Technical Support: support@inflynxtechnologies.com','  ||  Careers: careers@inflynxtechnologies.com'],
      description: 'Send us an email anytime!',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: ['Main Office : +91-6202620644','  ||  Business Development : +91-6202620644','  ||  Technical Support :               +91-6202620644'],
      description: '24/7 support available',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Inflynx Technologies, Bhubaneswar, Odisha, India',
      description: 'Come say hello!',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: '9:00 AM - 6:00 PM',
      description: 'Monday to Friday And Emergency support available 24/7 for enterprise clients',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm mb-4">
            <MessageCircle className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Start a 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Conversation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Our Team
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you have a question about our services, need technical support, 
                or want to discuss a potential project, our team is ready to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-xl bg-slate-800/50 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  <p className="text-blue-400 font-medium mb-1">
                    {item.info}
                  </p>
                  
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">Global Presence</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                With offices across multiple continents and remote teams worldwide, 
                we provide 24/7 support and can work in your timezone.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-700/50 backdrop-blur-sm border border-slate-600/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                <p className="text-blue-400 text-sm text-center">
                  <Send className="inline w-4 h-4 mr-1" />
                  We typically respond within 24 hours
                </p>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;