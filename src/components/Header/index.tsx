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
            onClick={handleCloseMegaSales}
          />
        </Box>
      )}
      <Box backgroundColor="#232324" height={{ base: '45px', lg: '97px' }} lineHeight={{ base: '45px', lg: '97px' }}>
        <Grid
          templateColumns={{ base: '25px repeat(6,1fr) 25px', xl: '60px repeat(10,1fr) 60px' }}
          borderBottom={{ base: '1px solid #c4c3bd', xl: 'none' }}
          height={{ base: '45px', lg: '97px' }}
        >
          <GridItem hideBelow="xl" colStart={2} colEnd={6}>
            <Grid templateColumns="repeat(5, 100px)" justifyItems="center">
              {primaryMenu.map((menuItem, index) => (
                <Box
                  color="#eaddc7"
                  fontSize="16px"
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
          <GridItem colStart={{ base: 7, xl: 10 }} colEnd={{ base: 8, xl: 12 }} justifyItems={'end'}>
            <Grid
              templateColumns="repeat(4, 28px)"
              height={{ base: '49px', lg: '97px' }}
              justifyContent="end"
              gap="10px"
            >
              <GridItem colSpan={1} alignSelf="center">
                <Image src={searchIcon} objectFit="cover" boxSize={{ base: '18px', lg: '21px' }} cursor="pointer" />
              </GridItem>
              <GridItem colSpan={1} alignSelf="center">
                <Image src={accountIcon} objectFit="cover" boxSize={{ base: '18px', lg: '21px' }} cursor="pointer" />
              </GridItem>
              <GridItem colSpan={1} alignSelf="center" hideBelow="xl">
                <Box display="inherit" position="relative">
                  <Image
                    marginRight="19px"
                    src={favouriteIcon}
                    objectFit="cover"
                    boxSize={{ base: '18px', lg: '22px' }}
                    cursor="pointer"
                  />
                  <Circle
                    background="#da5f39"
                    size="16px"
                    fontSize="10px"
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
                  <Image src={cartIcon} objectFit="cover" boxSize={{ base: '18px', lg: '22px' }} cursor="pointer" />
                  <Circle
                    background="#da5f39"
                    size="16px"
                    fontSize="10px"
                    lineHeight="20px"
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
                <Image src={hamburgerIcon} objectFit="cover" cursor="pointer" boxSize={{ base: '18px', lg: '20px' }} />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
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
