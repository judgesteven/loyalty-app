import React from 'react';
import { Box, Container, SimpleGrid, VStack, Heading, Text, Link, HStack, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="white" borderTopWidth="1px" borderColor="gray.200" py={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <VStack align="start" spacing={4}>
            <HStack spacing={1}>
              <Box as="span" color="brand.400">🌿</Box>
              <Heading size="sm" color="brand.500">Beauty</Heading>
              <Heading size="sm" color="brand.600">Barn</Heading>
            </HStack>
            <Text fontSize="sm" color="gray.600">
              Where beauty meets nature's finest. Discover our curated collection of premium beauty products.
            </Text>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading size="sm">Shop</Heading>
            <Link as={RouterLink} to="/" color="gray.600" _hover={{ color: 'brand.500' }}>
              All Products
            </Link>
            <Link as={RouterLink} to="/" color="gray.600" _hover={{ color: 'brand.500' }}>
              New Arrivals
            </Link>
            <Link as={RouterLink} to="/" color="gray.600" _hover={{ color: 'brand.500' }}>
              Best Sellers
            </Link>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading size="sm">Loyalty</Heading>
            <Link as={RouterLink} to="/loyalty" color="gray.600" _hover={{ color: 'brand.500' }}>
              My Rewards
            </Link>
            <Link as={RouterLink} to="/loyalty" color="gray.600" _hover={{ color: 'brand.500' }}>
              Missions
            </Link>
            <Link as={RouterLink} to="/loyalty" color="gray.600" _hover={{ color: 'brand.500' }}>
              Achievements
            </Link>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading size="sm">Connect</Heading>
            <HStack spacing={4}>
              <Link href="#" color="gray.600" _hover={{ color: 'brand.500' }}>
                <Icon as={() => <span>📱</span>} />
              </Link>
              <Link href="#" color="gray.600" _hover={{ color: 'brand.500' }}>
                <Icon as={() => <span>📸</span>} />
              </Link>
              <Link href="#" color="gray.600" _hover={{ color: 'brand.500' }}>
                <Icon as={() => <span>🐦</span>} />
              </Link>
            </HStack>
            <Text fontSize="sm" color="gray.600">
              Follow us for beauty tips and exclusive offers
            </Text>
          </VStack>
        </SimpleGrid>

        <Box borderTopWidth="1px" borderColor="gray.200" mt={8} pt={8}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Text fontSize="sm" color="gray.600">
              © 2024 BeautyBarn. All rights reserved.
            </Text>
            <HStack spacing={4} justify={{ base: 'start', md: 'end' }}>
              <Link href="#" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
                Privacy Policy
              </Link>
              <Link href="#" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
                Terms of Service
              </Link>
              <Link href="#" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
                Contact Us
              </Link>
            </HStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}; 