// ListEditModal.js
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Spinner,
  Flex,
  Text,
} from '@chakra-ui/react';
import { editList } from '../Backend/Graphql_helper'; // You'll need to implement this function in Graphql_helper.js

const ListEditModal = ({ isOpen, onClose, list, fetchData }) => {
  const [listName, setListName] = useState(list.listname);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await editList(list.listid, listName);
      fetchData();
      onClose();
      setIsSaving(false);
    } catch (error) {
      console.error('Failed to save changes:', error);
      setIsSaving(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit List</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="List Name"
            mb={4}
            value={listName}
            onChange={e => setListName(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          {isSaving ? (
            <Flex align="center">
              <Spinner
                size="md"
                thickness="4px"
                speed="0.65s"
                color="teal.500"
              />
              <Text ml={3}>Saving...</Text>
            </Flex>
          ) : (
            <>
              <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Save
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ListEditModal;
