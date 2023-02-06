"use client"
import Footer from '@/components/Footer';
import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
  
  const freeOptions = [
    { id: 1, desc: 'Free starter videos' },
    { id: 2, desc: 'Blog access' },
    { id: 3, desc: '1 free promotional video' },
  ];
  const firstOptions = [
    { id: 1, desc: 'Daily signals' },
    { id: 2, desc: 'Access to Telegram chatroom' },
    { id: 3, desc: 'Personalize 5 signal callouts' },
  ];
  const secondOptions = [
    { id: 1, desc: 'Access to exclusive updates and features' },
    { id: 2, desc: 'Video coursework to teach Forex trading' },
    { id: 3, desc: '1 on 1 mentoring sessions weekly' },
  ];
  const thirdOptions = [
    { id: 1, desc: 'Everything listed in above packages' },
    { id: 2, desc: 'Unlimited video coursework to teach Forex trading' },
    { id: 3, desc: '1 on 1 mentoring sessions twice a week' },
  ];
  interface PackageTierProps {
    title: string;
    options: Array<{ id: number; desc: string }>;
    typePlan: string;
    checked?: boolean;
  }
  const PackageTier = ({
    title,
    options,
    typePlan,
    checked = false,
  }: PackageTierProps) => {
    const colorTextLight = checked ? 'white' : 'green.600';
    const bgColorLight = checked ? 'green.400' : 'gray.300';
  
    const colorTextDark = checked ? 'white' : 'green.500';
    const bgColorDark = checked ? 'green.400' : 'gray.300';
  
    return (
      <Stack
        p={3}
        py={3}
        justifyContent={{
          base: 'flex-start',
          md: 'space-around',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{ md: 'center' }}>
        <Heading size={'md'}>{title}</Heading>
        <List spacing={3} textAlign="start">
          {options.map((desc, id) => (
            <ListItem key={desc.id}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {desc.desc}
            </ListItem>
          ))}
        </List>
        <Heading size={'xl'}>{typePlan}</Heading>
        <Stack>
          <Button
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
            Get Started
          </Button>
        </Stack>
      </Stack>
    );
  };
  const Pricing = () => {
    return (
        <>
      <Box py={6} px={5}>
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <Stack
            p={5}
            alignItems={'center'}
            justifyContent={{
              base: 'flex-start',
              md: 'space-around',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}>
            <Stack
              width={{
                base: '100%',
                md: '40%',
              }}
              textAlign={'center'}>
              <Heading size={'lg'}>
                The Right Plan for <Text color="green.400">Your Needs</Text>
              </Heading>
            </Stack>
            <Stack
              width={{
                base: '100%',
                md: '60%',
              }}>
              <Text textAlign={'center'}>
                At Pips with Paul, we try and meet everyone's needs. You can find the plan that is right for you while maintaining your budget!
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <PackageTier title={'Starter'} typePlan="Free" options={freeOptions} />
          <Divider />
          <PackageTier
            title={'Lorem Plus'}
            checked={true}
            typePlan="$32.00"
            options={firstOptions}
          />
          <Divider />
          <PackageTier title={'Lorem Pro'} typePlan="$50.00" options={secondOptions} />
          <Divider />
          <PackageTier title={'Lorem Elite'} typePlan="$100.00" options={thirdOptions} />
        </Stack>
      </Box>
      <Footer />
      </>
    );
  };
  
  export default Pricing;