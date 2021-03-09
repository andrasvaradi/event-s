/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Home.css';
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
import sample from './intro.mp4'
// const sample = 'https://www.w3schools.com/tags/movie.mp4'
// const sample = './intro.mp4'

function Home() {
  
  return (
        <div className="Container" >
          <video autoPlay="autoplay" loop="loop" muted className="Video" >
              <source src={sample} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
            <Flex
            className="Content"
            w={'full'}
            // h={'100vh'}
            // position="absolute"
            // t={0}
            >
             <VStack className="SubContent"
              w={'full'}
              justify={'center'}
              px={useBreakpointValue({ base: 4, md: 8 })}
              bg={'transparent'}
              >
              <Stack maxW={'2xl'} align={'center'} spacing={6}>
                <Image src={'logo-white.png'}  alt=""></Image>
                <Text
                  color={'black'}
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
                </Stack>
              </Stack>
            </VStack>
           </Flex>
           </div>
  );
}

export default Home;