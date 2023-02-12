"use client"
import { auth } from '@/firebase/firebase';
import { GoogleAuthProvider, reload, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { createCheckoutSession } from '@/stripe/createCheckoutSession';
  
  const provider = new GoogleAuthProvider();
  const loginWithGoogle = async () => {
    try {
      const Router = useRouter();
      const user = await signInWithPopup(auth, provider);
      Router.push("/");
      firebase.firestore().collection("users").doc(user.user.uid).set({
        uid: user.user.uid,
        email: user.user.email,
        name: user.user.displayName,
        provider: user.user.providerData[0].providerId,
        photoUrl: user.user.photoURL,
      });
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
        window.location.reload();
        alert(error)
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
              to enjoy all of our cool <Link onClick={() => router.push('/')} color={'green.400'}>features</Link> ✌️
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
              <Button
              onClick={() => {createCheckoutSession(user.uid)}}>
                Upgrade to VIP package
              </Button>
            </Stack>
          </Box>
          
        </Stack>
        
      </Flex>
      <Footer />
      </>
    );
  }