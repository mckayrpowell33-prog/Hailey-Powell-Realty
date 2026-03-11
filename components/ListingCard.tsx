import Image from 'next/image';
import Link from 'next/link';
import { Listing } from '@/data/listings';
import { formatNumber, formatPrice } from '@/utils/helpers';

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-brand-taupe/20 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52">
        <Image src={listing.image} alt={listing.address} fill className="object-cover" />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-serif text-2xl text-brand-pine">{formatPrice(listing.price)}</p>
          <span className="rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-forest">{listing.city}</span>
        </div>
        <p className="text-sm text-slate-500">{listing.address}, {listing.city}, {listing.state}</p>
        <p className="text-sm text-slate-700">{listing.description}</p>
        <p className="text-sm font-medium text-slate-600">{listing.beds} beds • {listing.baths} baths • {formatNumber(listing.sqft)} sqft</p>
        <Link href={listing.slug} className="inline-flex rounded-full border border-brand-forest px-4 py-2 text-sm font-semibold text-brand-forest transition hover:bg-brand-forest hover:text-white">
          View Listing
        </Link>
      </div>
    </article>
  );
}
