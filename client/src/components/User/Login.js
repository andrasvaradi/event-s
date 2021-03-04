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
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';

const initialState = {
  email: '',
  password: '',
};


export default function Login(props) {
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

    const { email, password } = state;
    const user = { email, password };
    const res = await UsersApiService.login(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {

      props.setIsAuthenticated(true);
      auth.login(() => props.history.push('/profile'));

    }
  };

  const validateForm = () => {
    return !state.email || !state.password;
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
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
            <Stack spacing={10}>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Choose a password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                bg={'gray.300'}
                color={'white'}
                _hover={{
                  bg: 'gray.500',
                }}
                isDisabled={validateForm()}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
            {/* <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'flex-end'}> */}
              {/* <Checkbox>Remember me</Checkbox> */}
              <RouterLink to='/register'>
                <Text align={'end'} color="blue.400">Create new account</Text>
              </RouterLink>
            {/* </Stack> */}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}