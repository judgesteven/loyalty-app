export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  pointsValue: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  level: number;
  achievements: Achievement[];
  completedMissions: Mission[];
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  pointsReward: number;
  type: 'purchase' | 'review' | 'social' | 'referral' | 'daily' | 'weekly' | 'special';
  requirements: {
    type: string;
    value: number;
    currentValue?: number;
  };
  isCompleted: boolean;
  expiresAt?: string; // ISO date string
  startedAt?: string; // ISO date string
  progress?: number; // 0-100
  difficulty: 'easy' | 'medium' | 'hard';
  bonusReward?: {
    type: 'points' | 'product' | 'discount';
    value: number;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  type: 'discount' | 'product' | 'service';
  value: number;
  isAvailable: boolean;
}

export interface Level {
  level: number;
  name: string;
  requiredPoints: number;
  benefits: string[];
} 