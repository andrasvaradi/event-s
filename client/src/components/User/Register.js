import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import UsersApiService from '../../services/UsersApiService';
import auth from '../../utils/auth';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  host: null,
};

export default function Register(props) {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, firstName, lastName, host } = state;
    const user = { email, password, firstName, lastName, host };
    const res = await UsersApiService.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {

      props.setIsAuthenticated(true);
      // auth.login(() => props.history.push('/profile'));

    }
  };

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.firstName || !state.lastName || !state.host
    );
  };
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Create new account</Heading>
        </Stack>
        <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>

          <Stack spacing={4}>
            <FormControl id="first_name" isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                id="first_name"
                placeholder="First Name"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="last_name" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                id="last_name"
                placeholder="Last Name"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="name@email.com"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Choose a password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </FormControl>

            <Stack spacing={10}>
            <FormControl id="type" isRequired>
              <FormLabel>Type of user</FormLabel>
              <Select placeholder="Hosting or attending?">
                  <option value={state.host = false}>Guest</option>
                  <option value={state.host = true}>Host</option>
              </Select>
            </FormControl>
            {/* <RouterLink to='/'> */}
              <Button
                bg={'gray.200'}
                color={'white'}
                _hover={{
                  bg: 'gray.500',
                }}
                isDisabled={validateForm()}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            {/* </RouterLink> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}