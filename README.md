# MonkeyFindzz

A premium baby-pink/white beauty product discovery storefront designed for Vercel and Amazon Associates.

## Features

- Responsive beauty storefront
- Product categories
- Product search
- Product sorting
- Individual product pages
- Amazon affiliate CTA
- Affiliate disclosure
- Privacy policy
- Vercel-ready Next.js application

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Add products

Product data is centralized in:

```text
src/data/products.ts
```

Add a new object to the `products` array:

```ts
{
  id: '9',
  slug: 'example-beauty-product',
  name: 'Example Beauty Product',
  brand: 'Example Brand',
  category: 'skincare',
  description: 'Short product description.',
  price: 999,
  rating: 4.5,
  reviewCount: 100,
  image: '/products/example.jpg',
  amazonUrl: 'YOUR_AMAZON_AFFILIATE_LINK_HERE',
  featured: true,
  trending: true,
}
```

## Add product images

Place local product images in:

```text
public/products/
```

Then reference them from the product data with a path such as:

```text
/products/example.jpg
```

## Replace Amazon links

Replace:

```text
YOUR_AMAZON_AFFILIATE_LINK_HERE
```

with the appropriate Amazon Associates link for that product.

The reusable Amazon CTA is located at:

```text
src/components/AmazonButton.tsx
```

## Build for production

Run the TypeScript check:

```bash
npm run lint
```

Build the production application:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

No environment variables are required for the initial static storefront.
