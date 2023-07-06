import { Box, Container, Flex } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import shirt from '@durotan/assets/tshirt.jpg';
import ProductItem from '../ProductItem';

const productItems = [
  {
    productName: 'Basic T-Shirt',
    productCategory: 'GAP',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 29.0,
    images: [shirt],
  },
];

const FeaturedCollection: React.FC = () => {
  return (
    <Box>
      <Heading
        fontSize={{ base: '30px', md: '48px' }}
        fontWeight="400"
        lineHeight={{ base: '30px', md: '64px' }}
        color="darker"
        textAlign="center"
      >
        Featured Collections
      </Heading>
      <Container maxW={{ base: 'container.sm', md: 'container.xl' }} padding="30px">
        <Flex>
          {productItems.map((item, key) => (
            <ProductItem key={key} {...item} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default FeaturedCollection;
