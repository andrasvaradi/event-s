/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(http://3rf8l24fn89f1vqe8a2o4a3f-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/hanny-naibaho-aWXVxy8BSzc-unsplash-1024x683.jpg)'
      }
      backgroundSize={'cover'}
      // backgroundPosition={'center center'}
      >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.900, transparent)'}
        >
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          {/* <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            EVENT-S
          </Text> */}
          <Image src={'logo-white.png'}  alt=""></Image>
          <Text
            color={'white'}
            fontWeight={300}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
            A platform to bring people with similar interest together. Check out what's happening near to you.
          </Text>
          <Stack direction={'row'}>
            <RouterLink to='/events'>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
            </RouterLink>
            {/* <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default Home;