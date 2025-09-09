import React, { useState } from 'react';
import { 
  Building2, 
  Car, 
  Lightbulb, 
  Droplets, 
  Shield, 
  BarChart3, 
  Wifi, 
  Zap,
  ArrowRight
} from 'lucide-react';

const SmartCitiesIoT = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      icon: Building2,
      title: 'Smart Urban Infrastructure',
      description: 'Intelligent building management systems with automated controls for lighting, HVAC, and security.Al-powered solutions for intelligent traffic management, waste management, and public safety that enhance urban living through real-time monitoring and analytics.',
      features: ['Automated Climate Control', 'Energy Optimization', 'Predictive Maintenance', 'Security Integration']
    },
    {
      icon: Car,
      title: 'Smart Transportation Systems',
      description: 'Advanced traffic flow optimization using real-time data analytics and AI-driven insights.Intelligent transportation solutions that optimize traffic flow, reduce congestion, and enhance mobility through autonomous vehicles and smart public transit.',
      features: ['Real-time Traffic Analysis', 'Adaptive Signal Control', 'Incident Detection', 'Route Optimization']
    },
    {
      icon: Lightbulb,
      title: 'Smart Lighting',
      description: 'Energy-efficient LED lighting systems with motion sensors and automated scheduling.',
      features: ['Motion-Activated Lighting', 'Energy Savings up to 60%', 'Remote Monitoring', 'Maintenance Alerts']
    },
    {
      icon: Droplets,
      title: 'Water Management',
      description: 'Comprehensive water monitoring and management solutions for conservation and quality.',
      features: ['Leak Detection', 'Quality Monitoring', 'Usage Analytics', 'Conservation Programs']
    }
  ];

  const stats = [
    { value: '40%', label: 'Energy Savings', icon: Zap },
    { value: '60%', label: 'Cost Reduction', icon: BarChart3 },
    { value: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { value: '24/7', label: 'Monitoring', icon: Wifi }
  ];

  return (
    <section id="smart-cities" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-400/30 backdrop-blur-sm mb-4">
            <span className="text-green-400 text-sm font-medium">Smart Cities & IoT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Building 
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Smart Cities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming urban landscapes with intelligent IoT solutions that enhance efficiency, 
            sustainability, and quality of life for citizens.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Interactive Tabs */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-8">Our IoT Solutions</h3>
            
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className={`group cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-400/50' 
                    : 'bg-slate-800/50 border-slate-600/50 hover:border-green-400/30'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    activeTab === index 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                      : 'bg-slate-700 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500'
                  }`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      activeTab === index ? 'text-green-400' : 'text-white group-hover:text-green-400'
                    }`}>
                      {solution.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                      {solution.description}
                    </p>

                    {activeTab === index && (
                      <div className="space-y-2 animate-fade-in">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                    activeTab === index 
                      ? 'border-green-400 bg-green-400' 
                      : 'border-slate-600 group-hover:border-green-400'
                  }`}>
                    {activeTab === index && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Visual/Stats */}
          <div className="space-y-8">
            {/* Featured Card */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/30 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4">
                  Next-Generation Smart Cities
                </h4>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our comprehensive IoT ecosystem connects every aspect of urban infrastructure, 
                  creating intelligent, responsive, and sustainable city environments.
                </p>

                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-green-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-xl bg-slate-800/50 border border-slate-600/50 hover:border-green-400/30 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mb-3 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your City?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IoT solutions can create a smarter, more efficient urban environment for your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-green-400 hover:text-green-400 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCitiesIoT;