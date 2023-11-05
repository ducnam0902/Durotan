import React from 'react';
import { Button as BaseButton } from '@chakra-ui/react';
import { ButtonProps } from '@chakra-ui/react';
interface IButton {
  children: React.ReactNode;
}
const Button: React.FC<IButton & ButtonProps> = ({ children, ...props }) => {
  return (
    <BaseButton
      textAlign="center"
      textTransform="uppercase"
      fontSize="1.4rem"
      fontWeight="600"
      color="darker"
      backgroundColor="transparent"
      padding="1rem 3.3rem 1rem 3.3rem"
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
