import React from 'react';
import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  VStack,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="sm"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.02)' }}
    >
      <Image
        src={product.image}
        alt={product.name}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      <Box p={4}>
        <VStack align="stretch" spacing={3}>
          <Heading size="md">{product.name}</Heading>
          <Text color="gray.600">{product.description}</Text>
          <HStack justify="space-between">
            <Text fontWeight="bold" fontSize="lg">
              ${product.price.toFixed(2)}
            </Text>
            <Badge colorScheme="blue">
              {product.pointsValue} points
            </Badge>
          </HStack>
          <Button
            colorScheme="brand"
            onClick={() => onAddToCart(product)}
            width="100%"
          >
            Add to Cart
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}; 