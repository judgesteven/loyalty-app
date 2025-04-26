import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Mission, Achievement } from '../types';
import { gameLayerService } from '../services/gameLayerService';
import { mockMissions, mockAchievements } from '../services/mockData';

interface LoyaltyContextType {
  user: User | null;
  missions: Mission[];
  achievements: Achievement[];
  points: number;
  level: number;
  loading: boolean;
  error: string | null;
  completeMission: (missionId: string) => Promise<void>;
  updatePoints: (points: number) => Promise<void>;
}

const LoyaltyContext = createContext<LoyaltyContextType | undefined>(undefined);

export const LoyaltyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock user ID for development
  const userId = 'mock-user-1';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // In development, use mock data
        const mockUser: User = {
          id: userId,
          name: 'Test User',
          email: 'test@example.com',
          points: 0,
          level: 1,
          achievements: [],
          completedMissions: [],
        };
        setUser(mockUser);
        setMissions(mockMissions);
        setAchievements(mockAchievements);
      } catch (err) {
        setError('Failed to fetch user data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const completeMission = async (missionId: string) => {
    try {
      const mission = missions.find(m => m.id === missionId);
      if (!mission) return;

      // Update mission completion status
      const updatedMissions = missions.map(m =>
        m.id === missionId ? { ...m, isCompleted: true } : m
      );
      setMissions(updatedMissions);

      // Update points
      const newPoints = points + mission.pointsReward;
      setPoints(newPoints);

      // Check for level up
      const newLevel = Math.floor(newPoints / 1000) + 1;
      if (newLevel > level) {
        setLevel(newLevel);
      }

      // In production, call the API
      // await gameLayerService.completeMission(userId, missionId);
    } catch (err) {
      setError('Failed to complete mission');
      console.error(err);
    }
  };

  const updatePoints = async (newPoints: number) => {
    try {
      setPoints(newPoints);
      // In production, call the API
      // await gameLayerService.updateUserPoints(userId, newPoints);
    } catch (err) {
      setError('Failed to update points');
      console.error(err);
    }
  };

  return (
    <LoyaltyContext.Provider
      value={{
        user,
        missions,
        achievements,
        points,
        level,
        loading,
        error,
        completeMission,
        updatePoints,
      }}
    >
      {children}
    </LoyaltyContext.Provider>
  );
};

export const useLoyalty = () => {
  const context = useContext(LoyaltyContext);
  if (context === undefined) {
    throw new Error('useLoyalty must be used within a LoyaltyProvider');
  }
  return context;
}; 