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
  Select,
  Spinner,
  Flex,
  Text,
} from '@chakra-ui/react';
import { editItem } from '../Backend/Graphql_helper'; // Import the editItem function

const TaskEditModal = ({ isOpen, onClose, task, listId, fetchData, listData }) => {
  const [taskName, setTaskName] = useState(task.itemname);
  const [taskStatus, setTaskStatus] = useState(task.statusid);
  const [taskListId, setTaskListId] = useState(listId);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await editItem(task.itemid, taskName, taskListId, taskStatus);
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
        <ModalHeader>Edit Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Task Name"
            mb={4}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Select
            placeholder="Select Status"
            mb={4}
            value={taskStatus}
            onChange={(e) => setTaskStatus(parseInt(e.target.value))}
          >
            <option value={1}>Backlog</option>
            <option value={2}>To do</option>
            <option value={3}>Done</option>
          </Select>
          <Select
            placeholder="Select List"
            mb={4}
            value={taskListId}
            onChange={(e) => setTaskListId(e.target.value)}
          >
            {listData.map((list) => (
              <option key={list.listid} value={list.listid}>
                {list.listname}
              </option>
            ))}
          </Select>
        </ModalBody>
        <ModalFooter>
          {isSaving ? (
            <Flex align="center">
              <Spinner size="md" thickness="4px" speed="0.65s" color="teal.500" />
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

export default TaskEditModal;
