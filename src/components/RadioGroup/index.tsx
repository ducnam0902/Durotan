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
        cursor="pointer"
        minWidth="38px"
        textAlign="center"
        marginBottom="10px"
        lineHeight="40px"
        fontSize="14px"
        color="#999"
        border="1px solid #dfdfdf"
        transition="all 0.4s"
        _hover={{
          borderColor: '#000',
        }}
        _checked={{
          borderColor: '#000',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioGroup;
