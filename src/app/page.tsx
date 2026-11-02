import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, ShoppingBag, Sparkles } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Category, categoryMeta, products } from '@/data/products';

const categories = Object.entries(categoryMeta) as [
  Category,
  (typeof categoryMeta)[Category],
][];

export default function Home() {
  return (
    <>
      <section className="heroGlow">
        <div className="container grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
              <Sparkles size={15} />
              Curated beauty finds
            </div>

            <h1 className="text-5xl font-black leading-[.95] tracking-tight md:text-7xl">
              Find Your
              <br />
              <span className="text-pink-300">Beauty</span> Favorites
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#756a70]">
              Discover beauty products worth adding to your routine — all in
              one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-primary">
                Explore Beauty
                <ArrowRight size={17} />
              </Link>
              <Link href="#trending" className="btn btn-pink">
                Shop Trending
              </Link>
            </div>
          </div>

          <div className="glass relative min-h-[420px] overflow-hidden rounded-[38px]">
            <Image
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85"
              alt="Beauty products"
              fill
              className="object-cover"
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="glass absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-3xl p-4">
              <div className="rounded-2xl bg-[#f8c8dc] p-3">
                <Heart size={20} />
              </div>
              <div>
                <b>Little finds, big glow.</b>
                <p className="text-xs text-[#756a70]">
                  Explore your next beauty favorite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="section">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold text-pink-400">EXPLORE</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Shop by Category
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden items-center gap-1 text-sm font-semibold sm:flex"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {categories.map(([key, category]) => (
              <Link
                key={key}
                href={`/category/${key}`}
                className="card group overflow-hidden"
              >
                <div className="relative aspect-[1.25]">
                  <Image
                    src={category.image}
                    alt={category.label}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-black">{category.label}</h3>
                    <p className="mt-1 text-xs opacity-90">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="trending" className="section pt-0">
        <div className="container">
          <div className="mb-8">
            <p className="text-sm font-bold text-pink-400">TRENDING NOW</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Beauty Finds Worth Seeing
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {products
              .filter((product) => product.trending)
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heroGlow grid items-center gap-8 rounded-[36px] border border-pink-100 p-8 md:grid-cols-2 md:p-14">
            <div>
              <p className="text-sm font-bold text-pink-400">
                THE MONKEYFINDZZ WAY
              </p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Beauty Finds, Made Simple.
              </h2>
              <p className="mt-4 leading-7 text-[#756a70]">
                A simple place to discover products, save time searching, and
                head straight to Amazon when you find something you love.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ['Discover', 'Interesting products, without endless searching.'],
                ['Curated', 'A clean collection of beauty categories.'],
                ['Shop Easily', 'Go directly to Amazon from each product.'],
                ['New Finds', 'Keep discovering products worth checking out.'],
              ].map(([title, description]) => (
                <div key={title} className="glass rounded-3xl p-5">
                  <ShoppingBag size={19} />
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#756a70]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
