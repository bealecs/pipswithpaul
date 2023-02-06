"use client"
import { auth } from '@/firebase/firebase';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Footer from '@/components/Footer';
  
  const provider = new GoogleAuthProvider();
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error);
    }
  }
  export default function SignInPage() {
    
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();    

    const loginWithCredientials = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          login,
          password
        );
        console.log(user);
        router.push("/");
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'green.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e) => {
                  setLogin(e.target.value)
                }} id="email" type="email" required/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={(e) => {
                  setPassword(e.target.value)
                }} id="password" type="password" required minLength={8} />
              </FormControl>
              
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link onClick={() => router.push('/forgot')} color={'green.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}
                  onClick={loginWithCredientials}>
                  Sign in
                </Button>
              </Stack>
              <Button 
                onClick={loginWithGoogle}>
                Sign in with Google
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
      </>
    );
  }