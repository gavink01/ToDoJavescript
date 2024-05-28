import React from 'react';
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';

const ChatbotModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="fixed" bottom={4} right={4}>
      <Button onClick={onOpen} colorScheme="accent" size={'lg'} width={'300px'}>
        Chipp.AI Chatbot{' '}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW="700px"
          maxH="700px"
          ml="10px"
          mt="10px"
          borderRadius="10px"
          boxShadow="lg"
        >
          <ModalHeader>Chipp.AI Chatbot</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              src="https://kirkwall-6420.chipp.ai"
              height="600px"
              width="100%"
              frameborder="0"
              title="Kirkwall"
              style={{ border: 'none' }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ChatbotModal;
