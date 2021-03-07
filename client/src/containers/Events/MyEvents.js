import React from 'react'
import { Box, Flex,Text } from '@chakra-ui/react';
// import SearchBar from '../SearchBar/SearchBar';
import EventList from '../../components/Event/EventList';


export default function MyEvents ({user}) {
  console.log('My events: ', user)
  return (
    <Box minH={'100vh'} >
      {/* <SearchBar /> */}
      <Flex>
        <Text>Hello</Text>

        {
          user.eventList.length ?
          <>
           <EventList value={user.eventList} />
          </>
          :
          <Text>You haven't got any events yet.</Text>
        }
        {/* {
          user.eventList &&
          <Text>{user.eventList[0].limit}</Text>} */}
      </Flex>
    </Box>
  )
}