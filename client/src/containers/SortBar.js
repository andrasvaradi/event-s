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
  Checkbox, CheckboxGroup , HStack
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
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green" >
                <Text>Type:</Text>
                <HStack>
                {
                  listOfTypes.map(el => <Checkbox onChange={handleCheckboxChange} key={el} value={el}>{el}</Checkbox> )
                }
                </HStack>
              </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

            {/* <AccordionItem>
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
            </AccordionItem> */}
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
