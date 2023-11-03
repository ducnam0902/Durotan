import { Box, Container, Grid, Stack } from '@chakra-ui/layout';
import { Heading, Skeleton } from '@chakra-ui/react';
import ProductItem from '../ProductItem';
import { useGetFeaturedProductQuery } from '@durotan/services';

const FeaturedCollection: React.FC = () => {
  const { data, isLoading } = useGetFeaturedProductQuery('initial');
  return (
    <Box>
      <Heading
        fontSize={{ base: '3rem', md: '4.8rem' }}
        fontWeight="400"
        lineHeight={{ base: '3rem', md: '6.4rem' }}
        color="darker"
        textAlign="center"
      >
        Featured Collections
      </Heading>
      <Container maxW={{ base: 'container.sm', md: 'container.xl' }} padding="3rem">
        <Grid templateColumns={{ base: '"repeat(1, 1fr)"', lg: 'repeat(4, 1fr)' }} gap={6}>
          {isLoading ? (
            <Stack>
              <Skeleton height="2rem" />
              <Skeleton height="2rem" />
              <Skeleton height="2rem" />
            </Stack>
          ) : (
            data?.map((item, key) => <ProductItem key={key} {...item} />)
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedCollection;
