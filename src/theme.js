// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
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
  },
  shadows: {
    brutalShadow: '4px 4px 0px #000000, 4px 4px 0px #000000', // More complex shadow
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: '"Roboto", sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'lg',
        boxShadow: 'brutalShadow',
        _hover: {
          // transform: 'scale(1.05)',
          boxShadow: '4px 4px 0px #000000, 6px 6px 0px #000000', // Ensure base shadow is retained
        },
      },
    },
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          borderRadius: 'lg',
          boxShadow: 'brutalShadow',
          borderRightWidth: '6px',
          borderBottomWidth: '6px',
          borderTopWidth: '2px',
          borderLeftWidth: '2px',
          borderColor: 'black',
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        },
      }),
    },
    Popover: {
      baseStyle: (props) => ({
        content: {
          borderRadius: 'lg',
          boxShadow: 'brutalShadow',
          borderRightWidth: '6px',
          borderBottomWidth: '6px',
          borderTopWidth: '2px',
          borderLeftWidth: '2px',
          borderColor: 'black',
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        },
      }),
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'lg',
          borderWidth: '2px',
          borderColor: 'primary.500',
          boxShadow: '4px 4px 0px #000000, 4px 4px 0px #000000',
          _hover: {
            borderColor: 'primary.700',
            boxShadow: '4px 4px 0px #000000, 6px 6px 0px #000000',
          },
          _focus: {
            borderColor: 'primary.700',
            boxShadow: '4px 4px 0px #000000, 6px 6px 0px #000000',
          },
        },
      },
      sizes: {
        md: {
          field: {
            h: 10,
            fontSize: 'md',
          },
        },
      },
      variants: {
        outline: {
          field: {
            borderColor: 'primary.500',
            _hover: {
              borderColor: 'primary.700',
              boxShadow: '4px 4px 0px #000000, 6px 6px 0px #000000',
            },
            _focus: {
              borderColor: 'primary.700',
              boxShadow: '4px 4px 0px #000000, 6px 6px 0px #000000',
            },
          },
        },
        filled: {
          field: {
            bg: 'primary.50',
            _hover: {
              bg: 'primary.100',
              boxShadow: '4px 4px 0px #000000, 6px 6px 0px #000000',
            },
            _focus: {
              bg: 'primary.100',
              borderColor: 'primary.700',
              boxShadow: '4px 4px 0px #000000, 6px 6px 0px #000000',
            },
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'outline',
      },
    },
    Select: {
      baseStyle: {
        field: {
          borderRadius: 'lg',
          borderWidth: '2px',
          borderColor: 'primary.500',
          boxShadow: '4px 4px 0px #000000, 4px 4px 0px #000000',
          _hover: {
            borderColor: 'primary.700',
            boxShadow: '4px 4px 0px #000000, 6px 6px 0px #000000',
          },
          _focus: {
            borderColor: 'primary.700',
            boxShadow: '4px 4px 0px #000000, 6px 6px 0px #000000',
          },
        },
      },
    },
  },
});

export default theme;
