import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../Handling/Spinner'
import { Flex, Stack, Text, Image, Box, Wrap, Heading, Grid,
  GridItem, Container } from '@chakra-ui/react';
import Attend from './Buttons/Attend';
import Unattend from './Buttons/Unattend';
import moment from 'moment';
import { Link as RouterLink } from 'react-router-dom';
import UsersApiService from '../../services/UsersApiService';



export default function EventDetails ({events, signUpDown,user}) {

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

  return (
    <Flex minH={'100vh'}  justify={'center'} bg={'custom.100'}
    bgImage="url('https://res.cloudinary.com/dujun1hoe/image/upload/v1615228154/event-s/gradient-background-26046-26731-hd-wallpapers.jpg_cenrqe.png')"  
    bgSize="100% 50%"
    backgroundRepeat="no-repeat"
    // bgGradient="linear(to-t, gray.50,custom.400)"
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
      {/* <Wrap > */}
      <Grid
          borderRadius="md"
          h="300px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(10, 2fr)"
          // gap={4}
        >
          <GridItem  rowSpan={3} colSpan={6}>
            {/* <Box w={'100%'} h={'100%'} boxSize="lg"> */}
               <Image w={'100%'} h={'100%'} borderRadius="md" src={event.photo} alt="" />
            {/* </Box> */}
          </GridItem>
           <GridItem borderRadius="md" justifyContent={'center'} rowSpan={3} colSpan={4}>
             <Flex flexDirection={'column'} align={'center'} justify={'center'}>
              <Heading fontSize="3xl" m={3} >{event.name}</Heading>
              <Text fontSize="xl" >LOCATION {event.location}</Text>
             </Flex>
          </GridItem>
          {/*<GridItem boxShadow={'md'} borderRadius="md" colSpan={2} bg={'custom.300'}>
            <Text fontSize="2xl" p={3} align={'center'}>DATE {moment(event.date).format("MMM Do YYYY")}</Text>
            <Text fontSize="xl" p={3} align={'center'} >Duration {event.duration}</Text>
          </GridItem>
          <GridItem boxShadow={'md'} borderRadius="md" colSpan={2} bg={'custom.100'}>
            <Text fontSize="2xl" p={3} align={'center'}>TYPE OF EVENT {event.type} </Text>
          </GridItem>
          <GridItem boxShadow={'md'} borderRadius="md" colSpan={2} bg={'custom.100'}>
            <Text fontSize="2xl" p={3} align={'center'}>AMOUNT ATTENDING {event.attendees}</Text>
          </GridItem> */}
        </Grid>
      <Box>
        {/* <Image borderRadius="md" src={event.photo} alt="" /> */}
        <Heading m={3} >{event.name}</Heading>
      </Box>
      {/* </Wrap> */}
      <Box p={4}>
      <Stack spacing={8}>
        <Box p={4}>
          <Container align={'center'}>
            <Text>{event.description}</Text>
          </Container>
        </Box>
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
    </Box>
    </Box>
    }
  </Flex>
  )
}






{/* <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
{
  !event ?
  <Spinner />
  :
  <Box w={'60%'} minW={'60%'} maxW={'60%'} bg={'gray.100'} m={4}  >
  <Box>
    <Image borderRadius="md" src={event.photo} alt="" />
    <Heading mt={3} align={'center'}>{event.name}</Heading>
  </Box>
  <Box p={4}>
  <Stack spacing={8}>
  <Grid
      borderRadius="md"
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem boxShadow={'md'} borderRadius="md" rowSpan={2} colSpan={1} bg={'custom.300'}>
      <Text fontSize="4xl" p={3} align={'center'}>EVENT LIMIT {event.limit}</Text>
      </GridItem>
      <GridItem boxShadow={'md'} borderRadius="md" colSpan={2} bg={'custom.100'}>
        <Text fontSize="3xl" p={3} align={'center'}>LOCATION {event.location}</Text>
      </GridItem>
      <GridItem boxShadow={'md'} borderRadius="md" colSpan={2} bg={'custom.300'}>
        <Text fontSize="2xl" p={3} align={'center'}>DATE {moment(event.date).format("MMM Do YYYY")}</Text>
        <Text fontSize="xl" p={3} align={'center'} >Duration {event.duration}</Text>
      </GridItem>
      <GridItem boxShadow={'md'} borderRadius="md" colSpan={2} bg={'custom.100'}>
        <Text fontSize="2xl" p={3} align={'center'}>TYPE OF EVENT {event.type} </Text>
      </GridItem>
      <GridItem boxShadow={'md'} borderRadius="md" colSpan={2} bg={'custom.100'}>
        <Text fontSize="2xl" p={3} align={'center'}>AMOUNT ATTENDING {event.attendees}</Text>
      </GridItem>
    </Grid>
    <Box p={4}>
      <Container align={'center'}>
        <Text>{event.description}</Text>
      </Container>
    </Box>
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
</Box>
</Box>
}
</Flex> */}