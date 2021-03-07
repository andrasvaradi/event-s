import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../Handling/Spinner'
import { Flex, Stack, Text,} from '@chakra-ui/react';
import Attend from './Buttons/Attend';
import Unattend from './Buttons/Unattend';
import { Link as RouterLink } from 'react-router-dom';
import UsersApiService from '../../services/UsersApiService';



export default function EventDetails ({events, signUpDown,user}) {

  let { id } = useParams();
  // const [ownerdeets, setOwnerdeets] = useState('')

  const event = events.find(el => el._id === id)

  const handleSubmit = (e) => {
    e.preventDefault()
    signUpDown('up', id);
  };
  const unattend = (e) => {
    e.preventDefault()
    signUpDown('down', id);
  };
  // UsersApiService.getHostDetails(event.owner)
  // .then(res => console.log(res))
  // .then(details => setOwnerdeets(details))

  // useEffect(() => {
  //   UsersApiService.getHostDetails(event.owner)
  //   .then(res => console.log(res))
  //   .then(details => setOwnerdeets(details))
  // }, [])
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
        {/* {
          ownerdeets.firstName ? (
          <RouterLink to={`/events/${ownerDetails._id}`}>
            <Text>{ownerDetails.firstName}</Text>
          </RouterLink>
            ) : (
          <Spinner />
            )
        } */}
      <Stack spacing={4}>
      {
        !Object.keys(user).length || user.host ?
        null :
        (
          !user.eventList.some(el => el._id === id) ? (
            <Attend handleSubmit={handleSubmit} />
            ) : (
              <Unattend unattend={unattend}/>
              )
              )
            }
      </Stack>
    </Stack>
    }
  </Flex>
  )
}