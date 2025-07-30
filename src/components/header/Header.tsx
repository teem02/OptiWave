'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-heading font-bold text-xl text-primary">LocalR.io</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-primary hover:text-accent transition-colors font-medium">
              Features
            </Link>
            <Link href="#benefits" className="text-primary hover:text-accent transition-colors font-medium">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-primary hover:text-accent transition-colors font-medium">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-primary hover:text-accent transition-colors font-medium">
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="btn-primary inline-flex items-center"
            >
              Try it Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-primary hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="#features" 
                className="block px-3 py-2 text-primary hover:text-accent transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#benefits" 
                className="block px-3 py-2 text-primary hover:text-accent transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link 
                href="#testimonials" 
                className="block px-3 py-2 text-primary hover:text-accent transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="#pricing" 
                className="block px-3 py-2 text-primary hover:text-accent transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="pt-2 border-t border-gray-200">
                <Link 
                  href="/login" 
                  className="block px-3 py-2 text-primary hover:text-accent transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link 
                  href="/signup" 
                  className="block mx-3 my-2 text-center btn-primary"
                >
                  Try it Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}