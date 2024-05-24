import React, { useState } from 'react';
import {
  IconButton,
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
  Select,
  Spinner,
  Flex,
  Text,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { addItem, addList } from '../Backend/Graphql_helper';

const ListAddButton = ({ fetchData, listData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState(1);
  const [taskListId, setTaskListId] = useState(''); // Initialize with an empty string
  const [newListName, setNewListName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isAddingList, setIsAddingList] = useState(false);


  const handleAddList = async () => {
    setIsAddingList(true);
    try {
      const newList = await addList(newListName);
      fetchData();
      setTaskListId(newList.data.create_list.listid); // Update the task list ID to the newly created list
      setNewListName('');
      setIsAddingList(false);
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
          <ModalHeader>Add a new task</ModalHeader>
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
          <ModalFooter>
            {isSaving ? (
              <Flex align="center">
                <Spinner size="md" thickness="4px" speed="0.65s" color="teal.500" />
                <Text ml={3}>Saving...</Text>
              </Flex>
            ) : (
              <>
                {/* <Button colorScheme="blue" mr={3} onClick={handleAddTask}>
                  Save
                </Button> */}
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ListAddButton;
