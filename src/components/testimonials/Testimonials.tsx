'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Owner, Bella\'s Bakery',
    location: 'Portland, OR',
    content: 'LocalR.io helped us go from 3.2 to 4.8 stars in just 2 months. The AI responses are so natural that customers think I wrote them personally!',
    rating: 5,
    avatar: '👩‍🍳',
    improvement: '+1.6★ rating'
  },
  {
    name: 'Mike Rodriguez',
    title: 'Manager, Quick Fix Auto',
    location: 'Austin, TX',
    content: 'We were drowning in negative reviews. LocalR.io\'s automated system helped us respond faster and get more positive reviews. Our local ranking improved dramatically.',
    rating: 5,
    avatar: '👨‍🔧',
    improvement: '+89% more reviews'
  },
  {
    name: 'Emma Chen',
    title: 'Dentist, Bright Smile Dental',
    location: 'San Francisco, CA',
    content: 'The review analytics showed us exactly what patients loved and what needed improvement. We\'ve never had so many 5-star reviews!',
    rating: 5,
    avatar: '👩‍⚕️',
    improvement: '+156% visibility'
  },
  {
    name: 'James Wilson',
    title: 'Owner, Wilson\'s Hardware',
    location: 'Denver, CO',
    content: 'As a traditional business, I was skeptical about online reviews. LocalR.io made it so easy that even I can manage our online reputation now.',
    rating: 5,
    avatar: '👨‍💼',
    improvement: '+67% new customers'
  },
  {
    name: 'Lisa Thompson',
    title: 'Salon Owner, Luxe Hair Studio',
    location: 'Miami, FL',
    content: 'The automated review requests are a game-changer. We went from getting 2-3 reviews a month to 15-20. My booking calendar is now always full!',
    rating: 5,
    avatar: '💇‍♀️',
    improvement: '+500% review volume'
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Loved by local business owners
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See how LocalR.io has transformed businesses just like yours with better reviews and higher local rankings.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-background to-white p-8 lg:p-12 mx-4">
                    <div className="max-w-4xl mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* Quote and Content */}
                        <div className="lg:col-span-2">
                          <Quote className="w-12 h-12 text-accent mb-6" />
                          <blockquote className="font-body text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                            &ldquo;{testimonial.content}&rdquo;
                          </blockquote>
                          
                          {/* Rating */}
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>

                          {/* Author Info */}
                          <div className="flex items-center space-x-4">
                            <div className="text-4xl">{testimonial.avatar}</div>
                            <div>
                              <div className="font-semibold text-primary text-lg">
                                {testimonial.name}
                              </div>
                              <div className="text-gray-600">
                                {testimonial.title}
                              </div>
                              <div className="text-gray-500 text-sm">
                                {testimonial.location}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Results Badge */}
                        <div className="lg:col-span-1 flex justify-center lg:justify-end">
                          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                            <div className="text-2xl font-bold text-accent mb-2">
                              {testimonial.improvement}
                            </div>
                            <div className="text-gray-600 text-sm">
                              Result achieved
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}