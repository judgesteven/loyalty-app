import React from 'react';
import { Box, Card, CardBody, CardHeader, Heading, Text, Button, Progress, VStack, HStack, Icon, Badge, useColorModeValue } from '@chakra-ui/react';
import { Mission } from '../types';
import { formatDistanceToNow } from 'date-fns';

interface MissionCardProps {
  mission: Mission;
  onComplete: (missionId: string) => void;
}

export const MissionCard: React.FC<MissionCardProps> = ({ mission, onComplete }) => {
  const getMissionIcon = (type: string) => {
    switch (type) {
      case 'purchase':
        return '🛍️';
      case 'review':
        return '📝';
      case 'social':
        return '📱';
      case 'daily':
        return '📅';
      case 'weekly':
        return '📊';
      case 'special':
        return '🎁';
      default:
        return '🎯';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'yellow';
      case 'hard':
        return 'red';
      default:
        return 'gray';
    }
  };

  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Card
      width="100%"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={mission.isCompleted ? 'gray.50' : cardBg}
      borderColor={borderColor}
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
    >
      <CardHeader bg="pink.50" borderBottomWidth="1px" borderColor={borderColor}>
        <HStack spacing={2} justify="space-between">
          <HStack spacing={2}>
            <Icon as={() => <span>{getMissionIcon(mission.type)}</span>} />
            <Heading size="md">{mission.title}</Heading>
          </HStack>
          <Badge colorScheme={getDifficultyColor(mission.difficulty)}>
            {mission.difficulty}
          </Badge>
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack align="stretch" spacing={4}>
          <Text>{mission.description}</Text>
          
          {mission.expiresAt && (
            <Box>
              <Text fontSize="sm" color="gray.500">
                Time Remaining: {formatDistanceToNow(new Date(mission.expiresAt), { addSuffix: true })}
              </Text>
            </Box>
          )}

          {mission.progress !== undefined && (
            <Box>
              <Text fontSize="sm" color="gray.500">
                Progress: {mission.requirements.currentValue}/{mission.requirements.value}
              </Text>
              <Progress
                value={mission.progress}
                size="sm"
                colorScheme="pink"
                mt={2}
              />
            </Box>
          )}

          <Box>
            <Text fontSize="sm" color="gray.500">
              Reward: {mission.pointsReward} points
            </Text>
            {mission.bonusReward && (
              <Text fontSize="sm" color="pink.500">
                Bonus: {mission.bonusReward.value} {mission.bonusReward.type}
              </Text>
            )}
          </Box>

          <Button
            colorScheme={mission.isCompleted ? 'gray' : 'pink'}
            onClick={() => onComplete(mission.id)}
            isDisabled={mission.isCompleted}
            size="sm"
          >
            {mission.isCompleted ? 'Completed' : 'Complete Mission'}
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}; 