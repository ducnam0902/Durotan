import { Box, Container, Flex, Stack } from '@chakra-ui/layout';
import { Heading, Text, Button, CheckboxGroup, Checkbox } from '@chakra-ui/react';
import shirt from '@durotan/assets/tshirt.jpg';
const FeaturedCollection = () => {
  return (
    <Box>
      <Heading
        fontSize={{ base: '30px', md: '48px' }}
        fontWeight="400"
        lineHeight={{ base: '30px', md: '64px' }}
        color="darker"
        textAlign="center"
      >
        Featured Collections
      </Heading>
      <Container maxW={{ base: 'container.sm', md: 'container.xl' }} padding="30px">
        <Flex>
          <Flex
            direction="column"
            _hover={{
              '&>div>div': {
                opacity: 1,
                transform: 'translateY(0px)',
              },
              '&>button': {
                opacity: 1,
                transform: 'translateY(0px)',
              },
            }}
          >
            <Box backgroundImage={shirt} backgroundSize="cover" width="367px" height="449px" position="relative">
              <Flex
                opacity="0"
                transform="translateY(20px)"
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                padding="18px 0 3px 0"
                backgroundColor="#fff"
                transition="all 0.4s ease-in-out"
              >
                <CheckboxGroup colorScheme="green" defaultValue={['naruto', 'kakashi']}>
                  <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox value="S">S</Checkbox>
                    <Checkbox value="M">M</Checkbox>
                    <Checkbox value="L">L</Checkbox>
                    <Checkbox value="XL">XL</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Flex>
            </Box>
            <Flex direction="column" paddingTop="18px" paddingBottom="20px">
              <Text fontSize="13px" textTransform="uppercase" color="#999999" letterSpacing="1.3px" marginBottom="3px">
                GAP
              </Text>
              <Text
                fontSize="18px"
                fontWeight="400"
                color="darker"
                transition="all .3s ease-in"
                _hover={{
                  color: '#5e4d30',
                }}
              >
                Basic T-Shirt
              </Text>

              <Text color="#ea311d" fontSize="20px">
                $29.00
              </Text>
            </Flex>
            <Button
              fontSize="14px"
              textTransform="uppercase"
              letterSpacing=".075em"
              color="darker"
              textAlign="center"
              padding="11.5px 0"
              border="1px solid #000000"
              borderRadius="none"
              fontWeight="400"
              transform="translateY(-10px)"
              opacity="0"
            >
              add to cart
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default FeaturedCollection;
