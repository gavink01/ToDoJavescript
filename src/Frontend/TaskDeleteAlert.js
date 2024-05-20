import React, { useRef, useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Spinner,
  Flex
} from '@chakra-ui/react';

const TaskDeleteAlert = ({ isOpen, onClose, onConfirmDelete }) => {
  const cancelRef = useRef();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    await onConfirmDelete();
    setIsDeleting(false);
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent bg="black" color="white">
          <AlertDialogHeader fontSize="lg" fontWeight="bold" color="gold">
            Delete Task
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={handleConfirmDelete}
              ml={3}
              isDisabled={isDeleting}
            >
              {isDeleting ? (
                <Flex align="center">
                  <Spinner size="sm" thickness="2px" speed="0.65s" color="red.500" />
                </Flex>
              ) : (
                'Delete'
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default TaskDeleteAlert;
