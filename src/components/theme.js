import { createTheme, createText, createBox } from '@shopify/restyle'

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};


const theme = createTheme({
  colors: {
    primary: '#2CB9B0',
    secondary: '#0C0D34',
    danger: '#FF0058',
    text: 'rgba(12, 13, 52, 70)',
    white: 'white',
    grey: 'rgba(12, 13, 52, 0.05)',
    darkGrey: '#8A8D90',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {fontSize: 70, lineHeight: 70, fontFamily: 'SFProDisplay-Bold', color: 'white', textAlign: 'center'},
    title1: {fontFamily: 'SFProDisplay-Semibold', fontSize: 28, color: 'secondary', textAlign: 'center'},
    title2: {fontFamily: 'SFProDisplay-Semibold', fontSize: 22, lineHeight: 30, color: 'secondary'},
    body: {fontFamily: 'SFProDisplay-Regular', fontSize: 15, lineHeight: 22, color: 'text'},
    button: {fontSize: 15, fontFamily: 'SFProDisplay-Medium'}
  }
});

export const Box = createBox();
export const Text = createText();

export default theme;