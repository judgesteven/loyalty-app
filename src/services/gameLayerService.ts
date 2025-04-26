import axios from 'axios';
import { Mission, Achievement, User } from '../types';

const API_KEY = import.meta.env.VITE_GAMELAYER_API_KEY;
const BASE_URL = 'https://api.gamelayer.co/v1';

const gameLayerApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const gameLayerService = {
  // User related endpoints
  getUser: async (userId: string) => {
    const response = await gameLayerApi.get(`/users/${userId}`);
    return response.data;
  },

  updateUserPoints: async (userId: string, points: number) => {
    const response = await gameLayerApi.post(`/users/${userId}/points`, { points });
    return response.data;
  },

  // Mission related endpoints
  getMissions: async (userId: string) => {
    const response = await gameLayerApi.get(`/users/${userId}/missions`);
    return response.data;
  },

  completeMission: async (userId: string, missionId: string) => {
    const response = await gameLayerApi.post(`/users/${userId}/missions/${missionId}/complete`);
    return response.data;
  },

  // Achievement related endpoints
  getAchievements: async (userId: string) => {
    const response = await gameLayerApi.get(`/users/${userId}/achievements`);
    return response.data;
  },

  unlockAchievement: async (userId: string, achievementId: string) => {
    const response = await gameLayerApi.post(`/users/${userId}/achievements/${achievementId}/unlock`);
    return response.data;
  },

  // Level related endpoints
  getUserLevel: async (userId: string) => {
    const response = await gameLayerApi.get(`/users/${userId}/level`);
    return response.data;
  },

  // Mock data for development
  getMockMissions: (): Mission[] => [
    {
      id: '1',
      title: 'First Purchase',
      description: 'Make your first purchase to earn bonus points',
      pointsReward: 100,
      type: 'purchase',
      requirements: { type: 'purchase', value: 1 },
      isCompleted: false,
    },
    {
      id: '2',
      title: 'Product Review',
      description: 'Write a review for any purchased product',
      pointsReward: 50,
      type: 'review',
      requirements: { type: 'review', value: 1 },
      isCompleted: false,
    },
    {
      id: '3',
      title: 'Social Share',
      description: 'Share your purchase on social media',
      pointsReward: 75,
      type: 'social',
      requirements: { type: 'social', value: 1 },
      isCompleted: false,
    },
  ],

  getMockAchievements: (): Achievement[] => [
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
      icon: '��',
    },
  ],
}; 