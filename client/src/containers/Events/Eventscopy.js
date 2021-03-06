import './Events.css'
import React, {useState} from 'react'
import { Box, Flex, Text } from '@chakra-ui/react';
import EventList from '../../components/Event/EventList'
import SearchBar from '../SearchBar'
import SortBar from '../SortBar'
import Map from '../map/Map';
import Maptwo from '../map/Maptwo';



export default function Events ({ value }) {
  const [filteredEvents, setFilteredEvents] = useState(value)
  const events = value
  // console.log(filteredEvents)
  return (

      //   <div className='container'>
      //   <div className='main-dashboard-container'>
      //     <Text>Hello</Text>
      //   </div>
      //   <div className='main-map-container'>
      //     <Map/>
      //   </div>
      // </div>
    <div>
    <Box>
      <SearchBar events={events} setFilteredEvents={setFilteredEvents} />
      <SortBar events={events} setFilteredEvents={setFilteredEvents} />
      <EventList value={filteredEvents} />
    </Box>
      <div>
        <div className='main-map-container'>
          <Map/>
        </div>
      </div>
    </div>
  )
}