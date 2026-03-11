import { Testimonial } from '@/data/testimonials';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-2xl border border-brand-taupe/20 bg-white p-6 shadow-soft">
      <p className="text-brand-forest">{'★'.repeat(testimonial.rating)}</p>
      <p className="mt-4 text-slate-700">“{testimonial.quote}”</p>
      <p className="mt-4 font-semibold text-brand-pine">{testimonial.name}</p>
      <p className="text-sm text-slate-500">{testimonial.city}</p>
    </article>
  );
}
