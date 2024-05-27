// theme.js
import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    50: '#ffe4e1',
    100: '#ffbab3',
    200: '#ff8f82',
    300: '#ff6450',
    400: '#ff3920',
    500: '#e62007', // base color
    600: '#b21805',
    700: '#7f1004',
    800: '#4c0802',
    900: '#1c0000',
  },
  secondary: {
    50: '#e2f9ff',
    100: '#b6edff',
    200: '#86e2ff',
    300: '#55d7ff',
    400: '#23cbff',
    500: '#00b1e6', // base color
    600: '#0089b4',
    700: '#006281',
    800: '#003b4f',
    900: '#00141e',
  },
  accent: {
    50: '#f6ffed',
    100: '#d3f5bc',
    200: '#aedc8a',
    300: '#8dc55c',
    400: '#6cad30',
    500: '#539318', // base color
    600: '#41720f',
    700: '#2f5208',
    800: '#1d3101',
    900: '#0a0f00',
  },
  background: {
    default: '#ff77aa',
    card: '#3344cc',
    text: '#fff',
  },
};

const fonts = {
  heading: '"Avenir Next", sans-serif',
  body: '"Roboto", sans-serif',
};

const theme = extendTheme({
  colors,
  fonts,
  components: {
    Box: {
      baseStyle: {
        rounded: 'lg',
        shadow: 'md',
      },
    },
    Button: {
      baseStyle: {
        rounded: 'lg',
        shadow: 'md',
        _hover: {
          transform: 'scale(1.05)',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
    Text: {
      baseStyle: {
        fontSize: 'md',
      },
    },
  },
});

export default theme;
