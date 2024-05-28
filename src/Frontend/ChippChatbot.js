import React from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';

const ChatbotModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="fixed" bottom={4} right={4}>
      <Button onClick={onOpen} colorScheme="accent" size={'lg'} width={'300px'}>Chipp.AI Chatbot </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chipp.AI Chatbot</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe 
              src="https://kirkwall-6420.chipp.ai" 
              height="800px" 
              width="100%" 
              frameborder="0" 
              title="Chipp.AI Chatbot"
              style={{ width: '100%', height: 'calc(100vh - 100px)', border: 'none' }} 
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
  );
}

export default ChatbotModal;
