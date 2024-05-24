// // src/theme.js
// import { Modal, Popover, extendTheme, } from '@chakra-ui/react';
// import { theme as glassTheme } from '@saas-ui/theme-glass';

// const customTheme = {
//   colors: {
//     brand: {
//       50: '#e3f2f9',
//       100: '#c5e4f3',
//       200: '#a2d4ec',
//       300: '#7ac1e4',
//       400: '#47a9da',
//       500: '#0088cc',
//       600: '#007ab8',
//       700: '#006ba1',
//       800: '#005885',
//       900: '#003f5e',
//     },
//     // Override other colors as needed
//   },
//   styles: {
//     global: {
//       body: {
//         bg: 'brand.200', // Set a default background color
//         color: 'gray.800', // Set a default text color
//       },
//     },
//   },
  
// };

// export const theme = extendTheme(
//    // First apply the glass theme
//   customTheme,
// //   glassTheme
//   {
//     components: {
//       Modal: glassTheme.components.Modal,
//       Popover: glassTheme.components.Popover,
//       // Add other components you need from glassTheme
//     }
//   } // Then apply your custom overrides
// );
