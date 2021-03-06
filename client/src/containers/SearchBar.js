/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  Input,
  Button,
  Spacer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Checkbox, CheckboxGroup , HStack
} from '@chakra-ui/react';

export default function SearchBar({ events, setFilteredEvents }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkBoxes, setCheckboxes] = useState([])
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = events.filter(event =>
      event.name.includes(searchTerm) | event.description.includes(searchTerm)
      );
    setFilteredEvents(results);
    }, [searchTerm]);

  // let handleCheckboxChange = (e) => {
  //   console.log(e.target.value)
  //   let selectedCheckboxes = [...checkBoxes];
  //   console.log(selectedCheckboxes)
  //   if (!checkBoxes.includes(e.target.value)){
  //     selectedCheckboxes.push(e.target.value)
  // } else {
  //   selectedCheckboxes.splice(selectedCheckboxes.indexOf(e.target.value), 1)
  // }
  // setCheckboxes(selectedCheckboxes)
  // console.log(checkBoxes)
  // }

  return (
    <Box bg={'gray.300'} >
      <FormControl>
        <Flex >
          <FormControl minWidth={'30vh'} w={'60vh'} id="search_bar" p={4} >
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
          {/* <Button m={4} >Search</Button> */}
          </Flex>
        </FormControl>
      </Box>
  )
}
