# MonkeyFindzz

Premium baby-pink/white beauty discovery storefront designed for Vercel and Amazon Associates.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Add your Amazon affiliate links

Edit `src/data/products.ts` and replace each `YOUR_AMAZON_AFFILIATE_LINK_HERE` value with the corresponding Amazon Associates URL.

## Add products

Add another `Product` object to `src/data/products.ts`. Product pages and cards are generated from this central catalog.

## Images

The starter catalog uses remote Unsplash images. Replace these with your own permitted product images when publishing, and update `next.config.ts` if you use a different image host.

## Deploy to Vercel

Push the folder to GitHub and import the repository into Vercel. No environment variables are required for the starter static storefront.

## Important

Before launch, replace demo product details/images/ratings/prices with accurate, current information and review Amazon Associates requirements and applicable disclosure/privacy requirements.
