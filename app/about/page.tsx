import type { Metadata } from 'next';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'About Hailey Powell | Hailey Powell Realty',
  description: 'Learn about Hailey's sincere approach and 30 years of property management experience.'
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionTitle
        eyebrow="About Hailey Powell"
        title="Experienced, sincere, and client-first real estate guidance"
        description="Hailey brings 30 years of property management experience into every buyer and seller conversation."
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="relative min-h-80 overflow-hidden rounded-2xl border border-brand-taupe/20 bg-brand-mist">
          {/* Replace with Hailey's professional headshot in /public/about-hailey.jpg */}
          <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80" alt="Professional portrait placeholder" fill className="object-cover" />
        </div>
        <div className="space-y-5 text-slate-700">
          <p>
            Hailey believes real estate should feel personal, informed, and pressure-free. Her background in property management gives clients practical insight into upkeep, long-term value, and the details that make a home truly work day-to-day.
          </p>
          <p>
            She is known for sincerity, honest communication, and helping people make confident decisions at their own pace. There is no break-off fee, and no hidden strings—just straightforward support from first showing to closing day.
          </p>
          <h2 className="pt-4 font-serif text-3xl text-brand-pine">Why Clients Work With Hailey</h2>
          <ul className="space-y-2">
            <li>• Sincere guidance rooted in real Boise-area market knowledge</li>
            <li>• No break-off fee</li>
            <li>• 30 years of property management experience</li>
            <li>• Honest communication</li>
            <li>• Personalized support without pressure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
