import slide1 from '../../assets/slider01.jpg';
import slide2 from '../../assets/slider02.jpg';
import nextIcon from '../../assets/svgnext.svg';
import previousIcon from '../../assets/svgprevious.svg';

import { Box, Image, Heading, Text, Container } from '@chakra-ui/react';
import { elementorItem } from '../../data/constants';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FunctionComponent } from 'react';
type titleComponentProps = {
  subTitle: string;
  mainTitle: string;
  image: string;
};

type elementorWidgetProps = {
  image: string;
  title: string;
};

const RenderElementorWidget: FunctionComponent<elementorWidgetProps> = ({ image, title }) => {
  return (
    <Box width="234px" marginLeft="15px" display="flex" justifyContent="center" alignItems="center">
      <Image src={image} width="48px !important" marginRight="22px" />
      <Text
        cursor="pointer"
        fontSize="16px"
        color="#EADDC7"
        textTransform="uppercase"
        transition="0.3s"
        _hover={{ color: '#DA5F39' }}
      >
        {title}
      </Text>
    </Box>
  );
};

const RenderTitleHeader: FunctionComponent<titleComponentProps> = ({ subTitle, mainTitle, image }) => {
  return (
    <Box
      zIndex="4"
      position="relative"
      backgroundImage={image}
      height={{ base: '400px', lg: '700px' }}
      backgroundSize="cover"
    >
      <Container
        maxW="container.xl"
        padding="15px"
        paddingTop="20px"
        display={{ base: 'none', lg: 'flex' }}
        justifyContent="space-evenly"
      >
        {elementorItem.map((item, index) => (
          <RenderElementorWidget key={index} {...item} />
        ))}
      </Container>
      <Text
        fontSize="24px"
        fontWeight="500"
        lineHeight={{ base: '20px', md: '80px' }}
        letterSpacing="1.2px"
        zIndex="2"
        position="absolute"
        left="50%"
        top="30%"
        transform="translate(-50%, -30%)"
        color="#EADDC7"
        textTransform="uppercase"
      >
        {subTitle}
      </Text>
      <Heading
        fontSize={{ base: '40px', lg: '80px', xl: '90px' }}
        textTransform="uppercase"
        lineHeight={{ base: '40px', lg: '80px', xl: '120px' }}
        color="#FBF7EF"
        zIndex="2"
        position="absolute"
        left="50%"
        top="60%"
        transform="translate(-50%, -60%)"
        fontWeight="400"
      >
        {mainTitle}
      </Heading>
    </Box>
  );
};

const Slide = () => {
  return (
    <Box position="relative">
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        showThumbs={false}
        renderIndicator={(clickHandler, isSelected) => {
          const isSelectedIndex = isSelected ? '#ffffff' : 'transparent';
          return (
            <Box
              zIndex={2}
              onClick={clickHandler}
              width="22px"
              height="22px"
              borderWidth="1px"
              marginRight="12px"
              marginBottom="50px"
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
                backgroundColor: '#ffffff',
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
                width: '48px',
                height: '48px',
                color: '#FBF7EF38',
              }}
            ></Box>
          );
        }}
        renderArrowNext={clickHandler => {
          return (
            <Box
              zIndex={2}
              marginLeft="40px"
              position="absolute"
              onClick={clickHandler}
              top="50%"
              right="5%"
              cursor="pointer"
              _before={{
                display: 'block',
                content: "''",
                backgroundImage: `url(${nextIcon})`,
                width: '48px',
                height: '48px',
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
