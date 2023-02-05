"use client"
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function About() {
  return (
    <>

        <Features />
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis porttitor magna in sagittis. Sed ligula orci, dictum nec nibh in, malesuada aliquam mauris. 
        Curabitur purus orci, elementum sed enim ac, maximus dapibus metus. Nulla vitae urna vitae mi bibendum porttitor at malesuada velit. Donec eget sodales sapien, eget iaculis sem. 
        Aliquam purus sapien, varius suscipit tincidunt sed, tempor a magna. Pellentesque felis nisi, vestibulum nec libero at, auctor ultricies nunc. 
        Praesent elit purus, imperdiet vel sodales eu, venenatis nec lacus. Suspendisse sapien lacus, ultrices in turpis ac, dictum imperdiet turpis. In vitae euismod turpis, vel viverra risus.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          
          mb={2}
        />

        <Text fontWeight={600}>Paul Vereline</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          President of Pips with Paul
        </Text>
      </Box>
    </Stack>
    <Footer />
    </>
  );
}