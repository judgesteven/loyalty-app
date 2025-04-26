import React from 'react';
import { Card, CardBody, CardHeader, Heading, Text, Icon } from '@chakra-ui/react';
import { Achievement } from '../types';

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const isUnlocked = !!achievement.unlockedAt;

  return (
    <Card
      width="100%"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={isUnlocked ? 'green.50' : 'white'}
      opacity={isUnlocked ? 1 : 0.7}
    >
      <CardHeader>
        <Icon as={() => <span>{achievement.icon}</span>} />
        <Heading size="md">{achievement.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{achievement.description}</Text>
        {isUnlocked && achievement.unlockedAt && (
          <Text fontSize="sm" color="gray.500">
            Unlocked on {new Date(achievement.unlockedAt).toLocaleDateString()}
          </Text>
        )}
      </CardBody>
    </Card>
  );
}; 