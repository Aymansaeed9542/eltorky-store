'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    image: '/ملابس ديتيلز/model1.jpg',
    name: 'SWEATSHIRT SAVAGE',
    price: 1495,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'sweatshirt-savage',
  },
  {
    id: 2,
    image: '/ملابس ديتيلز/model2.jpg',
    name: 'VEST MONCLER',
    price: 3345,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'vest-moncler',
  },
  {
    id: 3,
    image: '/ملابس ديتيلز/model3.jpg',
    name: 'JACKET LEATHER COMBINATION',
    price: 2685,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'jacket-leather-combination',
  },
  {
    id: 4,
    image: '/ملابس ديتيلز/model4.jpg',
    name: 'SPRAY WASH TROUSERS',
    price: 2185,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: true,
    slug: 'spray-wash-trousers',
  },
  {
    id: 5,
    image: '/ملابس ديتيلز/model5.jpg',
    name: 'JACKET GUGGI',
    price: 5375,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: true,
    slug: 'jacket-guggi',
  },
  {
    id: 6,
    image: '/ملابس ديتيلز/model6.jpg',
    name: 'JEANS BAGGY FIT',
    price: 2175,
    oldPrice: 2850,
    hasDiscount: true,
    outOfStock: true,
    slug: 'jeans-baggy-fit',
  },
];

export default function ClothesPage() {
  const [sortBy, setSortBy] = useState('popularity');

  const formatPrice = (price: number) => {
    return price.toLocaleString('ar-EG', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-tajawal">
          الملابس
        </h1>

        {/* Sort Dropdown */}
        <div className="mb-8 flex justify-center">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg font-tajawal text-sm"
          >
            <option value="popularity">ترتيب حسب الشهرة</option>
            <option value="rating">ترتيب حسب معدل التقييم</option>
            <option value="latest">ترتيب حسب الأحدث</option>
            <option value="price-low">ترتيب حسب: الأدنى سعراً للأعلى</option>
            <option value="price-high">ترتيب حسب: الأعلى سعراً للأدنى</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden group">
              <Link href={`/products/${product.slug}`}>
                {/* Product Image Container */}
                <div className="relative w-full aspect-square bg-gray-100 overflow-hidden mb-3">
                  {product.outOfStock && (
                    <div className="absolute top-2 left-2 z-10 bg-gray-800 text-white px-3 py-1 rounded text-xs font-bold font-tajawal">
                      انتهى البضاع
                    </div>
                  )}
                  {product.hasDiscount && !product.outOfStock && (
                    <div className="absolute top-2 right-2 z-10 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold font-tajawal">
                      تخفيض
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Product Info */}
                <div className="p-3">
                  <h3 className="text-base font-bold mb-2 text-black">{product.name}</h3>
                  
                  {/* Price */}
                  <div className="mb-2">
                    {product.oldPrice ? (
                      <div className="flex flex-col gap-1">
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
                  <p className="text-xs text-gray-500 mb-3 font-tajawal">الكل, الملابس</p>

                  {/* Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors font-tajawal text-xs font-medium"
                    disabled={product.outOfStock}
                  >
                    تحديد أحد الخيارات
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-2 font-tajawal">
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            السابق
          </button>
          <button className="px-4 py-2 bg-black text-white rounded">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            3
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            4
          </button>
          <span className="px-2">…</span>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            9
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}

