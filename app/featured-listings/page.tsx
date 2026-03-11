import type { Metadata } from 'next';
import ListingCard from '@/components/ListingCard';
import SectionTitle from '@/components/SectionTitle';
import { listings } from '@/data/listings';

export const metadata: Metadata = {
  title: 'Featured Listings | Hailey Powell Realty',
  description: 'Browse featured homes across Boise, Meridian, Eagle, Kuna, and Star.'
};

export default function FeaturedListingsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Featured Listings"
        title="Standout homes across the Boise metro"
        description="A curated look at homes with exceptional location, livability, and long-term value."
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <button className="rounded-full border border-brand-taupe/30 px-4 py-2 text-sm text-slate-700">Sort: Newest</button>
        <button className="rounded-full border border-brand-taupe/30 px-4 py-2 text-sm text-slate-700">Price: Low to High</button>
        <button className="rounded-full border border-brand-taupe/30 px-4 py-2 text-sm text-slate-700">Price: High to Low</button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {listings.slice(0, 12).map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
