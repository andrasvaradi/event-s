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

export default function SortBar({ events, setFilteredEvents }) {
  const [checkBoxes, setCheckboxes] = useState([])

  React.useEffect(() => {
    const results = events.filter(event =>
      checkBoxes.includes(event.type)
      );
    setFilteredEvents(results);
    }, [checkBoxes]);


  let handleCheckboxChange = (e) => {
    console.log(e.target.value)
    let selectedCheckboxes = [...checkBoxes];
    console.log(selectedCheckboxes)
    if (!checkBoxes.includes(e.target.value)){
      selectedCheckboxes.push(e.target.value)
  } else {
    selectedCheckboxes.splice(selectedCheckboxes.indexOf(e.target.value), 1)
  }
  setCheckboxes(selectedCheckboxes)
  console.log(checkBoxes)
  }

  return (
    <Box bg={'gray.300'} >
      <FormControl>
        <Flex >
          <Accordion allowMultiple >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Filter
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green" >
                <Text>Type:</Text>
                <HStack>
                  <Checkbox onClick={handleCheckboxChange} value="Food">Food</Checkbox>
                  <Checkbox onClick={handleCheckboxChange} value="Music">Music</Checkbox>
                  <Checkbox onClick={handleCheckboxChange} value="Other">Other</Checkbox>
                </HStack>
              </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Sort
                      </Box>
                      {isExpanded ? (
                        // <MinusIcon fontSize="12px" />
                      // <Text>-</Text>
                      null
                      ) : (
                        // <AddIcon fontSize="12px" />
                        // <Text>+</Text>
                        null
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
                    <Text>Date:</Text>
                    <HStack>
                      <Checkbox onClick={handleCheckboxChange} value="ascending">Ascending</Checkbox>
                      <Checkbox onClick={handleCheckboxChange} value="descending">Descending</Checkbox>
                      <Checkbox onClick={handleCheckboxChange} value="Other">Other</Checkbox>
                    </HStack>
                  </CheckboxGroup>
                  </AccordionPanel>
                </>
              )}
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
