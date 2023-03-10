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
import usePremiumStatus from '@/stripe/usePremiumStatus';
  
  export default function HeroSection() {
    const router = useRouter();
    const [user] = useState(auth);
    const userIsPremium = usePremiumStatus(auth);

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
           <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={"5rem"}
              textShadow={'#05fd2b 1px 0 7px'}>
              Pips With Paul
            </Text>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={"2.5rem"}
              textShadow={'#05fd2b 1px 0 7px'}>
              Daily signals, video course work, mentoring, and more
            </Text>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={"1.5rem"}
              textShadow={'#05fd2b 1px 0 7px'}>
              Find out how we can help you
            </Text>
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