import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
  useToast,
} from '@chakra-ui/react';
import { Reward } from '../types';
import { useLoyalty } from '../context/LoyaltyContext';

interface RewardCardProps {
  reward: Reward;
}

export const RewardCard: React.FC<RewardCardProps> = ({ reward }) => {
  const { points, updatePoints } = useLoyalty();
  const toast = useToast();

  const handleRedeem = () => {
    if (points >= reward.pointsCost) {
      updatePoints(points - reward.pointsCost);
      toast({
        title: 'Reward Redeemed!',
        description: `You've successfully redeemed ${reward.title}`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Not Enough Points',
        description: `You need ${reward.pointsCost - points} more points to redeem this reward`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="sm"
      p={4}
    >
      <VStack align="stretch" spacing={3}>
        <Heading size="md">{reward.title}</Heading>
        <Text color="gray.600">{reward.description}</Text>
        <HStack justify="space-between">
          <Badge colorScheme="blue" fontSize="md">
            {reward.pointsCost} points
          </Badge>
          {reward.type === 'discount' && (
            <Badge colorScheme="green">
              {reward.value}% off
            </Badge>
          )}
        </HStack>
        <Button
          colorScheme="brand"
          onClick={handleRedeem}
          disabled={points < reward.pointsCost}
          width="100%"
          borderRadius="3xl"
        >
          {points >= reward.pointsCost ? 'Redeem' : 'Not Enough Points'}
        </Button>
      </VStack>
    </Box>
  );
}; 