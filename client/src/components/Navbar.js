/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Image,
  Spacer,
  Text
} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom"
const Links = ['Home', 'Events'];

const NavigationLink = ({ children, to }) => (
  <Text
    px={2}
    py={1}
    rounded={'md'}
    _hover={{ textDecoration: 'none', bg: 'gray.200' }}
    // href={to}
    // to={to}
    >
    {children}
  </Text>
);

export default function NavigationBar() {
  const { isOpen } = useDisclosure();

  return (
    <>
      <Box
        // _hover={{ textDecoration: 'none', bg: 'gray.200' }}
        bg={'gray.300'}
        px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
          {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <RouterLink to="/">
            <Image src={'logo-black.png'}  w={'75px'} alt=""></Image>
          </RouterLink>
          {/* <Box >
              <Image src={'EVENT-S.png'} boxSize="50px" alt=""></Image>
          </Box> */}
          <Spacer />
          <HStack spacing={128} alignItems={'center'} >
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex'}}>
              <RouterLink to="/">
                <NavigationLink key="Home">Home</NavigationLink>
              </RouterLink>
              <RouterLink to="/events">
                <NavigationLink key="Events">Events</NavigationLink>
              </RouterLink>
              {/* {Links.map((link) => (
                <NavigationLink key={link}>{link}</NavigationLink>
              ))} */}
            </HStack>
          </HStack>
          <Spacer />
          <Flex alignItems={'center'}>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button> */}
            <Menu placement="top-end" >
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size={'sm'}
                  // src={}
                />
              </MenuButton>
              <MenuList>
                  <MenuItem>My events</MenuItem>
                <RouterLink to="/create-event">
                  <MenuItem>New event</MenuItem>
                </RouterLink >
                <RouterLink to="/profile">
                  <MenuItem>Profile</MenuItem>
                </RouterLink >
                <MenuDivider />
                <RouterLink to="/login">
                  <MenuItem>Sign In</MenuItem>
                </RouterLink>
                <RouterLink to="/logout">
                  <MenuItem>Logout</MenuItem>
                </RouterLink>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box m={0}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavigationLink key={link}>{link}</NavigationLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}