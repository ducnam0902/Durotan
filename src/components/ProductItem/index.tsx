import React, { useMemo } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import { Text, Button, RadioGroup } from '@chakra-ui/react';
import CustomRadio from '../RadioGroup';

import { useRadioGroup } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FeaturedState } from '@durotan/services';
interface IFeaturedCollection {
  productName: string;
  size: string;
  quanity: number;
}

const ProductItem: React.FC<FeaturedState> = ({ name, price, category, colorGroup }) => {
  const { handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      productName: name,
      size: colorGroup[0].sizeGroup[0].sizeName,
      quanity: 1,
      color: colorGroup[0].colorName,
    },
  });

  const currentColor = useMemo(() => {
    return colorGroup.find(item => item.colorName === getValues('color'));
  }, [getValues('color')]);

  const onSubmit: SubmitHandler<IFeaturedCollection> = data => {
    console.log(data);
  };

  const { getRadioProps } = useRadioGroup({
    name: 'color',
    defaultValue: colorGroup[0].colorName,
    onChange: newColor => {
      setValue('color', newColor);
    },
  });

  const { getRadioProps: getRadioPropsSize } = useRadioGroup({
    name: 'size',
    defaultValue: colorGroup[0].sizeGroup[0].sizeName,
    isDisabled: currentColor?.sizeGroup.find(item => item.sizeName === getValues('size'))?.quanity === 0,
    onChange: newSize => {
      setValue('size', newSize);
    },
  });

  return (
    <Box>
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
          <Box
            backgroundImage={currentColor?.images[0]}
            backgroundSize="cover"
            backgroundPosition="center"
            width="100%"
            height="348px"
            position="relative"
          >
            <Flex
              flexDirection={'column'}
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
                <RadioGroup name="color" sx={{ display: 'flex' }}>
                  {colorGroup?.map(({ colorName }) => {
                    const radio = getRadioProps({ value: colorName });
                    return (
                      <CustomRadio key={colorName} {...radio}>
                        {colorName}
                      </CustomRadio>
                    );
                  })}
                </RadioGroup>
              </Stack>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <RadioGroup name="size" sx={{ display: 'flex' }}>
                  {currentColor?.sizeGroup.map(({ sizeName, quanity }) => {
                    const radio = getRadioPropsSize({ value: sizeName });
                    return (
                      <CustomRadio key={sizeName} {...radio} isDisabled={quanity === 0}>
                        {sizeName}
                      </CustomRadio>
                    );
                  })}
                </RadioGroup>
              </Stack>
            </Flex>
          </Box>
          <Flex direction="column" paddingTop="18px" paddingBottom="20px">
            <Text fontSize="13px" textTransform="uppercase" color="#999999" letterSpacing="1.3px" marginBottom="3px">
              {category}
            </Text>
            <Text
              id="productName"
              fontSize="18px"
              fontWeight="400"
              color="darker"
              transition="all .3s ease-in"
              _hover={{
                color: '#da5f39',
                cursor: 'pointer',
              }}
            >
              {name}
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
    </Box>
  );
};

export default ProductItem;
