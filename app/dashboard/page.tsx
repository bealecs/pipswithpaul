"use client"
import { useState } from 'react';
import logo from '../../public/logo.jpg'
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import Image from 'next/image';

export default function Dashboard() {
  const [liked, setLiked] = useState(false);

  return (
   <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
   <div>
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 green', '6px 6px 0 cyan')}>
        <Box  borderBottom={'1px'} borderColor="black">
          <Image
            src={logo}
            alt='logo'
          />
        </Box>
        <Box p={4}>
          <Box
            bg="green"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              Easy
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Beginner Course
          </Heading>
          <Text color={'gray.500'} noOfLines={3}>
          In this course, we will cover the basics and get comfortable using MT4 decoy accounts.
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              Go to Course Work
            </Text>
            <BsArrowUpRight />
          </Flex>
          
        </HStack>
      </Box>
    </Center>
    </div>
    <div>
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 green', '6px 6px 0 cyan')}>
        <Box  borderBottom={'1px'} borderColor="black">
          <Image
            src={logo}
            alt='logo'
          />
        </Box>
        <Box p={4}>
          <Box
            bg="green"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              Medium
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Intermediate Course
          </Heading>
          <Text color={'gray.500'} noOfLines={4}>
            In this course, we will build on the fundamentals learned in the beginner course, and become confident making decisions on trades.
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              Go to Course Work
            </Text>
            <BsArrowUpRight />
          </Flex>
          
        </HStack>
      </Box>
    </Center>
    </div>
    <div>
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 green', '6px 6px 0 cyan')}>
        <Box  borderBottom={'1px'} borderColor="black">
          <Image
            src={logo}
            alt='logo'
          />
        </Box>
        <Box p={4}>
          <Box
            bg="green"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              Hard
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Advanced Course
          </Heading>
          <Text color={'gray.500'} noOfLines={3}>
            In this course, you will be advanced enough to start trading in the real markets.
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              Go to Course Work
            </Text>
            <BsArrowUpRight />
          </Flex>
          
        </HStack>
      </Box>
    </Center>
    </div>
    </div>
  );
}