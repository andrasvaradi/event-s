import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
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
  FormHelperText
} from '@chakra-ui/react';
// import tempImage from '../../assets/1.jpg'
const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  photo: '',
  host: ''
};

export default function Register (props) {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'host') {
      value = value === 'Guest' ? false : true
    }
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
    console.log(state)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, firstName, lastName, host, photo } = state;
    const user = { email, password, firstName, lastName, host, photo };
    const res = await UsersApiService.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      props.setIsAuthenticated(true);
      auth.login(() => props.history.push('/profile'));
    }
  };

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.firstName || !state.lastName || !state.host === ''
    );
  };
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.100'}>
      <Stack spacing={8} w={'50%'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Create new account</Heading>
        </Stack>
        <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>

          <Stack spacing={4}>
            <FormControl id="first_name">
              <FormLabel>First name</FormLabel>
              <Input
                id="first_name"
                placeholder="First Name"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
              />
            {/* </FormControl> */}
            {/* <FormControl id="last_name"> */}
              <FormLabel>Last name</FormLabel>
              <Input
                id="last_name"
                placeholder="Last Name"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
              />
            {/* </FormControl>
            <FormControl id="email"> */}
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="name@email.com"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
              <FormHelperText>I'll never share your email. I don't know how!</FormHelperText>
            {/* </FormControl>
            <FormControl id="password"> */}
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Choose a password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            <FormLabel>Photo</FormLabel>
            <Input
              id="photo"
              placeholder="Insert a link to your event photo"
              value={state.photo}
              name="photo"
              onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <FormControl id="type">
                <FormLabel>Type of user</FormLabel>
                <Select name="host" onChange={handleChange} placeholder="Hosting or attending?">
                  <option>Guest</option>
                  <option>Host</option>
                </Select>
              </FormControl>
              <Button
                bg={'custom.200'}
                color={'white'}
                _hover={{
                  bg: 'custom.300'
                }}
                isDisabled={validateForm()}
                onClick={handleSubmit}
              >
                Sign up
              </Button>

            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
