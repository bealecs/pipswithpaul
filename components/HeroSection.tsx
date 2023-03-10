import { auth } from '@/firebase/firebase';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
  
  export default function HeroSection() {
    const router = useRouter();
    const [user] = useState(auth);
    return (
      <>
      <Flex
        w={'full'}
        h={'85vh'}
        backgroundImage={
          'url(https://finchannel.com/wp-content/uploads/2022/03/1111.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            {!user && <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              textShadow={'#05fd2b 1px 0 7px'}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Daily signals, video course work, mentoring, and more - find out how we can help you
            </Text>}
            {user && <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              textShadow={'#05fd2b 1px 0 7px'}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Welcome back, {user.currentUser.displayName}
            </Text>}
            <Stack direction={'row'}>
              {!user && <Button
                bg={'green.400'}
                rounded={'full'}
                color={'white'}
                onClick={() => router.push("/signup")}
                _hover={{ bg: 'green.500' }}>
                Sign up
              </Button>}
              {!user && <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                onClick={() => router.push("/signin")}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Sign in
              </Button>}
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      </>
    );
  }