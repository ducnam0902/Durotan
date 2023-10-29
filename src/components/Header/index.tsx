import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Link as CustomLink,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
  Heading,
  Circle,
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
import { useState } from 'react';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShowMegasales, setIsShowMegasales] = useState<boolean>(() => {
    const megaSales: string | null = localStorage.getItem('megaSales');
    return megaSales === null ? true : Boolean(JSON.parse(megaSales));
  });

  const handleCloseMegaSales = () => {
    localStorage.setItem('megaSales', JSON.stringify(!isShowMegasales));
    setIsShowMegasales(!isShowMegasales);
  };

  return (
    <Box>
      {isShowMegasales && (
        <Box background="#2b2b2d" position="relative">
          <Text
            letterSpacing="0.7px"
            color="white"
            textTransform="uppercase"
            fontWeight="500"
            textAlign="center"
            padding="1rem 1.5rem"
            marginBottom="0"
            fontSize={{ base: '1rem', lg: '1.4rem' }}
          >
            <Image
              display="inline-block"
              marginRight="1.5rem"
              src={campaginIcon}
              objectFit="cover"
              boxSize={{ base: '1.2rem', lg: '2rem' }}
            />
            <Box fontWeight="600" as="span" color="#fe441b" marginRight="1rem">
              Mega Sale
            </Box>
            discount all item up to 30% for christmast event
          </Text>
          <Image
            position="absolute"
            display="inline-block"
            src={closeIcon}
            objectFit="cover"
            boxSize={{ base: '1.2rem', lg: '1.6rem' }}
            top="50%"
            right="1rem"
            transform="translateY(-50%)"
            cursor="pointer"
            onClick={handleCloseMegaSales}
            alt="closeButton"
          />
        </Box>
      )}
      <Box
        backgroundColor="#232324"
        height={{ base: '4.5rem', lg: '9.7rem' }}
        lineHeight={{ base: '4.5rem', lg: '9.7rem' }}
      >
        <Grid
          templateColumns={{ base: '2.5rem repeat(6,1fr) 2.5rem', xl: '6rem repeat(10,1fr) 6rem' }}
          borderBottom={{ base: '1px solid #c4c3bd', xl: 'none' }}
          height={{ base: '4.5rem', lg: '9.7rem' }}
        >
          <GridItem hideBelow="xl" colStart={2} colEnd={6}>
            <Grid templateColumns="repeat(5, 10rem)" justifyItems="center">
              {primaryMenu.map((menuItem, index) => (
                <Box
                  color="#eaddc7"
                  fontSize="1.6rem"
                  letterSpacing="0.7px"
                  listStyleType="none"
                  key={index}
                  textTransform="uppercase"
                  cursor="pointer"
                  _hover={{
                    color: '#da5f39',
                  }}
                  as={Link}
                  to={menuItem === 'Home' ? '/' : `/${menuItem.toLowerCase()}`}
                >
                  {menuItem}
                </Box>
              ))}
            </Grid>
          </GridItem>
          <GridItem
            colStart={{ base: 2, xl: 6 }}
            colEnd={{ base: 3, xl: 8 }}
            textAlign={{ base: 'left', xl: 'center' }}
          >
            <CustomLink
              as={Link}
              to="/"
              fontSize={{ base: '2.2rem', lg: '3rem' }}
              letterSpacing="0.1em"
              textTransform="uppercase"
              textDecoration="none"
              color="white"
              fontFamily="heading"
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
          <GridItem colStart={{ base: 7, xl: 10 }} colEnd={{ base: 8, xl: 12 }} justifyItems={'end'}>
            <Grid
              templateColumns="repeat(4, 28px)"
              height={{ base: '4.9rem', lg: '9.7rem' }}
              justifyContent="end"
              gap="1rem"
            >
              <GridItem colSpan={1} alignSelf="center">
                <Image src={searchIcon} objectFit="cover" boxSize={{ base: '1.8rem', lg: '2.1rem' }} cursor="pointer" />
              </GridItem>
              <GridItem colSpan={1} alignSelf="center">
                <Image
                  src={accountIcon}
                  objectFit="cover"
                  boxSize={{ base: '1.8rem', lg: '2.1rem' }}
                  cursor="pointer"
                />
              </GridItem>
              <GridItem colSpan={1} alignSelf="center" hideBelow="xl">
                <Box display="inherit" position="relative">
                  <Image
                    marginRight="1.9rem"
                    src={favouriteIcon}
                    objectFit="cover"
                    boxSize={{ base: '1.8rem', lg: '2.2rem' }}
                    cursor="pointer"
                  />
                  <Circle
                    background="#da5f39"
                    size="16px"
                    fontSize="1rem"
                    lineHeight="20px"
                    color="#ffffff"
                    position="absolute"
                    top="10px"
                    right="3px"
                    zIndex="3"
                  >
                    0
                  </Circle>
                </Box>
              </GridItem>
              <GridItem colSpan={1} alignSelf="center">
                <Box display="inherit" position="relative" onClick={onOpen}>
                  <Image src={cartIcon} objectFit="cover" boxSize={{ base: '1.8rem', lg: '2.2rem' }} cursor="pointer" />
                  <Circle
                    background="#da5f39"
                    size="16px"
                    fontSize="1rem"
                    lineHeight="2rem"
                    color="#ffffff"
                    position="absolute"
                    top="10px"
                    right="3px"
                    zIndex="3"
                  >
                    2
                  </Circle>
                </Box>
              </GridItem>
              <GridItem colSpan={1} hideFrom="xl" alignSelf="center">
                <Image
                  src={hamburgerIcon}
                  objectFit="cover"
                  cursor="pointer"
                  boxSize={{ base: '1.8rem', lg: '2rem' }}
                />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={{ base: 'xs', lg: 'md' }}>
        <DrawerOverlay />
        <DrawerContent paddingLeft={{ base: '2rem', lg: '6rem' }} paddingRight={{ base: '2rem', lg: '6rem' }}>
          <DrawerHeader
            display="flex"
            padding="4rem 0 4rem 0"
            borderBottom="1px solid #dedede"
            justifyContent="space-between"
          >
            <Heading as="h5" color="darker">
              Cart (0)
            </Heading>
            <Image
              display="inline-block"
              marginRight="1.9rem"
              src={closeIcon}
              objectFit="cover"
              boxSize={{ base: '1.8rem', lg: '2rem' }}
              cursor="pointer"
              onClick={onClose}
              lineHeight="2rem"
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
