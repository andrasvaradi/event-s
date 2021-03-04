import React from 'react';
import EventCard from './EventCard';
import { Wrap } from "@chakra-ui/react"


export default function EventList ({value}) {
  // console.log(value)
  return (
  <Wrap w={'60vh'} align="start">
    {
    value.filter(event => event.date > new Date().toISOString())
    .sort((a,b) => a.date > b.date ? 1 : -1)
    .map(event => <EventCard value={event} key={event._id}/>)
    }
  </Wrap>
  )
}


