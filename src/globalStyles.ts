import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'body',
        fontSize: '62.5%',
        fontWeight: '400',
        lineHeight: '1.67',
        wordWrap: 'break-word',
        color: 'textMain',
        backgroundColor: '#fff',
      },
      a: {
        color: 'darker',
        textDecoration: 'none',
        transition: '0.3s ease-in',
      },
      p: {
        marginBottom: '1.5em',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontWeight: 400,
        fontFamily: 'heading',
        color: 'darker',
      },
      h1: {
        fontSize: '6rem',
      },
      h2: {
        fontSize: '4.8rem',
      },
      h3: {
        fontSize: '3.6rem',
      },
      h4: {
        fontSize: '3rem',
      },
      h5: {
        fontSize: '2.4rem',
      },
      h6: {
        fontSize: '2rem',
      },
    },
  },
  fonts: {
    body: 'Jost, sans-serif',
    heading: 'Marcellus, sans-serif',
  },
  colors: {
    darker: '#000000',
    dark: '#222222',
    light: '#ffffff',
    white: '#eaddc7',
    gray: '#999999',
    primary: '#928656',
    blue: '#00ccff',
    backgroundDarker: '#000000',
    backgroundLight: '#ffffff',
    backgroundGray: '#999999',
    backgroundPrimary: '#928656',
    textInput: '#999999',
    textMain: '#666666',
    textInputFocus: '#010101',
    linkColor: '#000000',
    borderPrimary: '#928656',
    borderLight: '#ffffff',
    borderInput: '#d8d8d8',
    borderInputFocus: '#000000',
    transparent: 'transparent',
  },
  fontSizes: {
    xs: '20px',
    sm: '24px',
    md: '30px',
    lg: '36px',
    xl: '48px',
    '2xl': '60px',
  },
  'a:focus': {
    outline: 'none',
    color: 'primary',
  },
  'a:active': {
    outline: 'none',
    color: 'primary',
  },
  'a:hover': {
    outline: 'none',
    color: 'primary',
  },
});
