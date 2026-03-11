import type { Metadata } from 'next';
import AreaCard from '@/components/AreaCard';
import SectionTitle from '@/components/SectionTitle';
import { areas } from '@/data/areas';

export const metadata: Metadata = {
  title: 'Boise Areas | Hailey Powell Realty',
  description: 'Explore Boise, Meridian, Eagle, Kuna, and Star neighborhood guides.'
};

export default function BoiseAreasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Boise Areas"
        title="Local insight for each community we serve"
        description="Every city in the Treasure Valley has a different pace and personality. Explore Boise, Meridian, Eagle, Kuna, and Star."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {areas.map((area) => (
          <AreaCard key={area.slug} area={area} />
        ))}
      </div>
    </div>
  );
}
