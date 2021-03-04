/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import UsersApiService from '../../services/UsersApiService';
import {
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import EventList from '../Event/EventList';
import Spinner from '../Handling/Spinner';

const initialState = {
  firstName: '',
  lastName: '',
  host: null,
  about: '',
  location: '',
  events: []
};
export default function Profile() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await UsersApiService.profile();
      console.log(userInfo)
      if (userInfo) {
        // const { firstName, lastName } = userInfo;
        setState(userInfo)
        // const { firstName, lastName } = userInfo;
        // setState((prevState) => {
        //   return {
        //     ...prevState,
        //     firstName,
        //     lastName,
        //   };
        // });
      } else {
        console.log('No user info found 😞');
      }
    };
    getProfile();
  }, []);


  return (
    <Flex minH={'100vh'} align={'center'} bg={'gray.50'} justify={'center'} flexDirection={'column'}>
      <Text>Hello {state.firstName} {state.lastName}</Text>
      <Text>You are a {state.host ? 'host' : 'guest'}</Text>
      <Text>Your events: {state.events.length ? state.events.length : 0}</Text>
      {
        state.events.length ?
        <EventList value={state.events} />
        : 
        <Text>You haven't got any events yet.</Text>
      }
    </Flex>
  )
}
