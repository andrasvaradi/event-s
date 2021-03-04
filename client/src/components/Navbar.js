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
  Text,
  PopoverContent,
  PopoverTrigger,
  PopoverCloseButton,
  Popover,
  PopoverBody,
  PopoverHeader,
  Portal,
  PopoverArrow,
  ButtonGroup

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

export default function NavigationBar({ isAuthenticated }) {
  const { isOpen } = useDisclosure();
  console.log(isAuthenticated)
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
            <Image src={'logo-black.png'} w={'75px'} alt=""></Image>
          </RouterLink>
          {/* <Box >
              <Image src={'EVENT-S.png'} boxSize="50px" alt=""></Image>
          </Box> */}
          <Spacer />
          <HStack spacing={128} alignItems={'center'} >
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
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
                  {
                    isAuthenticated ?
                    // <MenuList>
                    <>
                    <RouterLink to="/events">
                      <MenuItem>My events</MenuItem>
                    </RouterLink >
                    <RouterLink to="/new-event">
                      <MenuItem>New event</MenuItem>
                    </RouterLink >
                    <RouterLink to="/profile">
                      <MenuItem>Profile</MenuItem>
                    </RouterLink >
                    <MenuDivider />
                      <Popover>
                        <PopoverTrigger>
                          <Button w={'100%'} >Logout</Button>
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>Are you sure?</PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverBody>
                              {/* <Button colorScheme="gray.600">Button</Button> */}
                              <ButtonGroup size="sm">
                                  <Button variant="outline">No</Button>
                                  <RouterLink to="/logout">
                                  <Button colorScheme="red">Yes</Button>
                                  </RouterLink>
                                </ButtonGroup>
                            </PopoverBody>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                      {/* <MenuItem>Logout</MenuItem> */}
                    </>
                    :
                    <RouterLink to="/login">
                      <MenuItem>Sign In</MenuItem>
                    </RouterLink>
                  }
              </MenuList>
              {/* <MenuList>
                <RouterLink to="/events">
                  <MenuItem>My events</MenuItem>
                </RouterLink >
                <RouterLink to="/new-event">
                  <MenuItem>New event</MenuItem>
                </RouterLink >
                <RouterLink to="/profile">
                  <MenuItem>Profile</MenuItem>
                </RouterLink >
                <MenuDivider />
                <RouterLink to="/logout">
                  <MenuItem>Logout</MenuItem>
                </RouterLink>
                <RouterLink to="/login">
                  <MenuItem>Sign In</MenuItem>
                </RouterLink>
              </MenuList> */}
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