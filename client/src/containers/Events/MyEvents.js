import React from 'react'
import { Box, Flex,Text } from '@chakra-ui/react';
// import SearchBar from '../SearchBar/SearchBar';


export default function MyEvents ({user}) {

  return (
    <Box minH={'100vh'} >
      {/* <SearchBar /> */}
      <Flex>
        {/* <EventList value={events} /> */}
        {
          user.eventList &&
          <Text>{user.eventList[0].limit}</Text>}
      </Flex>
    </Box>
  )
}