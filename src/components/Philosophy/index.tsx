import { Box, Heading, Text, Flex, Container } from '@chakra-ui/react';
import Button from '../Button';
import banner01 from '@durotan/assets/banner01.jpg';
import banner02 from '@durotan/assets/banner02.jpg';
import Tile from '../Tile';

const philosophyList = [
  {
    image: banner01,
    subject: 'NEW ARRIVALS',
    title: 'MEN’S COATS',
    detail: 'Simple alway is the best choice for your any style. Check our lookbook',
    button: 'EXPLORE NOW',
  },
  {
    image: banner02,
    subject: 'ACCESSORIES',
    title: 'WINTER ESSENTIAL',
    detail: 'Inspiration from Althetic Crew - College Division, A brown',
    button: 'Shop Now',
  },
];

const Philosophy: React.FC = () => {
  return (
    <Box paddingTop="5.5rem">
      <Tile
        title="Our Philosophy"
        detail="Established in 1991, Durotan & Logan Cee, 2 fashion artists work together in UK, start from design the casual
          for people around their location.The inspiration got from natural, color pastel & activities the daily.
          Durotan’s items alway look very basic but never out trend, easy to mixed with anystyle."
      />
      <Container maxW={{ base: 'container.sm', md: 'container.xl' }} paddingTop="5.5rem">
        <Flex>
          {philosophyList.map(({ subject, title, detail, button, image }, index) => (
            <Box key={index} padding={{ base: '1.5rem', md: '1rem 1rem 1rem 1.5rem', xl: '0 4.5rem 0 1rem' }}>
              <Box
                overflow="hidden"
                height={{ base: '30rem', md: '45rem', xl: '65rem' }}
                _hover={{
                  div: {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Box
                  padding={{ base: '3rem 2rem 3rem 2rem', xl: '7.8rem 7.5rem 8.6rem 7.5rem' }}
                  backgroundImage={image}
                  backgroundSize="cover"
                  width="100%"
                  height="100%"
                  transition="all 0.3s ease-in-out"
                >
                  <Text
                    textTransform="uppercase"
                    marginBottom="2rem"
                    color="white"
                    fontSize="1.4rem"
                    letterSpacing="1.4px"
                  >
                    {subject}
                  </Text>
                  <Heading
                    fontSize={{ base: '3rem', md: '4rem', xl: '6rem' }}
                    lineHeight={{ base: '3rem', md: '4rem', xl: '6rem' }}
                    color="#FBF7EF"
                    textTransform="uppercase"
                    marginBottom="4.7rem"
                    fontWeight="400"
                    width={{ base: '100%', xl: '70%' }}
                  >
                    {title}
                  </Heading>
                  <Text
                    fontSize="1.8rem"
                    lineHeight="3rem"
                    color="#CCCCCC"
                    marginBottom={{ base: '2rem', xl: '12.6rem' }}
                  >
                    {detail}
                  </Text>
                  <Button
                    borderWidth="1px"
                    borderColor={index === philosophyList.length - 1 ? 'light' : '#DA5F39'}
                    color="light"
                    lineHeight="5.8rem"
                    letterSpacing="0.25px"
                    size="md"
                    fontSize="1.8rem"
                    borderRadius="0"
                    boxSizing="content-box"
                    transition="all 0.4s"
                    backgroundColor={index == philosophyList.length - 1 ? 'transparent' : '#DA5F39'}
                    _hover={{
                      color: index == philosophyList.length - 1 ? 'dark' : '#DA5F39',
                      backgroundColor: index == philosophyList.length - 1 ? 'light' : 'transparent',
                    }}
                  >
                    {button}
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Philosophy;
