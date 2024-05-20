// Library imports
import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';

 // File imports
import Header from './Frontend/Header';
import TaskGrid from './Frontend/TaskGrid';
import AddTaskButton from './Frontend/AddTaskButton';

function App() {
  return (
    <ChakraProvider >
      <Header />
      <TaskGrid />
      {/* <AddTaskButton /> */}
    </ChakraProvider>
  );
}

export default App;
