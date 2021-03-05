import React, {useState} from 'react'
import { Box, Flex } from '@chakra-ui/react';
import EventList from '../../components/Event/EventList'
import SearchBar from '../SearchBar'
import SortBar from '../SortBar'



export default function Events ({ value }) {
  const [filteredEvents, setFilteredEvents] = useState(value)
  const events = value
  // console.log(filteredEvents)
  return (
    <Box minH={'100vh'} >
      <SearchBar events={events} setFilteredEvents={setFilteredEvents} />
      <SortBar events={events} setFilteredEvents={setFilteredEvents} />
      <Flex>
        <EventList value={filteredEvents} />
      </Flex>
    </Box>
  )
}