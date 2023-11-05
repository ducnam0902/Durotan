import {
  Box,
  Text,
  Image,
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
  Container,
  Flex,
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
            color="white"
            textTransform="uppercase"
            lineHeight="2.5rem"
            textAlign="center"
            padding="1rem 1.5rem"
            marginBottom="0"
            fontSize={{ base: '1rem', lg: '1.4rem' }}
          >
            <Image
              display="inline-block"
              marginRight="0.5rem"
              src={campaginIcon}
              objectFit="cover"
              boxSize={{ base: '1.2rem', lg: '1.8rem' }}
            />
            <Box fontWeight="600" as="span" color="#fe441b" marginRight="0.5rem">
              Mega Sale
            </Box>
            discount all item up to 30% for christmast event
          </Text>
          <Image
            position="absolute"
            display="inline-block"
            src={closeIcon}
            objectFit="cover"
            boxSize={{ base: '1.2rem', lg: '1.4rem' }}
            top="50%"
            right="1rem"
            transform="translateY(-50%)"
            cursor="pointer"
            onClick={handleCloseMegaSales}
            alt="closeButton"
          />
        </Box>
      )}
      <Box backgroundColor="#232324">
        <Container
          maxW="container.xl"
          margin="auto"
          height={{ base: '4.5rem', lg: '9.7rem' }}
          borderBottom={{ base: '1px solid #c4c3bd', xl: 'none' }}
          display="flex"
          alignItems="center"
        >
          <Flex display={{ base: 'none', lg: 'block' }}>
            {primaryMenu.map((menuItem, index) => (
              <Box
                color="white"
                fontSize="1.6rem"
                letterSpacing="0.7px"
                key={index}
                textTransform="uppercase"
                cursor="pointer"
                marginRight={index === primaryMenu.length - 1 ? 0 : '4.5rem'}
                _hover={{
                  color: '#da5f39',
                }}
                as={Link}
                to={menuItem === 'Home' ? '/' : `/${menuItem.toLowerCase()}`}
              >
                {menuItem}
              </Box>
            ))}
          </Flex>
          <Box marginLeft={{ base: 'none', lg: 'auto' }} marginRight="auto" textAlign={{ base: 'left', xl: 'center' }}>
            <CustomLink
              as={Link}
              to="/"
              fontSize={{ base: '2.2rem', lg: '3rem' }}
              letterSpacing="0.1em"
              textTransform="uppercase"
              color="white"
              fontFamily="heading"
              _hover={{
                color: 'white',
                listStyleType: 'none',
              }}
              _active={{
                color: 'white',
              }}
            >
              Durotan
            </CustomLink>
          </Box>
          <Flex height={{ base: '4.9rem', lg: '9.7rem' }} justifyContent="end" alignItems="center">
            <Image
              marginLeft="3rem"
              marginRight="1.5rem"
              src={searchIcon}
              objectFit="cover"
              boxSize={{ base: '1.8rem', lg: '2.3rem' }}
              cursor="pointer"
            />
            <Image
              marginLeft="1.5rem"
              marginRight="1.5rem"
              src={accountIcon}
              objectFit="cover"
              boxSize={{ base: '1.8rem', lg: '2.3rem' }}
              cursor="pointer"
            />
            <Box display="inherit" hideBelow="xl">
              <Image
                marginLeft="1.5rem"
                src={favouriteIcon}
                objectFit="cover"
                boxSize={{ base: '1.8rem', lg: '2.3rem' }}
                cursor="pointer"
              />
              <Circle
                background="#da5f39"
                size="1.6rem"
                fontSize="1rem"
                lineHeight="2rem"
                color="light"
                transform="translate(-0.8rem, 1.4rem)"
              >
                0
              </Circle>
            </Box>
            <Box display="inherit" onClick={onOpen}>
              <Image
                marginLeft="2.8rem"
                src={cartIcon}
                objectFit="cover"
                boxSize={{ base: '1.8rem', lg: '2.3rem' }}
                cursor="pointer"
              />
              <Circle
                background="#da5f39"
                size="1.6rem"
                fontSize="1rem"
                lineHeight="2rem"
                color="light"
                transform="translate(-0.8rem, 1.4rem)"
              >
                2
              </Circle>
            </Box>
            <Image
              marginLeft="2.8rem"
              hideFrom="xl"
              src={hamburgerIcon}
              objectFit="cover"
              cursor="pointer"
              boxSize={{ base: '1.8rem', lg: '2.3rem' }}
              onClick={onOpen}
            />
          </Flex>
        </Container>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={{ base: 'xs', lg: 'md' }}>
        <DrawerOverlay />
        <DrawerContent paddingLeft={{ base: '2rem', lg: '6rem' }} paddingRight={{ base: '2rem', lg: '6rem' }}>
          <DrawerHeader display="flex" padding="4rem 0" borderBottom="1px solid #dedede" justifyContent="space-between">
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
