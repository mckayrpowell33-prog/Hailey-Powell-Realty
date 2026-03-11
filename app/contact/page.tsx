import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import LogoBlock from '@/components/LogoBlock';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Contact | Hailey Powell Realty',
  description: 'Contact Hailey Powell Realty for buying, selling, and real estate guidance.'
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s talk about your next move"
        description="Whether you're buying, selling, or just have questions, Hailey is here to help with sincere and practical guidance."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <aside className="space-y-6 rounded-2xl border border-brand-taupe/20 bg-brand-mist p-6">
          <LogoBlock compact />
          <div>
            <h3 className="font-serif text-2xl text-brand-pine">Contact Information</h3>
            <p className="mt-4 text-slate-700">Phone: (208) 433-1319</p>
            <p className="text-slate-700">Email: Haileysnewrealtoremail@HPreality.com</p>
          </div>
          <div>
            {/* Replace with real Instagram URL. */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-semibold text-brand-forest hover:text-brand-pine">
              Instagram link here
            </a>
          </div>
          <div className="rounded-xl border border-dashed border-brand-taupe/40 bg-white p-6">
            <p className="font-semibold text-brand-pine">Map Placeholder</p>
            <p className="mt-2 text-sm text-slate-600">Add office map embed here if desired.</p>
          </div>
          <p className="rounded-xl bg-brand-forest p-4 text-white">
            Reach out anytime for buying, selling, or strategy questions. You’ll get clear communication and thoughtful next steps.
          </p>
        </aside>
      </div>
    </div>
  );
}
