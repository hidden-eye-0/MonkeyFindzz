import ProductExplorer from '@/components/ProductExplorer';

export default function Products() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-10">
          <p className="text-sm font-bold text-pink-400">SHOP</p>
          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            All Beauty Finds
          </h1>
          <p className="mt-3 max-w-xl text-[#756a70]">
            Browse skincare, makeup, haircare, body care, fragrance and beauty
            tools.
          </p>
        </div>
        <ProductExplorer />
      </div>
    </section>
  );
}
