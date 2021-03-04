import React, {useContext, useState, useEffect} from 'react'
import { Flex, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
// import EventsApiService from '../../services/EventsApiService';
import Spinner from '../Handling/Spinner'
import {EventsContext} from '../../EventsContext';


export default function EventDetails (props) {
  const [event, setEvent] = useState(null)
  const events = useContext(EventsContext);
  let { id } = useParams();

  useEffect(() => {
    let single = events.find(el => el._id === id)
    setEvent(single)
  }, [])
  console.log(event)
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
    {
      !event ?
      <Spinner />
      :
    <Stack spacing={8}>
      <Text>Hello</Text>
      <Text>{event.name}</Text>
      <Text>{event.limit}</Text>
      <Text>{event.location}</Text>
      <Text>{event.type}</Text>
      <Text>{event.description}</Text>
      <Text>{event.duration}</Text>
      <Text>{event.date}</Text>
      <Text>{event.attendees}</Text>
      <Text>{event.photo}</Text>
      <Stack spacing={4}>
      </Stack>
    </Stack>
    }
  </Flex>
  )
}