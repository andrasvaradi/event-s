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
  Image,
  Spacer,
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

export default function NavigationBar({ isAuthenticated, user }) {
  return (
    <>
      <Box
        bg={'custom.100'}
        px={4}
        boxShadow={'2xl'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'center'} >
          <RouterLink to="/">
            <Image src={'logo-black.png'} w={'75px'} alt=""></Image>
          </RouterLink>
          <Spacer />
          <HStack spacing={128} alignItems={'center'} >
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <RouterLink to="/">
                <Button
                  // color={'white'}
                  bg={'transparent'}>Home</Button>
              </RouterLink>
              <RouterLink to="/events">
                <Button
                  bg={'transparent'}>Events</Button>
              </RouterLink>

            </HStack>
          </HStack>
          <Spacer />
          <Flex alignItems={'center'}>
            <Menu placement="top-end" >
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size={'sm'}
                  src={isAuthenticated ? user.photo : null}
                />
              </MenuButton>
              <MenuList>
                {
                  isAuthenticated ?
                    <>
                      {
                        user.host &&
                        <RouterLink to="/new-event">
                          <MenuItem>New event</MenuItem>
                        </RouterLink >
                      }
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
                              <ButtonGroup size="sm">
                                <Button variant="outline">No</Button>
                                <RouterLink to="/logout">
                                  <Button bg="custom.100">Yes</Button>
                                </RouterLink>
                              </ButtonGroup>
                            </PopoverBody>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                    </>
                    :
                    <RouterLink to="/login">
                      <MenuItem>Sign In</MenuItem>
                    </RouterLink>
                }
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}