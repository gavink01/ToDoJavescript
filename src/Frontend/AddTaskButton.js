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

const TaskAddButton = ({ fetchData, listData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState(1);
  const [taskListId, setTaskListId] = useState(''); // Initialize with an empty string
  const [isSaving, setIsSaving] = useState(false);

  const handleAddTask = async () => {
    setIsSaving(true);
    try {
      await addItem(taskTitle, taskListId, taskStatus);
      fetchData();
      onClose();
      setIsSaving(false);
    } catch (error) {
      console.error('Failed to add task:', error);
      setIsSaving(false);
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
        colorScheme="accent"
        onClick={onOpen}
        w={'300px'}
      >
        Add Task
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Task Title"
              mb={4}
              value={taskTitle}
              onChange={e => setTaskTitle(e.target.value)}
            />
            <Select
              placeholder="Select Status"
              mb={4}
              value={taskStatus}
              onChange={e => setTaskStatus(parseInt(e.target.value))}
            >
              <option value={1}>Backlog</option>
              <option value={2}>To do</option>
              <option value={3}>Done</option>
            </Select>
            <Select
              placeholder="Select List"
              value={taskListId}
              onChange={e => setTaskListId(e.target.value || '')}
              mb={4}
            >
              {listData.map(list => (
                <option key={list.listid} value={list.listid}>
                  {list.listname}
                </option>
              ))}
            </Select>
            <Flex></Flex>
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
                <Button colorScheme="blue" mr={3} onClick={handleAddTask}>
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
    </>
  );
};

export default TaskAddButton;
