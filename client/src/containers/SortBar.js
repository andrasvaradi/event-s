import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Checkbox, CheckboxGroup , Wrap
} from '@chakra-ui/react';

const listOfTypes = [
  'Food','Music','Sport','Leisure','Outdoor','Other',
]

export default function SortBar({ checkBoxes, setCheckboxes }) {

  let handleCheckboxChange = (e) => {
    e.preventDefault()
    let selectedCheckboxes = [...checkBoxes];
    if (!checkBoxes.includes(e.target.value)){
      selectedCheckboxes.push(e.target.value)
    } else {
    selectedCheckboxes.splice(selectedCheckboxes.indexOf(e.target.value), 1)
    }
    setCheckboxes(selectedCheckboxes)
  }

  return (
    <Box w={'100%'} justify={'center'} borderRadius="md" mb={10}>
      <FormControl justify={'center'}>
        <Flex justify={'center'}  borderRadius="md">
          <Accordion w={'100%'}  allowMultiple bg={'gray.100'} borderRadius="md" >
            <AccordionItem w={'100%'}>
              <h2>
                <AccordionButton borderRadius="md" >
                  <Box  flex="1" textAlign="center">
                    Filter
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green" >
                <Text>Type:</Text>
                <Wrap
                 spacing="0px"
                 >
                {
                  listOfTypes.map(el => <Checkbox m={2} onChange={handleCheckboxChange} key={el} value={el}>{el}</Checkbox> )
                }
                </Wrap>
              </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </Flex>
        </FormControl>
      </Box>
  )
}

// {/* <HStack>
// <Checkbox onClick={handleCheckboxChange} value="ascending">Ascending</Checkbox>
// <Checkbox onClick={handleCheckboxChange} value="descending">Descending</Checkbox>
// <Checkbox onClick={handleCheckboxChange} value="Other">Other</Checkbox>
// </HStack> */}
