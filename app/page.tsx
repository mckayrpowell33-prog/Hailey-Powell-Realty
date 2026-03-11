import { Metadata } from 'next';
import AreaCard from '@/components/AreaCard';
import CTASection from '@/components/CTASection';
import HeroSection from '@/components/HeroSection';
import ListingCard from '@/components/ListingCard';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';
import { areas } from '@/data/areas';
import { listings } from '@/data/listings';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Hailey Powell Realty | Boise Real Estate',
  description: 'Find Boise-area homes and neighborhoods with sincere guidance from Hailey Powell Realty.'
};

export default function HomePage() {
  const featured = listings.filter((listing) => listing.featured).slice(0, 6);

  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Welcome"
          title="A grounded Boise real estate experience"
          description="At Hailey Powell Realty, clients get sincere communication, practical guidance, and neighborhood-level insight across Boise and surrounding communities."
        />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <SectionTitle eyebrow="Featured Listings" title="Homes currently catching buyers’ attention" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
      <section className="bg-brand-mist py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle eyebrow="Client Reviews" title="What clients say about working with Hailey" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="Boise Areas" title="Explore communities across the Treasure Valley" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area) => (
            <AreaCard key={area.slug} area={area} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
