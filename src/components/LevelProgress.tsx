import React from 'react';
import { Box, Progress, Text, VStack, HStack, Heading, Badge } from '@chakra-ui/react';

interface LevelProgressProps {
  level: number;
  points: number;
  nextLevelPoints: number;
}

export const LevelProgress: React.FC<LevelProgressProps> = ({
  level,
  points,
  nextLevelPoints,
}) => {
  const progress = (points / nextLevelPoints) * 100;
  const pointsToNextLevel = nextLevelPoints - points;

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      boxShadow="sm"
    >
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <Heading size="md">Level {level}</Heading>
          <Badge colorScheme="blue" fontSize="md">
            {points} points
          </Badge>
        </HStack>
        <Box>
          <Progress
            value={progress}
            size="lg"
            colorScheme="blue"
            borderRadius="full"
          />
          <Text mt={2} fontSize="sm" color="gray.500">
            {pointsToNextLevel} points to next level
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}; 