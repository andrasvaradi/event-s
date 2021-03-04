/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import UsersApiService from '../../services/UsersApiService';
import {
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


const initialState = {
  firstName: '',
  lastName: '',
};
export default function Profile() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await UsersApiService.profile();
      console.log(userInfo)
      if (userInfo) {
        const { firstName, lastName } = userInfo;
        setState((prevState) => {
          return {
            ...prevState,
            firstName,
            lastName,
          };
        });
      } else {
        console.log('No user info found 😞');
      }
    };
    getProfile();
  }, []);


  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
      <Text>Hello {state.firstName} {state.lastName}</Text>
    </Flex>
  )
}
