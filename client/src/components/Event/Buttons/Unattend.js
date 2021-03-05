import React from 'react'
import {
  Button, Popover, PopoverTrigger, Portal, PopoverContent,
  PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, ButtonGroup,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Unattend ({unattend}) {

  return (
    // <RouterLink to='/my-events'>
      <Popover>
        <PopoverTrigger>
          <Button w={'100%'} >Unattend</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Please confirm!</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <ButtonGroup size="sm">
                  <Button variant="outline">Cancel</Button>
                  <Button onClick={unattend} colorScheme="gray">Unattend</Button>
                </ButtonGroup>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    // </RouterLink>
  )
}