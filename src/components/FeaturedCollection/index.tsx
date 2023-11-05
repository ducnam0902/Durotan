import { Box, Container, Flex, Stack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';
import ProductItem from '../ProductItem';
import { useGetFeaturedProductQuery } from '@durotan/services';
import Tile from '../Tile';

const FeaturedCollection: React.FC = () => {
  const { data, isLoading } = useGetFeaturedProductQuery('initial');
  return (
    <Box>
      <Tile title="Featured Collections" />
      <Container maxW={{ base: 'container.sm', md: 'container.xl' }} padding="3rem">
        <Flex flexWrap="wrap" gap={6}>
          {isLoading ? (
            <Stack>
              <Skeleton height="2rem" />
              <Skeleton height="2rem" />
              <Skeleton height="2rem" />
              <Skeleton height="2rem" />
            </Stack>
          ) : (
            data?.map((item, key) => <ProductItem key={key} {...item} />)
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default FeaturedCollection;
