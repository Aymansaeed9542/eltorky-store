'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const products = [
  {
    id: 1,
    image: '/شوز ديتيلز/photo_5954120408514628480_w.webp',
    name: 'SHOES SALAXI',
    price: 4500,
    oldPrice: null,
    hasDiscount: false,
    slug: 'shoes-salaxi',
  },
  {
    id: 2,
    image: '/شوز ديتيلز/photo_5958693560842390292_w.webp',
    name: 'SHOES GUCHU',
    price: 2200,
    oldPrice: null,
    hasDiscount: false,
    slug: 'shoes-guchu',
  },
  {
    id: 3,
    image: '/شوز ديتيلز/photo_5960794624483855375_w.webp',
    name: 'SHOES NAKED WOLFE LED',
    price: 4250,
    oldPrice: null,
    hasDiscount: false,
    slug: 'shoes-naked-wolfe-led',
  },
  {
    id: 4,
    image: '/شوز ديتيلز/photo_5967829720785161101_y.webp',
    name: 'SHOES LOUIS VUITTON',
    price: 2650,
    oldPrice: null,
    hasDiscount: false,
    slug: 'shoes-louis-vuitton',
  },
];

export default function FeaturedProducts() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const formatPrice = (price: number) => {
    return price.toLocaleString('ar-EG', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Titles */}
        <div 
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-base text-gray-600 mb-1 font-tajawal">
            شوف أحدث القطع اللي وصلت قبل أي حد
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-tajawal">
            المنتجات الأكثر طلبا
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className={`overflow-hidden group transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
              }}
            >
              {/* Product Image Container */}
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                {product.hasDiscount && (
                  <div className="absolute top-1 right-1 z-10 bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold font-tajawal">
                    تخفيض
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h3 className="text-base font-bold mb-1 text-black">{product.name}</h3>
                
                {/* Price */}
                <div className="mb-1">
                  {product.oldPrice ? (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-xs">
                        {formatPrice(product.oldPrice)} EGP
                      </span>
                      <span className="text-gray-800 font-semibold text-sm">
                        {formatPrice(product.price)} EGP
                      </span>
                    </div>
                  ) : (
                    <span className="text-gray-600 text-sm">{formatPrice(product.price)} EGP</span>
                  )}
                </div>

                {/* Category Label */}
                <p className="text-xs text-gray-500 mb-2 font-tajawal">الكل, شوز</p>

                {/* Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle add to cart or variant selection
                  }}
                  className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-tajawal text-xs font-medium"
                >
                  تحديد أحد الخيارات
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

