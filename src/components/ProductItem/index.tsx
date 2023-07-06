import React from 'react';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import { Text, Button, RadioGroup } from '@chakra-ui/react';
import CustomRadio from '../RadioGroup';

import { useRadioGroup } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFeaturedCollection {
  productName: string;
  size: string;
  quanity: number;
}

interface IProductItem {
  productName: string;
  productCategory: string;
  sizes: string[];
  price: number;
  images: string[];
}

const ProductItem: React.FC<IProductItem> = ({ productName, productCategory, sizes, price, images }) => {
  const { handleSubmit, setValue } = useForm({
    defaultValues: {
      productName: 'basicTShirt',
      size: sizes[0],
      quanity: 1,
    },
  });

  const onSubmit: SubmitHandler<IFeaturedCollection> = data => {
    console.log(data);
  };

  const { getRadioProps } = useRadioGroup({
    name: 'size',
    defaultValue: sizes[0],
    onChange: newSize => setValue('size', newSize),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <Box backgroundImage={images[0]} backgroundSize="cover" width="367px" height="449px" position="relative">
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
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              <RadioGroup name="size" sx={{ display: 'flex' }}>
                {sizes.map((value: string) => {
                  const radio = getRadioProps({ value });
                  return (
                    <CustomRadio key={value} {...radio}>
                      {value}
                    </CustomRadio>
                  );
                })}
              </RadioGroup>
            </Stack>
          </Flex>
        </Box>
        <Flex direction="column" paddingTop="18px" paddingBottom="20px">
          <Text fontSize="13px" textTransform="uppercase" color="#999999" letterSpacing="1.3px" marginBottom="3px">
            {productCategory}
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
            {productName}
          </Text>

          <Text color="#ea311d" fontSize="20px">
            ${price.toString()}
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
          type="submit"
        >
          add to cart
        </Button>
      </Flex>
    </form>
  );
};

export default ProductItem;
