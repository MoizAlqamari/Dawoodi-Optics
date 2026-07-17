export interface Frame {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price?: string;
  image: string;
  accent: string;
}

export interface Brand {
  name: string;
  tagline: string;
  origin: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const frames: Frame[] = [
  {
    id: 'aurora-round',
    name: 'Aurora Round',
    brand: 'Oliver Peoples',
    category: 'Optical',
    description: 'Hand-finished acetate with a soft circular silhouette. A quiet statement for everyday wear.',
    price: 'From PKR 38,000',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=80',
    accent: '#e7ded2',
  },
  {
    id: 'meridian-square',
    name: 'Meridian Square',
    brand: 'Leica',
    category: 'Optical',
    description: 'Precision-engineered titanium frames with a confident rectangular profile and featherweight feel.',
    price: 'From PKR 52,000',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=900&q=80',
    accent: '#dfe3e6',
  },
  {
    id: 'lumen-aviator',
    name: 'Lumen Aviator',
    brand: 'Gentle Monster',
    category: 'Sunglasses',
    description: 'Sculptural aviators with gradient lenses. Editorial, bold, unmistakably modern.',
    price: 'From PKR 44,000',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
    accent: '#e9e2d6',
  },
  {
    id: 'atlas-clear',
    name: 'Atlas Clear',
    brand: 'Warby Parker',
    category: 'Optical',
    description: 'Clean lines, crisp acetate, and a universally flattering keyhole bridge.',
    price: 'From PKR 29,000',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=80',
    accent: '#e3e7e3',
  },
  {
    id: 'noir-cat',
    name: 'Noir Cat-Eye',
    brand: 'Oliver Peoples',
    category: 'Sunglasses',
    description: 'A refined cat-eye in deep acetate. Retro confidence, contemporary comfort.',
    price: 'From PKR 41,000',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=80',
    accent: '#e6ddd4',
  },
  {
    id: 'vista-rimless',
    name: 'Vista Rimless',
    brand: 'Leica',
    category: 'Optical',
    description: 'Nearly weightless rimless construction with anti-glare coated lenses.',
    price: 'From PKR 58,000',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=80',
    accent: '#dde2e6',
  },
];

export const brands: Brand[] = [
  {
    name: 'Oliver Peoples',
    tagline: 'California craft, heritage detailing.',
    origin: 'USA',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Leica',
    tagline: 'Optical precision, engineered to last.',
    origin: 'Germany',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Gentle Monster',
    tagline: 'Sculptural, bold, editorial.',
    origin: 'South Korea',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Warby Parker',
    tagline: 'Accessible design, home-try-on.',
    origin: 'USA',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=700&q=80',
  },
];

export const services: Service[] = [
  {
    title: 'Eye Testing',
    description: 'Comprehensive, unhurried vision assessments with certified optometrists.',
  },
  {
    title: 'Prescription Glasses',
    description: 'Precision-ground lenses paired with the frame of your choice.',
  },
  {
    title: 'Lens Replacement',
    description: 'Refresh your favourite frames with new, upgraded lenses.',
  },
  {
    title: 'Frame Adjustment',
    description: 'Expert fitting and adjustments for all-day comfort.',
  },
  {
    title: 'Contact Lens Consultation',
    description: 'Personalised fitting and guidance for first-time and experienced wearers.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'The experience felt nothing like a clinic. It was like walking into a boutique where someone actually cared about how I look.',
    name: 'Ayesha Khan',
    role: 'Architect, Karachi',
    initials: 'AK',
  },
  {
    quote:
      'Found a pair of Leicas I had been eyeing for months. The eye test was thorough and the fitting was perfect.',
    name: 'Bilal Sheikh',
    role: 'Photographer',
    initials: 'BS',
  },
  {
    quote:
      'Best optical experience in the city. Premium frames, honest advice, and a space that feels designed.',
    name: 'Mariam Tariq',
    role: 'Creative Director',
    initials: 'MT',
  },
];