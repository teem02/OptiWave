'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const integrations = [
  {
    name: 'Google My Business',
    logo: '🔍',
    description: 'Sync Google reviews and manage your Business Profile',
    color: 'bg-blue-500'
  },
  {
    name: 'Facebook',
    logo: '📘',
    description: 'Monitor and respond to Facebook page reviews',
    color: 'bg-blue-600'
  },
  {
    name: 'Square',
    logo: '⏹️',
    description: 'Automatically request reviews after Square transactions',
    color: 'bg-gray-800'
  },
  {
    name: 'Shopify',
    logo: '🛍️',
    description: 'Connect your Shopify store for post-purchase review requests',
    color: 'bg-green-500'
  },
  {
    name: 'Yelp',
    logo: '🍽️',
    description: 'Track and manage your Yelp business reviews',
    color: 'bg-red-500'
  },
  {
    name: 'Stripe',
    logo: '💳',
    description: 'Trigger review requests after successful payments',
    color: 'bg-purple-500'
  },
  {
    name: 'Mailchimp',
    logo: '📧',
    description: 'Integrate review campaigns with email marketing',
    color: 'bg-yellow-500'
  },
  {
    name: 'Zapier',
    logo: '⚡',
    description: 'Connect with 5,000+ apps through Zapier automation',
    color: 'bg-orange-500'
  }
];

export default function Integrations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-br from-background to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Connects with your favorite tools
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            LocalR.io seamlessly integrates with the platforms and tools you already use 
            to manage your business, making review management effortless.
          </p>
        </motion.div>

        {/* Featured Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {integrations.slice(0, 4).map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-accent/20"
            >
              <div className={`${integration.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{integration.logo}</span>
              </div>
              <h3 className="font-heading font-semibold text-primary mb-2">
                {integration.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {integrations.slice(4).map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-accent/20"
            >
              <div className={`${integration.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{integration.logo}</span>
              </div>
              <h3 className="font-heading font-semibold text-primary mb-2">
                {integration.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* API Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🔌</span>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
              Custom Integration with API
            </h3>
            <p className="font-body text-gray-600 mb-6">
              Need a custom integration? Our robust API allows you to connect LocalR.io 
              with any platform or build custom workflows for your unique business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#api-docs" 
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-xl font-medium"
              >
                View API Docs
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-accent text-white hover:bg-orange-500 transition-colors rounded-xl font-medium"
              >
                Request Integration
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-gray-600">Native Integrations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">5,000+</div>
              <div className="text-gray-600">Zapier Connections</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-gray-600">Uptime Reliability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}