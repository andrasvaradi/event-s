import React from 'react';
import EventCard from './EventCard';
import { Wrap } from "@chakra-ui/react"


export default function EventList ({value}) {
  // console.log(value)
  return (
  <Wrap w={'100%'} marginTop={5} align="start">
    {
    value.filter(event => event.date > new Date().toISOString())
    .map(event => <EventCard value={event} key={event._id}/>)
    }
  </Wrap>
  )
}


