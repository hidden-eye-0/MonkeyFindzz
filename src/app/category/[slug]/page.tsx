import { notFound } from 'next/navigation';
import ProductExplorer from '@/components/ProductExplorer';
import { categoryMeta, Category } from '@/data/products';

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((slug) => ({ slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in categoryMeta)) {
    notFound();
  }

  const category = categoryMeta[slug as Category];

  return (
    <section className="section">
      <div className="container">
        <div className="relative mb-10 h-64 overflow-hidden rounded-[36px] md:h-80">
          <img
            src={category.image}
            alt={category.label}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
          <div className="absolute bottom-8 left-7 max-w-lg text-white md:left-12">
            <p className="text-sm font-bold uppercase tracking-widest">
              Category
            </p>
            <h1 className="mt-2 text-4xl font-black md:text-5xl">
              {category.label}
            </h1>
            <p className="mt-2 opacity-90">{category.description}</p>
          </div>
        </div>

        <ProductExplorer initialCategory={slug as Category} />
      </div>
    </section>
  );
}
