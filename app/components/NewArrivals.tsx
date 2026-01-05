'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = [
  {
    id: 1,
    image: '/اكسسوارات/1-3.webp',
    name: 'الاكسسوارات',
    slug: 'accessories',
  },
  {
    id: 2,
    image: '/شوز/2-2.webp',
    name: 'شوز',
    slug: 'shoes',
  },
  {
    id: 3,
    image: '/الملابس/3.webp',
    name: 'الملابس',
    slug: 'clothes',
  },
];

export default function NewArrivals() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-12 font-tajawal transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          الجديد أول بأول
        </h2>

        {/* Categories Grid - 3 images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/${category.slug}`}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
              }}
            >
              <div className="relative w-full aspect-square overflow-hidden mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={category.id === 1}
                />
              </div>
              {/* Category Name */}
              <h3 className="text-2xl font-bold text-center font-tajawal text-gray-800 group-hover:text-black transition-colors duration-300">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

