"use client"
import { auth } from '@/firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

  const provider = new GoogleAuthProvider();
  const login = async() => {
    const result = await signInWithPopup(auth, provider);
    
  }

  export default function SignInPage() {

    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

    if (loading) {
      return <div>Loading...</div>
    } else if(user) {
      router.push("/");
      return <div>Loading...</div>
    } else if(error) {
      router.push("/");
      alert("There was an error processing your request");
    } else if (!user) {
        router.push("/signin");
    }

    return (
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
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'green.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              <Button 
                onClick={login}>
                Sign in with Google
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }