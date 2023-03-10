"use client"
import { ReactNode, useState } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { createCheckoutSession } from '@/stripe/createCheckoutSession';
import { createCheckoutSession2 } from '@/stripe/createCheckoutSession2';
import { createCheckoutSession3 } from '@/stripe/createCheckoutSession3';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {

  const Router = useRouter();
  const [user] = useAuthState(auth);

  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          We Have Options!
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Begin your journey of success. It starts here
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Signal Beater
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                20
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Daily signals
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Telegram chat room access
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Networking connections
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
            {user ? (
              <Button w="full" colorScheme="green" variant="outline" onClick={() => {createCheckoutSession3(user.uid)}}>
                Start Subscription
              </Button> ) : (
              <Button w="full" colorScheme="green" variant="outline" onClick={() => Router.push("/signup")}>
                Sign in to start Subscription
              </Button>)}
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('green.300', 'green.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Express Learner
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  50
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Video coursework designed for success
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Telegram chat room access
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Weekly tips and tricks videos 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
              {user ? (
              <Button w="full" colorScheme="green" variant="outline" onClick={() => {createCheckoutSession2(user.uid)}}>
                Start Subscription
              </Button> ) : (
              <Button w="full" colorScheme="green" variant="outline" onClick={() => Router.push("/signup")}>
                Sign in to start Subscription
              </Button>)}
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              VIP Member
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                100
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Everything listed in previous plans
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                1 on 1 Mentor Sessions with top traders weekly
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Telegram *Exclusive* chatroom access
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              {user && (
              <Button w="full" colorScheme="green" variant="outline" onClick={() => {
                alert("Please wait a few seconds while you are redirected...")
                createCheckoutSession(user.uid)}}>
                Start Subscription
              </Button> ) } {!user && (
              <Button w="full" colorScheme="green" variant="outline" onClick={() => Router.push("/signup")}>
                Sign in to start Subscription
              </Button>)}
              
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}