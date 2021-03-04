/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import UsersApiService from '../../services/UsersApiService';
import {
  Flex,
  Box,
  Text,
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
      console.log(userInfo)
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
      <Text>Hello {user.firstName} {user.lastName}</Text>
      <Text>You are a {user.host ? 'host' : 'guest'}</Text>
      {/* <Text>Hello {state.firstName} {state.lastName}</Text>
      <Text>You are a {state.host ? 'host' : 'guest'}</Text> */}
      {/* <Text>Your events: {state.events.length ? state.events.length : 0}</Text> */}
      {/* {
        state.events.length ?
        //  <EventList value={state.events} />
        <Text>YES</Text>
        :
        <Text>You haven't got any events yet.</Text>
      } */}
    </Flex>
  )
}
