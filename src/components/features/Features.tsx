'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Bot, BarChart3, Smartphone, Mail, Zap } from 'lucide-react';

const features = [
  {
    icon: Mail,
    title: 'Auto Review Requests',
    description: 'Automatically send review invitations to customers via SMS and email after purchase or service completion.',
    color: 'bg-blue-500'
  },
  {
    icon: Bot,
    title: 'AI-Powered Replies',
    description: 'Respond to reviews instantly with intelligent, personalized AI responses that match your brand voice.',
    color: 'bg-purple-500'
  },
  {
    icon: BarChart3,
    title: 'Review Analytics',
    description: 'Track review performance, sentiment analysis, and competitor comparison with detailed insights.',
    color: 'bg-green-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Manage everything on-the-go with our responsive mobile app designed for busy business owners.',
    color: 'bg-orange-500'
  },
  {
    icon: MessageSquare,
    title: 'Multi-Platform Sync',
    description: 'Sync reviews from Google, Facebook, Yelp, and other platforms in one centralized dashboard.',
    color: 'bg-pink-500'
  },
  {
    icon: Zap,
    title: 'Instant Notifications',
    description: 'Get real-time alerts for new reviews so you can respond quickly and maintain customer satisfaction.',
    color: 'bg-yellow-500'
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Everything you need to manage reviews
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools you need to collect, manage, 
            and leverage customer reviews for business growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/20"
            >
              {/* Icon */}
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 rounded-full text-accent font-medium">
            <Zap className="w-5 h-5 mr-2" />
            Setup takes less than 5 minutes
          </div>
        </motion.div>
      </div>
    </section>
  );
}