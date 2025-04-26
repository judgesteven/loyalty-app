import React from 'react';
import { Box, Card, CardBody, CardHeader, Heading, Text, VStack, HStack, Icon, Badge } from '@chakra-ui/react';
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
        <HStack spacing={2}>
          <Icon as={() => <span>{achievement.icon}</span>} />
          <Heading size="md">{achievement.title}</Heading>
          {isUnlocked && (
            <Badge colorScheme="green" ml="auto">
              Unlocked
            </Badge>
          )}
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack align="stretch" spacing={2}>
          <Text>{achievement.description}</Text>
          {isUnlocked && achievement.unlockedAt && (
            <Text fontSize="sm" color="gray.500">
              Unlocked on {new Date(achievement.unlockedAt).toLocaleDateString()}
            </Text>
          )}
        </VStack>
      </CardBody>
    </Card>
  );
}; 