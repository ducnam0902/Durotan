import slide1 from '@durotan/assets/slider01.jpg';
import slide2 from '@durotan/assets/slider02.jpg';
import nextIcon from '@durotan/assets/svgnext.svg';
import previousIcon from '@durotan/assets/svgprevious.svg';

import { Box, Image, Heading, Text, Container, Flex } from '@chakra-ui/react';
import { elementorItem } from '@durotan/data/constants';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FC } from 'react';

interface ITitleHeaderProps {
  subTitle: string;
  mainTitle: string;
  image: string;
}

interface IElementorWidgetProps {
  image: string;
  title: string;
}

const RenderElementorWidget: FC<IElementorWidgetProps> = ({ image, title }) => {
  return (
    <Flex width="23.4rem" marginLeft="1.5rem" justifyContent="center" alignItems="center">
      <Image src={image} width="4.8rem !important" marginRight="2.2rem" />
      <Text
        marginBottom="0"
        cursor="pointer"
        fontSize="1.6rem"
        color="white"
        textTransform="uppercase"
        transition="0.3s"
        _hover={{ color: '#DA5F39' }}
        textAlign={'center'}
      >
        {title}
      </Text>
    </Flex>
  );
};

const RenderTitleHeader: FC<ITitleHeaderProps> = ({ subTitle, mainTitle, image }) => {
  return (
    <Box
      zIndex="4"
      position="relative"
      backgroundImage={image}
      height={{ base: '40rem', lg: '70rem' }}
      backgroundSize="cover"
    >
      <Container
        maxW="container.xl"
        padding="1.5rem"
        paddingTop="2rem"
        display={{ base: 'none', lg: 'flex' }}
        justifyContent="space-evenly"
      >
        {elementorItem.map((item, index) => (
          <RenderElementorWidget key={index} {...item} />
        ))}
      </Container>
      <Text
        fontSize="2.4rem"
        fontWeight="500"
        lineHeight={{ base: '2rem', md: '6rem' }}
        letterSpacing="1.2px"
        zIndex="10"
        position="absolute"
        left="50%"
        top="35%"
        transform="translate(-50%, -30%)"
        color="white"
        textTransform="uppercase"
      >
        {subTitle}
      </Text>
      <Heading
        fontSize={{ base: '3rem', lg: '5rem', xl: '7rem' }}
        textTransform="uppercase"
        lineHeight={{ base: '4rem', lg: '8rem', xl: '12rem' }}
        color="#FBF7EF"
        zIndex="10"
        position="absolute"
        left="50%"
        top="55%"
        transform="translate(-50%, -60%)"
        fontWeight="400"
        width="100%"
      >
        {mainTitle}
      </Heading>
    </Box>
  );
};

const Slide = () => {
  return (
    <Box position="relative" zIndex="2">
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        showThumbs={false}
        renderIndicator={(clickHandler, isSelected) => {
          const isSelectedIndex = isSelected ? 'light' : 'transparent';
          return (
            <Box
              zIndex={2}
              onClick={clickHandler}
              width="2.2rem"
              height="2.2rem"
              marginRight="1.2rem"
              marginBottom="5rem"
              outline="none"
              opacity="1"
              background="transparent"
              display="inline-block"
              borderRadius="50%"
              border={`1px solid ${isSelectedIndex}`}
              transition="0.4s"
              position="relative"
              cursor="pointer"
              _hover={{
                border: '1px solid #ffffff',
              }}
              _before={{
                content: "''",
                width: '5px',
                height: '5px',
                backgroundColor: 'light',
                borderRadius: '50%',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          );
        }}
        renderArrowPrev={clickHandler => {
          return (
            <Box
              zIndex={2}
              position="absolute"
              onClick={clickHandler}
              top="50%"
              left="5%"
              cursor="pointer"
              _before={{
                display: 'block',
                content: "''",
                backgroundImage: `url(${previousIcon})`,
                width: '4.8rem',
                height: '4.8rem',
                color: '#FBF7EF38',
              }}
            ></Box>
          );
        }}
        renderArrowNext={clickHandler => {
          return (
            <Box
              zIndex={2}
              marginLeft="4rem"
              position="absolute"
              onClick={clickHandler}
              top="50%"
              right="5%"
              cursor="pointer"
              _before={{
                display: 'block',
                content: "''",
                backgroundImage: `url(${nextIcon})`,
                width: '4.8rem',
                height: '4.8rem',
                color: '#FBF7EF38',
              }}
            ></Box>
          );
        }}
        animationHandler="fade"
      >
        <RenderTitleHeader subTitle="New Arrival" mainTitle="Denim elastic waist dress" image={slide1} />
        <RenderTitleHeader subTitle="Trending 2020" mainTitle="Simple color tote bags" image={slide2} />
      </Carousel>
    </Box>
  );
};

export default Slide;
