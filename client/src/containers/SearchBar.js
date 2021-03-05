/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  Input,
  Button,
  Spacer
} from '@chakra-ui/react';

export default function NewEvent({ createEvent }) {
  const [search, setSearch] = useState('')

  let handleInputChange = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }
  function handleSubmit() {

  }

  return (
    <Box bg={'gray.300'} >
      <FormControl>
        <Flex >
          <FormControl minWidth={'30vh'} w={'60vh'} id="search_bar" p={4} >
            <Input
              id="search"
              placeholder="Search for events"
              value={search}
              name="search"
              onChange={handleInputChange}
              bg={'white'}
              w={'100%'}
            />
          </FormControl>
          <Button m={4} >Filter</Button>
          <Button m={4} onClick={handleSubmit}>Search</Button>
        </Flex>
      </FormControl>
    </Box>
  )
}
