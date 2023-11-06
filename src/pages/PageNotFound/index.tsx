import React from 'react';
import { Container, Text, Link as CustomLink } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  return (
    <Container
      maxWidth="container.md"
      textAlign="center"
      paddingTop={{ base: '5rem', md: '10rem' }}
      paddingBottom="10rem"
    >
      <Text
        fontSize={{ base: '15rem', md: '25rem' }}
        color="#5e4d30"
        textTransform="uppercase"
        lineHeight={1}
        marginBottom={{ base: '2rem', md: '3.8rem' }}
        fontFamily="heading"
      >
        404
      </Text>
      <Text
        color="darker"
        fontSize={{ base: '2.6rem', md: '3.6rem' }}
        lineHeight={{ base: '3.6rem', md: '4.6rem' }}
        marginBottom={{ base: '5rem', md: '8rem' }}
      >
        This page has been probably moved somewhere..
      </Text>
      <CustomLink
        as={Link}
        fontSize={{ base: '1.6rem', md: '1.8rem' }}
        padding={{ base: '1.5rem 4.5rem', md: '2rem 5.5rem' }}
        to="/"
        textTransform="uppercase"
        letterSpacing="0.025em"
        border="1px solid #5e4d30"
        color="#5e4d30"
        backgroundColor="light"
        fontWeight="normal"
        lineHeight="1"
        whiteSpace="nowrap"
        textDecoration="none"
        transition="all ease 0.3s"
        _hover={{
          color: 'light',
          backgroundColor: '#5e4d30',
        }}
      >
        Back to homepage
      </CustomLink>
    </Container>
  );
};

export default PageNotFound;
