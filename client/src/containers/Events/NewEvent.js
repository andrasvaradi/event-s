/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Flex,
  Text,
  Stack,
  Box,
  Wrap,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  WrapItem,
  Textarea,
  Button
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const EventObject = {
  name: '',
  limit: 1,
  location: '',
  type: '',
  description: '',
  date: '',
  duration: 1,
  photo: 'https://source.unsplash.com/random/300x300'
}


export default function NewEvent({createEvent, user}) {
  const [event, setEvent] = useState(EventObject)

  let handleInputChange = (e) => {
    console.log(e.target)
    let { name, value } = e.target
    setEvent({ ...event, [name]: value })
    console.log(event)
  }
  function handleSubmit (e) {
    e.preventDefault();
    if(event.date === '' || event.date < new Date().toISOString()) {
      alert('Please select a date in the future')
    } else if (event.name === '' || event.location === '') {
      alert('Please fill out all the required fields')
    }
    console.log('hello')
    createEvent(event)
    setEvent(EventObject)
  }
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
      <Box rounded={'lg'} bg={'white'} boxShadow={'base'} p={8} minH={'80vh'} minW={'40vh'} w={'80%'} >
        { user.host ?
        <>
        <Text mb={16} fontSize={'4xl'} align={'center'}>Create a new event</Text>

        <Flex justify={'center'} justifyContent={'space-between'} alignContent={'center'} wrap={'wrap'}>


          <FormControl id="name" >
            <FormLabel>Name of event</FormLabel>
            <Input value={event.name} name="name" onChange={handleInputChange} id="first_name" placeholder="Type something..." />
          </FormControl>


          <FormControl id="limit" >
            <FormLabel>Limit of attendees</FormLabel>
            <NumberInput
              min={1}
              max={99999}
              clampValueOnBlur={false}
              allowMouseWheel
            >
              <NumberInputField
              value={event.limit}
              name="limit"
              onChange={handleInputChange}
              />
              {/* <NumberInputStepper 
               value={event.limit}
                name="limit"
                onChange={handleInputChange}
              >
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper> */}
            </NumberInput>
          </FormControl>

          <FormControl id="location"  >
            <FormLabel>Location</FormLabel>
            <Input
              id="location"
              placeholder="Type something..."
              value={event.location}
              name="location"
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="type_of_event" >
            <FormLabel>Event type</FormLabel>
            <Select
              placeholder="Select..."
              value={event.type}
              name="type"
              onChange={handleInputChange}
            >
              <option>Food</option>
              <option>Music</option>
              <option>Sport</option>
              <option>Leisure</option>
              <option>Outdoor</option>
              <option>Other</option>
            </Select>
          </FormControl>

          <FormControl id="duration" >
            <FormLabel>Duration (in hours)</FormLabel>
            <NumberInput
              defaultValue={1}
              min={1}
              max={24}
              clampValueOnBlur={false}
              allowMouseWheel
            >
              <NumberInputField
                value={event.duration}
                name="duration"
                onChange={handleInputChange}
              />
              {/* <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper> */}
            </NumberInput>
          </FormControl>
        </Flex>
        <Box>
          <Text mb="8px">Description:</Text>
          <Textarea
            placeholder="Describe your event"
            size="sm"
            value={event.description}
            name="description"
            onChange={handleInputChange}
          />
        </Box>
        <FormControl mt={4} mb={4} >
          <InputGroup>
            <FormLabel>Date</FormLabel>
            <form >
              <input
                type="datetime-local"
                value={event.date}
                name="date"
                onChange={handleInputChange}
              />
            </form>
            <input
              type="file"
              name="file"
            />
          </InputGroup>
        </FormControl>
        <Stack direction="row" spacing={4} align="center">
          <RouterLink to='/events'>
            <Button
              align={'center'}
              bg={'blue.400'}
              color={'white'}
              type="submit"
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleSubmit}
              >
              Create
            </Button>
          </RouterLink>
        </Stack>
        </>
        :
        <Text align={'center'}>Only hosts can create new event</Text>
      }
      </Box>
    </Flex>
  )
}
