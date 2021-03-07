/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import UsersApiService from '../../services/UsersApiService';
import { Link as RouterLink, Route } from 'react-router-dom';
import EventList from '../Event/EventList';
import {
  Flex,
  Box,
  Text,
  Button
} from '@chakra-ui/react';

const initialState = {
  firstName: '',
  lastName: '',
  host: null,
  about: '',
  location: '',
  events: []
};
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
    <Flex minH={'100vh'} align={'center'} bg={'gray.50'} justify={'center'} flexDirection={'column'}>
      {
        user.firstName ?
        <>
        <Text>Hello {user.firstName} {user.lastName}</Text>
        <Text>You are a {user.host ? 'host' : 'guest'}</Text>
        <Text>Your events: {user.eventList.length ? user.eventList.length : 0}</Text>
        {
          user.eventList.length ?
          <>
           <EventList value={user.eventList} />
          </>
          :
          <Text>You haven't got any events yet.</Text>
        }
        </>
        :
        <RouterLink to='/login'>
          <Button>You need to log in first</Button>
        </RouterLink>
      }
    </Flex>
  )
}
