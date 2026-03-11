import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Reviews | Hailey Powell Realty',
  description: 'Read what Boise-area clients say about working with Hailey Powell Realty.'
};

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Reviews"
        title="Built on trust, relationships, and consistent care"
        description="The best part of this work is helping people feel informed and supported through meaningful decisions."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <section className="mt-16 rounded-2xl border border-dashed border-brand-taupe/40 bg-brand-mist p-8 text-center">
        <h2 className="font-serif text-3xl text-brand-pine">Google Reviews Embed</h2>
        <p className="mt-3 text-slate-600">This section is reserved for the live Google Reviews widget.</p>
        {/* TODO: Insert Google Reviews embed code snippet here. */}
      </section>
    </div>
  );
}
