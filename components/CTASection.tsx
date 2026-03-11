import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-brand-forest py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 lg:flex-row lg:items-center lg:px-8">
        <div>
          <h2 className="font-serif text-4xl">Ready to start your home search?</h2>
          <p className="mt-3 text-white/85">Browse current Boise-area homes now, and let Hailey guide you with sincere, no-pressure support.</p>
        </div>
        <Link href="/search-homes" className="rounded-full bg-white px-6 py-3 font-semibold text-brand-forest transition hover:bg-brand-mist">
          Search Homes
        </Link>
      </div>
    </section>
  );
}
