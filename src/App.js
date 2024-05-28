// Library imports
import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';

 // File imports
import Header from './Frontend/Header';
import TaskGrid from './Frontend/TaskGrid';
import AddTaskButton from './Frontend/AddTaskButton';
import theme from './Styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <TaskGrid />
      {/* <AddTaskButton /> */}
    </ChakraProvider>
  );
}

export default App;
