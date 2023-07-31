import { Box, Container, Grid, Stack } from '@chakra-ui/layout';
import { Heading, Skeleton } from '@chakra-ui/react';
import ProductItem from '../ProductItem';
import { useGetFeaturedProductQuery } from '@durotan/services';

const FeaturedCollection: React.FC = () => {
  const { data, isLoading } = useGetFeaturedProductQuery('initial');
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
        <Grid templateColumns={{ base: '"repeat(1, 1fr)"', lg: 'repeat(4, 1fr)' }} gap={6}>
          {isLoading ? (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
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
