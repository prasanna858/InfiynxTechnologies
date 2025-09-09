import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize industries through innovative technology solutions that drive sustainable growth and digital transformation.'
    },
    {
      icon: Users,
      title: 'Discovery & Analysis',
      description: 'Thorough assessment of business requirements and technical constraints.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Commitment to delivering high-quality, scalable solutions that exceed client expectations and industry standards.'
    },
    {
      icon: Award,
      title: 'Solution Design',
      description: 'Collaborative development of scalable, future-proof architectural frameworks.'
    },
    {
      icon: Award,
      title: 'Deployment & Support',
      description: 'Seamless integration with comprehensive training and ongoing maintenance.'
    },
    {
      icon: Target,
      title: 'Our Core Values',
      description: 'Innovation & Integrity & Excellence'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously exploring cutting-edge technologies to provide forward-thinking solutions for tomorrow\'s challenges.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm mb-4">
            <span className="text-blue-400 text-sm font-medium">About InfiynxTechnologies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            InfiynxTechnologies Is The 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Future</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Inflynx Technologies (est. 2025) is the parent company of ChainVerdict and VidyutChain, focused on delivering cutting-edge solutions using Blockchain, AI, and IoT. We specialize in building secure, scalable, and impactful tech for legal, energy, and public-sector innovation.

Backed by a diverse team of engineers, data scientists, and domain experts, Inflynx is committed to solving real-world problems with tailored, high-performance systems that drive efficiency and long-term value.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-400/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
              <div className="relative p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    2+
                  </div>
                  <div className="text-gray-300 font-medium">Year of Excellence</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              Transforming Ideas into Reality
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Since our inception, InfiynxTechnologies has been at the forefront of technological innovation, 
              helping businesses navigate the complexities of digital transformation. We specialize in creating 
              intelligent solutions that not only solve today's challenges but anticipate tomorrow's opportunities.
            </p>
            
            <div className="space-y-4">
              {[
                'Cutting-edge AI and Machine Learning solutions',
                'Secure and scalable Blockchain implementations',
                'Comprehensive IoT ecosystem development',
                'Custom software development and consulting'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;