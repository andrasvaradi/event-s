/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  Input,
  // Button,
  // Spacer,
  // Accordion,
  // AccordionItem,
  // AccordionButton,
  // AccordionPanel,
  // AccordionIcon,
  // Text,
  // Checkbox, CheckboxGroup , HStack
} from '@chakra-ui/react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [checkBoxes, setCheckboxes] = useState([])
  const handleChange = event => {

    setSearchTerm(event.target.value.toLowerCase());
  };
  // React.useEffect(() => {
  //   console.log('Searchbar: ',filteredEvents)
  //   const results = filteredEvents.filter(event =>
  //       event.name.includes(searchTerm) || event.description.includes(searchTerm)
  //     );
  //     console.log({results})
  //     console.log('Searchterm', searchTerm)
  //   setFilteredEvents(results);
  //   }, [searchTerm]);



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
