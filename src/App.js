// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Frontend/Header';
import TaskGrid from './Frontend/TaskGrid';
import theme from './Styles/theme';
import SignUp from './Frontend/AuthComponents/SignUp';
import Login from './Frontend/AuthComponents/Login';
import Logout from './Frontend/AuthComponents/Logout';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './Frontend/AuthComponents/ProtectedRoute';
import app from './Backend/Firebase';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <TaskGrid />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
