import React, {useState} from 'react'
import { Box, Flex } from '@chakra-ui/react';
import EventList from '../../components/Event/EventList'
// import SearchBar from '../SearchBar/SearchBar';


export default function Events ({ value }) {
  const [events,setEvents] = useState(value)

  return (
    <Box minH={'100vh'} >
      {/* <SearchBar /> */}
      <Flex>
        <EventList value={events} />

      </Flex>
    </Box>
  )
}