import { Box, Container, Grid, Center, Stack } from '@chakra-ui/layout';
import { Heading, Spinner } from '@chakra-ui/react';
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
        {isLoading ? (
          <Center>
            <Spinner thickness="4px" speed="1.5s" size="xl" />
          </Center>
        ) : (
          <Grid templateColumns={{ base: '"repeat(1, 1fr)"', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
            {data?.map((item, key) => (
              <ProductItem key={key} {...item} />
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default FeaturedCollection;
