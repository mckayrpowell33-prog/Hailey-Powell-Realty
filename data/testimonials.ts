export type Testimonial = {
  id: number;
  name: string;
  quote: string;
  rating: number;
  city: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'The Anderson Family',
    quote: 'Hailey stayed calm, clear, and sincere through every step. We always knew exactly where things stood.',
    rating: 5,
    city: 'Boise'
  },
  {
    id: 2,
    name: 'Melissa R.',
    quote: 'Her property management background made a huge difference. She spotted details we never would have noticed.',
    rating: 5,
    city: 'Meridian'
  },
  {
    id: 3,
    name: 'James & Lauren T.',
    quote: 'No pressure, no hidden strings, just practical advice and honest communication from start to finish.',
    rating: 5,
    city: 'Eagle'
  },
  {
    id: 4,
    name: 'Carlos P.',
    quote: 'Hailey helped us sell and buy on a tight timeline. She was steady, organized, and genuinely kind.',
    rating: 5,
    city: 'Kuna'
  },
  {
    id: 5,
    name: 'Rebekah M.',
    quote: 'We appreciated the no break-off fee policy and how transparent she was with every option we had.',
    rating: 5,
    city: 'Star'
  },
  {
    id: 6,
    name: 'Tim & Grace H.',
    quote: 'Hailey knows the Boise area so well. Her local insight made us feel confident making a big move.',
    rating: 5,
    city: 'Boise'
  }
];
