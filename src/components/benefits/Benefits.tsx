'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Shield, Clock, Star, Search } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Increase Customer Trust',
    description: 'Build credibility with potential customers by showcasing authentic 5-star reviews and maintaining a strong online reputation.',
    stats: '+87% trust increase',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Search,
    title: 'Rank Higher in Local SEO',
    description: 'Boost your Google My Business ranking and appear first in local search results with consistent positive reviews.',
    stats: '+156% visibility boost',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Clock,
    title: 'Save Response Time',
    description: 'Reduce review management time by 90% with AI-powered responses and automated review request workflows.',
    stats: '12hrs saved weekly',
    color: 'from-purple-400 to-purple-600'
  }
];

const metrics = [
  { label: 'Average Rating Increase', value: '4.8★', change: '+0.9' },
  { label: 'Review Volume Growth', value: '247%', change: '+127%' },
  { label: 'Response Rate', value: '94%', change: '+67%' },
  { label: 'Customer Satisfaction', value: '96%', change: '+23%' }
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-background to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Transform your business with better reviews
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of local businesses that have transformed their online presence 
            and increased revenue with LocalR.io.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-accent/20">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Stats badge */}
                <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {benefit.stats}
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
              Real Results from Real Businesses
            </h3>
            <p className="text-gray-600">Average improvements seen within 30 days</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-green-500 font-medium">
                  {metric.change}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">Join 10,000+ businesses already growing with LocalR.io</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}