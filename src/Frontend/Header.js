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
    <Box bg="cadetblue" w="100%" p={4} color="white" >
      <Flex h={16} alignItems={'center'} justifyContent={'center'} >
        <Text fontSize="2xl" fontWeight="bold">
          To Do App
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
