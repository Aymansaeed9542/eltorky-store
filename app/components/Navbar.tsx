'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './../../public/ELTORKY-logo.png'
import { FiShoppingBag, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full bg-white border-b border-white fixed top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-28'}`}>
          {/* Mobile Menu Toggle - Only visible on small screens */}
          <div className="md:hidden flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-black transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Left Section - Icons (Hidden on mobile, visible on desktop) */}
          <div className="hidden md:flex flex-1 items-center gap-4 sm:gap-6">
            <button 
              className="text-gray-700 hover:text-black hover:scale-110 transition-all duration-300"
              aria-label="Shopping Bag"
            >
              <FiShoppingBag size={24} />
            </button>
            <button 
              className="text-gray-700 hover:text-black hover:scale-110 transition-all duration-300"
              aria-label="User Profile"
            >
              <FiUser size={24} />
            </button>
            <button 
              className="text-gray-700 hover:text-black hover:scale-110 transition-all duration-300"
              aria-label="Search"
            >
              <FiSearch size={24} />
            </button>
          </div>

          {/* Center Section - Logo */}
          <div className="flex justify-center md:flex">
            <Link 
              href="/" 
              className="flex items-center hover:scale-105 transition-transform duration-300" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src= {Logo}
                alt="ELTORKY Logo"
                width={150}
                height={60}
                priority
                className="h-auto w-auto"
              />
            </Link>
          </div>

          {/* Right Section - Navigation Links (Arabic) - Hidden on mobile */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-6 lg:gap-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-black font-medium transition-colors text-sm lg:text-base font-tajawal"
            >
              الصفحة الرئيسية
            </Link>
            <Link 
              href="/clothes" 
              className="text-gray-700 hover:text-black font-medium transition-colors text-sm lg:text-sm font-tajawal"
            >
              الملابس
            </Link>
            <Link 
              href="/shoes" 
              className="text-gray-700 hover:text-black font-medium transition-colors text-sm lg:text-base font-tajawal"
            >
              شوز
            </Link>
            <Link 
              href="/accessories" 
              className="text-gray-700 hover:text-black font-medium transition-colors text-sm lg:text-base font-tajawal"
            >
              الاكسسوارات
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-black font-medium transition-colors text-sm lg:text-base font-tajawal"
            >
              اتصل بنا
            </Link>
          </div>

          {/* Placeholder for mobile to balance layout */}
          <div className="md:hidden flex-1"></div>
        </div>

        {/* Mobile Menu - Slides down when open */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            <Link
              href="/"
              className="block text-gray-700 hover:text-black font-medium transition-colors text-base font-tajawal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              الصفحة الرئيسية
            </Link>
            <Link
              href="/clothes"
              className="block text-gray-700 hover:text-black font-medium transition-colors text-base font-tajawal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              الملابس
            </Link>
            <Link
              href="/shoes"
              className="block text-gray-700 hover:text-black font-medium transition-colors text-base font-tajawal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              شوز
            </Link>
            <Link
              href="/accessories"
              className="block text-gray-700 hover:text-black font-medium transition-colors text-base font-tajawal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              الاكسسوارات
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-black font-medium transition-colors text-base font-tajawal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              اتصل بنا
            </Link>
            
            {/* Mobile Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <button 
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="Shopping Bag"
              >
                <FiShoppingBag size={24} />
              </button>
              <button 
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="User Profile"
              >
                <FiUser size={24} />
              </button>
              <button 
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="Search"
              >
                <FiSearch size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

