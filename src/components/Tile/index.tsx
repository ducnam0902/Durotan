import { Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
interface ITile {
  title: string;
  detail?: string;
}

const Tile: React.FC<ITile> = ({ title, detail, ...props }) => {
  return (
    <Container maxW={{ base: 'container.sm', md: 'container.lg' }} padding="1.5rem" textAlign="center">
      <Heading
        marginBottom="1.2rem"
        fontSize={{ base: '3rem', md: '4.8rem' }}
        fontWeight="400"
        lineHeight={{ base: '3rem', md: '6.4rem' }}
        color="darker"
        {...props}
      >
        {title}
      </Heading>
      {!!detail && (
        <Text
          marginTop="1.6rem"
          marginBottom="2.7rem"
          color="textMain"
          fontSize="1.8rem"
          lineHeight="3.6rem"
          fontWeight="normal"
        >
          {detail}
        </Text>
      )}
    </Container>
  );
};

export default Tile;
