import { Box, GridItem, Heading, Text, Grid, Container, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import banner01 from '@durotan/assets/banner01.jpg';
import banner02 from '@durotan/assets/banner02.jpg';

const ImageWrapper = styled(Box)`
  &:hover div {
    transform: scale(1.05);
  }
`;

const Philosophy: React.FC = () => {
  return (
    <Box paddingTop="5.5rem">
      <Container maxW={{ base: 'container.sm', md: 'container.lg' }} padding="1.5rem" textAlign="center">
        <Heading
          marginBottom="1.2rem"
          fontSize={{ base: '3rem', md: '4.8rem' }}
          fontWeight="400"
          lineHeight={{ base: '3rem', md: '6.4rem' }}
          color="darker"
        >
          Our Philosophy
        </Heading>
        <Text
          marginTop="1.6rem"
          marginBottom="2.7rem"
          color="#666666"
          fontSize="1.8rem"
          lineHeight="3.6rem"
          fontWeight="normal"
        >
          Established in 1991, Durotan & Logan Cee, 2 fashion artists work together in UK, start from design the casual
          for people around their location.The inspiration got from natural, color pastel & activities the daily.
          Durotan’s items alway look very basic but never out trend, easy to mixed with anystyle.
        </Text>
      </Container>
      <Container maxW={{ base: 'container.sm', md: 'container.xl' }} paddingTop="5.5rem">
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
          <GridItem padding={{ base: '1.5rem', md: '10px 10px 10px 15px', xl: '0px 45px 0px 10px' }}>
            <ImageWrapper overflow="hidden" height={{ base: '300px', md: '450px', xl: '650px' }}>
              <Box
                padding={{ base: '30px 20px 30px 20px', xl: '78px 75px 86px 75px' }}
                backgroundImage={banner01}
                backgroundSize="cover"
                width="100%"
                height="100%"
                transition="all 0.3s ease-in-out"
              >
                <Text
                  textTransform="uppercase"
                  marginBottom="20px"
                  color="#EADDC7"
                  fontSize="14px"
                  letterSpacing="1.4px"
                >
                  NEW ARRIVALS
                </Text>
                <Heading
                  fontSize={{ base: '30px', md: '40px', xl: '60px' }}
                  lineHeight={{ base: '30px', md: '40px', xl: '60px' }}
                  color="#FBF7EF"
                  textTransform="uppercase"
                  marginBottom="47px"
                  fontWeight="400"
                  width={{ base: '100%', xl: '50%' }}
                >
                  MEN’S COATS
                </Heading>
                <Text fontSize="18px" lineHeight="30px" color="#CCCCCC" marginBottom={{ base: '20px', xl: '126px' }}>
                  Simple alway is the best choice for your any style. Check our lookbook
                </Text>
                <Button
                  fontWeight="600"
                  border="1px solid #DA5F39"
                  color="#ffffff"
                  lineHeight="58px"
                  letterSpacing="0.25px"
                  textTransform="uppercase"
                  padding="9px 33px 9px 33px"
                  size="md"
                  fontSize="18px"
                  borderRadius="0"
                  boxSizing="content-box"
                  transition="all 0.4s"
                  backgroundColor="#DA5F39"
                  _hover={{
                    color: '#DA5F39',
                    backgroundColor: 'transparent',
                  }}
                >
                  EXPLORE NOW
                </Button>
              </Box>
            </ImageWrapper>
          </GridItem>
          <GridItem padding={{ base: '15px', md: '10px 15px 10px 10px', xl: '0px 10px 0px 45px' }}>
            <ImageWrapper overflow="hidden" height={{ base: '300px', md: '450px', xl: '650px' }}>
              <Box
                padding={{ base: '30px 20px 30px 20px', xl: '78px 75px 86px 75px' }}
                backgroundImage={banner02}
                backgroundSize="cover"
                width="100%"
                height="100%"
                transition="all 0.3s ease-in-out"
              >
                <Text
                  textTransform="uppercase"
                  marginBottom="20px"
                  color="#EADDC7"
                  fontSize="14px"
                  letterSpacing="1.4px"
                >
                  ACCESSORIES
                </Text>
                <Heading
                  fontSize={{ base: '30px', md: '40px', xl: '60px' }}
                  lineHeight={{ base: '30px', md: '40px', xl: '60px' }}
                  color="#FBF7EF"
                  textTransform="uppercase"
                  marginBottom="47px"
                  fontWeight="400"
                >
                  WINTER ESSENTIAL
                </Heading>
                <Text fontSize="18px" lineHeight="30px" color="#CCCCCC" marginBottom={{ base: '20px', xl: '126px' }}>
                  Inspiration from Althetic Crew - College Division, A brown
                </Text>
                <Button
                  fontWeight="600"
                  border="1px solid #ffffff"
                  color="#ffffff"
                  lineHeight="58px"
                  letterSpacing="0.25px"
                  textTransform="uppercase"
                  padding="9px 33px 9px 33px"
                  size="md"
                  fontSize="18px"
                  borderRadius="0"
                  boxSizing="content-box"
                  transition="0.4s"
                  backgroundColor="transparent"
                  _hover={{
                    color: '#000000',
                    backgroundColor: '#ffffff',
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </ImageWrapper>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Philosophy;
