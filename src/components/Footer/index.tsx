import { Image } from '@chakra-ui/image';
import { Box, Container, Heading, Text, Wrap, WrapItem, Center, Flex } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';

import { secondaryMenu } from '@durotan/data/constants';
import svgtwiiter from '@durotan/assets/svgtwiiter.svg';
import svgface from '@durotan/assets/svgface.svg';
import svginsta from '@durotan/assets/svginsta.svg';
import svgyoutube from '@durotan/assets/svgyoutube.svg';
import svgpin from '@durotan/assets/svgpin.svg';
import { FC } from 'react';

const socialIcons = [svgtwiiter, svgface, svginsta, svgyoutube, svgpin];

interface IHeadingTitleProps {
  title: string;
}

const HeadingTitle: FC<IHeadingTitleProps> = ({ title }) => (
  <Heading
    as="h6"
    marginBottom="2.4rem"
    fontSize="1.8rem"
    letterSpacing="0.05em"
    lineHeight="1.8rem"
    textTransform="uppercase"
    textAlign="center"
    color="darker"
  >
    {title}
  </Heading>
);

const Footer: React.FC = () => {
  return (
    <Box>
      <Box borderTop="1px solid #dbdbdb" borderBottom="1px solid #dbdbdb">
        <Container maxW="full" display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems="center">
          <Box
            padding={{ base: '3rem 1rem 2rem', lg: '9rem 1.5rem 3.6rem' }}
            width={{ base: '100%', md: '33.33333%' }}
            height={{ base: '15rem', lg: '27rem' }}
            borderRight={{ lg: '1px solid #dbdbdb' }}
          >
            <HeadingTitle title="About Durotan" />
            <Text
              margin="1em auto"
              textAlign="center"
              fontSize="1.6rem"
              color="#949494"
              lineHeight="2.6rem"
              letterSpacing="0.015em"
              width={{ base: '100%', lg: '50%' }}
            >
              The inspiration got from natural, color pastel and activities the daily.
            </Text>
          </Box>
          <Box
            padding={{ base: '3rem 1rem 2rem', lg: '9rem 1.5rem 3.6rem' }}
            width={{ base: '100%', md: '33.33333%' }}
            height={{ base: '15rem', lg: '27rem' }}
            borderRight={{ lg: '1px solid #dbdbdb' }}
          >
            <HeadingTitle title="Our Social" />
            <Center>
              {socialIcons.map((icon, index) => (
                <Image
                  display="inline-block"
                  marginLeft={{ base: '1rem', lg: '1.9rem' }}
                  src={icon}
                  objectFit="cover"
                  boxSize={{ base: '1.8rem', lg: '2.4rem' }}
                  cursor="pointer"
                  key={index}
                />
              ))}
            </Center>
          </Box>
          <Box
            padding={{ base: '3rem 1rem 2rem', lg: '9rem 1.5rem 3.6rem' }}
            width={{ base: '100%', md: '33.33333%' }}
            height={{ base: '15rem', lg: '27rem' }}
          >
            <HeadingTitle title="Newsletter" />
            <Flex
              marginLeft="1.8rem"
              marginRight="1.8rem"
              border="1px solid #d8d8d8"
              padding="0.9rem 1.8rem 0.8rem"
              height="5.5rem"
            >
              <Input
                fontSize="1.6rem"
                variant="unstyled"
                placeholder="Your email address"
                _placeholder={{
                  fontSize: '1.6rem',
                  color: '#cccccc',
                }}
              />
              <Button
                textTransform="uppercase"
                fontSize="1.4rem"
                fontWeight="600"
                letterSpacing="0.050em"
                color="darker"
                backgroundColor="transparent"
                transform=" translate(0.6rem, 0.6rem)"
              >
                Subscribe
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>

      <Center>
        <Wrap
          direction={{ base: 'column', lg: 'row' }}
          margin="0 auto"
          fontSize="1.6rem"
          letterSpacing="0.7px"
          color="textMain"
          padding="4.7rem 0"
        >
          {secondaryMenu.map((menuItem, index) => (
            <WrapItem
              key={index}
              as={Link}
              to={menuItem.link}
              paddingLeft="2.9rem"
              paddingRight="2.9rem"
              paddingTop="1rem"
              paddingBottom="1rem"
              textTransform="uppercase"
              cursor="pointer"
              _hover={{
                color: '#da5f39',
              }}
            >
              {menuItem.title}
            </WrapItem>
          ))}
        </Wrap>
      </Center>
      <Box padding="5rem 6rem">
        <Text marginBottom="1.5rem" textAlign="center" fontSize="1.6rem" letterSpacing="0.025em" color="#949494">
          © 2021 durotan. all rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
