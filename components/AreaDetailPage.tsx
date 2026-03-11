import Link from 'next/link';
import ListingCard from './ListingCard';
import SectionTitle from './SectionTitle';
import { areas } from '@/data/areas';
import { listings } from '@/data/listings';

export default function AreaDetailPage({ slug }: { slug: 'boise' | 'meridian' | 'eagle' | 'kuna' | 'star' }) {
  const area = areas.find((entry) => entry.slug === slug);
  if (!area) return null;

  const cityListings = listings.filter((listing) => listing.city.toLowerCase() === area.slug).slice(0, 3);

  return (
    <div>
      <section className="bg-brand-mist py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-taupe">Boise Area Community</p>
          <h1 className="mt-3 font-serif text-5xl text-brand-pine">Living in {area.title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-700">{area.shortDescription}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionTitle title="Why people choose this area" description={area.lifestyle} />
        </div>
        <div>
          <SectionTitle title="Home style and market vibe" description={area.marketVibe} />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
        <SectionTitle title={`Featured ${area.title} listings`} />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cityListings.length ? cityListings.map((listing) => <ListingCard key={listing.id} listing={listing} />) : <p>No listings available.</p>}
        </div>
      </section>
      <section className="bg-brand-forest py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-4xl">Search homes in {area.title}</h2>
          <p className="mt-3">Get local guidance with clear communication and practical insight at every step.</p>
          <Link href="/search-homes" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-brand-forest">Search Homes</Link>
        </div>
      </section>
    </div>
  );
}
