import './Events.css'
import React, {useState} from 'react'
import { Box } from '@chakra-ui/react';
import EventList from '../../components/Event/EventList'
import SearchBar from '../SearchBar'
import SortBar from '../SortBar'
import Map from '../map/Map';

export default function Events ({ value }) {
  const [filteredEvents, setFilteredEvents] = useState(value)
  const events = value
  return (
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