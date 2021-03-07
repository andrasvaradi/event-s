/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UsersApiService from '../../services/UsersApiService';
import auth from '../../utils/auth';
import {
  Flex,
  Box,
  Text,
  Button
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


export default function Logout(props) {
 
  const logout = () => {
    UsersApiService.logout();
    props.setIsAuthenticated(false);
    auth.logout(() => props.history.push('/'));
  };
  // const handleClick = () => {
  //   UsersApiService.logout();
  //   handleAuth();
  // };

  // const handleAuth = () => {
  //   props.setIsAuthenticated(false);
  //   auth.logout(() => props.history.push('/'));
  // };

  // return (
  //   <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'} flexDirection={'column'}>
  //     <Text>Logout</Text>
  //     <Button
  //       bg={'gray.300'}
  //       color={'white'}
  //       _hover={{
  //         bg: 'gray.500',
  //       }}
  //       onClick={handleClick}
  //     >
  //       Log out
  //     </Button>
  //   </Flex>
  // )
  logout()
  return (<></>)
  // return (<></>)
}
