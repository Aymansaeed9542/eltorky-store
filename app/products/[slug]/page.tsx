import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const products: { [key: string]: { image: string; title: string; description: string } } = {
  'product-1': {
    image: '/تريكو/model1.jpg',
    title: 'منتج 1',
    description: 'وصف المنتج الأول من مجموعة تريكو',
  },
  'product-2': {
    image: '/تريكو/model2.jpg',
    title: 'منتج 2',
    description: 'وصف المنتج الثاني من مجموعة تريكو',
  },
  'product-3': {
    image: '/تريكو/model3.jpg',
    title: 'منتج 3',
    description: 'وصف المنتج الثالث من مجموعة تريكو',
  },
};

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products[params.slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-black mb-8 font-tajawal transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          العودة للصفحة الرئيسية
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tajawal">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 font-tajawal">
              {product.description}
            </p>
            
            {/* Add to Cart Button */}
            <button className="w-full md:w-auto px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-tajawal text-lg font-medium">
              أضف إلى السلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

