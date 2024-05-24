import React, { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Input,
  Flex,
  Box,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { addList } from '../Backend/Graphql_helper';

const ListAddButton = ({ fetchData }) => {
  const [newListName, setNewListName] = useState('');
  const [isAddingList, setIsAddingList] = useState(false);

  const handleAddList = async () => {
    setIsAddingList(true);
    try {
      await addList(newListName);
      fetchData();
      setNewListName('');
      setIsAddingList(false);
    } catch (error) {
      console.error('Failed to add list:', error);
      setIsAddingList(false);
    }
  };

  return (
    <Box position="fixed" bottom={75} right={4}>
      <Popover>
        <PopoverTrigger>
          <Button leftIcon={<AddIcon />} colorScheme="teal" size={'lg'} >
            Add List
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Add a new list</PopoverHeader>
          <PopoverBody>
            <Flex>
              <Input
                placeholder="New List Name"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                mb={4}
                mr={2}
              />
              <Button onClick={handleAddList} isLoading={isAddingList} colorScheme="teal">
                Add
              </Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default ListAddButton;
