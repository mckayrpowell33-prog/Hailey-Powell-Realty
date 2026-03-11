export type Area = {
  slug: 'boise' | 'meridian' | 'eagle' | 'kuna' | 'star';
  title: string;
  shortDescription: string;
  lifestyle: string;
  marketVibe: string;
  image: string;
};

export const areas: Area[] = [
  {
    slug: 'boise',
    title: 'Boise',
    shortDescription: 'Active, central, and surrounded by foothills with distinct neighborhoods.',
    lifestyle: 'Boise offers a mix of city energy and outdoor access. Residents enjoy local restaurants, greenbelt biking, and easy foothills trails right after work.',
    marketVibe: 'From historic North End character homes to newer foothills builds and downtown condos, Boise has variety and strong long-term demand.',
    image: 'https://images.unsplash.com/photo-1569180880150-df9f39de8f4f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'meridian',
    title: 'Meridian',
    shortDescription: 'Family-friendly neighborhoods with convenience, growth, and great schools.',
    lifestyle: 'Meridian blends practical convenience with community-focused living, featuring parks, shopping hubs, and commuter-friendly routes.',
    marketVibe: 'Expect newer subdivisions, functional layouts, and solid value in a market that continues to grow with Boise metro demand.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'eagle',
    title: 'Eagle',
    shortDescription: 'Upscale neighborhoods, scenic streets, and spacious homesites.',
    lifestyle: 'Eagle is known for a refined pace, scenic river access, and custom homes with room to spread out.',
    marketVibe: 'Luxury estates, premium communities, and custom builds define Eagle with steady interest from buyers seeking lifestyle and quality.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'kuna',
    title: 'Kuna',
    shortDescription: 'A quieter pace with value opportunities and room for growth.',
    lifestyle: 'Kuna provides small-town warmth, wide streets, and everyday affordability while staying connected to the larger Treasure Valley.',
    marketVibe: 'Kuna remains value-oriented with newer inventory and growing demand from buyers prioritizing budget and future upside.',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'star',
    title: 'Star',
    shortDescription: 'Open space, small-town feel, and an expanding housing market.',
    lifestyle: 'Star offers slower mornings, neighborhood trails, and a close-knit atmosphere that still provides access to metro amenities.',
    marketVibe: 'The market is expanding with modern floor plans, larger lots, and opportunities for buyers looking beyond Boise proper.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80'
  }
];
