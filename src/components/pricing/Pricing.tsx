'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Simple, transparent pricing
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no long-term contracts. 
            Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Teaser Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Content */}
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular Plan
                  </div>
                  
                  <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                    Everything you need to grow
                  </h3>
                  
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    Get unlimited review requests, AI responses, analytics, and all integrations 
                    for one simple price.
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {[
                      'Unlimited review requests',
                      'AI-powered responses',
                      'All platform integrations',
                      'Advanced analytics',
                      'Priority support',
                      '30-day free trial'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 mr-3 text-white" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link 
                    href="/pricing" 
                    className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors group"
                  >
                    View All Plans
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Right side - Pricing highlight */}
                <div className="text-center lg:text-right">
                  <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="text-5xl lg:text-6xl font-bold mb-2">
                      $29
                    </div>
                    <div className="text-lg text-white/80 mb-4">
                      per month
                    </div>
                    <div className="text-sm text-white/70 mb-6">
                      Billed annually • $39 monthly
                    </div>
                    
                    {/* Savings badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                      Save 25% annually
                    </div>
                  </div>

                  {/* Additional info */}
                  <div className="mt-8 text-center">
                    <div className="text-2xl font-semibold mb-2">30-Day Free Trial</div>
                    <div className="text-white/80">No credit card required</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom features grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="font-heading font-semibold text-primary mb-2">No Setup Fees</h3>
            <p className="text-gray-600">Get started immediately with no upfront costs or hidden charges.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="font-heading font-semibold text-primary mb-2">Cancel Anytime</h3>
            <p className="text-gray-600">No long-term contracts. Scale up or down as your business needs change.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-heading font-semibold text-primary mb-2">ROI Guarantee</h3>
            <p className="text-gray-600">See improved reviews and rankings within 30 days or get your money back.</p>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-6 text-gray-500">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 font-medium">4.9/5 customer rating</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-primary">10,000+</span> happy customers
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}