import React from 'react';
import { Box, Flex, Link as ChakraLink, HStack, Text, Avatar, Badge, useColorModeValue, VStack, Progress, Container } from '@chakra-ui/react';
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
      position="sticky"
      top={0}
      zIndex={1}
      borderBottomWidth="1px"
      borderColor={borderColor}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" py={4}>
          <VStack align="start" spacing={0}>
            <ChakraLink 
              as={RouterLink} 
              to="/" 
              fontWeight="bold" 
              fontSize="2xl" 
              color="brand.500" 
              letterSpacing="tight"
              _hover={{ textDecoration: 'none', color: 'brand.600' }}
            >
              <HStack spacing={1}>
                <Box as="span" color="brand.400">✨</Box>
                <Text as="span">Beauty</Text>
                <Text as="span" color="brand.600">Depot</Text>
              </HStack>
            </ChakraLink>
            <Text fontSize="sm" color="gray.500">
              Your premium beauty destination
            </Text>
          </VStack>

          <ChakraLink 
            as={RouterLink} 
            to="/loyalty"
            _hover={{ textDecoration: 'none' }}
          >
            <HStack
              spacing={4}
              p={4}
              borderRadius="lg"
              _hover={{ bg: 'brand.50' }}
              transition="all 0.2s"
              minW="300px"
            >
              <Box position="relative">
                <Avatar
                  size="lg"
                  name="Jane Doe"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  borderWidth="3px"
                  borderColor="brand.400"
                  boxShadow="0 0 0 2px white, 0 0 0 4px brand.400"
                />
                <Badge
                  position="absolute"
                  bottom="-1"
                  right="-1"
                  colorScheme="brand"
                  borderRadius="full"
                  fontSize="xs"
                  px={2}
                  py={0.5}
                >
                  {level}
                </Badge>
              </Box>
              <VStack align="start" spacing={2} flex={1}>
                <Text fontSize="md" fontWeight="medium">
                  Jane Doe
                </Text>
                <Box width="100%">
                  <Progress
                    value={progress}
                    size="sm"
                    colorScheme="brand"
                    borderRadius="full"
                    bg="gray.100"
                  />
                  <Text fontSize="sm" color="gray.500" mt={1}>
                    {points} / {nextLevelPoints} points
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </ChakraLink>
        </Flex>
      </Container>
    </Box>
  );
}; 