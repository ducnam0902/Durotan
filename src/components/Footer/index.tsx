import { Image } from '@chakra-ui/image';
import { Box, Grid, GridItem, Heading, Text, UnorderedList, ListItem, Container } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';

import { secondaryMenu } from '../../data/constants';
import svgtwiiter from '../../assets/svgtwiiter.svg';
import svgface from '../../assets/svgface.svg';
import svginsta from '../../assets/svginsta.svg';
import svgyoutube from '../../assets/svgyoutube.svg';
import svgpin from '../../assets/svgpin.svg';

const Footer = () => {
  return (
    <Box>
      <Box borderTop="1px solid #dbdbdb" borderBottom="1px solid #dbdbdb">
        <Container maxW={{ base: 'container.sm', lg: 'container.xl' }}>
          <Grid templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(3,1fr)' }} gap={2}>
            <GridItem w="100%" borderRight={{ lg: '1px solid #dbdbdb' }} padding="90px 15px 36px">
              <Box>
                <Heading
                  as="h6"
                  marginBottom="24px"
                  fontSize="18px"
                  letterSpacing="0.05em"
                  lineHeight="18px"
                  fontWeight="normal"
                  textTransform="uppercase"
                  textAlign="center"
                >
                  About Durotan
                </Heading>
                <Text
                  margin="1em 0"
                  textAlign="center"
                  fontSize="16px"
                  color="#949494"
                  lineHeight="26px"
                  letterSpacing="0.015em"
                >
                  The inspiration got from natural, color pastel and activities the daily.
                </Text>
              </Box>
            </GridItem>
            <GridItem w="100%" borderRight={{ lg: '1px solid #dbdbdb' }} padding="90px 15px 36px">
              <Heading
                as="h6"
                marginBottom="24px"
                fontSize="18px"
                letterSpacing="0.05em"
                lineHeight="18px"
                fontWeight="normal"
                textTransform="uppercase"
                textAlign="center"
              >
                Our Social
              </Heading>
              <Box textAlign="center">
                <Image
                  display="inline-block"
                  marginRight="20px"
                  src={svgtwiiter}
                  objectFit="cover"
                  boxSize={{ base: '18px', lg: '24px' }}
                  cursor="pointer"
                />
                <Image
                  display="inline-block"
                  marginRight="20px"
                  src={svgface}
                  objectFit="cover"
                  boxSize={{ base: '18px', lg: '24px' }}
                  cursor="pointer"
                />
                <Image
                  display="inline-block"
                  marginRight="20px"
                  src={svginsta}
                  objectFit="cover"
                  boxSize={{ base: '18px', lg: '24px' }}
                  cursor="pointer"
                />
                <Image
                  display="inline-block"
                  marginRight="20px"
                  src={svgyoutube}
                  objectFit="cover"
                  boxSize={{ base: '18px', lg: '24px' }}
                  cursor="pointer"
                />
                <Image
                  display="inline-block"
                  marginRight="20px"
                  src={svgpin}
                  objectFit="cover"
                  boxSize={{ base: '18px', lg: '24px' }}
                  cursor="pointer"
                />
              </Box>
            </GridItem>
            <GridItem w="100%" padding="90px 15px 36px">
              <Heading
                as="h6"
                marginBottom="24px"
                fontSize="18px"
                letterSpacing="0.05em"
                lineHeight="18px"
                fontWeight="normal"
                textTransform="uppercase"
                textAlign="center"
              >
                Newsletter
              </Heading>
              <Box
                display="flex"
                marginLeft="18px"
                marginRight="18px"
                border="1px solid #d8d8d8"
                padding="9px 18px 8px 18px"
                height="55px"
              >
                <Input
                  fontSize="16px"
                  variant="unstyled"
                  placeholder="Your email address"
                  _placeholder={{
                    fontSize: '16px',
                    color: '#cccccc',
                  }}
                />
                <Button
                  textTransform="uppercase"
                  fontSize="14px"
                  fontWeight="600"
                  letterSpacing="0.050em"
                  color="#000000"
                  backgroundColor="transparent"
                >
                  Subscribe
                </Button>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box>
        <UnorderedList
          fontSize="16px"
          letterSpacing="0.7px"
          listStyleType="none"
          display="flex"
          color="#666666"
          justifyContent="center"
          padding="47px 0"
          flexWrap="wrap"
        >
          {secondaryMenu.map((menuItem, index) => (
            <ListItem
              key={index}
              paddingLeft="29px"
              paddingRight="29px"
              textTransform="uppercase"
              cursor="pointer"
              _hover={{
                color: '#da5f39',
              }}
            >
              {menuItem.title}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box padding="50px 60px">
        <Text marginBottom="15px" textAlign="center" fontSize="16px" letterSpacing="0.025em" color="#949494">
          © 2021 durotan. all rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
