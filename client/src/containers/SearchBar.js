import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  Input,
} from '@chakra-ui/react';

export default function SearchBar({ searchTerm, setSearchTerm }) {

  const handleChange = event => {

    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <Box  >
      <FormControl>
        <Flex  >
          <FormControl minWidth={'30vh'} w={'60vh'} id="search_bar" marginRight={4} >
            <Input
              id="search"
              placeholder="Search for events"
              value={searchTerm}
              name="search"
              onChange={handleChange}
              bg={'white'}
              w={'100%'}
            />
          </FormControl>
        </Flex>
      </FormControl>
    </Box>
  )
}
