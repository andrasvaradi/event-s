import React from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../Handling/Spinner'
import { Flex, Stack, Text,} from '@chakra-ui/react';
import Attend from './Buttons/Attend';
import Unattend from './Buttons/Unattend';
import { Link as RouterLink } from 'react-router-dom';



export default function EventDetails ({events, signUpDown,user}) {
  console.log('Eventdetail', user)
  let { id } = useParams();

  const event = events.find(el => el._id === id)

  const handleSubmit = (e) => {
    e.preventDefault()
    signUpDown('up', id);
  };
  const unattend = (e) => {
    e.preventDefault()
    signUpDown('down', id);
  };
  // console.log('Eventdetails:', event)
  function renderButton () {
    // console.log(user)
    if (!user.eventList.some(el => el._id === id)) {
      console.log('why!!!!')
      return (
        <Attend handleSubmit={handleSubmit} />
      )
    } else {
      return (
        <Unattend unattend={unattend}/>
      )
    }
  }

  // const isit = !user.eventList.some(el => el._id === id)
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
      <Text>Amount of people: {event.attendees}</Text>
      <Text>{event.photo}</Text>
      <Text>{event.photo}</Text>
      <Stack spacing={4}>
      {
        !Object.keys(user).length ?
        console.log('not logged in') :
        (
            !user.eventList.some(el => el._id === id) ? (

                <Attend handleSubmit={handleSubmit} />

            ) : (
              <Unattend unattend={unattend}/>
            )

        )
      }
      {/* {
        !Object.keys(user).length ?
        console.log('not loggen in') :
        renderButton()
      } */}
      </Stack>
    </Stack>
    }
  </Flex>
  )
}