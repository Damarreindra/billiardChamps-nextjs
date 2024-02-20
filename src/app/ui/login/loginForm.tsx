"use client"
import React, { useState } from 'react';
import { Flex, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { app } from '@/app/lib/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth(app)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful', response);
      revalidatePath('/home')
      router.push('/home'); 
    } catch (error:any) {
      setError(error.message);
    }
  };

  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        p={{ base: '4', md: '8' }}
        bg="rgba(255, 255, 255, 0.1)"
        boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
        border="1px solid rgba(255, 255, 255, 0.18)"
        borderRadius="12px"
        maxW={{ base: '90%', md: 'none' }}
        maxH={{ base: '90%', md: 'none' }}
      >
        <Image src="/images/logo.png" width={500} height={500} alt="Logo" />
        <Text textAlign="center" fontSize="x-large" fontWeight="bold" mt={{ base: '4', md: '0' }}>
          Login
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl p={5} width="100%">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
        {error && <Text color="red.500">{error}</Text>}
      </Flex>
    </Flex>
  );
};

export default LoginForm;
