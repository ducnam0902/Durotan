import { Container, Grid, GridItem } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

import brand01 from '@durotan/assets/brand01.png';
import brand02 from '@durotan/assets/brand02.png';
import brand03 from '@durotan/assets/brand03.png';
import brand04 from '@durotan/assets/brand04.png';
import brand05 from '@durotan/assets/brand05.png';

const Branch: React.FC = () => {
  return (
    <Container
      maxW="container.xl"
      marginTop="42px"
      padding="15px"
      marginBottom={{ base: '60px', lg: '80px', xl: '100px' }}
    >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }} gap="20px" justifyItems="center">
        <GridItem colStart={{ lg: 1 }} colEnd={{ lg: 2 }}>
          <Image src={brand01} />
        </GridItem>
        <GridItem colStart={{ lg: 2 }} colEnd={{ lg: 3 }}>
          <Image src={brand02} />
        </GridItem>
        <GridItem colStart={{ lg: 3 }} colEnd={{ lg: 4 }}>
          <Image src={brand03} />
        </GridItem>
        <GridItem colStart={{ lg: 4 }} colEnd={{ lg: 5 }}>
          <Image src={brand04} />
        </GridItem>
        <GridItem colStart={{ lg: 5 }} colEnd={{ lg: 6 }}>
          <Image src={brand05} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Branch;
