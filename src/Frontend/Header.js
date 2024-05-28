import React from 'react';
import {
  Box,
  Flex,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      w="100%"
      p={4}
      sx={{ borderBottomWidth: '4px', borderColor: 'black' }}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'center'}>
        <Text fontSize="4em" fontWeight="bold" color={'black'}>
          To Do App
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
