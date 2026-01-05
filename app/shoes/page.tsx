'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    image: '/شوز ديتيلز/photo_5967829720785161101_y.jpg',
    name: 'SHOES LOUIS VUITTON',
    price: 2650,
    oldPrice: 3000,
    hasDiscount: true,
    outOfStock: false,
    slug: 'shoes-louis-vuitton',
  },
  {
    id: 2,
    image: '/شوز ديتيلز/photo_5960794624483855375_w.jpg',
    name: 'SHOES NAKED WOLFE LED',
    price: 4250,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'shoes-naked-wolfe-led',
  },
  {
    id: 3,
    image: '/شوز ديتيلز/photo_5958693560842390292_w.jpg',
    name: 'SHOES GUCHU',
    price: 2200,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'shoes-guchu',
  },
  {
    id: 4,
    image: '/شوز ديتيلز/photo_5954120408514628480_w.jpg',
    name: 'SHOES SALAXI',
    price: 4500,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'shoes-salaxi',
  },
  {
    id: 5,
    image: '/شوز ديتيلز/photo_5954120408514628506_w.jpg',
    name: 'SHOES OIOKICKS',
    price: 4750,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'shoes-oiokicks',
  },
  {
    id: 6,
    image: '/شوز ديتيلز/photo_5848178855405882287_w-600x643.jpg',
    name: 'SHOES ASICS GEL KAYANO',
    price: 1850,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'shoes-asics-gel-kayano',
  },
  {
    id: 7,
    image: '/شوز ديتيلز/photo_5954120408514628505_w-1152x1536.jpg',
    name: 'SHOES LOUIS VUITTON',
    price: 1950,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'shoes-louis-vuitton-2',
  },
  {
    id: 8,
    image: '/شوز ديتيلز/photo_5954120408514628488_w-1536x2048.jpg',
    name: 'SHOES LOUIS VUITTON',
    price: 2250,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'shoes-louis-vuitton-3',
  },
  {
    id: 9,
    image: '/شوز ديتيلز/photo_5803241789408873687_y-300x400.jpg',
    name: 'SHOES CHASSY',
    price: 1750,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: true,
    slug: 'shoes-chassy',
  },
  {
    id: 10,
    image: '/شوز ديتيلز/photo_5954120408514628530_w.jpg',
    name: 'SHOES CUCCI',
    price: 4500,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'shoes-cucci',
  },
  {
    id: 11,
    image: '/شوز ديتيلز/photo_5868532692536724420_y-300x400.jpg',
    name: 'SHOES NAKED WOLFE',
    price: 3750,
    oldPrice: 4500,
    hasDiscount: true,
    outOfStock: true,
    slug: 'shoes-naked-wolfe',
  },
  {
    id: 12,
    image: '/شوز ديتيلز/photo_5848178855405882296_w-1536x2048.jpg',
    name: 'SHOES PRADA',
    price: 1950,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: true,
    slug: 'shoes-prada',
  },
  {
    id: 13,
    image: '/شوز ديتيلز/photo_5848178855405882300_w-1536x2048.jpg',
    name: 'SHOES AJEKKE',
    price: 1750,
    oldPrice: 4000,
    hasDiscount: true,
    outOfStock: true,
    slug: 'shoes-ajekke',
  },
  {
    id: 14,
    image: '/شوز ديتيلز/photo_5954120408514628506_w.jpg',
    name: 'SHOES SALAXI',
    price: 4500,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: true,
    slug: 'shoes-salaxi-2',
  },
  {
    id: 15,
    image: '/شوز ديتيلز/photo_5958693560842390315_w.jpg',
    name: 'SHOES CUCCI',
    price: 4200,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'shoes-cucci-2',
  },
  {
    id: 16,
    image: '/شوز ديتيلز/photo_5958693560842390353_w.jpg',
    name: 'SHOES NIKE AIR FORCE',
    price: 1850,
    oldPrice: null,
    hasDiscount: false,
    outOfStock: false,
    slug: 'shoes-nike-air-force',
  },
];

export default function ShoesPage() {
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
          شوز
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
                  {product.hasDiscount && product.outOfStock && (
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
                  <p className="text-xs text-gray-500 mb-3 font-tajawal">الكل, شوز</p>

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
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}

