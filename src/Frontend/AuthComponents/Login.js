// src/components/Login.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, Heading, Input, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box p={4}>
      <Heading>Login</Heading>
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
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={() => navigate('/signup')}>Sign Up</Button>
    </Box>
  );
};

export default Login;
