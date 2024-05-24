import React, { useState } from 'react';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Flex,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { addList } from '../Backend/Graphql_helper';

const ListAddButton = ({ fetchData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newListName, setNewListName] = useState('');
  const [isAddingList, setIsAddingList] = useState(false);

  const handleAddList = async () => {
    setIsAddingList(true);
    try {
      await addList(newListName);
      fetchData();
      setNewListName('');
      setIsAddingList(false);
      onClose();
    } catch (error) {
      console.error('Failed to add list:', error);
      setIsAddingList(false);
    }
  };

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        aria-label="Add Task"
        size="lg"
        position="fixed"
        bottom={75}
        right={4}
        colorScheme="teal"
        onClick={onOpen}
      >
        Add List
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new list</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Input
                placeholder="New List Name"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                mb={4}
                mr={2}
              />
              <Button onClick={handleAddList} isLoading={isAddingList} colorScheme="teal">
                Add List
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ListAddButton;
