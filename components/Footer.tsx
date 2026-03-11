import Link from 'next/link';
import LogoBlock from './LogoBlock';

export default function Footer() {
  return (
    <footer className="border-t border-brand-taupe/20 bg-brand-mist">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <LogoBlock />
          <p className="mt-4 max-w-md text-slate-600">
            Honest guidance for Boise-area buyers and sellers, backed by three decades of property management insight and sincere client care.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl text-brand-pine">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li><Link href="/search-homes">Search Homes</Link></li>
            <li><Link href="/featured-listings">Featured Listings</Link></li>
            <li><Link href="/boise-areas">Boise Areas</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl text-brand-pine">Contact</h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>(208) 433-1319</li>
            <li>Haileysnewrealtoremail@HPreality.com</li>
            <li>
              {/* Replace this placeholder URL with the real Instagram profile URL. */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-forest">Instagram link here</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-taupe/20 px-4 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Hailey Powell Realty. All rights reserved.
      </div>
    </footer>
  );
}
