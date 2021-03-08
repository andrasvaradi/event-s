/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import UsersApiService from '../../services/UsersApiService';
import { Link as RouterLink, Route } from 'react-router-dom';
import EventList from '../Event/EventList';
import {
  Flex,
  Box,
  Text,
  Button, Image, Heading, Wrap,AspectRatio
} from '@chakra-ui/react';
// import { motion } from "framer-motion"

export default function Profile({user, setUser}) {

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await UsersApiService.profile();
      if (userInfo) {
        setUser(userInfo)
      } else {
        console.log('No user info found 😞');
      }
    };
    getProfile();
  }, [setUser]);


  return (
    <Box minH={'100vh'} bg={'gray.100'} borderRadius="md" justify={'center'} p={'5%'} m={'5%'}>
      {
        user.firstName ?
        <>
        {/* <motion.div
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}

          > */}
        <Wrap w={'100%'} justify={'center'} spacing="30px" justifyContent={'space-around'}>
        <Box boxSize="sm" >
          <Image alignSelf={'center'} boxShadow={'md'} borderRadius="md" src={user.photo} alt="" w={'40vw'}/>
        </Box>
          <Flex  w={'40vh'} alignItems={'center'} flexDirection={'column'}>
            <Heading align={'center'} >Welcome {user.firstName} {user.lastName}</Heading>
            <Text m={5}>User type: {user.host ? 'Host' : 'Guest'}</Text>
            <Text>Number of events: {user.eventList.length ? user.eventList.length : 0}</Text>
          </Flex>
          </Wrap>
        {/* </motion.div> */}
        {
          user.eventList.length ?
          <>
            <Text align={'center'} justify={'center'}>Current events:</Text>
            <Wrap justify={'center'} h={'100%'} p={4} marginTop={'5%'} w={'100%'} justifyContent={'space-around'}  borderRadius="md" borderWidth={5} >
            {user.eventList.map(el =>
              <RouterLink to={`/events/${el._id}`} >
                <Box borderRadius="md" bg={'gray.300'} h={'100%'}>
                  <AspectRatio maxW="400px" ratio={4 / 3}>
                  <Image  borderRadius="md" src={el.photo} alt="naruto" objectFit="cover" />
                </AspectRatio>
                  <Text m={4}>{el.name}</Text>
                </Box>
              </RouterLink>
            )}
            </Wrap>
          </>
          :
          <Text m={10} align={'center'} justify={'center'}>You haven't got any events yet. {user.host ? `It's the perfect time to create one!` : `Why don't you have a look around and sign up to some?`}</Text>
        }
        </>
        :
        <RouterLink to='/login'>
          <Button>You need to log in first</Button>
        </RouterLink>
      }
    </Box>
  )
}
