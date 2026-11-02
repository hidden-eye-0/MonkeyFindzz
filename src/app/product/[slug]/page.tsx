import { ArrowLeft, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AmazonButton from '@/components/AmazonButton';
import { products } from '@/data/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container">
        <Link
          href="/products"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold"
        >
          <ArrowLeft size={16} />
          Back to finds
        </Link>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="card p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-3xl object-cover"
            />
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-500">
              <Sparkles size={14} />
              {product.category}
            </div>

            <div className="mt-5 text-sm text-[#756a70]">{product.brand}</div>
            <h1 className="mt-1 text-4xl font-black leading-tight md:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <Star size={17} fill="currentColor" />
              {product.rating}
              <span className="text-[#756a70]">
                ({product.reviewCount} ratings)
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <strong className="text-3xl">
                ₹{product.price.toLocaleString('en-IN')}
              </strong>
              {product.originalPrice && (
                <del className="text-[#9b8f95]">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </del>
              )}
              {product.discount && (
                <span className="rounded-full bg-[#fce4ec] px-3 py-1 text-sm font-bold">
                  {product.discount}
                </span>
              )}
            </div>

            <p className="mt-6 leading-7 text-[#756a70]">
              {product.description}
            </p>

            <div className="mt-7">
              <AmazonButton url={product.amazonUrl} />
              <p className="mt-3 text-center text-xs text-[#756a70]">
                As an Amazon Associate, MonkeyFindzz earns from qualifying
                purchases.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-pink-100 bg-[#fff4f8] p-5">
              <h3 className="font-bold">About this find</h3>
              <p className="mt-2 text-sm leading-6 text-[#756a70]">
                Product details and pricing can change on Amazon. Use the
                button above to view the current listing and purchase directly
                from Amazon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
