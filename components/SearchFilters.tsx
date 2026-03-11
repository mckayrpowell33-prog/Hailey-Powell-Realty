export default function SearchFilters() {
  return (
    <div className="rounded-2xl border border-brand-taupe/20 bg-white p-6 shadow-soft">
      <h2 className="font-serif text-2xl text-brand-pine">Full IDX Search</h2>
      <p className="mt-2 text-slate-600">Search active homes by price, lifestyle, and neighborhood preferences.</p>
      {/* TODO: Replace this filter UI with real IDX embed/API integration for live MLS data. */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <input placeholder="Price Range" className="rounded-lg border border-brand-taupe/30 px-3 py-2" />
        <input placeholder="Beds" className="rounded-lg border border-brand-taupe/30 px-3 py-2" />
        <input placeholder="Baths" className="rounded-lg border border-brand-taupe/30 px-3 py-2" />
        <input placeholder="Property Type" className="rounded-lg border border-brand-taupe/30 px-3 py-2" />
        <input placeholder="City" className="rounded-lg border border-brand-taupe/30 px-3 py-2" />
        <input placeholder="Keywords" className="rounded-lg border border-brand-taupe/30 px-3 py-2" />
      </div>
      <button className="mt-5 rounded-full bg-brand-forest px-5 py-2 font-semibold text-white">Apply Filters</button>
    </div>
  );
}
