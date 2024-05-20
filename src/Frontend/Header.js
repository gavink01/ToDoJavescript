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
    <Box bg="tomato" w="100%" p={4} color="white" >
      <Flex h={16} alignItems={'center'} justifyContent={'center'} >
        <Text fontSize="2xl" fontWeight="bold">
          ToDoApp
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
