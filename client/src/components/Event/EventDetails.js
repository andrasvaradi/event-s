import React from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../Handling/Spinner'
import { Flex, Stack, Text, Image, Box, Wrap } from '@chakra-ui/react';
import Attend from './Buttons/Attend';
import Unattend from './Buttons/Unattend';
import moment from 'moment';



export default function EventDetails ({events, signUpDown,user}) {

  let { id } = useParams();
  const event = events.find(el => el._id === id)
  console.log(event)
  const handleSubmit = (e) => {
    e.preventDefault()
    signUpDown('up', id);
  };
  const unattend = (e) => {
    e.preventDefault()
    signUpDown('down', id);
  };

  return (
    <Flex minH={'100vh'}  justify={'center'} bg={'custom.100'}
    bgImage="url('https://res.cloudinary.com/dujun1hoe/image/upload/v1615228154/event-s/gradient-background-26046-26731-hd-wallpapers.jpg_cenrqe.png')"  
    bgSize="100% 50%"
    backgroundRepeat="no-repeat"
    >

    {
      !event ?
      <Spinner />
      :
      <Box
        w={'60%'}
        minW={'60%'}
        maxW={'60%'}
        bg={'gray.50'}
        marginTop={50}
        borderRadius="md"
        boxShadow={'md'}
        m={20}
        >
          <Wrap w={'100%'} align={'center'} p={1} >
            <Box w={'50%'}  minW={'300px'}>
               <Image 
               borderRadius="md"
               boxShadow="md"
               src={event.photo} alt="" />
            </Box>
            <Stack w={'50%'} align={'center'} >

             <Flex flexDirection={'column'} justify={'center'}  >
              <Text fontSize="3xl" m={3} >{event.name}</Text>
              <Text align={'center'} fontSize="xl" >{event.location}</Text>
             </Flex>
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
            </Wrap>
      <Box p={4}>
      <Stack w={'100%'} h={'60vh'} direction={{ base: 'column', md: 'row' }} >

          <Flex h={'60%'} flex={1} pl={4} align={'end'} justifyContent={"space-evenly"} flexDirection={'column'} >
            <Wrap  align={'center'} >
              <Image  borderRadius="md" src={'https://res.cloudinary.com/dujun1hoe/image/upload/v1615296945/event-s/icons/calendar-2_hmjf1m.png'} alt="" />
              <Text justify={'center'} >{moment(event.date).format("MMM Do YY")}</Text>
            </Wrap>
            <Wrap align={'center'}>
              <Image  borderRadius="md" src={'https://res.cloudinary.com/dujun1hoe/image/upload/v1615296946/event-s/icons/alarm-2_csdsdf.png'} alt="" />
              <Text>{event.duration}</Text>
            </Wrap>
            <Wrap align={'center'}>
              <Image  borderRadius="md" src={'https://res.cloudinary.com/dujun1hoe/image/upload/v1615297028/event-s/icons/announcement_pr7pea.png'} alt="" />
              <Text>{event.limit}</Text>
            </Wrap>
            <Wrap align={'center'}>
              <Image  borderRadius="md" src={'https://res.cloudinary.com/dujun1hoe/image/upload/v1615296945/event-s/icons/event_h6dtmv.png'} alt="" />
              <Text>{event.type}</Text>
            </Wrap>
            <Wrap align={'center'}>
              <Image  borderRadius="md" src={'https://res.cloudinary.com/dujun1hoe/image/upload/v1615296945/event-s/icons/done_r4quc3.png'} alt="" />
              <Text>{event.attendees}</Text>
            </Wrap>
          </Flex>
          <Flex h={'100%'} flex={2} p={4} alignContent={'center'}  flexDirection={'column'} >
            <Text fontWeight="bold" align={'center'}>About this event</Text>
            <Text mt={10} align={'center'} >{event.description}</Text>
          </Flex>

      <Stack spacing={4}>
      </Stack>
    </Stack>
    </Box>
    </Box>
    }
  </Flex>
  )
}









