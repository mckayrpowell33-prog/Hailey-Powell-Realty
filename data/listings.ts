export type Listing = {
  id: number;
  address: string;
  city: 'Boise' | 'Meridian' | 'Eagle' | 'Kuna' | 'Star';
  state: 'ID';
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  featured: boolean;
  description: string;
  slug: string;
  propertyType: 'Single Family' | 'Townhome' | 'Condo' | 'Luxury Estate';
};

export const listings: Listing[] = [
  { id: 1, address: '4211 N Mockingbird Way', city: 'Boise', state: 'ID', price: 689000, beds: 4, baths: 3, sqft: 2680, image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80', featured: true, description: 'Foothills access, open-concept layout, and a peaceful backyard built for evening sunsets.', slug: '/featured-listings/4211-n-mockingbird-way', propertyType: 'Single Family' },
  { id: 2, address: '923 S Hearthstone Ave', city: 'Meridian', state: 'ID', price: 549000, beds: 4, baths: 2.5, sqft: 2410, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80', featured: true, description: 'Family-friendly floor plan near top schools, parks, and everyday shopping.', slug: '/featured-listings/923-s-hearthstone-ave', propertyType: 'Single Family' },
  { id: 3, address: '1880 W Two Rivers Dr', city: 'Eagle', state: 'ID', price: 1295000, beds: 5, baths: 4.5, sqft: 4010, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', featured: true, description: 'Elegant finishes, generous lot, and refined indoor-outdoor spaces in coveted Eagle.', slug: '/featured-listings/1880-w-two-rivers-dr', propertyType: 'Luxury Estate' },
  { id: 4, address: '4147 S Red Barn Ln', city: 'Kuna', state: 'ID', price: 429000, beds: 3, baths: 2, sqft: 1845, image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80', featured: true, description: 'Modern single-level home with flexible office nook and great value for growing households.', slug: '/featured-listings/4147-s-red-barn-ln', propertyType: 'Single Family' },
  { id: 5, address: '21235 N Hollow Tree Ave', city: 'Star', state: 'ID', price: 624000, beds: 4, baths: 3, sqft: 2760, image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80', featured: true, description: 'Quiet streets, open skies, and upgraded kitchen details in a fast-growing Star community.', slug: '/featured-listings/21235-n-hollow-tree-ave', propertyType: 'Single Family' },
  { id: 6, address: '1105 W Bannock St #402', city: 'Boise', state: 'ID', price: 715000, beds: 2, baths: 2, sqft: 1580, image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80', featured: true, description: 'Downtown condo living with premium finishes, skyline views, and lock-and-leave simplicity.', slug: '/featured-listings/1105-w-bannock-st-402', propertyType: 'Condo' },
  { id: 7, address: '3652 E Copper Point Dr', city: 'Meridian', state: 'ID', price: 498000, beds: 3, baths: 2.5, sqft: 2125, image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80', featured: false, description: 'Stylish townhome close to village amenities with low-maintenance living.', slug: '/featured-listings/3652-e-copper-point-dr', propertyType: 'Townhome' },
  { id: 8, address: '741 N Troutner Way', city: 'Eagle', state: 'ID', price: 899000, beds: 4, baths: 3.5, sqft: 3220, image: 'https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=1200&q=80', featured: false, description: 'Thoughtful craftsmanship, oversized garage, and nearby trails along the river corridor.', slug: '/featured-listings/741-n-troutner-way', propertyType: 'Single Family' },
  { id: 9, address: '1270 W Cedar Ridge Ct', city: 'Kuna', state: 'ID', price: 389000, beds: 3, baths: 2, sqft: 1660, image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80', featured: false, description: 'Budget-conscious opportunity with fresh updates and a large fenced yard.', slug: '/featured-listings/1270-w-cedar-ridge-ct', propertyType: 'Single Family' },
  { id: 10, address: '425 S Morning Dew Ave', city: 'Star', state: 'ID', price: 582000, beds: 4, baths: 2.5, sqft: 2490, image: 'https://images.unsplash.com/photo-1604014237837-1b84f3b6d00f?auto=format&fit=crop&w=1200&q=80', featured: false, description: 'Bright great room, flexible bonus space, and room to breathe in Star’s open neighborhoods.', slug: '/featured-listings/425-s-morning-dew-ave', propertyType: 'Single Family' },
  { id: 11, address: '6512 N Bogus Basin Rd', city: 'Boise', state: 'ID', price: 975000, beds: 4, baths: 3.5, sqft: 3390, image: 'https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=1200&q=80', featured: false, description: 'Foothills retreat balancing privacy, views, and quick access to downtown Boise.', slug: '/featured-listings/6512-n-bogus-basin-rd', propertyType: 'Luxury Estate' },
  { id: 12, address: '209 E Riverpath Ln', city: 'Eagle', state: 'ID', price: 760000, beds: 4, baths: 3, sqft: 2860, image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80', featured: false, description: 'Refined single-story design near Eagle amenities with oversized windows and natural light.', slug: '/featured-listings/209-e-riverpath-ln', propertyType: 'Single Family' }
];
