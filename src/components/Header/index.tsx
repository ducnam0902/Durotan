import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
  Container,
  Link as CustomLink,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { primaryMenu } from '@durotan/data/constants';

import campaginIcon from '@durotan/assets/svgcampagin.svg';
import closeIcon from '@durotan/assets/svgclose.svg';
import searchIcon from '@durotan/assets/svgsearch.svg';
import accountIcon from '@durotan/assets/svgaccount.svg';
import favouriteIcon from '@durotan/assets/svgfavourite.svg';
import cartIcon from '@durotan/assets/svgcart.svg';
import hamburgerIcon from '@durotan/assets/svghamburger.svg';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box background="#2b2b2d" position="relative">
        <Text
          letterSpacing="0.7px"
          color="#eaddc7"
          textTransform="uppercase"
          fontWeight="500"
          textAlign="center"
          padding="10px 15px"
          marginBottom="0"
          fontSize={{ base: '10px', lg: '14px' }}
        >
          <Image
            display="inline-block"
            marginRight="15px"
            src={campaginIcon}
            objectFit="cover"
            boxSize={{ base: '12px', lg: '20px' }}
          />
          <Box fontWeight="600" as="span" color="#fe441b" marginRight="10px">
            Mega Sale
          </Box>
          discount all item up to 30% for christmast event
        </Text>
        <Image
          position="absolute"
          display="inline-block"
          src={closeIcon}
          objectFit="cover"
          boxSize={{ base: '12px', lg: '16px' }}
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          cursor="pointer"
        />
      </Box>
      <Box backgroundColor="#232324" height={{ base: '45px', lg: '90px' }} lineHeight={{ base: '45px', lg: '90px' }}>
        <Container maxW={{ base: 'container.sm', lg: 'container.xl' }} padding="0">
          <Grid
            templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
            gap={2}
            borderBottom={{ base: '1px solid #c4c3bd', lg: 'none' }}
          >
            <GridItem w="100%" display={{ base: 'none', lg: 'block' }}>
              <UnorderedList fontSize="16px" letterSpacing="0.7px" listStyleType="none" display="flex" color="#eaddc7">
                {primaryMenu.map((menuItem, index) => (
                  <ListItem
                    key={index}
                    paddingLeft={index === 0 ? '0' : '29px'}
                    paddingRight="29px"
                    textTransform="uppercase"
                    cursor="pointer"
                    _hover={{
                      color: '#da5f39',
                    }}
                  >
                    {menuItem}
                  </ListItem>
                ))}
              </UnorderedList>
            </GridItem>
            <GridItem w="100%">
              <CustomLink
                as={Link}
                to="/"
                fontSize={{ base: '22px', lg: '30px' }}
                letterSpacing="0.1em"
                textTransform="uppercase"
                textDecoration="none"
                color="#eaddc7"
                fontWeight="400"
                fontFamily="Marcellus, sans-serif"
                _hover={{
                  color: '#eaddc7',
                  listStyleType: 'none',
                }}
                _active={{
                  color: '#eaddc7',
                }}
              >
                Durotan
              </CustomLink>
            </GridItem>
            <GridItem w="100%" display="flex" justifyContent="flex-end" alignItems="center">
              <Image
                display="inline-block"
                marginRight="19px"
                src={searchIcon}
                objectFit="cover"
                boxSize={{ base: '18px', lg: '20px' }}
                cursor="pointer"
              />
              <Image
                display="inline-block"
                marginRight="19px"
                marginLeft={{ base: '0', lg: '19px' }}
                src={accountIcon}
                objectFit="cover"
                boxSize={{ base: '18px', lg: '20px' }}
                cursor="pointer"
              />{' '}
              <Box display="inherit" position="relative">
                <Image
                  marginRight="19px"
                  marginLeft={{ base: '0', lg: '19px' }}
                  src={favouriteIcon}
                  objectFit="cover"
                  boxSize={{ base: '18px', lg: '20px' }}
                  cursor="pointer"
                  display={{ base: 'none', lg: 'inline-block' }}
                />
                <Box
                  display={{ base: 'none', lg: 'inline-block' }}
                  borderRadius="50%"
                  background="#da5f39"
                  width="20px"
                  height="20px"
                  fontSize="10px"
                  lineHeight="20px"
                  textAlign="center"
                  color="#ffffff"
                  position="absolute"
                  top="10px"
                  right="10px"
                  zIndex="3"
                >
                  0
                </Box>
              </Box>
              <Box display="inherit" position="relative" onClick={onOpen}>
                <Image
                  display="inline-block"
                  marginRight="19px"
                  marginLeft={{ base: '0', lg: '19px' }}
                  src={cartIcon}
                  objectFit="cover"
                  boxSize={{ base: '18px', lg: '20px' }}
                  cursor="pointer"
                />
                <Box
                  borderRadius="50%"
                  background="#da5f39"
                  width="20px"
                  height="20px"
                  fontSize="10px"
                  lineHeight="20px"
                  textAlign="center"
                  color="#ffffff"
                  position="absolute"
                  top="10px"
                  right="10px"
                  zIndex="3"
                >
                  2
                </Box>
              </Box>
              <Image
                marginRight="19px"
                marginLeft={{ base: '0', lg: '19px' }}
                src={hamburgerIcon}
                objectFit="cover"
                cursor="pointer"
                boxSize={{ base: '18px', lg: '20px' }}
                display={{ base: 'inline-block', lg: 'none' }}
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={{ base: 'xs', lg: 'md' }}>
        <DrawerOverlay />
        <DrawerContent paddingLeft={{ base: '20px', lg: '60px' }} paddingRight={{ base: '20px', lg: '60px' }}>
          <DrawerHeader
            display="flex"
            padding="40px 0 40px 0"
            borderBottom="1px solid #dedede"
            justifyContent="space-between"
          >
            <Heading as="h5" color="darker">
              Cart (0)
            </Heading>
            <Image
              display="inline-block"
              marginRight="19px"
              src={closeIcon}
              objectFit="cover"
              boxSize={{ base: '18px', lg: '20px' }}
              cursor="pointer"
              onClick={onClose}
              lineHeight="20px"
              color="brand.darker"
            />
          </DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
