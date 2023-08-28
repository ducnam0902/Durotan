import React from 'react';
import { Box, Flex, Text, RadioGroup, Stack, useRadioGroup } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomRadio from '@durotan/components/RadioGroup';
const category: {
  id: number;
  categoryName: string;
}[] = [
  {
    id: 1,
    categoryName: 'Jackets',
  },
  {
    id: 2,
    categoryName: 'Polo',
  },
  {
    id: 3,
    categoryName: 'Shirts',
  },
  {
    id: 5,
    categoryName: 'Tshirts',
  },
  {
    id: 4,
    categoryName: 'Jeans',
  },
];

const FilterForm: React.FC = () => {
  const { handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      category: '',
    },
  });

  const { getRadioProps } = useRadioGroup({
    name: 'category',
    defaultValue: '',
    onChange: newCategory => {
      setValue('category', newCategory);
    },
  });

  return (
    <Box
      sx={{
        border: '1px solid #d0d0d0',
        padding: {
          base: '20px 55px 25px',
          md: '40px 55px 45px',
        },
        marginBottom: '70px',
      }}
    >
      <form>
        <Flex justifyContent="flex-start">
          <Box textAlign="left">
            <Text>Category</Text>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              <RadioGroup name="color">
                {category?.map(({ categoryName }) => {
                  const radio = getRadioProps({ value: categoryName });
                  return (
                    <CustomRadio key={categoryName} {...radio}>
                      {categoryName}
                    </CustomRadio>
                  );
                })}
              </RadioGroup>
            </Stack>
          </Box>
          <Box>
            <Text>Category</Text>
          </Box>
          <Box>
            <Text>Category</Text>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

export default FilterForm;
