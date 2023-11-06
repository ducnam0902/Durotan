import { Container, Flex } from '@chakra-ui/layout';
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
      marginTop="4.2rem"
      padding="1.5rem"
      marginBottom={{ base: '6rem', lg: '8rem', xl: '10rem' }}
    >
      <Flex gap="2rem" justifyContent="center" flexWrap="wrap">
        <Image src={brand01} />
        <Image src={brand02} />
        <Image src={brand03} />
        <Image src={brand04} />
        <Image src={brand05} />
      </Flex>
    </Container>
  );
};

export default Branch;
