import React from 'react';
import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import Logout from './AuthComponents/Logout';

const Header = () => {
  return (
    <Box
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      w="100%"
      p={4}
      sx={{ borderBottomWidth: '4px', borderColor: 'black' }}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize="4em" fontWeight="bold" color={'black'}>
          To Do App
        </Text>
        <Logout />
      </Flex>
    </Box>
  );
};

export default Header;
