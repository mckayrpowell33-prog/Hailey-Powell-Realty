import type { Metadata } from 'next';
import ListingCard from '@/components/ListingCard';
import SearchFilters from '@/components/SearchFilters';
import SectionTitle from '@/components/SectionTitle';
import { listings } from '@/data/listings';

export const metadata: Metadata = {
  title: 'Search Homes | Hailey Powell Realty',
  description: 'Explore Boise-area homes with polished search tools and future-ready IDX integration.'
};

export default function SearchHomesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Search Homes"
        title="Find the right fit in Boise and surrounding communities"
        description="Use this polished search preview to explore options while full IDX integration is prepared."
      />
      <div className="mt-10">
        <SearchFilters />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {listings.slice(0, 6).map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
