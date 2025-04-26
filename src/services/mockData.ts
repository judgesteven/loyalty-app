import { Product, Mission, Achievement, Level, Reward } from '../types';

export const mockProducts: Product[] = [
  // Skincare
  {
    id: '1',
    name: 'Hydrating Face Serum',
    description: 'A lightweight, fast-absorbing serum that delivers intense hydration.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
    category: 'Skincare',
    pointsValue: 50,
  },
  {
    id: '2',
    name: 'Vitamin C Brightening Cream',
    description: 'Brightens and evens skin tone while providing antioxidant protection.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b',
    category: 'Skincare',
    pointsValue: 40,
  },
  {
    id: '3',
    name: 'Gentle Exfoliating Toner',
    description: 'Removes dead skin cells and unclogs pores for a radiant complexion.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
    category: 'Skincare',
    pointsValue: 30,
  },

  // Makeup
  {
    id: '4',
    name: 'Matte Lipstick',
    description: 'Long-lasting, highly pigmented matte lipstick.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa',
    category: 'Makeup',
    pointsValue: 25,
  },
  {
    id: '5',
    name: 'Liquid Foundation',
    description: 'Full coverage foundation with a natural finish.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
    category: 'Makeup',
    pointsValue: 35,
  },
  {
    id: '6',
    name: 'Eyeshadow Palette',
    description: 'Versatile palette with 12 highly pigmented shades.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796',
    category: 'Makeup',
    pointsValue: 45,
  },

  // Haircare
  {
    id: '7',
    name: 'Natural Hair Mask',
    description: 'Deep conditioning treatment for all hair types.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
    category: 'Haircare',
    pointsValue: 35,
  },
  {
    id: '8',
    name: 'Volumizing Shampoo',
    description: 'Adds body and volume to fine, limp hair.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da',
    category: 'Haircare',
    pointsValue: 25,
  },
  {
    id: '9',
    name: 'Heat Protectant Spray',
    description: 'Protects hair from heat damage up to 450°F.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
    category: 'Haircare',
    pointsValue: 20,
  },

  // Fragrance
  {
    id: '10',
    name: 'Floral Perfume',
    description: 'Light and airy floral scent perfect for everyday wear.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    category: 'Fragrance',
    pointsValue: 60,
  },
  {
    id: '11',
    name: 'Woody Eau de Parfum',
    description: 'Rich and sophisticated woody fragrance.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    category: 'Fragrance',
    pointsValue: 70,
  },
  {
    id: '12',
    name: 'Citrus Body Mist',
    description: 'Refreshing citrus scent in a lightweight mist.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1595425970375-3f4c2f1f1f1f',
    category: 'Fragrance',
    pointsValue: 30,
  },

  // Bath & Body
  {
    id: '13',
    name: 'Luxury Bath Oil',
    description: 'Nourishing bath oil with essential oils.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
    category: 'Bath & Body',
    pointsValue: 40,
  },
  {
    id: '14',
    name: 'Body Scrub',
    description: 'Exfoliating body scrub with natural ingredients.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
    category: 'Bath & Body',
    pointsValue: 30,
  },
  {
    id: '15',
    name: 'Hand Cream',
    description: 'Rich, moisturizing hand cream with shea butter.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
    category: 'Bath & Body',
    pointsValue: 20,
  }
];

export const mockMissions: Mission[] = [
  {
    id: '1',
    title: 'First Purchase',
    description: 'Make your first purchase to earn bonus points',
    pointsReward: 100,
    type: 'purchase',
    requirements: { type: 'purchase', value: 1, currentValue: 0 },
    isCompleted: false,
    difficulty: 'easy',
    startedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Daily Beauty Check-in',
    description: 'Visit the store daily for 7 days to earn bonus points',
    pointsReward: 50,
    type: 'daily',
    requirements: { type: 'visits', value: 7, currentValue: 2 },
    isCompleted: false,
    difficulty: 'medium',
    startedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    progress: 28,
    bonusReward: {
      type: 'points',
      value: 200
    }
  },
  {
    id: '3',
    title: 'Weekend Warrior',
    description: 'Make a purchase during the weekend to earn double points',
    pointsReward: 150,
    type: 'special',
    requirements: { type: 'weekend_purchase', value: 1, currentValue: 0 },
    isCompleted: false,
    difficulty: 'easy',
    startedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    title: 'Product Review Master',
    description: 'Write 5 detailed product reviews this week',
    pointsReward: 200,
    type: 'weekly',
    requirements: { type: 'reviews', value: 5, currentValue: 1 },
    isCompleted: false,
    difficulty: 'hard',
    startedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    progress: 20,
    bonusReward: {
      type: 'discount',
      value: 15
    }
  },
  {
    id: '5',
    title: 'Social Media Influencer',
    description: 'Share 3 purchases on social media with #BeautyStore',
    pointsReward: 100,
    type: 'social',
    requirements: { type: 'social_shares', value: 3, currentValue: 0 },
    isCompleted: false,
    difficulty: 'medium',
    startedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'Beauty Enthusiast',
    description: 'Purchase 5 beauty products',
    icon: '🌟',
  },
  {
    id: '2',
    title: 'Review Master',
    description: 'Write 10 product reviews',
    icon: '📝',
  },
  {
    id: '3',
    title: 'Social Butterfly',
    description: 'Share 5 purchases on social media',
    icon: '🦋',
  },
];

export const mockLevels: Level[] = [
  {
    level: 1,
    name: 'Beauty Beginner',
    requiredPoints: 0,
    benefits: [
      'Earn 1 point per $1 spent',
      'Access to basic rewards',
    ],
  },
  {
    level: 2,
    name: 'Beauty Explorer',
    requiredPoints: 1000,
    benefits: [
      'Earn 1.5 points per $1 spent',
      'Access to premium rewards',
      'Free shipping on orders over $50',
    ],
  },
  {
    level: 3,
    name: 'Beauty Expert',
    requiredPoints: 5000,
    benefits: [
      'Earn 2 points per $1 spent',
      'Access to exclusive rewards',
      'Free shipping on all orders',
      'Early access to new products',
    ],
  },
];

export const mockRewards: Reward[] = [
  {
    id: '1',
    title: '10% Off Your Next Purchase',
    description: 'Get 10% off your next purchase of any amount',
    pointsCost: 500,
    type: 'discount',
    value: 10,
    isAvailable: true,
  },
  {
    id: '2',
    title: 'Free Shipping',
    description: 'Free shipping on your next order',
    pointsCost: 300,
    type: 'service',
    value: 0,
    isAvailable: true,
  },
  {
    id: '3',
    title: 'Free Sample Pack',
    description: 'Get a free sample pack of our best-selling products',
    pointsCost: 200,
    type: 'product',
    value: 0,
    isAvailable: true,
  },
  {
    id: '4',
    title: '20% Off Your Next Purchase',
    description: 'Get 20% off your next purchase of any amount',
    pointsCost: 1000,
    type: 'discount',
    value: 20,
    isAvailable: true,
  },
  {
    id: '5',
    title: 'Free Gift with Purchase',
    description: 'Get a free gift with your next purchase over $50',
    pointsCost: 750,
    type: 'product',
    value: 0,
    isAvailable: true,
  },
]; 