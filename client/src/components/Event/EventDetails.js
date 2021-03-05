import React from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../Handling/Spinner'
import {
  Flex, Stack, Text, Button, Popover, PopoverTrigger, Portal, PopoverContent,
  PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, ButtonGroup,
} from '@chakra-ui/react';
import EventsApiService from '../../services/EventsApiService';


export default function EventDetails ({events,user}) {

  let { id } = useParams();
  const event = events.find(el => el._id === id)
  let signedUp = user.eventList.find(el => el._id === id);
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(id)
    const res = await EventsApiService.signUp(id);
    if (res.error) {
      alert(`${res.message}`);
    }
  };


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
      {
        !signedUp ?
      (<Popover>
        <PopoverTrigger>
          <Button w={'100%'} >Attend</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Please confirm!</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <ButtonGroup size="sm">
                  <Button variant="outline">Cancel</Button>
                  <Button onClick={handleSubmit} colorScheme="gray">Attend</Button>
                </ButtonGroup>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>)
        : (<Popover>
          <PopoverTrigger>
            <Button w={'100%'} >Unattend</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Please confirm!</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <ButtonGroup size="sm">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={handleSubmit} colorScheme="gray">Unattend</Button>
                  </ButtonGroup>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>)

      }
      </Stack>
    </Stack>
    }
  </Flex>
  )
}