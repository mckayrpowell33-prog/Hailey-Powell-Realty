import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-mist">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/boise-skyline.svg')" }}
        aria-hidden
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-taupe">Boise Real Estate, Done Sincerely</p>
          <h1 className="font-serif text-5xl leading-tight text-brand-pine">Find Your Place in Boise and Beyond</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-700">
            Hailey Powell Realty offers sincere, knowledgeable guidance for buyers and sellers across Boise, Meridian, Eagle, Kuna, and Star.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/search-homes" className="rounded-full bg-brand-forest px-6 py-3 font-semibold text-white transition hover:bg-brand-pine">Search Homes</Link>
            <Link href="/contact" className="rounded-full border border-brand-forest px-6 py-3 font-semibold text-brand-forest transition hover:bg-brand-forest hover:text-white">Contact Hailey</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
