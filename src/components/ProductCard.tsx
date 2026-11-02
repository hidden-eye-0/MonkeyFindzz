import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Product } from '@/data/products';
import AmazonButton from './AmazonButton';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card overflow-hidden p-3">
      <Link href={`/product/${product.slug}`}>
        <div className="relative">
          <Image
            className="product-img"
            src={product.image}
            alt={product.name}
            width={700}
            height={700}
          />
          {product.discount && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">
              {product.discount}
            </span>
          )}
        </div>
      </Link>

      <div className="p-2 pt-4">
        <div className="text-xs text-[#756a70]">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 font-bold leading-snug hover:underline">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-1 text-sm">
          <Star size={14} fill="currentColor" />
          {product.rating}
          <span className="text-[#756a70]">({product.reviewCount})</span>
        </div>

        <div className="mt-3 mb-4 flex items-center gap-2">
          <strong className="text-lg">
            ₹{product.price.toLocaleString('en-IN')}
          </strong>
          {product.originalPrice && (
            <del className="text-sm text-[#9b8f95]">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </del>
          )}
        </div>

        <AmazonButton url={product.amazonUrl} />
      </div>
    </article>
  );
}
