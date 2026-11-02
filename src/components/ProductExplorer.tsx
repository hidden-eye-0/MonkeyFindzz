'use client';

import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Category, products } from '@/data/products';
import ProductCard from './ProductCard';

const categories: [string, Category | ''][] = [
  ['All', ''],
  ['Skincare', 'skincare'],
  ['Makeup', 'makeup'],
  ['Haircare', 'haircare'],
  ['Body Care', 'bodycare'],
  ['Fragrance', 'fragrance'],
  ['Beauty Tools', 'tools'],
];

export default function ProductExplorer({
  initialCategory = '',
}: {
  initialCategory?: Category | '';
}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category | ''>(initialCategory);
  const [sort, setSort] = useState('featured');

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory =
        !category || product.category === category;
      const searchText = `${product.name} ${product.brand} ${product.category}`.toLowerCase();
      const matchesQuery = !query || searchText.includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });

    if (sort === 'low') {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === 'high') {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [query, category, sort]);

  return (
    <div>
      <div className="glass mb-8 rounded-3xl p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-3.5 text-[#756a70]"
              size={19}
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search beauty finds..."
              className="w-full rounded-2xl border border-pink-100 bg-white px-11 py-3 outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-2xl border border-pink-100 bg-white px-4 py-3 outline-none"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="flex gap-2 overflow-x-auto pt-4 pb-1">
          {categories.map(([label, value]) => (
            <button
              key={label}
              onClick={() => setCategory(value)}
              className={`pill text-sm font-semibold ${
                category === value
                  ? '!border-[#f8c8dc] !bg-[#f8c8dc]'
                  : ''
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length ? (
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <SlidersHorizontal className="mx-auto mb-4 text-pink-300" />
          <h2 className="text-xl font-bold">No beauty finds found.</h2>
          <p className="mt-2 text-[#756a70]">
            Try another search or category.
          </p>
        </div>
      )}
    </div>
  );
}
