import Image from 'next/image';
import Link from 'next/link';
import { Area } from '@/data/areas';

export default function AreaCard({ area }: { area: Area }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-brand-taupe/20 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-48">
        <Image src={area.image} alt={area.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl text-brand-pine">{area.title}</h3>
        <p className="mt-3 text-slate-600">{area.shortDescription}</p>
        <Link href={`/boise-areas/${area.slug}`} className="mt-5 inline-flex rounded-full bg-brand-forest px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-pine">
          Explore
        </Link>
      </div>
    </article>
  );
}
