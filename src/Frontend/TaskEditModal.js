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
  Text
} from '@chakra-ui/react';
import { editItem } from '../Backend/Graphql_helper';

const TaskEditModal = ({ isOpen, onClose, task, listId, fetchData }) => {
  const [taskName, setTaskName] = useState(task.itemname);
  const [taskStatus, setTaskStatus] = useState(task.statusid);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await editItem(task.itemid, taskName, listId, taskStatus);
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
          <Text>Name</Text>
          <Input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task Name"
            mb={4}
          />
          <Text>Status</Text>
          <Select
            value={taskStatus}
            onChange={(e) => setTaskStatus(parseInt(e.target.value))}
            placeholder="Select Status"
            mb={4}
          >
            <option value={1}>Backlog</option>
            <option value={2}>To do</option>
            <option value={3}>Done</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          {isSaving ? (
            <Flex justifyContent="center" alignItems="center" height="100%">
              <Spinner size="lg" thickness="4px" speed="0.65s" color="teal.500" />
            </Flex>
          ) : (
            <>
              <Button colorScheme="teal" mr={3} onClick={handleSave}>
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
