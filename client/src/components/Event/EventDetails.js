import React from 'react'
import { Flex, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Spinner from '../Handling/Spinner'


export default function EventDetails ({events}) {

  let { id } = useParams();
  const event = events.find(el => el._id === id)

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