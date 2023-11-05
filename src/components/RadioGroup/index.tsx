import { Box } from '@chakra-ui/layout';
import { useRadio } from '@chakra-ui/radio';
const RadioGroup = ({ ...props }) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" marginRight="5px">
      <input {...input} />
      <Box
        {...checkbox}
        cursor={props.isDisabled ? 'not-allowed' : 'pointer'}
        minWidth="3.8rem"
        textAlign="center"
        marginBottom="1rem"
        lineHeight="4rem"
        fontSize="1.4rem"
        color="gray"
        border="1px solid #fff"
        transition="all 0.4s"
        _hover={{
          borderColor: '#da5f39',
          color: '#da5f39',
        }}
        _checked={{
          borderColor: '#da5f39',
          color: '#da5f39',
        }}
        _disabled={{
          borderColor: '#999',
          color: '#999',
          background: '#9999995e',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioGroup;
