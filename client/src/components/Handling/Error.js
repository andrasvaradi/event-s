import React from 'react';
import { Link } from 'react-router-dom';
import { VStack, useBreakpointValue, Button, Text } from '@chakra-ui/react';

const NotFound = () => (

  <VStack
    w={'full'}
    h={'100vh'}
    justify={'center'}
    px={useBreakpointValue({ base: 4, md: 8 })}
    bgGradient={'linear(to-r, blackAlpha.900, transparent)'}
    >
    <Text
      color={'white'}
      fontWeight={900}
      >
      404 - Requested Page Not Found!
    </Text>
    <Link to="/">
      <Button
        bg={'blue.400'}
        rounded={'full'}
        color={'white'}
        _hover={{ bg: 'blue.500' }}>
        Back Home
      </Button>
    </Link>
  </VStack>
);

export default NotFound;