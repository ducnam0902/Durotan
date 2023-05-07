import { Box, Container, Grid, GridItem } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

import brand01 from '@durotan/assets/brand01.png';
import brand02 from '@durotan/assets/brand02.png';
import brand03 from '@durotan/assets/brand03.png';
import brand04 from '@durotan/assets/brand04.png';
import brand05 from '@durotan/assets/brand05.png';

const Branch = () => {
  return (
    <Container
      maxW="container.xl"
      marginTop="42px"
      padding="15px"
      marginBottom={{ base: '60px', lg: '90px', xl: '158px' }}
    >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}>
        <GridItem>
          <Box display="flex" justifyContent="center">
            <Image src={brand01} />
          </Box>
        </GridItem>
        <GridItem>
          <Box display="flex" justifyContent="center">
            <Image src={brand02} />
          </Box>
        </GridItem>
        <GridItem>
          <Box display="flex" justifyContent="center">
            <Image src={brand03} />
          </Box>
        </GridItem>
        <GridItem>
          <Box display="flex" justifyContent="center">
            <Image src={brand04} />
          </Box>
        </GridItem>
        <GridItem>
          <Box display="flex" justifyContent="center">
            <Image src={brand05} />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Branch;
