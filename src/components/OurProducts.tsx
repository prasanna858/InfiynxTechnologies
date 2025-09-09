import React, { useState } from 'react';
import { Brain, Shield, Network, Zap, ArrowRight, ExternalLink } from 'lucide-react';

const OurProducts = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      icon: Brain,
      title: 'AI Solutions',
      category: 'Artificial Intelligence',
      description: 'Advanced machine learning and AI-powered applications that transform business processes and decision-making.',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Automated Decision Systems'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Shield,
      title: 'Blockchain Tech',
      category: 'Distributed Systems',
      description: 'Secure, transparent, and decentralized blockchain solutions for various industries and use cases.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain Tracking'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Shield,
      title: 'BlockChat',
      category: 'Distributed Systems',
      description: 'Blockchain based, Generative Al powered chat application for secured communication channels like Defence, Space Research, Delegate communication and more.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain Tracking'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Network,
      title: 'IoT Ecosystem',
      category: 'Internet of Things',
      description: 'Comprehensive IoT solutions connecting devices, sensors, and systems for intelligent automation.',
      features: ['Smart Sensors', 'Real-time Monitoring', 'Edge Computing', 'Data Analytics'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Zap,
      title: 'Custom Development',
      category: 'Software Solutions',
      description: 'Tailored software development services designed to meet specific business requirements and goals.',
      features: ['Web Applications', 'Mobile Apps', 'Cloud Solutions', 'API Development'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm mb-4">
            <span className="text-blue-400 text-sm font-medium">Our Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Innovative 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of technology solutions designed to accelerate your digital transformation journey.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 ${
                hoveredCard === index ? 'shadow-2xl shadow-blue-500/20' : 'shadow-lg'
              }`}>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <product.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {product.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full`}></div>
                        <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <button className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${product.gradient} text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                    <div className={`w-8 h-8 bg-gradient-to-r ${product.gradient} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300`}>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${product.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              View All Solutions
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;