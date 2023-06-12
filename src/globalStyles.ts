import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Jost, sans-serif',
        fontSize: '62.5%',
        fontWeight: '400',
        lineHeight: '1.67',
        wordWrap: 'break-word',
        color: '#666666',
        backgroundColor: '#fff',
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
  },
  fontSizes: {
    xs: '20px',
    sm: '24px',
    md: '30px',
    lg: '36px',
    xl: '48px',
    '2xl': '60px',
  },
  a: {
    color: '#000000',
    textDecoration: 'none',
  },
  'a:focus, a:hover, a:active': {
    outline: 0,
  },
  p: {
    marginBottom: '1.5em',
  },
});
