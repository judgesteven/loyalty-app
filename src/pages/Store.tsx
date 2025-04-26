import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  Badge,
  HStack,
  VStack,
  useColorModeValue,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
  Flex,
} from '@chakra-ui/react';
import { mockProducts } from '../services/mockData';
import { Product } from '../types';

export const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const toast = useToast();

  const categories = ['all', ...new Set(mockProducts.map(product => product.category))];
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    toast({
      title: 'Added to Cart',
      description: `${product.name} has been added to your cart`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Flex justify="space-between" align="center" mb={8}>
          <Box>
            <Heading size="lg" color="brand.500" mb={2}>
              Featured Products
            </Heading>
            <Text color="gray.600">
              Discover our curated collection of premium beauty products
            </Text>
          </Box>
          <HStack spacing={4}>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              maxW="200px"
              variant="filled"
              bg="brand.50"
              _hover={{ bg: 'brand.100' }}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </Select>

            <InputGroup maxW="400px">
              <InputLeftElement pointerEvents="none">
                <Box color="gray.400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 14L11 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </InputLeftElement>
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                variant="filled"
                bg="brand.50"
                _hover={{ bg: 'brand.100' }}
              />
            </InputGroup>
          </HStack>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {filteredProducts.map((product) => (
            <Box
              key={product.id}
              bg={bgColor}
              borderRadius="xl"
              overflow="hidden"
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="sm"
              transition="all 0.2s"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            >
              <Box position="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  height="200px"
                  width="100%"
                  objectFit="cover"
                />
                <Badge
                  position="absolute"
                  top={2}
                  right={2}
                  colorScheme="brand"
                  fontSize="xs"
                  px={2}
                  py={1}
                >
                  {product.category}
                </Badge>
              </Box>
              <Box p={4}>
                <Heading size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text color="gray.600" mb={4} noOfLines={2}>
                  {product.description}
                </Text>
                <HStack justify="space-between" align="center">
                  <Text fontWeight="bold" color="brand.500">
                    ${product.price}
                  </Text>
                  <Badge colorScheme="green">
                    {product.pointsValue} points
                  </Badge>
                </HStack>
                <Button
                  colorScheme="brand"
                  size="sm"
                  width="100%"
                  mt={4}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}; 