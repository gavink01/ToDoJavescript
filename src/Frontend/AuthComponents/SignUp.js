// src/components/SignUp.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Box, Heading, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box p={4}>
      <Heading>Sign Up</Heading>
      {error && <p>{error}</p>}
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        mb={4}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        mb={4}
      />
      <Button onClick={handleSignUp}>Sign Up</Button>
      <Button onClick={() => navigate('/login')}>Login</Button>
    </Box>
  );
};

export default SignUp;
