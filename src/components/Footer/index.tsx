import { Image } from '@chakra-ui/image';
import { Box, Grid, GridItem, Heading, Text, Wrap, WrapItem, Center, Flex } from '@chakra-ui/layout';
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
    marginBottom="24px"
    fontSize="18px"
    letterSpacing="0.05em"
    lineHeight="18px"
    fontWeight="normal"
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
        <Grid templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(3,1fr)' }}>
          <GridItem
            colStart={{ base: 1, lg: 1 }}
            colEnd={{ base: 2, lg: 2 }}
            borderRight={{ lg: '1px solid #dbdbdb' }}
            padding="90px 15px 36px"
            justifyItems="center"
          >
            <Box>
              <HeadingTitle title="About Durotan" />
              <Text
                margin="1em auto"
                textAlign="center"
                fontSize="16px"
                color="#949494"
                lineHeight="26px"
                letterSpacing="0.015em"
                width="80%"
              >
                The inspiration got from natural, color pastel and activities the daily.
              </Text>
            </Box>
          </GridItem>
          <GridItem
            colStart={{ base: 1, lg: 2 }}
            colEnd={{ base: 2, lg: 3 }}
            borderRight={{ lg: '1px solid #dbdbdb' }}
            padding="90px 15px 36px"
          >
            <HeadingTitle title="Our Social" />
            <Center>
              {socialIcons.map((icon, index) => (
                <Image
                  display="inline-block"
                  marginLeft={{ base: '10px', lg: '19px' }}
                  src={icon}
                  objectFit="cover"
                  boxSize={{ base: '18px', lg: '24px' }}
                  cursor="pointer"
                  key={index}
                />
              ))}
            </Center>
          </GridItem>
          <GridItem colStart={{ base: 1, lg: 3 }} colEnd={{ base: 2, lg: 4 }} padding="90px 15px 36px">
            <HeadingTitle title="Newsletter" />
            <Flex
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
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Center>
        <Wrap
          direction={{ base: 'column', lg: 'row' }}
          margin="0 auto"
          fontSize="16px"
          letterSpacing="0.7px"
          color="#666666"
          padding="47px 0"
        >
          {secondaryMenu.map((menuItem, index) => (
            <WrapItem
              key={index}
              as={Link}
              to={menuItem.link}
              paddingLeft="29px"
              paddingRight="29px"
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
      <Box padding="50px 60px">
        <Text marginBottom="15px" textAlign="center" fontSize="16px" letterSpacing="0.025em" color="#949494">
          © 2021 durotan. all rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
