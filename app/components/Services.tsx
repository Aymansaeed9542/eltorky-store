'use client';

import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    id: 1,
    icon: '/لوجوز/home-page-icon-1-white.svg',
    title: 'توصيل سريع',
    subtitle: 'كل الطلبات',
  },
  {
    id: 2,
    icon: '/لوجوز/home-page-icon-2-white.svg',
    title: 'دعم 24 ساعة',
    subtitle: '',
  },
  {
    id: 3,
    icon: '/لوجوز/home-page-icon-3-white.svg',
    title: 'الاستبدال بسيط',
    subtitle: '',
  },
  {
    id: 4,
    icon: '/لوجوز/home-page-icon-4-white.svg',
    title: 'متوفر كل طرق الدفع',
    subtitle: '',
  },
];

export default function Services() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-black py-12 px-4 sm:px-6 lg:px-8 mt-15"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
              }}
            >
              {/* Icon */}
              <div className="mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white text-lg font-bold mb-1 font-tajawal">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-gray-300 text-sm font-tajawal">
                    {service.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

