import React from 'react';
import { Box, Flex, Link as ChakraLink, HStack, Text, Avatar, Badge, useColorModeValue, VStack, Progress } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useLoyalty } from '../context/LoyaltyContext';

export const Navigation: React.FC = () => {
  const { points, level, user } = useLoyalty();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const nextLevelPoints = (level + 1) * 1000;
  const progress = (points / nextLevelPoints) * 100;

  return (
    <Box
      as="nav"
      bg={bgColor}
      p={4}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={1}
      borderBottomWidth="1px"
      borderColor={borderColor}
    >
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
        <VStack align="start" spacing={0}>
          <ChakraLink as={RouterLink} to="/" fontWeight="bold" fontSize="2xl" color="pink.500" letterSpacing="tight">
            <HStack spacing={1}>
              <Box as="span" color="pink.400">✨</Box>
              <Text as="span">Glow</Text>
            </HStack>
          </ChakraLink>
          <Text fontSize="sm" color="gray.500">
            Your journey to radiant beauty
          </Text>
        </VStack>

        <ChakraLink as={RouterLink} to="/loyalty">
          <HStack
            spacing={3}
            p={2}
            borderRadius="lg"
            _hover={{ bg: 'pink.50' }}
            transition="all 0.2s"
          >
            <Box position="relative">
              <Avatar
                size="md"
                name={user?.name}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`}
              />
              <Badge
                position="absolute"
                bottom="-1"
                right="-1"
                colorScheme="pink"
                borderRadius="full"
                fontSize="xs"
                px={2}
              >
                {level}
              </Badge>
            </Box>
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" fontWeight="medium">
                {user?.name}
              </Text>
              <Box width="100%">
                <Progress
                  value={progress}
                  size="xs"
                  colorScheme="pink"
                  borderRadius="full"
                  bg="gray.100"
                />
                <Text fontSize="xs" color="gray.500" mt={1}>
                  {points} / {nextLevelPoints} points
                </Text>
              </Box>
            </VStack>
          </HStack>
        </ChakraLink>
      </Flex>
    </Box>
  );
}; 