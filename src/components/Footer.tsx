import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-pink-100">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-2xl font-black">
            Monkey<span className="text-pink-300">Findzz</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-[#756a70]">
            Beauty finds worth discovering. Explore skincare, makeup, haircare,
            fragrance and more.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Explore</h3>
          <div className="grid gap-3 text-sm text-[#756a70]">
            <Link href="/products">Shop all</Link>
            <Link href="/category/skincare">Skincare</Link>
            <Link href="/category/makeup">Makeup</Link>
            <Link href="/category/haircare">Haircare</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">MonkeyFindzz</h3>
          <div className="grid gap-3 text-sm text-[#756a70]">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>

      <div className="container flex flex-col justify-between gap-3 border-t border-pink-100 py-5 text-xs text-[#756a70] sm:flex-row">
        <span>© 2026 MonkeyFindzz. All rights reserved.</span>
        <span className="flex items-center gap-1">
          As an Amazon Associate, MonkeyFindzz earns from qualifying purchases.
          <Heart size={12} />
        </span>
      </div>
    </footer>
  );
}
