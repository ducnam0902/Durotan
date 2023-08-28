import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import filter from '@durotan/assets/filter.svg';
import arrowDown from '@durotan/assets/arrowdown.svg';
import closeIcon from '@durotan/assets/svgclose2.svg';

import React, { useState } from 'react';
import FilterForm from '@durotan/components/FilterForm';

const Shop: React.FC = () => {
  const [isShowFilter, setIsShowFilter] = useState<boolean>(false);

  const handleToogleFilter = () => {
    setIsShowFilter(isShowFilter => !isShowFilter);
  };
  return (
    <>
      <Container maxWidth="7xl">
        <Box sx={{ paddingTop: { base: '30px', lg: '75px' }, paddingBottom: { base: '45px', lg: '70px' } }}>
          <Breadcrumb sx={{ margin: '21px 0' }}>
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to="/"
                sx={{
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  color: '#999',
                  textDecoration: 'none',
                  lineHeight: 1.67,
                }}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to="/shop"
                sx={{
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  color: '#000',
                  textDecoration: 'none',
                  lineHeight: 1.67,
                }}
              >
                Shop
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading
            as="h3"
            size="3xl"
            sx={{
              fontSize: '48px',
              fontWeight: 400,
              color: '#000',
              fontFamily: 'Marcellus, sans-serif',
            }}
          >
            Shop
          </Heading>
        </Box>

        <Flex justifyContent="space-between" paddingBottom="32px">
          <Flex cursor="pointer" color="#000" onClick={handleToogleFilter} align="center">
            {!isShowFilter && <Image src={filter} width="16px" height="32px" marginRight="15px" />}
            {isShowFilter && <Image src={closeIcon} width="16px" height="32px" marginRight="15px" color="#5e4d30" />}

            <Text
              sx={{
                textTransform: 'uppercase',
                color: isShowFilter ? '#5e4d30' : '#000',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '1.67',

                _hover: {
                  color: '#5e4d30',
                },
              }}
            >
              Filter
            </Text>
          </Flex>

          <Flex cursor="pointer">
            <Text
              sx={{
                textTransform: 'uppercase',
                letterSpacing: '.3px',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '1.67',
                color: '#000',
              }}
            >
              Default
            </Text>
            <Image src={arrowDown} width="16px" height="26px" marginLeft="20px" />
          </Flex>
        </Flex>
        <FilterForm />
      </Container>
    </>
  );
};

export default Shop;
