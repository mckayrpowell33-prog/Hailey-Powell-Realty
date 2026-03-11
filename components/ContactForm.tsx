export default function ContactForm() {
  return (
    <form className="space-y-4 rounded-2xl border border-brand-taupe/20 bg-white p-6 shadow-soft">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-brand-pine">Name</label>
        <input id="name" name="name" className="w-full rounded-lg border border-brand-taupe/30 px-3 py-2 focus:border-brand-forest focus:outline-none" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-brand-pine">Email</label>
        <input id="email" name="email" type="email" className="w-full rounded-lg border border-brand-taupe/30 px-3 py-2 focus:border-brand-forest focus:outline-none" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-brand-pine">Phone</label>
        <input id="phone" name="phone" type="tel" className="w-full rounded-lg border border-brand-taupe/30 px-3 py-2 focus:border-brand-forest focus:outline-none" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-brand-pine">Message</label>
        <textarea id="message" name="message" rows={5} className="w-full rounded-lg border border-brand-taupe/30 px-3 py-2 focus:border-brand-forest focus:outline-none" />
      </div>
      <button type="submit" className="rounded-full bg-brand-forest px-5 py-2 font-semibold text-white transition hover:bg-brand-pine">Send Message</button>
    </form>
  );
}
